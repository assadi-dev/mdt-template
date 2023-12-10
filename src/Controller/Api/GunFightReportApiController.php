<?php

namespace App\Controller\Api;

use App\Repository\GunfightReportRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class GunFightReportApiController extends AbstractController
{
    private $gunfightReportRepository;

    public function __construct(GunfightReportRepository $gunfightReportRepository)
    {
        $this->gunfightReportRepository = $gunfightReportRepository;
    }

    /**
     * @Route("/api/gunfight_reports/pagination/{page}", name="app_gunfight_report_collections" ,methods="GET")
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
            $result = $this->gunfightReportRepository->findByPagination($item_per_page, $page, $search);
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