<?php

namespace App\Controller\Api;

use App\Repository\CodePenalRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class CodePenalController extends AbstractController
{
    private $codePenalRepository;

    public function __construct(CodePenalRepository $codePenalRepository)
    {

        $this->codePenalRepository = $codePenalRepository;

    }


    /**
     * @Route("api/code_penals/pagination/{page}", name="app_codePenal_collection", methods="GET" )
     */
    public function getcodePenal_collection($page, Request $request): Response
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


            $result = $this->codePenalRepository->findByPagination($item_per_page, $page, $search);
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
     * @Route("api/code_penals/category", name="app_codePenal_category", methods="GET" )
     */
    public function getcodePenal_by_category(Request $request): Response
    {
        try {


            $category = $request->query->get("category");

            if(!isset($category) || strlen($category) == 0) {
                $category = "all";
            }
            $result = $this->codePenalRepository->findByCategory($category);
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
}