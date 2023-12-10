<?php

namespace App\Repository;

use App\Entity\GunfightAcquisition;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<GunfightAcquisition>
 *
 * @method GunfightAcquisition|null find($id, $lockMode = null, $lockVersion = null)
 * @method GunfightAcquisition|null findOneBy(array $criteria, array $orderBy = null)
 * @method GunfightAcquisition[]    findAll()
 * @method GunfightAcquisition[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class GunfightAcquisitionRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, GunfightAcquisition::class);
    }

    public function add(GunfightAcquisition $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(GunfightAcquisition $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

//    /**
//     * @return GunfightAcquisition[] Returns an array of GunfightAcquisition objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('g')
//            ->andWhere('g.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('g.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?GunfightAcquisition
//    {
//        return $this->createQueryBuilder('g')
//            ->andWhere('g.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
