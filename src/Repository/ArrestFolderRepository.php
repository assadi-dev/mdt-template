<?php

namespace App\Repository;

use App\Entity\Agent;
use App\Entity\Civil;
use App\Entity\ArrestFolder;
use Doctrine\Common\Collections\Criteria;
use Doctrine\Persistence\ManagerRegistry;
use Doctrine\ORM\Tools\Pagination\Paginator;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;

/**
 * @extends ServiceEntityRepository<ArrestFolder>
 *
 * @method ArrestFolder|null find($id, $lockMode = null, $lockVersion = null)
 * @method ArrestFolder|null findOneBy(array $criteria, array $orderBy = null)
 * @method ArrestFolder[]    findAll()
 * @method ArrestFolder[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ArrestFolderRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ArrestFolder::class);
    }

    public function add(ArrestFolder $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(ArrestFolder $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    //    /**
    //     * @return ArrestFolder[] Returns an array of ArrestFolder objects
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

    //    public function findOneBySomeField($value): ?ArrestFolder
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
        $qb = $this->createQueryBuilder("af");
        $qb
        ->select("
            af.id,
            af.numeroArrestFolder,
            CONCAT(ag.matricule,'-',ag.firstname,' ',ag.lastname) as agent,
            ag.id as idAgent, 
            af.location,
            af.infractions,
            af.amount,
            af.sentence,
            af.dateOfEntry,
            af.mirandaLaw,
            af.healthcare,
            af.feed,
            af.avocat,
            af.createdAt
        ")
        ->leftJoin(Agent::class, "ag", "WITH", "af.agent=ag.id")
        ->leftJoin(Civil::class, "ci", "WITH", "af.civil=ci.id")
        ->orHaving($qb->expr()->like("af.numeroArrestFolder", ":search"))
        ->orHaving($qb->expr()->like("af.location", ":search"))
        ->orHaving($qb->expr()->like("agent", ":search"))
        ->orderBy("af.createdAt", "DESC")
        ->groupBy("af.id")
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
