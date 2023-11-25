<?php

namespace App\Repository;

use App\Entity\VehicleEncoding;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

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
}
