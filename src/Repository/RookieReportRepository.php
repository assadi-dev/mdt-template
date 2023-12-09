<?php

namespace App\Repository;

use App\Entity\Agent;
use App\Entity\RookieReport;
use Doctrine\Common\Collections\Criteria;
use Doctrine\Persistence\ManagerRegistry;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\Tools\Pagination\Paginator;

/**
 * @extends ServiceEntityRepository<RookieReport>
 *
 * @method RookieReport|null find($id, $lockMode = null, $lockVersion = null)
 * @method RookieReport|null findOneBy(array $criteria, array $orderBy = null)
 * @method RookieReport[]    findAll()
 * @method RookieReport[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class RookieReportRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, RookieReport::class);
    }

    public function add(RookieReport $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(RookieReport $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    //    /**
    //     * @return RookieReport[] Returns an array of RookieReport objects
    //     */
    //    public function findByExampleField($value): array
    //    {
    //        return $this->createQueryBuilder('r')
    //            ->andWhere('r.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->orderBy('r.id', 'ASC')
    //            ->setMaxResults(10)
    //            ->getQuery()
    //            ->getResult()
    //        ;
    //    }

    //    public function findOneBySomeField($value): ?RookieReport
    //    {
    //        return $this->createQueryBuilder('r')
    //            ->andWhere('r.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->getQuery()
    //            ->getOneOrNullResult()
    //        ;
    //    }

    public function findByPagination($items_per_page, $page, $search)
    {
        $countResult = ($page - 1) * $items_per_page;

        $qb = $this->createQueryBuilder("r");

        $qb
        ->select("r.id,
        r.numeroReport,
         CONCAT(a.matricule,'-',a.firstname,' ',a.lastname) as agentFullname,
         CONCAT(ro.matricule ,'-',ro.firstname,' ',ro.lastname) as rookieFullname,
         r.patrolType,
         r.comment,
         r.createdAt
          ")
        ->leftJoin(Agent::class, "a", "WITH", "a.id=r.agent")
        ->leftJoin(Agent::class, "ro", "WITH", "ro.id=r.rookie")
        ->orHaving($qb->expr()->like("r.numeroReport", ":search"))
        ->orHaving($qb->expr()->like("agentFullname", ":search"))
        ->orHaving($qb->expr()->like("rookieFullname", ":search"))
        ->orHaving($qb->expr()->like("r.patrolType", ":search"))
        ->orderBy("r.createdAt", "DESC")
        ->groupBy("r.id")
        ->setParameter("search", "%$search%")

        ;

        $criteria = Criteria::create()
        ->setFirstResult($countResult)
        ->setMaxResults($items_per_page);
        $qb->addCriteria($criteria);
        $query = $qb->getQuery();
        $paginator = new Paginator($query, false);
        $count =  $paginator->count();

        $result = $qb->getQuery()->getResult();
        return ["count" => $count,"data" => $result];
    }



}
