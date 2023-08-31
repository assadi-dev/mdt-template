<?php

namespace App\ApiPlatform\DataProvider;

use ApiPlatform\Core\Bridge\Doctrine\Orm\Extension\ContextAwareQueryResultItemExtensionInterface;
use App\Entity\Grade;
use ApiPlatform\Core\DataProvider\RestrictedDataProviderInterface;
use ApiPlatform\Core\DataProvider\ContextAwareCollectionDataProviderInterface;
use ApiPlatform\Core\DataProvider\ItemDataProviderInterface;
use App\Repository\GradeRepository;

class GradeDataProvider implements ContextAwareCollectionDataProviderInterface, RestrictedDataProviderInterface, ItemDataProviderInterface
{
    private $gradeRepository;

    public function __construct(GradeRepository $gradeRepository)
    {
        $this->gradeRepository = $gradeRepository;

    }



    public function getCollection($resourceClass, $operationName = null, $context = [])
    {
        $item_per_page = 5;
        $page = 1;
        $search = "";
        if(isset($context["filters"]["item_per_page"]) && is_numeric($context["filters"]["item_per_page"])) {
            $item_per_page = $context["filters"]["item_per_page"];
        }
        if(isset($context["filters"]["page"]) && is_numeric($context["filters"]["page"])) {
            $page = $context["filters"]["page"];
        }
        if(isset($context["filters"]["search"])) {
            $search = $context["filters"]["search"];
        }

        $results =  $this->gradeRepository->findGradeByPage($item_per_page, $page, $search);


        return $results;

    }


    public function getItem(string $resourceClass, $id, ?string $operationName = null, array $context = [])
    {
        $results =  $this->gradeRepository->findGradeItem($id);
        return $results;

    }




    public function supports(string $resourceClass, string $operationName = null, array $context = []): bool
    {

        return $resourceClass == Grade::class;

    }

}
