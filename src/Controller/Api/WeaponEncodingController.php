<?php

namespace App\Controller\Api;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\ServiceWeaponEncodingRepository;
use App\Repository\WeaponEncodingRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class WeaponEncodingController extends AbstractController
{
    private $serviceWeaponEncodingRepository;
    private $weaponEncodingRepository;

    public function __construct(ServiceWeaponEncodingRepository $serviceWeaponEncodingRepository, WeaponEncodingRepository $weaponEncodingRepository)
    {
        $this->serviceWeaponEncodingRepository = $serviceWeaponEncodingRepository;
        $this->weaponEncodingRepository = $weaponEncodingRepository;
    }


    /**
     * @Route("api/service_weapon_encodings/pagination/{page}", name="app_get_service_weapon_encoding", methods="GET"  )
     */
    public function get_weapon_enconding_of_service($page, Request $request)
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


            $result =  $this->serviceWeaponEncodingRepository->findByPagination($item_per_page, $page, $search);

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
    /**
     * @Route("api/service_weapon_encodings/agent/{idAgent}", name="app_get_service_weapon_encoding_byAgent", methods="GET"  )
     */
    public function get_weapon_enconding_of_service_byAgent($idAgent, Request $request)
    {
        try {
            $item_per_page = $request->query->get("item_per_page");
            $search =  $request->query->get("search");
            $page =  $request->query->get("page");
            if(!isset($item_per_page)) {
                $item_per_page = 5;
            }
            if(!isset($search)) {
                $search = "";
            }
            if(!isset($page)) {
                $page = 1;
            }


            $result =  $this->serviceWeaponEncodingRepository->findByAgentPagination($idAgent, $item_per_page, $page, $search);

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





    /**
     * @Route("api/weapon_encoding/pagination/{page}", name="app_get_weapon_encoding", methods="GET"  )
     */
    public function get_weapon_enconding($page, Request $request)
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


            $result =  $this->weaponEncodingRepository->findByPagination($item_per_page, $page, $search);

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
