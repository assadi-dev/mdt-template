<?php

namespace App\EventSubscriber;

use ApiPlatform\Symfony\EventListener\EventPriorities;
use App\Entity\ArrestFolder;
use App\Entity\ArrestReport;
use App\Entity\Avertissement;
use App\Entity\Traffic;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\Event\ViewEvent;
use Symfony\Component\HttpKernel\KernelEvents;

final class NumeroDossierCasierSubscriber implements EventSubscriberInterface
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
            ['onCreateAvertissement', EventPriorities::POST_WRITE],
            ['onCreateTraffic', EventPriorities::POST_WRITE],
            ['onCreateArrestReport', EventPriorities::POST_WRITE],
            ['onCreateArrestFolder', EventPriorities::POST_WRITE],

        ],


        ];
    }


    public function onCreateAvertissement(ViewEvent $event): void
    {
        $entity = $event->getControllerResult();
        $method = $event->getRequest()->getMethod();

        if (!$entity instanceof Avertissement || Request::METHOD_POST !== $method) {
            return;
        }

        $id = $entity->getId();
        $numero = $this->generate_reportNumber($id);
        $entity->setNumeroAvertissement($numero);
        $this->entityManager->persist($entity);
        $this->entityManager->flush();

    }


    public function onCreateTraffic(ViewEvent $event): void
    {
        $entity = $event->getControllerResult();
        $method = $event->getRequest()->getMethod();

        if (!$entity instanceof Traffic || Request::METHOD_POST !== $method) {
            return;
        }

        $id = $entity->getId();
        $numero = $this->generate_reportNumber($id);
        $entity->setNumeroTraffic($numero);
        $this->entityManager->persist($entity);
        $this->entityManager->flush();
    }


    public function onCreateArrestReport(ViewEvent $event): void
    {
        $entity = $event->getControllerResult();
        $method = $event->getRequest()->getMethod();

        if (!$entity instanceof ArrestReport || Request::METHOD_POST !== $method) {
            return;
        }

        $id = $entity->getId();
        $numero = $this->generate_reportNumber($id);
        $entity->setNumeroArrestReport($numero);
        $this->entityManager->persist($entity);
        $this->entityManager->flush();
    }

    public function onCreateArrestFolder(ViewEvent $event): void
    {
        $entity = $event->getControllerResult();
        $method = $event->getRequest()->getMethod();

        if (!$entity instanceof ArrestFolder || Request::METHOD_POST !== $method) {
            return;
        }

        $id = $entity->getId();
        $numero = $this->generate_reportNumber($id);
        $entity->setNumeroArrestFolder($numero);
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
