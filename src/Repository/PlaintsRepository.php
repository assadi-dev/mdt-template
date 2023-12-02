<?php

namespace App\Repository;

use App\Entity\Agent;
use App\Entity\Plaints;
use Doctrine\Common\Collections\Criteria;
use Doctrine\Persistence\ManagerRegistry;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\Tools\Pagination\Paginator;

/**
 * @extends ServiceEntityRepository<Plaints>
 *
 * @method Plaints|null find($id, $lockMode = null, $lockVersion = null)
 * @method Plaints|null findOneBy(array $criteria, array $orderBy = null)
 * @method Plaints[]    findAll()
 * @method Plaints[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PlaintsRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Plaints::class);
    }

    public function add(Plaints $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(Plaints $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    //    /**
    //     * @return Plaints[] Returns an array of Plaints objects
    //     */
    //    public function findByExampleField($value): array
    //    {
    //        return $this->createQueryBuilder('p')
    //            ->andWhere('p.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->orderBy('p.id', 'ASC')
    //            ->setMaxResults(10)
    //            ->getQuery()
    //            ->getResult()
    //        ;
    //    }

    //    public function findOneBySomeField($value): ?Plaints
    //    {
    //        return $this->createQueryBuilder('p')
    //            ->andWhere('p.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->getQuery()
    //            ->getOneOrNullResult()
    //        ;
    //    }


    public function findByPagination($items_per_page, $page, $search)
    {
        $qb = $this->createQueryBuilder("p");
        $countResult = ($page - 1) * $items_per_page;

        $qb->select("p.id,p.depository,p.accused, CONCAT(a.matricule ,'-',a.firstname,' ',a.lastname) as agent,  p.createdAt")
        ->leftJoin(Agent::class, "a", "WITH", "a.id=p.agent")
        ->orHaving($qb->expr()->like("p.depository", ":search"))
        ->orHaving($qb->expr()->like("p.accused", ":search"))
        ->orHaving($qb->expr()->like("p.createdAt", ":search"))
        ->setParameter("search", "%$search%")
        ->orderBy("p.createdAt", "DESC")
        ->groupBy("p.id")
        ;

        $criteria = Criteria::create()
        ->setFirstResult($countResult)
        ->setMaxResults($items_per_page);
        $qb->addCriteria($criteria);

        $plaintsQuery = $qb->getQuery();
        $plaints = $plaintsQuery->getResult();
        $paginator = new Paginator($plaintsQuery, false);
        $count =  $paginator->count();


        $result =  $plaints;


        return  ["count" =>  $count,"data" => $result];

    }


}
