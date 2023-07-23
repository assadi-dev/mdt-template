<?php

namespace App\Controller;

use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class AuthenticationController extends AbstractController
{
    private $request;
    private $entityManager;

    public function __construct(Request $request, EntityManagerInterface $entityManager)
    {
        $this->request = $request;
        $this->entityManager = $entityManager;

    }


    /**
     *@Route("/api/register",name="app_register",methods="POST")
     */
    public function register()
    {

        try {
            $body = json_decode($this->request->getContent(), true);

            dd($body);

            $idDiscord = $body["idDiscord"];
            $firstname = $body["firstname"];



        } catch (\Throwable $th) {

            $message = $th->getMessage();

            /*if (stripos($message,"Duplicate entry")){
                $message = "Cette identifiant est déjà présente dans la base de données veuillez séléctionner une autre";
            }
            */
            $response = new Response();
            $response->setContent(json_encode([
                "code" => 500,
                'message' =>  $message,
            ]));
            $response->setStatusCode(500);
            $response->headers->set('Content-Type', 'application/json');
            return $response;


        }

    }




    /**
     *@Route("/logout",name="app_logout",methods="GET")
     */
    public function logout()
    {

    }



}
