<?php

namespace App\Controller;

use App\Entity\Agent;
use App\Entity\Grade;
use App\Repository\GradeRepository;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class AuthenticationController extends AbstractController
{
    private $request;
    private $entityManager;
    private $userRepository;
    private $gradeRepository;

    public function __construct(Request $request, EntityManagerInterface $entityManager, UserRepository $userRepository, GradeRepository $gradeRepository)
    {
        $this->request = $request;
        $this->entityManager = $entityManager;
        $this->userRepository = $userRepository;
        $this->gradeRepository = $gradeRepository;

    }


    /**
     *@Route("/api/register",name="app_register",methods="POST")
     */
    public function register(): Response
    {

        try {
            $body = json_decode($this->request->getContent(), true);



            $idDiscord = $body["idDiscord"];
            $firstname = $body["firstname"];
            $name = $body["name"];
            $faction = $body["faction"];
            $phone = $body["phone"];
            $gender = $body["gender"];


            $userAccount =  $this->userRepository->findOneBy(["idDiscord" => $idDiscord  ]);
            $agent = new Agent();
            $agent->setFirstname($firstname);
            $agent->setName($name);
            $agent->setFaction($faction);
            $agent->setPhone($phone);
            $agent->setGender($gender);
            $grade = $this->getRookieGrade($faction);
            if(isset($grade)) {
                $agent->setGrade($grade);
            }

            $userAccount->setAgent($agent);
            $this->entityManager->persist($userAccount);
            $this->entityManager->flush();
            $userCreated = $this->userRepository->getCredential($idDiscord);
            $response = new Response();
            $response->setContent(json_encode($userCreated));
            $response->setStatusCode(Response::HTTP_CREATED);
            $response->headers->set('Content-Type', 'application/json');
            return $response;



        } catch (\Throwable $th) {

            $message = $th->getMessage();

            /*if (stripos($message,"Duplicate entry")){
                $message = "Cette identifiant est déjà présente dans la base de données veuillez séléctionner une autre";
            }
            */
            $response = new Response();
            $response->setContent(json_encode([
                "code" => Response::HTTP_INTERNAL_SERVER_ERROR,
                'message' =>  $message,
            ]));
            $response->setStatusCode(Response::HTTP_INTERNAL_SERVER_ERROR);
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


    /**
     *
     */
    public function getRookieGrade($faction): Grade
    {
        $faction = strtolower($faction);
        switch ($faction) {
            case 'lspd':
                return $this->gradeRepository->findOneBy(["name" => "rookie"]);
            case 'bcso':
                return $this->gradeRepository->findOneBy(["name" => "aspirant"]);
            case 'doj':
                return $this->gradeRepository->findOneBy(["name" => "avocat"]);
            case 'sasp':
                return $this->gradeRepository->findOneBy(["name" => "rookie"]);


        }


    }



}
