<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Doctrine\Common\Collections\Collection;
use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\InterventionReportRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Gedmo\Timestampable\Traits\TimestampableEntity;

/**
 * @ORM\Entity(repositoryClass=InterventionReportRepository::class)
 * @ApiResource()
 */
class InterventionReport
{
    use TimestampableEntity;
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $officiersImplicated;

    /**
     * @ORM\Column(type="string", length=50)
     */
    private $interventionType;

    /**
     * @ORM\Column(type="string", length=25,nullable=true)
     */
    private $numeroReport;

    /**
     * @ORM\Column(type="string", length=150)
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

    public function __construct()
    {
        $this->agent = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getOfficiersImplicated(): ?string
    {
        return $this->officiersImplicated;
    }

    public function setOfficiersImplicated(string $officiersImplicated): self
    {
        $this->officiersImplicated = $officiersImplicated;

        return $this;
    }

    public function getInterventionType(): ?string
    {
        return $this->interventionType;
    }

    public function setInterventionType(string $interventionType): self
    {
        $this->interventionType = $interventionType;

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

    /**
     * @return Collection<int, Agent>
     */
    public function getAgent(): Collection
    {
        return $this->agent;
    }

    public function addAgent(Agent $agent): self
    {
        if (!$this->agent->contains($agent)) {
            $this->agent[] = $agent;
        }

        return $this;
    }

    public function removeAgent(Agent $agent): self
    {
        $this->agent->removeElement($agent);

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
