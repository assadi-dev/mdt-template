<?php

namespace App\Controller\Api;

use App\Repository\CivilRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class CivilApiController extends AbstractController
{
    private $civilRepository;

    public function __construct(CivilRepository $civilRepository)
    {

        $this->civilRepository = $civilRepository;

    }


    /**
     * @Route("/api/civils/pagination/{page}", name="app_get_civils_pagination", methods="GET" )
     */
    public function get_civils($page, Request $request)
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

            $result = $this->civilRepository->findByPaginationLight($item_per_page, $page, $search);
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
     * @Route("/api/civil/{identification}", name="app_get_civil_by_identificationn", methods="GET" )
     */
    public function get_one_civiByIdentification($identification)
    {

        try {

            $result = $this->civilRepository->findOneCivil($identification);
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
