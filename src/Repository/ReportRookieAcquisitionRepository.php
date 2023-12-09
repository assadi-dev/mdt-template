<?php

namespace App\Repository;

use App\Entity\ReportRookieAcquisition;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<ReportRookieAcquisition>
 *
 * @method ReportRookieAcquisition|null find($id, $lockMode = null, $lockVersion = null)
 * @method ReportRookieAcquisition|null findOneBy(array $criteria, array $orderBy = null)
 * @method ReportRookieAcquisition[]    findAll()
 * @method ReportRookieAcquisition[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ReportRookieAcquisitionRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ReportRookieAcquisition::class);
    }

    public function add(ReportRookieAcquisition $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(ReportRookieAcquisition $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    //    /**
    //     * @return ReportRookieAcquisition[] Returns an array of ReportRookieAcquisition objects
    //     */
    //    public function findByExampleField($value): array
    //    {
    //        return $this->createQueryBuilder('r')
    //            ->andWhere('r.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->orderBy('r.id', 'ASC')
    //            ->setMaxResults(10)
    //            ->getQuery()
    //            ->getResult()
    //        ;
    //    }

    //    public function findOneBySomeField($value): ?ReportRookieAcquisition
    //    {
    //        return $this->createQueryBuilder('r')
    //            ->andWhere('r.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->getQuery()
    //            ->getOneOrNullResult()
    //        ;
    //    }

    public function findById($id)
    {


        return $this->createQueryBuilder('r')
        ->select("r.civilRelationship,
                r.roadControl,
                r.procedures,
                r.drive,
                r.deontology,
                r.respctingHierarchy,
                r.spotArea,
                r.callRadio
                ")
        ->andWhere('r.id = :id')
        ->setParameter('id', $id)
        ->getQuery()
        ->getSingleResult();
    }



}
