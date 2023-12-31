<?php

namespace App\Controller\Api;

use App\Repository\VehicleAttributionRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\VehicleEncodingRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class VehicleAttributionApiController extends AbstractController
{
    private $vehicleAttributionRepository;

    public function __construct(VehicleAttributionRepository $vehicleAttributionRepository)
    {
        $this->vehicleAttributionRepository = $vehicleAttributionRepository;
    }

    /**
     * @Route("api/vehicle_attributions/pagination/{page}" , name="app_vehicle_attribution_collections", methods="GET" )
     */
    public function get_vehicleAttribution_collection($page, Request $request)
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


            $result =  $this->vehicleAttributionRepository->findByPagination($item_per_page, $page, $search);

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
     * @Route("api/vehicle_attributions/agent/{idAgent}" , name="app_vehicle_attribution_byAgent", methods="GET" )
     */
    public function get_vehicleAttribution_agent_collection($idAgent, Request $request)
    {
        try {
            $item_per_page = $request->query->get("item_per_page");
            $search =  $request->query->get("search");
            $page =  $request->query->get("page");
            if(!isset($item_per_page)) {
                $item_per_page = 5;
            }
            if(!isset($search)) {
                $search = "";
            }
            if(!isset($page)) {
                $page = 1;
            }


            $result =  $this->vehicleAttributionRepository->findByAgentPagination($idAgent,$item_per_page, $page, $search);

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