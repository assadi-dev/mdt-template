<?php

namespace App\Repository;

use App\Entity\Agent;
use App\Entity\Civil;
use App\Entity\Traffic;
use Doctrine\Common\Collections\Criteria;
use Doctrine\Persistence\ManagerRegistry;
use Doctrine\ORM\Tools\Pagination\Paginator;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;

/**
 * @extends ServiceEntityRepository<Traffic>
 *
 * @method Traffic|null find($id, $lockMode = null, $lockVersion = null)
 * @method Traffic|null findOneBy(array $criteria, array $orderBy = null)
 * @method Traffic[]    findAll()
 * @method Traffic[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class TrafficRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Traffic::class);
    }

    public function add(Traffic $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(Traffic $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    //    /**
    //     * @return Traffic[] Returns an array of Traffic objects
    //     */
    //    public function findByExampleField($value): array
    //    {
    //        return $this->createQueryBuilder('t')
    //            ->andWhere('t.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->orderBy('t.id', 'ASC')
    //            ->setMaxResults(10)
    //            ->getQuery()
    //            ->getResult()
    //        ;
    //    }

    //    public function findOneBySomeField($value): ?Traffic
    //    {
    //        return $this->createQueryBuilder('t')
    //            ->andWhere('t.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->getQuery()
    //            ->getOneOrNullResult()
    //        ;
    //    }


    public function findByPagination($idCivil, $page, $item_per_page, $search)
    {
        $countResult = ($page - 1) * $item_per_page;
        $qb = $this->createQueryBuilder("tr");
        $qb
        ->select("tr.id,
        tr.numeroTraffic,
         CONCAT(ag.matricule,'-',ag.firstname,' ',ag.lastname) as agent,
        ag.id as idAgent, 
        tr.location,
        tr.infractions,
        tr.amount,
        tr.createdAt")
        ->leftJoin(Agent::class, "ag", "WITH", "tr.agent=ag.id")
        ->leftJoin(Civil::class, "ci", "WITH", "tr.civil=ci.id")
        ->orHaving($qb->expr()->like("tr.numeroTraffic", ":search"))
        ->orHaving($qb->expr()->like("tr.location", ":search"))
        ->orHaving($qb->expr()->like("agent", ":search"))
        ->orderBy("tr.createdAt", "DESC")
        ->groupBy("tr.id")
        ->where("ag.id=:idCivil")
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