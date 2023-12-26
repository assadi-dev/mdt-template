<?php

namespace App\Controller\Api;

use Faker\Factory;
use App\Entity\Agent;
use App\Repository\AgentRepository;
use App\Repository\GradeRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class AgentApiController extends AbstractController
{
    private $agentRepository;
    private $gradeRepository;
    private $entityManager;


    public function __construct(AgentRepository $agentRepository, GradeRepository $gradeRepository, EntityManagerInterface $entityManager)
    {
        $this->agentRepository = $agentRepository;
        $this->gradeRepository = $gradeRepository;
        $this->entityManager = $entityManager;

    }

    /**
     * @Route("/api/agent/matricule/{matricule}", name="app_get_agent_by_matricule", methods="GET")
     */
    public function agent_by_matricule($matricule)
    {
        try {

            $agent =  $this->agentRepository->findAgentByMatricule($matricule);
            $result = $agent;
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
     * @Route("/api/agents/rookies/list", name="app_get_agent_rookies", methods="GET")
     */
    public function rookies_list()
    {

        try {

            $agent =  $this->agentRepository->findAgentListByGrade("Rookie");
            $content = json_encode($agent);
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
     * @Route("/api/agents/list" , name="app_get_agent_list",methods="GET")
     */

    public function agen_list()
    {
        try {
            $agent =  $this->agentRepository->findAgentLight();
            $content = json_encode($agent);
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
     * @Route("/api/agent/effectif/pagination/{page}", name="app_get_effectif_agents", methods="GET")
     */
    public function get_effectif($page, Request $request)
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

            $effectifs = $this->agentRepository->findAgentForEffectif($item_per_page, $page, $search);
            $content = json_encode($effectifs);
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
     * @Route("/api/agent/grades/categories", name="app_get_agents_by_grades_categories", methods="POST")
     */
    public function getAgentByGradeCategorie(Request $request)
    {
        try {
            $body = json_decode($request->getContent(), true);
            $categories = $body["categories"];

            $agents = $this->agentRepository->findAgentByGradesCategories($categories);
            $content = json_encode($agents);
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
     * Generateur d'agent pour test
     * @Route("api/agent/generate/{quantity}" , name="app_agent_generator", methods="GET")
     */
    public function agent_generator($quantity)
    {
        try {





            for ($i = 0; $i < intval($quantity) ; $i++) {
                $faker = Factory::create("en_US");
                $agent = new Agent();
                $gradesList =  $this->gradeRepository->findBy(
                    ["name" => [
                "Rookie",
                "Senior lead officer",
                "Sergeant",
                "Sergeant chef",
                "Lieutenant",
                "Capitain adjoint",
                "Capitain"
                ]]
                );
                $gender = $faker->randomElement(["male","female"]);
                $gender == "female"
                ? $agent->setFirstname($faker->firstNameFemale())->setLastname($faker->lastName())->setGender("female")
                : $agent->setFirstname($faker->firstNameMale())->setLastname($faker->lastName())->setGender("male");
                $agent->setFaction("sasp");
                $phone = "555-" . $faker->randomNumber(6, true);
                $agent->setPhone($phone);
                $grade = $faker->randomElement($gradesList);
                $agent->setGrade($grade);
                $agent->setMatricule($faker->numberBetween(200, 999));
                $this->entityManager->persist($agent);
                $this->entityManager->flush();
            }



            $agentList =  $this->agentRepository->findAgentLight();
            $result = $agentList;
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


}
