<?php

namespace App\ApiPlatform;

use App\Repository\GradeCategoryRepository;
use Doctrine\ORM\EntityManager;
use App\Repository\UserRepository;
use App\Repository\GradeRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class GradeCategoryCustom extends AbstractController
{
    private $request;
    private $entityManager;
    private $gradeCategoryRepository;


    public function __construct(GradeCategoryRepository $gradeCategoryRepository)
    {

        $this->gradeCategoryRepository = $gradeCategoryRepository;
    }


    /**
     * @Route("/grade_categories/permissions/${faction}", name="app_get_grade_categories_collections",methods="GET")
     */
    public function __invoke($faction)
    {

        try {

            $gradeCategories = $this->gradeCategoryRepository->findBy(["faction"=>$faction]);
            return $gradeCategories;

        } catch (\Throwable $th) {


            throw $this->createNotFoundException(
                $th->getMessage()
            );
        }

    }


}