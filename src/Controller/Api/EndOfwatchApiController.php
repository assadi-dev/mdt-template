<?php

namespace App\Controller\Api;

use App\Repository\EndOfWatchRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class EndOfwatchApiController extends AbstractController
{

    private $endOfWatchRepository;

    public function __construct(EndOfWatchRepository $endOfWatchRepository) {

        $this->endOfWatchRepository = $endOfWatchRepository;

    }

    /**
     * @Route("/api/end_of_watches/pagination/{page}", name="app_end_of_watch_pagination", methods="GET" )
     */
    public function end_of_watch_collection($page, Request $request): Response
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

            $result = $this->endOfWatchRepository->findByPagination($item_per_page, $page, $search);
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