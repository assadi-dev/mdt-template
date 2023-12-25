<?php

use Symfony\Component\HttpFoundation\Response;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;

class EndOfwatchApiController extends AbstractController
{
    public function __construct() {}

    /**
     * @Route("/api/end_of_watch/pagination/{page}", name="app_end_of_watch_pagination", methods="GET" )
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

        } catch (\Throwable $th) {
            $result = ["message" => $th->getMessage()];
            $content = json_encode($result);
            $response = new Response($content, Response::HTTP_INTERNAL_SERVER_ERROR, ["Content-Type" => "application/json"]);
            return $response;
        }
    }

}
