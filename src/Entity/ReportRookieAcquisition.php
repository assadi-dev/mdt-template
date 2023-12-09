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
     * @ORM\Column(type="smallint")
     */
    private $civilRelationship;

    /**
     * @ORM\Column(type="smallint")
     */
    private $roadControl;

    /**
     * @ORM\Column(type="smallint")
     */
    private $procedures;

    /**
     * @ORM\Column(type="smallint")
     */
    private $drive;

    /**
     * @ORM\Column(type="smallint")
     */
    private $deontology;

    /**
     * @ORM\Column(type="smallint")
     */
    private $respctingHierarchy;

    /**
     * @ORM\Column(type="smallint")
     */
    private $spotArea;

    /**
     * @ORM\Column(type="smallint")
     */
    private $callRadio;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getCivilRelationship(): ?int
    {
        return $this->civilRelationship;
    }

    public function setCivilRelationship(int $civilRelationship): self
    {
        $this->civilRelationship = $civilRelationship;

        return $this;
    }

    public function getRoadControl(): ?int
    {
        return $this->roadControl;
    }

    public function setRoadControl(int $roadControl): self
    {
        $this->roadControl = $roadControl;

        return $this;
    }

    public function getProcedures(): ?int
    {
        return $this->procedures;
    }

    public function setProcedures(int $procedures): self
    {
        $this->procedures = $procedures;

        return $this;
    }

    public function getDrive(): ?int
    {
        return $this->drive;
    }

    public function setDrive(int $drive): self
    {
        $this->drive = $drive;

        return $this;
    }

    public function getDeontology(): ?int
    {
        return $this->deontology;
    }

    public function setDeontology(int $deontology): self
    {
        $this->deontology = $deontology;

        return $this;
    }

    public function getRespctingHierarchy(): ?int
    {
        return $this->respctingHierarchy;
    }

    public function setRespctingHierarchy(int $respctingHierarchy): self
    {
        $this->respctingHierarchy = $respctingHierarchy;

        return $this;
    }

    public function getSpotArea(): ?int
    {
        return $this->spotArea;
    }

    public function setSpotArea(int $spotArea): self
    {
        $this->spotArea = $spotArea;

        return $this;
    }

    public function getCallRadio(): ?int
    {
        return $this->callRadio;
    }

    public function setCallRadio(int $callRadio): self
    {
        $this->callRadio = $callRadio;

        return $this;
    }
}
