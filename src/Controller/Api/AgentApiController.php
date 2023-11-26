<?php

namespace App\Controller\Api;

use App\Repository\AgentRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class AgentApiController extends AbstractController
{
    private $agentRepository;


    public function __construct(AgentRepository $agentRepository)
    {
        $this->agentRepository = $agentRepository;

    }

    /**
     * @Route("/api/agent/matricule/{matricule}", name="app_get_agent_by_matricule", methods="GET")
     */
    public function agent_by_matricule($matricule)
    {
        try {

            $agent =  $this->agentRepository->findAgentByMatricule($matricule);


            $result = $agent;

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
