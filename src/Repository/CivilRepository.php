<?php

namespace App\Repository;

use App\Entity\Civil;
use Doctrine\Common\Collections\Criteria;
use Doctrine\Persistence\ManagerRegistry;
use Doctrine\ORM\Tools\Pagination\Paginator;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;

/**
 * @extends ServiceEntityRepository<Civil>
 *
 * @method Civil|null find($id, $lockMode = null, $lockVersion = null)
 * @method Civil|null findOneBy(array $criteria, array $orderBy = null)
 * @method Civil[]    findAll()
 * @method Civil[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class CivilRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Civil::class);
    }

    public function add(Civil $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(Civil $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    //    /**
    //     * @return Civil[] Returns an array of Civil objects
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

    //    public function findOneBySomeField($value): ?Civil
    //    {
    //        return $this->createQueryBuilder('c')
    //            ->andWhere('c.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->getQuery()
    //            ->getOneOrNullResult()
    //        ;
    //    }


    public function findByPagination($items_per_page = 5, $page = 1, $search)
    {
        try {
            $countResult = ($page - 1) * $items_per_page;
            $qb = $this->createQueryBuilder("c");
            $qb->select(
                "
            c.id, 
            c.firstname,
            c.lastname,
            c.birthdate,
            c.hairColor,
            c.gender,
            c.job,
            c.affiliation,
            c.ppa,
            c.driveLicence,
            c.phone,
            c.createdAt,
            c.updatedAt"
            )
            ->orWhere($qb->expr()->like("c.firstname", ":search"))
            ->orWhere($qb->expr()->like("c.lastname", ":search"))
            ->orWhere($qb->expr()->like("c.gender", ":search"))
            ->orWhere($qb->expr()->like("c.job", ":search"))
            ->orWhere($qb->expr()->like("c.phone", ":search"))
            ->orWhere($qb->expr()->like("c.affiliation", ":search"))
            ->orWhere($qb->expr()->like("c.identificationNumber", ":search"))
            ->setParameter("search", "%$search%")
            ->orderBy("c.createdAt", "DESC")
            ;


            $criteria = Criteria::create()
            ->setFirstResult($countResult)
            ->setMaxResults($items_per_page);

            $qb->addCriteria($criteria);
            $result = $qb->getQuery()->getResult();

            //Otention du nombre total d'items
            $query = $this->createQueryBuilder("c")->getQuery();
            $paginator = new Paginator($query, false);
            $count =  $paginator->count();

            return  ["count" => $count,"data" => $result];

        } catch (\Throwable $th) {
            $message = $th->getMessage();
            throw new \Exception($message);
        }




    }




}
