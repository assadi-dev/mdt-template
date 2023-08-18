<?php

namespace App\Repository;

use App\Entity\Access;
use App\Entity\GradeCategory;
use Doctrine\Common\Collections\Criteria;
use Doctrine\Persistence\ManagerRegistry;
use Doctrine\ORM\Tools\Pagination\Paginator;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;

/**
 * @extends ServiceEntityRepository<GradeCategory>
 *
 * @method GradeCategory|null find($id, $lockMode = null, $lockVersion = null)
 * @method GradeCategory|null findOneBy(array $criteria, array $orderBy = null)
 * @method GradeCategory[]    findAll()
 * @method GradeCategory[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class GradeCategoryRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, GradeCategory::class);
    }

    public function add(GradeCategory $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(GradeCategory $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    //    /**
    //     * @return GradeCategory[] Returns an array of GradeCategory objects
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

    //    public function findOneBySomeField($value): ?GradeCategory
    //    {
    //        return $this->createQueryBuilder('g')
    //            ->andWhere('g.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->getQuery()
    //            ->getOneOrNullResult()
    //        ;
    //    }

    public function findGradeCategiesByPage($items_per_page, $page)
    {
        $countResult = ($page - 1) * $items_per_page;
        $qb = $this->createQueryBuilder('g');
        $criteria = Criteria::create()
        ->setFirstResult($countResult)
        ->setMaxResults($items_per_page);
        $qb->addCriteria($criteria);
        $result = $qb->getQuery()->getArrayResult();
        //Otention du nombre total d'items
        $paginator = new Paginator($qb);
        $count = count($paginator);

        return  ["count" => $count,"data" => $result];

    }


}
