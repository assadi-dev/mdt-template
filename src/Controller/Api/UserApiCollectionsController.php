<?php

namespace App\Controller\Api;

use App\Repository\AgentRepository;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class UserApiCollectionsController extends AbstractController
{
    private $request;
    private $entityManager;
    private $userRepository;
    private $agentRepository;

    public function __construct(EntityManagerInterface $entityManager, UserRepository $userRepository, AgentRepository $agentRepository)
    {
        $this->entityManager = $entityManager;
        $this->userRepository = $userRepository;
        $this->agentRepository  = $agentRepository;
    }

    /**
     * @Route("/api/users/pagination/{page}",  name="app_get_users_pagination",methods="GET" )
     */
    public function get_userCollections($page, Request $request): Response
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


            $result =  $this->userRepository->findUserByPage($item_per_page, $page, $search);
            $content = json_encode($result);
            $response = new Response($content, Response::HTTP_OK, ["Content-Type" => "application/json"], true);
            return $response;

        } catch (\Throwable $th) {
            //throw $th;
            $result = ["message" => $th->getMessage()];
            $content = json_encode($result);
            $response = new Response($content, Response::HTTP_INTERNAL_SERVER_ERROR, ["Content-Type" => "application/json"], true);
            return $response;
        }
    }


    /**
     * @Route("/api/agents/compte/{id}", name="app_get_agnet_profile",methods="GET" )
     */
    public function getuserAcompteData($id)
    {
        try {
            $agent = $this->agentRepository->finduAgentById($id);



            return $this->json($agent, Response::HTTP_OK);


        } catch (\Throwable $th) {

            $message = ["message" => $th->getMessage()];
            return $this->json($message, Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }


}
