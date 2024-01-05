<?php

namespace App\Repository;

use App\Entity\Agent;
use App\Entity\Avertissement;
use App\Entity\Civil;
use Doctrine\Common\Collections\Criteria;
use Doctrine\Persistence\ManagerRegistry;
use Doctrine\ORM\Tools\Pagination\Paginator;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;

/**
 * @extends ServiceEntityRepository<Avertissement>
 *
 * @method Avertissement|null find($id, $lockMode = null, $lockVersion = null)
 * @method Avertissement|null findOneBy(array $criteria, array $orderBy = null)
 * @method Avertissement[]    findAll()
 * @method Avertissement[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class AvertissementRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Avertissement::class);
    }

    public function add(Avertissement $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(Avertissement $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    //    /**
    //     * @return Avertissement[] Returns an array of Avertissement objects
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

    //    public function findOneBySomeField($value): ?Avertissement
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
        $qb = $this->createQueryBuilder("av");
        $qb
        ->select("av.id,av.numeroAvertissement, CONCAT(ag.matricule,'-',ag.firstname,' ',ag.lastname) as agent, ag.id as idAgent, av.location,av.createdAt")
        ->leftJoin(Agent::class, "ag", "WITH", "av.agent=ag.id")
        ->leftJoin(Civil::class, "ci", "WITH", "av.civil=ci.id")
        ->orHaving($qb->expr()->like("av.numeroAvertissement", ":search"))
        ->orHaving($qb->expr()->like("av.location", ":search"))
        ->orHaving($qb->expr()->like("agent", ":search"))
        ->orderBy("av.createdAt", "DESC")
        ->groupBy("av.id")
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
