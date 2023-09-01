<?php

namespace App\ApiPlatform\OpenApi;

use ApiPlatform\Core\OpenApi\Model\Operation;
use ApiPlatform\Core\OpenApi\Model\PathItem;
use ApiPlatform\Core\OpenApi\OpenApi;
use ApiPlatform\OpenApi\Factory\OpenApiFactoryInterface;

class OpenApiFactory implements OpenApiFactoryInterface
{
    private $decorated;

    public function __construct(OpenApiFactoryInterface $decorated)
    {
        $this->decorated = $decorated;
    }


    public function __invoke(array $context = []): OpenApi
    {
        $openApi =  $this->decorated->__invoke();

        $connectPath =  new PathItem(null, null, null, null, null, new Operation("postLoginDiscord", ["Auth"], [], "Authentification"));
        $openApi->getPaths()->addPath("api/connect/discord", $connectPath);



        //   dd($openApi->getPaths());

        foreach ($openApi->getPaths()->getPaths() as $value) {


            /*
                        echo "<pre>";
                        var_dump($value->getGet()->getTags());
                        echo "</pre>";
            */

        }

        return $openApi;
    }

}
