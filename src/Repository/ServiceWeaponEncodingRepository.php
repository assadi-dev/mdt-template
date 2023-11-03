<?php

namespace App\Repository;

use App\Entity\ServiceWeaponEncoding;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

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
}
