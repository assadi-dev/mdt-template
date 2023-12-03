<?php

namespace App\Repository;

use App\Entity\Agent;
use App\Entity\Grade;
use Doctrine\Common\Collections\Criteria;
use Doctrine\Persistence\ManagerRegistry;
use Doctrine\ORM\Tools\Pagination\Paginator;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\Query;

/**
 * @extends ServiceEntityRepository<Agent>
 *
 * @method Agent|null find($id, $lockMode = null, $lockVersion = null)
 * @method Agent|null findOneBy(array $criteria, array $orderBy = null)
 * @method Agent[]    findAll()
 * @method Agent[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class AgentRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Agent::class);
    }

    public function add(Agent $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(Agent $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    //    /**
    //     * @return Agent[] Returns an array of Agent objects
    //     */
    //    public function findByExampleField($value): array
    //    {
    //        return $this->createQueryBuilder('a')
    //            ->andWhere('a.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->orderBy('a.id', 'ASC')
    //            ->setMaxResults(10)
    //            ->getQuery()
    //            ->getResult()
    //        ;
    //    }

    //    public function findOneBySomeField($value): ?Agent
    //    {
    //        return $this->createQueryBuilder('a')
    //            ->andWhere('a.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->getQuery()
    //            ->getOneOrNullResult()
    //        ;
    //    }


    public function finduAgentById($id)
    {
        $qb = $this->createQueryBuilder("a");
        $qb->select(
            "
        a.id as idAgent, 
        a.firstname,
        a.lastname,
        a.gender,
        a.matricule,
        a.phone,
        a.faction,
        a.division,
        g.id as idGrade,
        g.name as grade,
        a.iban,
        a.createdAt,
        a.updatedAt"
        )
        ->innerJoin(Grade::class, "g", "WITH", "g.id=a.grade")
        ->where("a.id =:id")
        ->setParameter("id", $id)
        ;
        $result = $qb->getQuery()->getSingleResult();
        return $result;

    }


    public function findAgentByMatricule($matricule)
    {
        try {
            $qb = $this->createQueryBuilder("a");
            $qb->select(
                "
            a.id as idAgent, 
            a.firstname,
            a.lastname,
            a.gender,
            a.matricule,
            a.phone,
            a.faction,
            a.division,
            g.id as idGrade,
            g.name as grade,
            a.iban,
            a.createdAt,
            a.updatedAt"
            )
            ->innerJoin(Grade::class, "g", "WITH", "g.id=a.grade")
            ->where("a.matricule =:matricule")
            ->setParameter("matricule", $matricule)
            ;
            $result = $qb->getQuery()->getSingleResult();
            return $result;
        } catch (\Throwable $th) {
            if(!isset($result)) {
                throw new \Exception("agent introuvable");
            }
        }





    }




    public function findAgentForTrombinoscopByPage($items_per_page = 5, $page = 1, $search)
    {

        $countResult = ($page - 1) * $items_per_page;

        $qb = $this->createQueryBuilder("a");
        $qb->select(
            "
        a.id as idAgent, 
        a.firstname,
        a.lastname,
        a.gender,
        a.matricule,
        a.phone,
        g.name as grade"
        )
        ->innerJoin(Grade::class, "g", "WITH", "g.id=a.grade")
        ->orWhere($qb->expr()->like("a.firstname", ":search"))
        ->orWhere($qb->expr()->like("a.lastname", ":search"))
        ->orWhere($qb->expr()->like("a.gender", ":search"))
        ->orWhere($qb->expr()->like("a.matricule", ":search"))
        ->orWhere($qb->expr()->like("a.phone", ":search"))
        ->orWhere($qb->expr()->like("g.name", ":search"))
        ->setParameter("search", "%$search%")
        ->groupBy("a.id");

        $criteria = Criteria::create()
        ->setFirstResult($countResult)
        ->setMaxResults($items_per_page);
        $qb->addCriteria($criteria);
        $result = $qb->getQuery()->getResult();
        $query = $this->createQueryBuilder("a")->getQuery();

        $paginator = new Paginator($query, false);
        $count =  $paginator->count();



        $result = $qb->getQuery()->getResult();
        return ["count" => $count,"data" => $result];
    }

    public function findAgentByPage($items_per_page = 5, $page = 1, $search)
    {

        $countResult = ($page - 1) * $items_per_page;

        $qb = $this->createQueryBuilder("a");
        $qb->select(
            "
            a.id as idAgent, 
            a.firstname,
            a.lastname,
            a.gender,
            a.matricule,
            a.phone,
            a.faction,
            a.division,
            g.id as idGrade,
            g.name as grade,
            a.iban,
            a.createdAt,
            a.updatedAt"
        )
        ->innerJoin(Grade::class, "g", "WITH", "g.id=a.grade")
        ->orWhere($qb->expr()->like("a.firstname", ":search"))
        ->orWhere($qb->expr()->like("a.lastname", ":search"))
        ->orWhere($qb->expr()->like("a.gender", ":search"))
        ->orWhere($qb->expr()->like("a.matricule", ":search"))
        ->orWhere($qb->expr()->like("a.phone", ":search"))
        ->orWhere($qb->expr()->like("a.faction", ":search"))
        ->orWhere($qb->expr()->like("a.division", ":search"))
        ->orWhere($qb->expr()->like("g.name", ":search"))
        ->orWhere($qb->expr()->like("a.iban", ":search"))
        ->setParameter("search", "%$search%")
        ->groupBy("u.id,a.id");

        $criteria = Criteria::create()
        ->setFirstResult($countResult)
        ->setMaxResults($items_per_page);
        $qb->addCriteria($criteria);

        $query = $this->createQueryBuilder("a")->getQuery();
        $paginator = new Paginator($query, false);
        $count =  $paginator->count();



        $result = $qb->getQuery()->getResult();
        return ["count" => $count,"data" => $result];
    }


    public function findAgentListByGrade($grade)
    {

        try {
            $qb = $this->createQueryBuilder("a");
            $qb->select(
                "
            a.id as idAgent, 
            a.firstname,
            a.lastname,
            a.gender,
            a.matricule,
            a.faction,
            g.name as grade
             "
            )
            ->leftJoin(Grade::class, "g", "WITH", "g.id=a.grade")
            ->where("g.name = :grade")
            ->setParameter("grade", $grade)


            ;
            $result = $qb->getQuery()->getResult();
            return $result;

        } catch (\Throwable $th) {
            if(!isset($result)) {
                throw new \Exception("agent introuvable");
            }
        }

    }



}
