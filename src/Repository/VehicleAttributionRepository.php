<?php

namespace App\Repository;

use App\Entity\Agent;
use App\Entity\Grade;
use App\Entity\VehicleAttribution;
use Doctrine\Common\Collections\Criteria;
use Doctrine\Persistence\ManagerRegistry;
use Doctrine\ORM\Tools\Pagination\Paginator;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;

/**
 * @extends ServiceEntityRepository<VehicleAttribution>
 *
 * @method VehicleAttribution|null find($id, $lockMode = null, $lockVersion = null)
 * @method VehicleAttribution|null findOneBy(array $criteria, array $orderBy = null)
 * @method VehicleAttribution[]    findAll()
 * @method VehicleAttribution[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class VehicleAttributionRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, VehicleAttribution::class);
    }

    public function add(VehicleAttribution $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(VehicleAttribution $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    //    /**
    //     * @return VehicleAttribution[] Returns an array of VehicleAttribution objects
    //     */
    //    public function findByExampleField($value): array
    //    {
    //        return $this->createQueryBuilder('v')
    //            ->andWhere('v.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->orderBy('v.id', 'ASC')
    //            ->setMaxResults(10)
    //            ->getQuery()
    //            ->getResult()
    //        ;
    //    }

    //    public function findOneBySomeField($value): ?VehicleAttribution
    //    {
    //        return $this->createQueryBuilder('v')
    //            ->andWhere('v.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->getQuery()
    //            ->getOneOrNullResult()
    //        ;
    //    }


    public function findByPagination($items_per_page, $page, $search)
    {
        $countResult = ($page - 1) * $items_per_page;

        $qb = $this->createQueryBuilder("va");
        $qb->select("
            va.id,
            va.numeroAttribution,
            agAttributed.id as idAgentAttributed,
            CONCAT(agAttributed.matricule,'-',agAttributed.firstname,' ',agAttributed.lastname) as agentAttributed,
            g.name as grade,
            va.typeVehicle,
            va.immatriculation,
            va.idVehicle,
            ag.id as agent,
            va.createdAt
        ")
        ->leftJoin(Agent::class, "ag", "WITH", "ag.id = va.agent")
        ->leftJoin(Agent::class, "agAttributed", "WITH", "agAttributed.id = va.agentAttributed")
        ->leftJoin(Grade::class, "g", "WITH", "g.id = agAttributed.grade")
        ->orHaving($qb->expr()->like("va.numeroAttribution", ":search"))
        ->orHaving($qb->expr()->like("va.immatriculation", ":search"))
        ->orHaving($qb->expr()->like("va.typeVehicle", ":search"))
        ->orHaving($qb->expr()->like("agentAttributed", ":search"))
        ->orHaving($qb->expr()->like("g.name", ":search"))
        ->setParameter("search", "%$search%")
        ->orderBy("va.createdAt", "DESC")
        ->groupBy("va.id")
        ;

        $criteria = Criteria::create()
        ->setFirstResult($countResult)
        ->setMaxResults($items_per_page);
        $qb->addCriteria($criteria);
        $query =  $qb->getQuery();

        $paginator = new Paginator($query, false);
        $count =  $paginator->count();

        $result =  $query->getResult();
        return ["count" => $count,"data" => $result];

    }


}
