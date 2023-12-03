<?php

namespace App\Controller\Api;

use App\Repository\PlaintsRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class PlaintsApiController extends AbstractController
{
    private $plaintsRepository;

    public function __construct(PlaintsRepository $plaintsRepository)
    {
        $this->plaintsRepository = $plaintsRepository;
    }

    /**
     * @Route("/api/plaints/pagination/{page}", name="app_get_plaints",methods="GET")
     */

    public function getPlaintsCollections($page, Request $request)
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
            $result = $this->plaintsRepository->findByPagination($item_per_page, $page, $search);
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
