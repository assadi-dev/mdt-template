<?php

namespace App\Repository;

use App\Entity\Agent;
use App\Entity\Acquisition;
use Doctrine\Common\Collections\Criteria;
use Doctrine\Persistence\ManagerRegistry;
use Doctrine\ORM\Tools\Pagination\Paginator;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;

/**
 * @extends ServiceEntityRepository<Acquisition>
 *
 * @method Acquisition|null find($id, $lockMode = null, $lockVersion = null)
 * @method Acquisition|null findOneBy(array $criteria, array $orderBy = null)
 * @method Acquisition[]    findAll()
 * @method Acquisition[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class AcquisitionRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Acquisition::class);
    }

    public function add(Acquisition $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(Acquisition $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    //    /**
    //     * @return Acquisition[] Returns an array of Acquisition objects
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

    //    public function findOneBySomeField($value): ?Acquisition
    //    {
    //        return $this->createQueryBuilder('a')
    //            ->andWhere('a.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->getQuery()
    //            ->getOneOrNullResult()
    //        ;
    //    }


    public function findAcquisitionByPage($item_per_page, $page, $search)
    {

        $countResult = ($page - 1) * $item_per_page;

        $qb = $this->createQueryBuilder('ac');
        $qb->select("ac.id,a.matricule,a.firstname,a.lastname,a.gender,  ac.post,ac.dateOfAcquisition,ac.acquisitionDescription,ac.createdAt")
        ->leftJoin(Agent::class, 'a', 'WITH', 'a.id=ac.agent')
        ->orWhere($qb->expr()->like("a.firstname", ":search"))
        ->orWhere($qb->expr()->like("a.lastname", ":search"))
        ->orWhere($qb->expr()->like("a.gender", ":search"))
        ->orWhere($qb->expr()->like("a.matricule", ":search"))
        ->orWhere($qb->expr()->like("ac.dateOfAcquisition", ":search"))
        ->orWhere($qb->expr()->like("ac.post", ":search"))
        ->setParameter("search", "%$search%")
        ;

        $result = $qb->getQuery()->getResult();
        $criteria = Criteria::create()
        ->setFirstResult($countResult)
        ->setMaxResults($item_per_page);
        $qb->addCriteria($criteria);

        $result = $qb->getQuery()->getResult();


        $query = $this->createQueryBuilder("a")->getQuery();

        $paginator = new Paginator($query, false);
        $count =  $paginator->count();

        return ["count" => $count,"data" => $result];

    }



}
