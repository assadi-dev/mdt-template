<?php

namespace App\DataFixtures;

use App\Entity\Grade;
use App\Entity\GradeCategory;
use App\Repository\GradeCategoryRepository;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class GradesFixtures extends Fixture
{
    private $gradeCategoryRepository;

    public function __construct(GradeCategoryRepository $gradeCategoryRepository)
    {
        $this->gradeCategoryRepository = $gradeCategoryRepository;
    }

    public function load(ObjectManager $manager): void
    {


        $categories = [
            ["name" => "Effectif","faction" => "lspd"],
            ["name" => "Effectif","faction" => "bcso"],
            ["name" => "Doj","faction" => "doj"],
            ["name" => "State Officier","faction" => "sasp"]
        ];
        $grades = [
            ["name" => "Rookie","gradeCategory" => "Effectif","faction" => "lspd"],
            ["name" => "Aspirant","gradeCategory" => "Effectif","faction" => "bcso"],
            ["name" => "Avocat","gradeCategory" => "Doj","faction" => "doj"],
            ["name" => "Rookie","gradeCategory" => "State Officier","faction" => "sasp"]
        ];

        foreach ($categories as  $value) {
            $gradeCategory = new GradeCategory();
            $gradeCategory->setName($value["name"]);
            $gradeCategory->setFaction($value["faction"]);
            $manager->persist($gradeCategory);
        }
        $manager->flush();
        foreach ($grades as $value) {
            $gradeCategorie = $this->gradeCategoryRepository->findOneBy(["name" => $value["gradeCategory"],"faction" => $value["faction"] ]);
            if(isset($gradeCategorie)) {
                $grade = new Grade();
                $grade->setName($value["name"]);
                $grade->setGradeCategory($gradeCategorie);
                $manager->persist($grade);
            }

        }

        $manager->flush();
    }
}
