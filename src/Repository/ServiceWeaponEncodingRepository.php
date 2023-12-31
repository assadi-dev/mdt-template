<?php

namespace App\Repository;

use App\Entity\Agent;
use App\Entity\ServiceWeaponEncoding;
use Doctrine\Common\Collections\Criteria;
use Doctrine\Persistence\ManagerRegistry;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\Tools\Pagination\Paginator;

/**
 * @extends ServiceEntityRepository<ServiceWeaponEncoding>
 *
 * @method ServiceWeaponEncoding|null find($id, $lockMode = null, $lockVersion = null)
 * @method ServiceWeaponEncoding|null findOneBy(array $criteria, array $orderBy = null)
 * @method ServiceWeaponEncoding[]    findAll()
 * @method ServiceWeaponEncoding[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ServiceWeaponEncodingRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ServiceWeaponEncoding::class);
    }

    public function add(ServiceWeaponEncoding $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(ServiceWeaponEncoding $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    //    /**
    //     * @return ServiceWeaponEncoding[] Returns an array of ServiceWeaponEncoding objects
    //     */
    //    public function findByExampleField($value): array
    //    {
    //        return $this->createQueryBuilder('s')
    //            ->andWhere('s.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->orderBy('s.id', 'ASC')
    //            ->setMaxResults(10)
    //            ->getQuery()
    //            ->getResult()
    //        ;
    //    }

    //    public function findOneBySomeField($value): ?ServiceWeaponEncoding
    //    {
    //        return $this->createQueryBuilder('s')
    //            ->andWhere('s.exampleField = :val')
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
    a.id as idAgent,
    a.matricule,
    a.firstname,
    a.lastname,
    a.gender,
    we.createdAt
    ")
        ->leftJoin(Agent::class, "a", "WITH", "a.id=we.agent")
        ->orHaving($qb->expr()->like("we.serialNumber", ":search"))
        ->orHaving($qb->expr()->like("we.type", ":search"))
        ->orHaving($qb->expr()->like("a.firstname", ":search"))
        ->orHaving($qb->expr()->like("a.lastname", ":search"))
        ->orHaving($qb->expr()->like("a.gender", ":search"))
        ->orHaving($qb->expr()->like("a.matricule", ":search"))
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

        $result = $qb->getQuery()->getResult();
        return ["count" => $count,"data" => $result];



    }
    public function findByAgentPagination($idAgent, $items_per_page, $page, $search)
    {

        $countResult = ($page - 1) * $items_per_page;

        $qb = $this->createQueryBuilder("we");

        $qb->select("
            we.id,
            we.serialNumber,
            we.type,
            a.id as idAgent,
            a.matricule,
            a.firstname,
            a.lastname,
            a.gender,
            we.createdAt
        ")
        ->leftJoin(Agent::class, "a", "WITH", "a.id=we.agent")
        ->orHaving($qb->expr()->like("we.serialNumber", ":search"))
        ->orHaving($qb->expr()->like("we.type", ":search"))
        ->orHaving($qb->expr()->like("a.firstname", ":search"))
        ->orHaving($qb->expr()->like("a.lastname", ":search"))
        ->orHaving($qb->expr()->like("a.gender", ":search"))
        ->orHaving($qb->expr()->like("a.matricule", ":search"))
        ->orderBy("we.createdAt", "DESC")
        ->where("we.agent = :idAgent")
        ->setParameter("idAgent", $idAgent)
        ->setParameter("search", "%$search%")
        ->groupBy("we.id");
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
