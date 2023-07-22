<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Request;
use KnpU\OAuth2ClientBundle\Client\ClientRegistry;
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
     * @Route("/connect/facebook", name="connect_facebook_start")
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


        $client = $this->clientRegistry->getClient('discord');

        try {

            $user = $client->fetchUser();

            // do something with all this new power!
            // e.g. $name = $user->getFirstName();
            var_dump($user);
            die;
            // ...
        } catch (IdentityProviderException $e) {
            // something went wrong!
            // probably you should return the reason to the user
            var_dump($e->getMessage());
            die;
        }
    }

}
