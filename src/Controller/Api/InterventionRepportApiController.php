<?php

namespace App\Controller\Api;

use App\Repository\InterventionReportRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class InterventionRepportApiController extends AbstractController
{
    private $interventionReportRepository;

    public function __construct(InterventionReportRepository $interventionReportRepository)
    {
        $this->interventionReportRepository = $interventionReportRepository;

    }


    /**
     * @Route("/api/intervention_reports/pagination/{page}", name="app_get_intervention_report",methods="GET")
     */
    public function get_collection($page, Request $request)
    {
        try {
            $item_per_page = $request->get("item_per_page");
            $search =  $request->query->get("search");

            if(!isset($item_per_page)) {
                $item_per_page = 5;
            }
            if(!isset($search)) {
                $search = "";
            }
            $result = $this->interventionReportRepository->findByPagination($item_per_page, $page, $search);
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
