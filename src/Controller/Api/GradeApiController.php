<?php

namespace App\Controller\Api;

use App\Entity\Access;
use App\Repository\AccessRepository;
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
    private $accessRepository;


    public function __construct(Request $request, EntityManagerInterface $entityManager, GradeRepository $gradeRepository, AccessRepository $accessRepository)
    {
        $this->request = $request;
        $this->entityManager = $entityManager;
        $this->gradeRepository = $gradeRepository;
        $this->accessRepository = $accessRepository;
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

            $result = json_encode(["message" => $th->getMessage()]);
            return  $response = new Response($result, Response::HTTP_INTERNAL_SERVER_ERROR, [], true);
        }

    }

    /**
     * @Route("/api/grades/access/{idGrade}", name="app_set_grade_access",methods="PATCH")
     */
    public function setAccesCollection($idGrade)
    {

        try {

            $content = json_decode($this->request->getContent(), true);
            $grade =  $this->gradeRepository->find(["id" => $idGrade]);
            $gradeAccsess = $this->gradeRepository->findAccessById($idGrade);
            $accsessFromReq = $content["access"];


            foreach($accsessFromReq as $accessElement) {

                $findExist = array_search($accessElement["path"], array_column($gradeAccsess, "path"), true);


                if(!is_integer($findExist)) {

                    $accessPath = new Access();
                    $accessPath->setPage($accessElement["name"]);
                    $accessPath->setPath($accessElement["path"]);
                    $accessPath->setIsCanAdd($accessElement["isCanAdd"]);
                    $accessPath->setIsCanUpdate($accessElement["isCanUpdate"]);
                    $accessPath->setIsCanDelete($accessElement["isCanDelete"]);
                    $accessPath->setIsShow($accessElement["isShow"]);
                    $grade->addAccess($accessPath);
                    $this->entityManager->persist($accessPath);
                    $this->entityManager->persist($grade);
                } else {

                    $idAccess = $gradeAccsess[$findExist]["id"];
                    $accessPath = $this->accessRepository->findOneBy(["id" => $idAccess]);
                    $accessPath->setPage($accessElement["name"]);
                    $accessPath->setPath($accessElement["path"]);
                    $accessPath->setIsCanAdd($accessElement["isCanAdd"]);
                    $accessPath->setIsCanUpdate($accessElement["isCanUpdate"]);
                    $accessPath->setIsCanDelete($accessElement["isCanDelete"]);
                    $accessPath->setIsShow($accessElement["isShow"]);
                    $this->entityManager->persist($accessPath);

                }
            }


            $this->entityManager->flush();
            $access =  $gradeAccsess = $this->gradeRepository->findAccessById($idGrade);
            $result = json_encode($access);
            $response = new Response($result, Response::HTTP_OK, [], true);
            return $response;

        } catch (\Throwable $th) {

            $result = json_encode(["message" => $th->getMessage()]);
            return  $response = new Response($result, Response::HTTP_INTERNAL_SERVER_ERROR, [], true);
        }

    }


}
