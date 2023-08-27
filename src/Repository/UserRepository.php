<?php

namespace App\Repository;

use App\Entity\User;
use App\Entity\Agent;
use App\Entity\Grade;
use Doctrine\Persistence\ManagerRegistry;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;

/**
 * @extends ServiceEntityRepository<User>
 *
 * @method User|null find($id, $lockMode = null, $lockVersion = null)
 * @method User|null findOneBy(array $criteria, array $orderBy = null)
 * @method User[]    findAll()
 * @method User[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UserRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, User::class);
    }

    public function add(User $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(User $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    //    /**
    //     * @return User[] Returns an array of User objects
    //     */
    //    public function findByExampleField($value): array
    //    {
    //        return $this->createQueryBuilder('u')
    //            ->andWhere('u.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->orderBy('u.id', 'ASC')
    //            ->setMaxResults(10)
    //            ->getQuery()
    //            ->getResult()
    //        ;
    //    }

    //    public function findOneBySomeField($value): ?User
    //    {
    //        return $this->createQueryBuilder('u')
    //            ->andWhere('u.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->getQuery()
    //            ->getOneOrNullResult()
    //        ;
    //    }


    public function getCredential($idDiscord)
    {
        $qb = $this->createQueryBuilder("u");
        $qb->select("
        u.id,
        u.username,
        u.idDiscord,
        u.roles,u.isValidate,
        a.id as idAgent, 
        a.firstname,
        a.name,
        a.gender,
        a.matricule,
        a.phone,
        a.faction,
        a.division,
        a.createdAt,
        g.id as idGrade,
        g.name as grade,
        a.updatedAt")
        ->innerJoin(Agent::class, "a", "WITH", "u.id=a.userAccount")
        ->innerJoin(Grade::class, "g", "WITH", "g.id=a.grade")
        ->where("u.idDiscord=:idDiscord")
        ->setParameter("idDiscord", $idDiscord)
        ;
        $result = $qb->getQuery()->getSingleResult();
        return $result;

    }







}
