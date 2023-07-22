<?php

namespace App\Controller;

use App\Repository\UserRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class MainController extends AbstractController
{
    private $userRepository;


    public function __construct(UserRepository $userRepository)
    {
        $this->userRepository = $userRepository;
    }




    /**
     * @Route("/{reactRouting}", name="app_home", priority="-1",requirements={"reactRouting"="^(?!api|uploads|connect|logout).+"}, defaults={"reactRouting": null})
     */
    public function index(): Response
    {
        $userCredential = $this->getUserData();
        return $this->render('main/index.html.twig', [
            'userData' => $userCredential,
        ]);
    }






    public function getUserData()
    {

        if ($this->getUser()) {

            $identifier = $this->getUser()->getUserIdentifier();

            $user = $this->userRepository->findOneBy(["idDiscord"=>$identifier]);
            return [
                 "id" => $user->getId(),
                "idDiscord" => $user->getUserIdentifier(),
                "roles" => $user->getRoles(),
                "agent"=>$user->getAgent()

            ];
        }
        return [];

    }





}
