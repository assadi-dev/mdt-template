<?php

namespace App\Controller;

use App\Repository\UserRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class MainController extends AbstractController
{
    private $userRepository;
    private $serializer;


    public function __construct(UserRepository $userRepository, SerializerInterface $serializer)
    {
        $this->userRepository = $userRepository;
        $this->serializer = $serializer;
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
            $userCredentials = null;
            $identifier = $this->getUser()->getUserIdentifier();
            $user = $this->userRepository->findOneBy(["idDiscord" => $identifier]);


            if(empty($user->getAgent())) {
                return [
                    "id" => $user->getId(),
                    "idDiscord" => $user->getUserIdentifier(),
                    "roles" => $user->getRoles(),
                    "idAgent" => $user->getAgent(),
                    "isValidate" => $user->isIsValidate()

                ];
            }

            $userCredentials  = $this->userRepository->getCredential($identifier) ;
            $userCredentials["roles"] = $this->getUser()->getRoles();
            return $userCredentials;



        }
        return [];

    }





}
