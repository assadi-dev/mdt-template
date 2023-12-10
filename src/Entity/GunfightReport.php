<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\GunfightReportRepository;
use Gedmo\Timestampable\Traits\TimestampableEntity;

/**
 * @ORM\Entity(repositoryClass=GunfightReportRepository::class)
 * @ApiResource()
 */
class GunfightReport
{
    use TimestampableEntity;
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=18, nullable=true)
     */
    private $numeroReport;
    /**
     * @ORM\Column(type="string", length=150, nullable=false)
     */
    private $lead;

    /**
     * @ORM\Column(type="string", length=100)
     */
    private $firstGroup;

    /**
     * @ORM\Column(type="string", length=150)
     */
    private $secondGroup;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $location;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $recit;

    /**
     * @ORM\Column(type="json", nullable=true)
     */
    private $seized = [];

    /**
     * @ORM\ManyToOne(targetEntity=Agent::class)
     */
    private $agent;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNumeroReport(): ?string
    {
        return $this->numeroReport;
    }

    public function getLead(): ?string
    {
        return $this->lead;
    }

    public function setLead(string $lead): self
    {
        $this->lead = $lead;

        return $this;
    }

    public function setNumeroReport(?string $numeroReport): self
    {
        $this->numeroReport = $numeroReport;

        return $this;
    }

    public function getFirstGroup(): ?string
    {
        return $this->firstGroup;
    }

    public function setFirstGroup(string $firstGroup): self
    {
        $this->firstGroup = $firstGroup;

        return $this;
    }

    public function getSecondGroup(): ?string
    {
        return $this->secondGroup;
    }

    public function setSecondGroup(string $secondGroup): self
    {
        $this->secondGroup = $secondGroup;

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

    public function getRecit(): ?string
    {
        return $this->recit;
    }

    public function setRecit(?string $recit): self
    {
        $this->recit = $recit;

        return $this;
    }

    public function getSeized(): ?array
    {
        return $this->seized;
    }

    public function setSeized(?array $seized): self
    {
        $this->seized = $seized;

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



}