<?php

namespace App\Repository;

use App\Entity\CodePenal;
use Doctrine\Common\Collections\Criteria;
use Doctrine\Persistence\ManagerRegistry;
use Doctrine\ORM\Tools\Pagination\Paginator;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;

/**
 * @extends ServiceEntityRepository<CodePenal>
 *
 * @method CodePenal|null find($id, $lockMode = null, $lockVersion = null)
 * @method CodePenal|null findOneBy(array $criteria, array $orderBy = null)
 * @method CodePenal[]    findAll()
 * @method CodePenal[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class CodePenalRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, CodePenal::class);
    }

    public function add(CodePenal $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(CodePenal $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    //    /**
    //     * @return CodePenal[] Returns an array of CodePenal objects
    //     */
    //    public function findByExampleField($value): array
    //    {
    //        return $this->createQueryBuilder('c')
    //            ->andWhere('c.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->orderBy('c.id', 'ASC')
    //            ->setMaxResults(10)
    //            ->getQuery()
    //            ->getResult()
    //        ;
    //    }

    //    public function findOneBySomeField($value): ?CodePenal
    //    {
    //        return $this->createQueryBuilder('c')
    //            ->andWhere('c.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->getQuery()
    //            ->getOneOrNullResult()
    //        ;
    //    }

    public function findByPagination($item_per_page, $page, $search)
    {
        $countResult = ($page - 1) * $item_per_page;
        $qb = $this->createQueryBuilder("cp");
        $qb->select("cp.id,cp.label,cp.category,cp.sentence,cp.amount")
        ->orHaving($qb->expr()->like("cp.label", ":search"))
        ->orHaving($qb->expr()->like("cp.category", ":search"))
        ->orHaving($qb->expr()->like("cp.sentence", ":search"))
        ->setParameter("search", "%$search%")
        ->orderBy("cp.createdAt", "DESC")
        ->groupBy("cp.id");
        $criteria = Criteria::create()
        ->setFirstResult($countResult)
        ->setMaxResults($item_per_page);

        $qb->addCriteria($criteria);
        $query =  $qb->getQuery();
        $paginator = new Paginator($query, false);
        $count =  $paginator->count();
        $result = $qb->getQuery()->getResult();
        return  ["count" => $count,"data" => $result];

    }

    public function findByCategory($category)
    {

        $qb = $this->createQueryBuilder("cp");
        $qb->select("cp.id,cp.label,cp.category,cp.sentence,cp.amount");
        if(!isset($category) || $category != "all") {
            $qb->where("cp.category = :category")
            ->setParameter("category", $category);
        }

        $qb->orderBy("cp.createdAt", "DESC")
          ->groupBy("cp.id");
        $query =  $qb->getQuery();
        return   $query->getResult();

    }


}
