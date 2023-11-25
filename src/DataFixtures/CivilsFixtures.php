<?php

namespace App\DataFixtures;

use App\Entity\Civil;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Faker\Factory;

class CivilsFixtures extends Fixture
{
    public function __construct() {}

    public function load(ObjectManager $manager): void
    {

        for ($i = 0; $i < 25; $i++) {
            $civil = $this->civilGenerator();
            $manager->persist($civil);

        }



        $manager->flush();
    }


    public function civilGenerator(): Civil
    {
        $faker = Factory::create("en_US");
        $civil = new Civil();


        $gender = $faker->randomElement(["male","female"]);

        $ppa = $faker->randomElement([true,false]);
        $driveLicence = $faker->randomElement(['none','valid','suspend','invalid']);
        $phone = $faker->randomNumber(5, true);
        $identification = uniqid();
        $isWanted = $faker->randomElement([false,true]);

        $civil->setFirstname($faker->firstNameMale())->setLastname($faker->lastName())->setGender("male");

        if($gender == "female") {
            $civil->setFirstname($faker->firstNameMale())->setLastname($faker->lastName())->setGender("female");
        }



        $civil->setBirthdate($faker->dateTimeBetween('-50 years', '10 year'))
        ->setHairColor($faker->colorName())
        ->setjob("sans-emploie")
        ->setAffiliation("N/A")
        ->setPpa($ppa)
        ->setDriveLicence($driveLicence)
        ->setPhone("555-" . $phone)
        ->setIdentificationNumber($identification)
        ->setAddress($faker->address())
        ->setIsWanted($isWanted)
        ;


        return $civil;



    }
}
