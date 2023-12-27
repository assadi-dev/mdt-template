<?php

namespace App\Repository;

use App\Entity\Agent;
use App\Entity\Sanctions;
use Doctrine\Common\Collections\Criteria;
use Doctrine\Persistence\ManagerRegistry;
use Doctrine\ORM\Tools\Pagination\Paginator;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;

/**
 * @extends ServiceEntityRepository<Sanctions>
 *
 * @method Sanctions|null find($id, $lockMode = null, $lockVersion = null)
 * @method Sanctions|null findOneBy(array $criteria, array $orderBy = null)
 * @method Sanctions[]    findAll()
 * @method Sanctions[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class SanctionsRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Sanctions::class);
    }

    public function add(Sanctions $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(Sanctions $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    //    /**
    //     * @return Sanctions[] Returns an array of Sanctions objects
    //     */
    //    public function findByExampleField($value): array
    //    {
    //        return $this->createQueryBuilder('s')
    //            ->andWhere('s.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->orderBy('s.id', 'ASC')
    //            ->setMaxResults(10)
    //            ->getQuery()
    //            ->getResult()
    //        ;
    //    }

    //    public function findOneBySomeField($value): ?Sanctions
    //    {
    //        return $this->createQueryBuilder('s')
    //            ->andWhere('s.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->getQuery()
    //            ->getOneOrNullResult()
    //        ;
    //    }

    public function findByPagination($items_per_page, $page, $search)
    {

        $countResult = ($page - 1) * $items_per_page;
        $qb = $this->createQueryBuilder("s");

        $qb->select("s.id,
        s.numeroSanction,
        s.decisionMaker,
        CONCAT( concerned.matricule,'-',concerned.firstname,' ',concerned.lastname) as agentConcerned,
        s.typeSanction,
        s.comment")
        ->leftJoin(Agent::class, "concerned", "WITH", "concerned.id=s.agentConcerned")
        ->groupBy("s.id")
        ;

        $query = $qb->getQuery();
        $paginator = new Paginator($query, false);
        $count =  $paginator->count();

        $criteria = Criteria::create()
        ->setFirstResult($countResult)
        ->setMaxResults($items_per_page);
        $qb->addCriteria($criteria);

        $result = $query->getResult();

        return ["count" => $count,"data" => $result];

    }


}
