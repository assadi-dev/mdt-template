<?php

namespace App\Repository;

use App\Entity\Agent;
use App\Entity\GunfightReport;
use Doctrine\Common\Collections\Criteria;
use Doctrine\Persistence\ManagerRegistry;
use Doctrine\ORM\Tools\Pagination\Paginator;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;

/**
 * @extends ServiceEntityRepository<GunfightReport>
 *
 * @method GunfightReport|null find($id, $lockMode = null, $lockVersion = null)
 * @method GunfightReport|null findOneBy(array $criteria, array $orderBy = null)
 * @method GunfightReport[]    findAll()
 * @method GunfightReport[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class GunfightReportRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, GunfightReport::class);
    }

    public function add(GunfightReport $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(GunfightReport $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    //    /**
    //     * @return GunfightReport[] Returns an array of GunfightReport objects
    //     */
    //    public function findByExampleField($value): array
    //    {
    //        return $this->createQueryBuilder('g')
    //            ->andWhere('g.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->orderBy('g.id', 'ASC')
    //            ->setMaxResults(10)
    //            ->getQuery()
    //            ->getResult()
    //        ;
    //    }

    //    public function findOneBySomeField($value): ?GunfightReport
    //    {
    //        return $this->createQueryBuilder('g')
    //            ->andWhere('g.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->getQuery()
    //            ->getOneOrNullResult()
    //        ;
    //    }

    public function findByPagination($item_per_page, $page, $search)
    {
        $countResult = ($page - 1) * $item_per_page;
        $qb = $this->createQueryBuilder('gr');

        $qb
        ->select("
        gr.id,
        gr.numeroReport,
        gr.lead,
        gr.firstGroup,
        gr.secondGroup,
        gr.location,
        gr.recit,
        gr.seized,
        CONCAT(a.matricule,'-',a.firstname,' ',a.lastname) as agentFullname,
        gr.createdAt
        ")
        ->leftJoin(Agent::class, "a", "WITH", "a.id=gr.agent")
       /*  ->orHaving($qb->expr()->like("gr.numeroReport", ":search"))
        ->setParameter('search', $search) */
        ->orderBy('gr.createdAt', 'DESC')
        ->groupBy("gr.id")

        ;


        $criteria = Criteria::create()
        ->setFirstResult($countResult)
        ->setMaxResults($item_per_page);
        $qb->addCriteria($criteria);
        $incidentReportQuery = $qb->getQuery();
        $paginator = new Paginator($incidentReportQuery, false);
        $incidentReport = $qb->getQuery()->getResult();
        $count =  $paginator->count();
        $result =  $incidentReport;

        return  ["count" =>  $count,"data" => $result];


    }


}