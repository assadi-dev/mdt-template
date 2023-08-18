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

class GradeApiCollectionsController extends AbstractController
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
        try {

            $item_per_page = $request->headers->get("item_per_page");
            if(!isset($item_per_page)) {
                $item_per_page = 5;
            }
            $result = $this->gradeCategoryRepository->findGradeCategiesByPage($item_per_page, $page);
            $content = json_encode($result);
            $response = new Response($content, Response::HTTP_OK, []);
            return $response;

        } catch (\Throwable $th) {

            $result = ["message" => $th->getMessage()];
            $content = json_encode($result);
            $response = new Response($content, Response::HTTP_INTERNAL_SERVER_ERROR, []);
            return $response;

        }

    }


    /**
     * @Route("/api/grades/pagination/{page}", name="app_get_grade_pagination",methods="GET")
     */
    public function getGradesCollection($page, Request $request)
    {
        try {

            $item_per_page = $request->headers->get("item_per_page");
            if(!isset($item_per_page)) {
                $item_per_page = 5;
            }

            $result = $this->gradeRepository->findGradeByPage($item_per_page, $page);
            $content = json_encode($result);
            $response = new Response($content, Response::HTTP_OK, []);
            return $response;

        } catch (\Throwable $th) {
            //throw $th;
            $result = ["message" => $th->getMessage()];
            $content = json_encode($result);
            $response = new Response($content, Response::HTTP_INTERNAL_SERVER_ERROR, []);
            return $response;
        }


    }



}
