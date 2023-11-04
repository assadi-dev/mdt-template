<?php
namespace App\Controller\Api;

use App\Repository\AccountingRequestRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class AccountingRequestController extends AbstractController
{
    private $accountingRequestRepository;

    public function __construct(AccountingRequestRepository $accountingRequestRepository)
    {
        $this->accountingRequestRepository = $accountingRequestRepository;
    }

    /**
     * @Route("api/accounting_requests/pagination/{page}", name="app_accounting_request_all", methods="GET" )
     */
    public function index($page,Request $request)
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
        $result = $this->accountingRequestRepository->findAccountingRequestByPage($item_per_page, $page , $search);

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
     * @Route("api/accounting_requests/pagination/{page}/{idAgent}",name="app_accounting_request_agent" , methods="GET" )
     */
    public function get_all_request_of_agent($page,$idAgent,Request $request)
    {

        $item_per_page = $request->query->get("item_per_page");
        $search =  $request->query->get("search");
       
        if(!isset($item_per_page)) {
            $item_per_page = 5;
        }
        if(!isset($search)) {
            $search = "";
        }


     $result =  $this->accountingRequestRepository->findAccountingRequestByPage($item_per_page, $page , $search,$idAgent);

    }
}