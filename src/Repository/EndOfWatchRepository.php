<?php

namespace App\Repository;

use App\Entity\EndOfWatch;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<EndOfWatch>
 *
 * @method EndOfWatch|null find($id, $lockMode = null, $lockVersion = null)
 * @method EndOfWatch|null findOneBy(array $criteria, array $orderBy = null)
 * @method EndOfWatch[]    findAll()
 * @method EndOfWatch[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class EndOfWatchRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, EndOfWatch::class);
    }

    public function add(EndOfWatch $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(EndOfWatch $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

//    /**
//     * @return EndOfWatch[] Returns an array of EndOfWatch objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('e')
//            ->andWhere('e.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('e.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?EndOfWatch
//    {
//        return $this->createQueryBuilder('e')
//            ->andWhere('e.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
