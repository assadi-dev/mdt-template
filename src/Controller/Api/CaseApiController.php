<?php

namespace App\Controller\Api;

use App\Repository\ArrestFolderRepository;
use App\Repository\ArrestReportRepository;
use App\Repository\AvertissementRepository;
use App\Repository\TrafficRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class CaseApiController extends AbstractController
{
    private $avertissementRepository;
    private $trafficRepository;
    private $arrestReportRepository;
    private $arrestFolderRepository;


    public function __construct(AvertissementRepository $avertissementRepository, TrafficRepository $trafficRepository, ArrestReportRepository $arrestReportRepository, ArrestFolderRepository $arrestFolderRepository)
    {
        $avertissementRepository = $this->avertissementRepository;
        $trafficRepository = $this->trafficRepository;
        $arrestReportRepository = $this->arrestReportRepository;
        $arrestFolderRepository = $this->arrestFolderRepository;

    }





    /**
     * @Route("/api/avertissements/paginations/{idCivil}", name="app_get_avertissement_by_idCivil", methods="GET")
     */
    public function get_avertissement_collections($idCivil, Request $request)
    {

        try {

            $page = $request->query->get("page");
            $item_per_page = $request->query->get("item_per_page");
            $search =  $request->query->get("search");


            if(!isset($item_per_page)) {
                $item_per_page = 5;
            }
            if(!isset($search)) {
                $search = "";
            }
            if(!isset($page)) {
                $page = 1;
            }

            $avertissement = [];



            $result = $avertissement;
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
     * @Route("/api/traffics/paginations/{idCivil}", name="app_get_traffic_by_idCivil", methods="GET")
     */
    public function get_traffic_collections($idCivil, Request $request)
    {

        try {

            $page = $request->query->get("page");
            $item_per_page = $request->query->get("item_per_page");
            $search =  $request->query->get("search");


            if(!isset($item_per_page)) {
                $item_per_page = 5;
            }
            if(!isset($search)) {
                $search = "";
            }
            if(!isset($page)) {
                $page = 1;
            }




            $traffics =  [];
            $result = $traffics;
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
     * @Route("/api/arrest_reports/paginations/{idCivil}", name="app_get_arrest_report_by_idCivil", methods="GET")
     */
    public function get_arrest_report_collections($idCivil, Request $request)
    {
        try {

            $page = $request->query->get("page");
            $item_per_page = $request->query->get("item_per_page");
            $search =  $request->query->get("search");


            if(!isset($item_per_page)) {
                $item_per_page = 5;
            }
            if(!isset($search)) {
                $search = "";
            }
            if(!isset($page)) {
                $page = 1;
            }




            $arrest_report = [];
            $result = $arrest_report;
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
     * @Route("/api/arrest_folders/paginations/{idCivil}", name="app_get_arrest_folder_by_idCivil", methods="GET")
     */
    public function get_arrest_folder_collections($idCivil, Request $request)
    {
        try {

            $page = $request->query->get("page");
            $item_per_page = $request->query->get("item_per_page");
            $search =  $request->query->get("search");


            if(!isset($item_per_page)) {
                $item_per_page = 5;
            }
            if(!isset($search)) {
                $search = "";
            }
            if(!isset($page)) {
                $page = 1;
            }




            $arrest_folder = [];
            $result = $arrest_folder;
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
