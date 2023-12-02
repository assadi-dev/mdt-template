<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\IncidentReportRepository;

/**
 * @ORM\Entity(repositoryClass=IncidentReportRepository::class)
 * @ApiResource()
 */
class IncidentReport
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $officerImplicated;

    /**
     * @ORM\Column(type="string", length=25,nullable=true)
     */
    private $numeroReport;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $incidentType;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $location;

    /**
     * @ORM\Column(type="text")
     */
    private $commentText;

    /**
     * @ORM\ManyToOne(targetEntity=Agent::class)
     */
    private $agent;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getOfficerImplicated(): ?string
    {
        return $this->officerImplicated;
    }

    public function setOfficerImplicated(string $officerImplicated): self
    {
        $this->officerImplicated = $officerImplicated;

        return $this;
    }

    public function getIncidentType(): ?string
    {
        return $this->incidentType;
    }

    public function setIncidentType(string $incidentType): self
    {
        $this->incidentType = $incidentType;

        return $this;
    }

    public function getLocation(): ?string
    {
        return $this->location;
    }

    public function setLocation(string $location): self
    {
        $this->location = $location;

        return $this;
    }

    public function getCommentText(): ?string
    {
        return $this->commentText;
    }

    public function setCommentText(string $commentText): self
    {
        $this->commentText = $commentText;

        return $this;
    }

    public function getAgent(): ?Agent
    {
        return $this->agent;
    }

    public function setAgent(?Agent $agent): self
    {
        $this->agent = $agent;

        return $this;
    }


    public function getNumeroReport(): ?string
    {
        return $this->numeroReport;
    }


    public function setNumeroReport(string $numeroReport): self
    {
        $this->numeroReport = $numeroReport;

        return $this;
    }
}
