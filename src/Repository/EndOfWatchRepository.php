<?php

namespace App\Repository;

use App\Entity\Agent;
use App\Entity\Grade;
use App\Entity\EndOfWatch;
use Doctrine\Common\Collections\Criteria;
use Doctrine\Persistence\ManagerRegistry;
use Doctrine\ORM\Tools\Pagination\Paginator;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;

/**
 * @extends ServiceEntityRepository<EndOfWatch>
 *
 * @method EndOfWatch|null find($id, $lockMode = null, $lockVersion = null)
 * @method EndOfWatch|null findOneBy(array $criteria, array $orderBy = null)
 * @method EndOfWatch[]    findAll()
 * @method EndOfWatch[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class EndOfWatchRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, EndOfWatch::class);
    }

    public function add(EndOfWatch $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(EndOfWatch $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    //    /**
    //     * @return EndOfWatch[] Returns an array of EndOfWatch objects
    //     */
    //    public function findByExampleField($value): array
    //    {
    //        return $this->createQueryBuilder('e')
    //            ->andWhere('e.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->orderBy('e.id', 'ASC')
    //            ->setMaxResults(10)
    //            ->getQuery()
    //            ->getResult()
    //        ;
    //    }

    //    public function findOneBySomeField($value): ?EndOfWatch
    //    {
    //        return $this->createQueryBuilder('e')
    //            ->andWhere('e.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->getQuery()
    //            ->getOneOrNullResult()
    //        ;
    //    }

    public function findByPagination($item_per_page, $page, $search)
    {
        $countResult = ($page - 1) * $item_per_page;
        $qb = $this->createQueryBuilder("eow");
        $qb->select("eow.id,agent.matricule,agent.firstname,agent.lastname,agent.faction,agent.gender,g.name as grade,eow.date,eow.reason")
        ->leftJoin(Agent::class, "agent", "WITH", "agent.id=eow.agent")
        ->leftJoin(Grade::class, "g", "WITH", "g.id=agent.grade")
        ->orderBy("eow.createdAt", "DESC")
        ->groupBy("eow.id")
        ;
        $criteria = Criteria::create()
        ->setFirstResult($countResult)
        ->setMaxResults($item_per_page);

        $qb->addCriteria($criteria);
        $query = $qb->getQuery();
        $paginator = new Paginator($query, false);
        $count =  $paginator->count();
        $result = $qb->getQuery()->getResult();
        return  ["count" => $count,"data" => $result];
    }


}
