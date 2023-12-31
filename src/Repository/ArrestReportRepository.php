<?php

namespace App\Repository;

use App\Entity\Agent;
use App\Entity\Civil;
use App\Entity\ArrestReport;
use Doctrine\Common\Collections\Criteria;
use Doctrine\Persistence\ManagerRegistry;
use Doctrine\ORM\Tools\Pagination\Paginator;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;

/**
 * @extends ServiceEntityRepository<ArrestReport>
 *
 * @method ArrestReport|null find($id, $lockMode = null, $lockVersion = null)
 * @method ArrestReport|null findOneBy(array $criteria, array $orderBy = null)
 * @method ArrestReport[]    findAll()
 * @method ArrestReport[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ArrestReportRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ArrestReport::class);
    }

    public function add(ArrestReport $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(ArrestReport $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    //    /**
    //     * @return ArrestReport[] Returns an array of ArrestReport objects
    //     */
    //    public function findByExampleField($value): array
    //    {
    //        return $this->createQueryBuilder('a')
    //            ->andWhere('a.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->orderBy('a.id', 'ASC')
    //            ->setMaxResults(10)
    //            ->getQuery()
    //            ->getResult()
    //        ;
    //    }

    //    public function findOneBySomeField($value): ?ArrestReport
    //    {
    //        return $this->createQueryBuilder('a')
    //            ->andWhere('a.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->getQuery()
    //            ->getOneOrNullResult()
    //        ;
    //    }

    public function findByPagination($idCivil, $page, $item_per_page, $search)
    {
        $countResult = ($page - 1) * $item_per_page;
        $qb = $this->createQueryBuilder("ar");
        $qb
        ->select("
        ar.id,
        ar.numeroArrestReport,
        CONCAT(ag.matricule,'-',ag.firstname,' ',ag.lastname) as agent,
        ar.dateOfEntry,
        ag.id as idAgent, 
        ar.location,
        ar.infractions,
        ar.amount,
        ar.sentence,
        ar.conversionUp,
        ar.createdAt
    ")
        ->leftJoin(Agent::class, "ag", "WITH", "ar.agent=ag.id")
        ->leftJoin(Civil::class, "ci", "WITH", "ar.civil=ci.id")
        ->orHaving($qb->expr()->like("ar.numeroArrestReport", ":search"))
        ->orHaving($qb->expr()->like("ar.location", ":search"))
        ->orHaving($qb->expr()->like("agent", ":search"))
        ->orderBy("ar.createdAt", "DESC")
        ->groupBy("ar.id")
        ->where("ci.id=:idCivil")
        ->setParameter("idCivil", $idCivil)
        ->setParameter("search", "%$search%")
        ;


        $criteria = Criteria::create()
        ->setFirstResult($countResult)
        ->setMaxResults($item_per_page);
        $qb->addCriteria($criteria);

        //Otention du nombre total d'items
        $query = $qb->getQuery();
        $paginator = new Paginator($query, false);
        $count =  $paginator->count();

        $result = $qb->getQuery()->getResult();
        return  ["count" => $count,"data" => $result];


    }




}
