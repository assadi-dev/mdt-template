<?php

namespace App\Repository;

use App\Entity\AccountingRequest;
use App\Entity\Agent;
use Doctrine\Common\Collections\Criteria;
use Doctrine\Persistence\ManagerRegistry;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\Tools\Pagination\Paginator;

/**
 * @extends ServiceEntityRepository<AccountingRequest>
 *
 * @method AccountingRequest|null find($id, $lockMode = null, $lockVersion = null)
 * @method AccountingRequest|null findOneBy(array $criteria, array $orderBy = null)
 * @method AccountingRequest[]    findAll()
 * @method AccountingRequest[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class AccountingRequestRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, AccountingRequest::class);
    }

    public function add(AccountingRequest $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(AccountingRequest $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

//    /**
//     * @return AccountingRequest[] Returns an array of AccountingRequest objects
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

//    public function findOneBySomeField($value): ?AccountingRequest
//    {
//        return $this->createQueryBuilder('a')
//            ->andWhere('a.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }


public function findAccountingRequestByPage($items_per_page = 5, $page = 1, $search="")
{

    $countResult = ($page - 1) * $items_per_page;

    $qb = $this->createQueryBuilder("acq");
    $qb->select("acq.id,
    a.matricule,
    a.firstname,
    a.lastname,
    a.gender,
    acq.subject,
    acq.reason,
    acq.amount,
    acq.requestState"
    )
    ->leftJoin(Agent::class, "a", "WITH", "acq.agent=a.id")
    ->orWhere($qb->expr()->like("a.firstname", ":search"))
    ->orWhere($qb->expr()->like("a.lastname", ":search"))
    ->orWhere($qb->expr()->like("a.gender", ":search"))
    ->orWhere($qb->expr()->like("a.matricule", ":search"))
    ->orWhere($qb->expr()->like("acq.amount", ":search"))
    ->orWhere($qb->expr()->like("acq.subject", ":search"))
     ->orWhere($qb->expr()->like("acq.requestState", ":search")) 
    ->setParameter("search", "%$search%")
   ;

    $criteria = Criteria::create()
    ->setFirstResult($countResult)
    ->setMaxResults($items_per_page);
    $qb->addCriteria($criteria);

   $result = $qb->getQuery()->getResult();

   
    $query = $this->createQueryBuilder("a")->getQuery();
    
    $paginator = new Paginator($query, false);
    $count =  $paginator->count(); 

    return ["count" => $count,"data" => $result];

}
public function findAccountingRequestByPageForAgent($idAgent, $items_per_page = 5, $page = 1, $search="")
{
    $countResult = ($page - 1) * $items_per_page;


    $qb = $this->createQueryBuilder("acq");
    $qb->select("acq.id,
    a.id as idAgent,
    a.matricule,
    a.firstname,
    a.lastname,
    a.gender,
    acq.subject,
    acq.date,
    acq.reason,
    acq.amount,
    acq.requestState"
    )
    ->innerJoin(Agent::class, "a", "WITH", "acq.agent=a.id")
    ->where("a.id = :idAgent")
    ->orHaving($qb->expr()->like("a.firstname", ":search"))
    ->orHaving($qb->expr()->like("a.lastname", ":search"))
    ->orHaving($qb->expr()->like("a.gender", ":search"))
    ->orHaving($qb->expr()->like("acq.date", ":search"))
    ->orHaving($qb->expr()->like("acq.amount", ":search"))
    ->orHaving($qb->expr()->like("acq.subject", ":search"))
    ->orHaving($qb->expr()->like("acq.requestState", ":search")) 
    ->setParameter("search", "%$search%")
    ->setParameter("idAgent", $idAgent)
   ;

    $criteria = Criteria::create()
    ->setFirstResult($countResult)
    ->setMaxResults($items_per_page);
    $qb->addCriteria($criteria);

   $result = $qb->getQuery()->getResult();

   
    $query = $this->createQueryBuilder("a")->getQuery();
    
    $paginator = new Paginator($query, false);
    $count =  $paginator->count(); 

    return ["count" => $count,"data" => $result];

}



}