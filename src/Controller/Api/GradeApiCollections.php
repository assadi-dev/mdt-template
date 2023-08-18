<?php

namespace App\Controller\Api;

use App\Entity\Access;
use App\Repository\AccessRepository;
use App\Repository\GradeCategoryRepository;
use Doctrine\ORM\EntityManager;
use App\Repository\UserRepository;
use App\Repository\GradeRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class GradeApiCollections extends AbstractController
{
    private $request;
    private $entityManager;
    private $gradeRepository;
    private $gradeCategoryRepository;


    public function __construct(Request $request, EntityManagerInterface $entityManager, GradeRepository $gradeRepository, GradeCategoryRepository $gradeCategoryRepository)
    {
        $this->request = $request;
        $this->entityManager = $entityManager;
        $this->gradeRepository = $gradeRepository;
        $this->gradeCategoryRepository = $gradeCategoryRepository;
    }


    /**
     * @Route("/api/grade_categories/pagination/{page}", name="app_get_grade_Categorie_pagination",methods="GET")
     */
    public function getGradesCategoryCollection($page, Request $request)
    {
        $max_items = $request->headers->get("max_items");

        $result = $this->gradeCategoryRepository->findGradeCategiesByPage($max_items, $page);

        dd($result);


    }


    /**
     * @Route("/api/grades/pagination/{page}", name="app_get_grade_pagination",methods="GET")
     */
    public function getGradesCollection($page, Request $request)
    {
        $max_items = $request->headers->get("max_items");

        $result = $this->gradeRepository->findGradeByPage($max_items, $page);

        dd($result);


    }



}