<?php

namespace App\Repository;

use App\Entity\Civil;
use App\Entity\WeaponEncoding;
use Doctrine\Common\Collections\Criteria;
use Doctrine\Persistence\ManagerRegistry;
use Doctrine\ORM\Tools\Pagination\Paginator;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;

/**
 * @extends ServiceEntityRepository<WeaponEncoding>
 *
 * @method WeaponEncoding|null find($id, $lockMode = null, $lockVersion = null)
 * @method WeaponEncoding|null findOneBy(array $criteria, array $orderBy = null)
 * @method WeaponEncoding[]    findAll()
 * @method WeaponEncoding[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class WeaponEncodingRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, WeaponEncoding::class);
    }

    public function add(WeaponEncoding $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(WeaponEncoding $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    //    /**
    //     * @return WeaponEncoding[] Returns an array of WeaponEncoding objects
    //     */
    //    public function findByExampleField($value): array
    //    {
    //        return $this->createQueryBuilder('w')
    //            ->andWhere('w.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->orderBy('w.id', 'ASC')
    //            ->setMaxResults(10)
    //            ->getQuery()
    //            ->getResult()
    //        ;
    //    }

    //    public function findOneBySomeField($value): ?WeaponEncoding
    //    {
    //        return $this->createQueryBuilder('w')
    //            ->andWhere('w.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->getQuery()
    //            ->getOneOrNullResult()
    //        ;
    //    }


    public function findByPagination($items_per_page, $page, $search)
    {

        $countResult = ($page - 1) * $items_per_page;

        $qb = $this->createQueryBuilder("we");

        $qb->select("we.id,
            we.serialNumber,
            we.type,
            c.id as idCivil,
            c.firstname,
            c.lastname,
            c.identificationNumber ,
            we.createdAt
    ")
        ->leftJoin(Civil::class, "c", "WITH", "c.id=we.civil")
        ->orHaving($qb->expr()->like("we.serialNumber", ":search"))
        ->orHaving($qb->expr()->like("we.type", ":search"))
        ->orHaving($qb->expr()->like("c.firstname", ":search"))
        ->orHaving($qb->expr()->like("c.lastname", ":search"))
        ->orHaving($qb->expr()->like("c.identificationNumber", ":search"))
        ->orderBy("we.createdAt", "DESC")
        ->setParameter("search", "%$search%")
        ->groupBy("we.id");
        $criteria = Criteria::create()
        ->setFirstResult($countResult)
        ->setMaxResults($items_per_page);
        $qb->addCriteria($criteria);
        $query = $qb->getQuery();

        $paginator = new Paginator($query, false);
        $count =  $paginator->count();

        $result = $qb->getQuery()->getScalarResult();
        return ["count" => $count,"data" => $result];



    }








}
