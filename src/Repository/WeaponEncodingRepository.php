<?php

namespace App\Repository;

use App\Entity\WeaponEncoding;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

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
}
