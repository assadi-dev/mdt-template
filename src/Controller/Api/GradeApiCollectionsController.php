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



            $item_per_page = $request->query->get("item_per_page");
            $search =  $request->query->get("search");
            if(!isset($item_per_page)) {
                $item_per_page = 5;
            }
            if(!isset($search)) {
                $search = "";
            }


            $result = $this->gradeCategoryRepository->findGradeCategiesByPage($item_per_page, $page, $search);
            $content = json_encode($result);
            $response = new Response($content, Response::HTTP_OK, ["Content-Type" => "application/json"]);
            return $response;

        } catch (\Throwable $th) {

            $result = ["message" => $th->getMessage()];
            $content = json_encode($result);
            $response = new Response($content, Response::HTTP_INTERNAL_SERVER_ERROR, ["Content-Type" => "application/json"]);
            return $response;

        }

    }


    /**
     * @Route("/api/grades/pagination/{page}", name="app_get_grade_pagination",methods="GET")
     */
    public function getGradesCollection($page, Request $request)
    {
        try {

            $item_per_page = $request->query->get("item_per_page");
            $search =  $request->query->get("search");
            if(!isset($item_per_page)) {
                $item_per_page = 5;
            }
            if(!isset($search)) {
                $search = "";
            }


            $result = $this->gradeRepository->findGradeByPage($item_per_page, $page, $search);
            $content = json_encode($result);
            $response = new Response($content, Response::HTTP_OK, ["Content-Type" => "application/json"]);
            return $response;

        } catch (\Throwable $th) {
            //throw $th;
            $result = ["message" => $th->getMessage()];
            $content = json_encode($result);
            $response = new Response($content, Response::HTTP_INTERNAL_SERVER_ERROR, ["Content-Type" => "application/json"]);
            return $response;
        }


    }


    /**
     * @Route("/api/grades_categories/list/{faction}", name="app_get_list_categorie_grades",methods="GET")
     */
    public function getlisteOfGradeCategory($faction)
    {
        try {
            $result = $this->gradeCategoryRepository->findGradeCategiesForNamebyFaction($faction);
            $content = json_encode($result);
            $response = new Response($content, Response::HTTP_OK, [], true);
            return $response;
        } catch (\Throwable $th) {
            $result = ["message" => $th->getMessage()];
            $content = json_encode($result);
            $response = new Response($content, Response::HTTP_INTERNAL_SERVER_ERROR, ["Content-Type" => "application/json"], true);
            return $response;
        }
    }


    /**
     * @Route("/api/grades/list/{faction}", name="app_get_all_grades_by_factions", methods="GET" )
     */
    public function getAllGradeByFaction($faction)
    {

        try {
            $result = $this->gradeCategoryRepository->findAllGradesByFaction($faction);
            $content = json_encode($result);
            $response = new Response($content, Response::HTTP_OK, []);
            return $response;
        } catch (\Throwable $th) {
            $result = ["message" => $th->getMessage()];
            $content = json_encode($result);
            $response = new Response($content, Response::HTTP_INTERNAL_SERVER_ERROR, ["Content-Type" => "application/json"]);
            return $response;
        }

    }


}
