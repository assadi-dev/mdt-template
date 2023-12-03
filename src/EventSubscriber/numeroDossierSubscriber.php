<?php

namespace App\EventSubscriber;

use ApiPlatform\Symfony\EventListener\EventPriorities;
use App\Entity\IncidentReport;
use App\Entity\InterventionReport;
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
            KernelEvents::VIEW => [
            ['onCreatePlaint', EventPriorities::POST_WRITE],
            ['onCreateRapportIncident', EventPriorities::POST_WRITE],
            ['onCreateRapportIntervention', EventPriorities::POST_WRITE]],

        ];
    }


    public function onCreatePlaint(ViewEvent $event): void
    {
        $entity = $event->getControllerResult();
        $method = $event->getRequest()->getMethod();

        if (!$entity instanceof Plaints || Request::METHOD_POST !== $method) {
            return;
        }

        $id = $entity->getId();
        $numero = str_pad($id, 5, "0", STR_PAD_LEFT);
        $entity->setNumeroPlaint($numero);
        $this->entityManager->persist($entity);
        $this->entityManager->flush();

    }
    public function onCreateRapportIncident(ViewEvent $event): void
    {
        $entity = $event->getControllerResult();
        $method = $event->getRequest()->getMethod();


        if (!$entity instanceof IncidentReport || Request::METHOD_POST !== $method) {
            return;
        }

        $id = $entity->getId();
        $numero = str_pad($id, 5, "0", STR_PAD_LEFT);
        $entity->setNumeroReport($numero);
        $this->entityManager->persist($entity);
        $this->entityManager->flush();

    }
    public function onCreateRapportIntervention(ViewEvent $event): void
    {
        $entity = $event->getControllerResult();
        $method = $event->getRequest()->getMethod();

        if (!$entity instanceof InterventionReport || Request::METHOD_POST !== $method) {
            return;
        }

        $id = $entity->getId();
        $numero = str_pad($id, 5, "0", STR_PAD_LEFT);
        $entity->setNumeroReport($numero);
        $this->entityManager->persist($entity);
        $this->entityManager->flush();

    }
}
