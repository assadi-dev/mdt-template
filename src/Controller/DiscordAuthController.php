<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use KnpU\OAuth2ClientBundle\Client\ClientRegistry;
use KnpU\OAuth2ClientBundle\Client\Provider\DiscordClient;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use League\OAuth2\Client\Provider\Exception\IdentityProviderException;

class DiscordAuthController extends AbstractController
{
    private $request;
    private $clientRegistry;

    public function __construct(Request $request, ClientRegistry $clientRegistry)
    {
        $this->clientRegistry = $clientRegistry;
        $this->request = $request;

    }


    /**
     * Link to this controller to start the "connect" process
     *
     * @Route("/connect/discord", name="connect_discord_start")
     */
    public function connectAction()
    {
        // on Symfony 3.3 or lower, $clientRegistry = $this->get('knpu.oauth2.registry');

        return $this->clientRegistry
            ->getClient('discord') // key used in config/packages/knpu_oauth2_client.yaml
            ->redirect([ 'identify', 'email' ]);
    }

    /**
     * After going to Facebook, you're redirected back here
     * because this is the "redirect_route" you configured
     * in config/packages/knpu_oauth2_client.yaml
     *
     * @Route("/connect/discord/check", name="connect_discord_check")
     */
    public function connectCheckAction()
    {
        // ** if you want to *authenticate* the user, then
        // leave this method blank and create a Guard authenticator
        // (read below)



        /** @var DiscordClient $client */
        $client = $this->clientRegistry->getClient('discord');

        try {


            $user = $client->fetchUser();



            // do something with all this new power!
            // e.g. $name = $user->getFirstName();

            echo "<pre>";
            var_dump($user);
            echo "</pre>";

            die;
            // ...
        } catch (IdentityProviderException $e) {
            // something went wrong!
            // probably you should return the reason to the user
            var_dump($e->getMessage());
            die;
        }
    }




    /**
     *@Route("/revoke/token",name="revoke_token_discord",methods="GET")
     */
    public function revoke_token()
    {

    }





}
