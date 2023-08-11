<?php

namespace App\Controller\Api;

use Doctrine\ORM\EntityManager;
use App\Repository\UserRepository;
use App\Repository\GradeRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class GradeApiController extends AbstractController
{
    private $request;
    private $entityManager;
    private $gradeRepository;


    public function __construct(Request $request, EntityManagerInterface $entityManager, GradeRepository $gradeRepository)
    {
        $this->request = $request;
        $this->entityManager = $entityManager;
        $this->gradeRepository = $gradeRepository;
    }


    /**
     * @Route("/api/grades/access/{gradeId}", name="app_get_grade_access",methods="GET")
     */
    public function getAccesCollection($gradeId)
    {

        try {

            $access = $this->gradeRepository->findAccessById($gradeId);
            $result = json_encode($access);
            $response = new Response($result, Response::HTTP_OK, [], true);
            return $response;

        } catch (\Throwable $th) {

            $result = json_encode(["message"=>$th->getMessage()]);
            return  $response = new Response($result, Response::HTTP_INTERNAL_SERVER_ERROR, [], true);
        }

    }


}
