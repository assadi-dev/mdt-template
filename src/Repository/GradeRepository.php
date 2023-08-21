<?php

namespace App\Repository;

use App\Entity\Grade;
use App\Entity\Access;
use App\Entity\Agent;
use App\Entity\GradeCategory;
use Doctrine\Common\Collections\Criteria;
use Doctrine\Persistence\ManagerRegistry;
use Doctrine\ORM\Tools\Pagination\Paginator;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;

/**
 * @extends ServiceEntityRepository<Grade>
 *
 * @method Grade|null find($id, $lockMode = null, $lockVersion = null)
 * @method Grade|null findOneBy(array $criteria, array $orderBy = null)
 * @method Grade[]    findAll()
 * @method Grade[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class GradeRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Grade::class);
    }

    public function add(Grade $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(Grade $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    //    /**
    //     * @return Grade[] Returns an array of Grade objects
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

    //    public function findOneBySomeField($value): ?Grade
    //    {
    //        return $this->createQueryBuilder('g')
    //            ->andWhere('g.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->getQuery()
    //            ->getOneOrNullResult()
    //        ;
    //    }


    /**
     * Retourne la listes des pages d'acces avec pour id du grade en argument ainsi que les permissions des actions
     */
    public function findAccessById($id)
    {
        $qb = $this->createQueryBuilder("g");
        $qb->select("a.id, a.page,a.path,a.isCanAdd,a.isCanUpdate,a.isCanDelete,a.isShow")
        ->innerJoin(Access::class, "a", "WITH", "a.grade=g.id")
        ->where("g.id=:id")
        ->setParameter("id", $id)
        ;
        $result = $qb->getQuery()->getArrayResult();

        return $result;

    }


    public function findGradeByPage($items_per_page, $page)
    {

        $countResult = ($page - 1) * $items_per_page;
        $qb = $this->createQueryBuilder('g');
        $qb->select('g.id,g.name,gc.id as idCategory, gc.name as category ,gc.faction,g.createdAt, COUNT(a.grade) as nb_agents')
        ->leftJoin(Agent::class, "a", "WITH", "a.grade=g.id")
        ->leftJoin(GradeCategory::class, 'gc', 'WITH', 'gc.id=g.gradeCategory')
        ->groupBy("g.id")


        ;
        $criteria = Criteria::create()
            ->setFirstResult($countResult)
            ->setMaxResults($items_per_page);
        $qb->addCriteria($criteria);
        $result =  $qb->getQuery()->getResult();

        //Otention du nombre total d'items
        $query = $this->createQueryBuilder("g")->getQuery();
        $paginator = new Paginator($query, false);
        $count =  $paginator->count();




        return  ["count" => $count,"data" => $result];

    }


    public function findRookieGradeByFaction($faction)
    {
        $qb = $this->createQueryBuilder('g');

        return   $qb->leftJoin(GradeCategory::class, "gc", "WITH", "gc.id =g.gradeCategory")
           ->where("gc.faction=:faction AND g.name='rookie'")
               ->setParameter(':faction', $faction)
               ->getQuery()
               ->getOneOrNullResult();
    }


}
