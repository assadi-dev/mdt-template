<?php
namespace App\Controller\Api;

use App\Repository\AgentRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class TrombinoscopApiController extends AbstractController
{

    private $agentRepository;
   

    public function __construct(AgentRepository $agentRepository)
    {
      
        $this->agentRepository = $agentRepository;
    }
    

    /**
     * @Route("api/trombinoscop/pagination/{page}", name="app_get_trombinoscop_pagination", methods="GET" )
     */
    public function get_trombinoscop($page, Request $request)
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


            $result =  $this->agentRepository->findAgentForTrombinoscopByPage($item_per_page, $page, $search);

            $content = json_encode($result);
            $response = new Response($content, Response::HTTP_OK, ["Content-Type" => "application/json"]);
            return $response;
        } catch (\Throwable $th) {
            //throw $th;
            $result = ["message" => $th->getMessage()];
            $content = json_encode($result);
            $response = new Response($content, Response::HTTP_INTERNAL_SERVER_ERROR, ["Content-Type" => "application/json"]);
            return $response;

        }

    }

}