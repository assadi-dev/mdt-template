<?php

namespace App\Controller\Api;

use App\Repository\SanctionsRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class SanctionsApiController extends AbstractController
{
    private $sanctionsRepository;

    public function __construct(SanctionsRepository  $sanctionsRepository)
    {
        $this->sanctionsRepository = $sanctionsRepository;

    }


    /**
     * @route("api/sanctions/pagination/{page}", name="app_get_sanction_collections",methods="GET")
     *
     */

    public function get_sanctions_collection($page, Request $request)
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


            $result =    $this->sanctionsRepository->findByPagination($item_per_page, $page, $search);
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
     * @route("api/sanctions/agent/{idAgent}", name="app_get_sanction_by_agent_collections",methods="GET")
     *
     */

    public function get_sanctions_for_agent($idAgent, Request $request)
    {

        try {
            $item_per_page = $request->get("item_per_page");
            $search = $request->query->get("search");
            $page = $request->query->get("page");

            if(!isset($item_per_page)) {
                $item_per_page = 5;
            }
            if(!isset($search)) {
                $search = "";
            }


            $result =  $this->sanctionsRepository->findByAgentPagination($idAgent, $item_per_page, $page, $search);
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
