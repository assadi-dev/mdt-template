<?php

namespace App\Repository;

use App\Entity\Civil;
use App\Entity\VehicleEncoding;
use Doctrine\Common\Collections\Criteria;
use Doctrine\Persistence\ManagerRegistry;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\Tools\Pagination\Paginator;

/**
 * @extends ServiceEntityRepository<VehicleEncoding>
 *
 * @method VehicleEncoding|null find($id, $lockMode = null, $lockVersion = null)
 * @method VehicleEncoding|null findOneBy(array $criteria, array $orderBy = null)
 * @method VehicleEncoding[]    findAll()
 * @method VehicleEncoding[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class VehicleEncodingRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, VehicleEncoding::class);
    }

    public function add(VehicleEncoding $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(VehicleEncoding $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    //    /**
    //     * @return VehicleEncoding[] Returns an array of VehicleEncoding objects
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

    //    public function findOneBySomeField($value): ?VehicleEncoding
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

        $qb = $this->createQueryBuilder("ve");
        $qb->select("
        ve.id,
        ve.immatriculation,
        ve.type,
        c.id as idCivil,
        c.firstname,
        c.lastname,
        c.identificationNumber,
        ve.createdAt
")
    ->leftJoin(Civil::class, "c", "WITH", "c.id=ve.civil")
    ->orHaving($qb->expr()->like("ve.immatriculation", ":search"))
    ->orHaving($qb->expr()->like("ve.type", ":search"))
    ->orHaving($qb->expr()->like("c.firstname", ":search"))
    ->orHaving($qb->expr()->like("c.lastname", ":search"))
    ->orHaving($qb->expr()->like("c.identificationNumber", ":search"))
    ->orderBy("ve.createdAt", "DESC")
    ->groupBy("ve.id")
    ->setParameter("search", "%$search%");

        $criteria = Criteria::create()
        ->setFirstResult($countResult)
        ->setMaxResults($items_per_page);
        $qb->addCriteria($criteria);
        $query =  $qb->getQuery();

        $paginator = new Paginator($query, false);
        $count =  $paginator->count();

        $result = $qb->getQuery()->getResult();
        return ["count" => $count,"data" => $result];
    }


}
