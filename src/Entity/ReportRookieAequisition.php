<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Core\Annotation\ApiResource;
use Gedmo\Timestampable\Traits\TimestampableEntity;
use App\Repository\ReportRookieAcquisitionRepository;

/**
 * @ORM\Entity(repositoryClass=ReportRookieAcquisitionRepository::class)
 * @ApiResource()
 */
class ReportRookieAcquisition
{
    use TimestampableEntity;
    /**
        * @ORM\Id
        * @ORM\GeneratedValue
        * @ORM\Column(type="integer")
        *
        */
    private $id;

    /**
     * @ORM\Column(type="string", columnDefinition="ENUM('bad','warning','good')")
     */
    private $civilRelationship;

    /**
     * @ORM\Column(type="string", columnDefinition="ENUM('bad','warning','good')")
     */
    private $roadControl;

    /**
     * @ORM\Column(type="string", columnDefinition="ENUM('bad','warning','good')")
     */
    private $procedures;

    /**
     * @ORM\Column(type="string", columnDefinition="ENUM('bad','warning','good')")
     */
    private $drive;

    /**
     * @ORM\Column(type="string", columnDefinition="ENUM('bad','warning','good')")
     */
    private $deontology;

    /**
     * @ORM\Column(type="string", columnDefinition="ENUM('bad','warning','good')")
     */
    private $respctingHierarchy;

    /**
     * @ORM\Column(type="string", columnDefinition="ENUM('bad','warning','good')")
     */
    private $spotArea;

    /**
     * @ORM\Column(type="string", columnDefinition="ENUM('bad','warning','good')")
     */
    private $callRadio;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getCivilRelationship(): ?string
    {
        return $this->civilRelationship;
    }

    public function setCivilRelationship(string $civilRelationship): self
    {
        $this->civilRelationship = $civilRelationship;

        return $this;
    }

    public function getRoadControl(): ?string
    {
        return $this->roadControl;
    }

    public function setRoadControl(string $roadControl): self
    {
        $this->roadControl = $roadControl;

        return $this;
    }

    public function getProcedures(): ?string
    {
        return $this->procedures;
    }

    public function setProcedures(string $procedures): self
    {
        $this->procedures = $procedures;

        return $this;
    }

    public function getDrive(): ?string
    {
        return $this->drive;
    }

    public function setDrive(string $drive): self
    {
        $this->drive = $drive;

        return $this;
    }

    public function getDeontology(): ?string
    {
        return $this->deontology;
    }

    public function setDeontology(string $deontology): self
    {
        $this->deontology = $deontology;

        return $this;
    }

    public function getRespctingHierarchy(): ?string
    {
        return $this->respctingHierarchy;
    }

    public function setRespctingHierarchy(string $respctingHierarchy): self
    {
        $this->respctingHierarchy = $respctingHierarchy;

        return $this;
    }

    public function getSpotArea(): ?string
    {
        return $this->spotArea;
    }

    public function setSpotArea(string $spotArea): self
    {
        $this->spotArea = $spotArea;

        return $this;
    }

    public function getCallRadio(): ?string
    {
        return $this->callRadio;
    }

    public function setCallRadio(string $callRadio): self
    {
        $this->callRadio = $callRadio;

        return $this;
    }
}
