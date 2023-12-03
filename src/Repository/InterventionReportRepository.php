<?php

namespace App\Repository;

use App\Entity\Agent;
use App\Entity\InterventionReport;
use Doctrine\Common\Collections\Criteria;
use Doctrine\Persistence\ManagerRegistry;
use Doctrine\ORM\Tools\Pagination\Paginator;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;

/**
 * @extends ServiceEntityRepository<InterventionReport>
 *
 * @method InterventionReport|null find($id, $lockMode = null, $lockVersion = null)
 * @method InterventionReport|null findOneBy(array $criteria, array $orderBy = null)
 * @method InterventionReport[]    findAll()
 * @method InterventionReport[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class InterventionReportRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, InterventionReport::class);
    }

    public function add(InterventionReport $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(InterventionReport $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    //    /**
    //     * @return InterventionReport[] Returns an array of InterventionReport objects
    //     */
    //    public function findByExampleField($value): array
    //    {
    //        return $this->createQueryBuilder('i')
    //            ->andWhere('i.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->orderBy('i.id', 'ASC')
    //            ->setMaxResults(10)
    //            ->getQuery()
    //            ->getResult()
    //        ;
    //    }

    //    public function findOneBySomeField($value): ?InterventionReport
    //    {
    //        return $this->createQueryBuilder('i')
    //            ->andWhere('i.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->getQuery()
    //            ->getOneOrNullResult()
    //        ;
    //    }


    public function findByPagination($item_per_page, $page, $search)
    {
        $countResult = ($page - 1) * $item_per_page;
        $qb = $this->createQueryBuilder("int");

        $qb->select("
        int.id,
        int.numeroReport,
        int.officiersImplicated,
        int.interventionType,
        int.commentText,
        int.location,
        CONCAT(a.matricule ,'-',a.firstname,' ',a.lastname) as agent,
        int.createdAt")
        ->leftJoin(Agent::class, "a", "WITH", "a.id=int.agent")
        ->orHaving($qb->expr()->like("int.numeroReport", ":search"))
        ->orHaving($qb->expr()->like("int.officiersImplicated", ":search"))
        ->orHaving($qb->expr()->like("int.interventionType", ":search"))
        ->orHaving($qb->expr()->like("int.createdAt", ":search"))
        ->orHaving($qb->expr()->like("agent", ":search"))
        ->setParameter("search", "%$search%")
        ->orderBy("int.createdAt", "DESC")
        ->groupBy("int.id")
        ;

        $criteria = Criteria::create()
        ->setFirstResult($countResult)
        ->setMaxResults($item_per_page);
        $qb->addCriteria($criteria);

        $interventionReportQuery = $qb->getQuery();
        $paginator = new Paginator($interventionReportQuery, false);
        $interventionReport = $qb->getQuery()->getResult();
        $count =  $paginator->count();


        $result =  $interventionReport;


        return  ["count" =>  $count,"data" => $result];
    }


}
