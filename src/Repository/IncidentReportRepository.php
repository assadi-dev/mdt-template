<?php

namespace App\Repository;

use App\Entity\Agent;
use App\Entity\IncidentReport;
use Doctrine\Common\Collections\Criteria;
use Doctrine\Persistence\ManagerRegistry;
use Doctrine\ORM\Tools\Pagination\Paginator;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;

/**
 * @extends ServiceEntityRepository<IncidentReport>
 *
 * @method IncidentReport|null find($id, $lockMode = null, $lockVersion = null)
 * @method IncidentReport|null findOneBy(array $criteria, array $orderBy = null)
 * @method IncidentReport[]    findAll()
 * @method IncidentReport[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class IncidentReportRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, IncidentReport::class);
    }

    public function add(IncidentReport $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(IncidentReport $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    //    /**
    //     * @return IncidentReport[] Returns an array of IncidentReport objects
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

    //    public function findOneBySomeField($value): ?IncidentReport
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
        $qb = $this->createQueryBuilder("inc");

        $qb->select("inc.id,
        inc.numeroReport,
        inc.officerImplicated,
        inc.commentText,
        inc.location,
        CONCAT(a.matricule ,'-',a.firstname,' ',a.lastname) as agent,
        inc.incidentType,
        inc.createdAt")
        ->leftJoin(Agent::class, "a", "WITH", "a.id=inc.agent")
        ->orHaving($qb->expr()->like("inc.numeroReport", ":search"))
        ->orHaving($qb->expr()->like("inc.officerImplicated", ":search"))
        ->orHaving($qb->expr()->like("inc.incidentType", ":search"))
        ->orHaving($qb->expr()->like("inc.createdAt", ":search"))
        ->orHaving($qb->expr()->like("agent", ":search"))
        ->setParameter("search", "%$search%")
        ->groupBy("inc.id")
        ->orderBy("inc.createdAt", "DESC")

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
