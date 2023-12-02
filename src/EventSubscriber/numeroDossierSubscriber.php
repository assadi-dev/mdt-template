<?php

namespace App\EventSubscriber;

use ApiPlatform\Symfony\EventListener\EventPriorities;
use App\Entity\Plaints;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\Event\ViewEvent;
use Symfony\Component\HttpKernel\KernelEvents;

final class numeroDossierSubscriber implements EventSubscriberInterface
{
    private $entityManager;

    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->entityManager = $entityManager;
    }

    public static function getSubscribedEvents()
    {
        return [
            KernelEvents::VIEW => ['onCreatePlaint', EventPriorities::POST_WRITE],
        ];
    }

    public function onCreatePlaint(ViewEvent $event): void
    {
        $plaint = $event->getControllerResult();
        $method = $event->getRequest()->getMethod();

        if (!$plaint instanceof Plaints || Request::METHOD_POST !== $method) {
            return;
        }


        $idPlaint = $plaint->getId();
        $numero = str_pad($idPlaint, 5, "0", STR_PAD_LEFT);
        $plaint->setNumeroPlaint($numero);
        $this->entityManager->persist($plaint);
        $this->entityManager->flush();

    }
}
