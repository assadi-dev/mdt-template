<?php

namespace App\Controller\Api;

use App\Repository\RookieReportRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class RookieReportApiController extends AbstractController
{
    private $rookieReportRepository;
    private $entityManagerInterface;

    public function __construct(RookieReportRepository $rookieReportRepository, EntityManagerInterface $entityManagerInterface)
    {
        $this->rookieReportRepository = $rookieReportRepository;
        $this->entityManagerInterface = $entityManagerInterface;
    }

    /**
     * @Route("api/rookie_reports/pagination/{page}",name="app_get_rookie_report_collections",methods="GET")
     */
    public function getRookieReportCollection($page, Request $request)
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


            $result = $this->rookieReportRepository->findByPagination($item_per_page, $page, $search);
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
