<?php

namespace App\EventSubscriber;

use ApiPlatform\Symfony\EventListener\EventPriorities;
use App\Entity\GunfightReport;
use App\Entity\IncidentReport;
use App\Entity\InterventionReport;
use App\Entity\Plaints;
use App\Entity\RookieReport;
use App\Entity\Sanctions;
use App\Repository\RookieReportRepository;
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
            ['onCreateRapportIntervention', EventPriorities::POST_WRITE],
            ['onCreateRapportRookie', EventPriorities::POST_WRITE],
            ['onCreateGunfightReport', EventPriorities::POST_WRITE],
            ['onCreateSanction', EventPriorities::POST_WRITE],
        ],


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
        $numero = $this->generate_reportNumber($id);
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
        $numero = $this->generate_reportNumber($id);
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
        $numero = $this->generate_reportNumber($id);
        $entity->setNumeroReport($numero);
        $this->entityManager->persist($entity);
        $this->entityManager->flush();

    }

    public function onCreateRapportRookie(ViewEvent $event): void
    {

        $entity = $event->getControllerResult();
        $method = $event->getRequest()->getMethod();

        if (!$entity instanceof RookieReport || Request::METHOD_POST !== $method) {
            return;
        }



        $id = $id = $entity->getId();
        $numero = $this->generate_reportNumber($id);
        $entity->setNumeroReport($numero);
        $this->entityManager->persist($entity);
        $this->entityManager->flush();
    }


    public function onCreateGunfightReport(ViewEvent $event): void
    {
        $entity = $event->getControllerResult();
        $method = $event->getRequest()->getMethod();

        if (!$entity instanceof GunfightReport || Request::METHOD_POST !== $method) {
            return;
        }

        $id = $id = $entity->getId();
        $numero = $this->generate_reportNumber($id);
        $entity->setNumeroReport($numero);
        $this->entityManager->persist($entity);
        $this->entityManager->flush();

    }

    public function onCreateSanction(ViewEvent $event): void
    {
        $entity = $event->getControllerResult();
        $method = $event->getRequest()->getMethod();

        if (!$entity instanceof Sanctions || Request::METHOD_POST !== $method) {
            return;
        }

        $id = $id = $entity->getId();
        $numero = $this->generate_reportNumber($id);
        $entity->setNumeroSanction($numero);
        $this->entityManager->persist($entity);
        $this->entityManager->flush();

    }



    /**
     * Génération du numero de dossier au format 0000X
     * @return string le numéro generé ex 00014
     */
    private function generate_reportNumber($number): string
    {
        return str_pad($number, 5, "0", STR_PAD_LEFT);
    }

}
