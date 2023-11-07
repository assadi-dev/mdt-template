<?php
namespace App\Controller\Api;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\ServiceWeaponEncodingRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class WeaponEncodingController extends AbstractController
{
    private $serviceWeaponEncodingRepository;

    function __construct(ServiceWeaponEncodingRepository $serviceWeaponEncodingRepository)
    {
        $this->serviceWeaponEncodingRepository = $serviceWeaponEncodingRepository;
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

}