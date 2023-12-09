<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use App\Repository\RookieReportRepository;
use ApiPlatform\Core\Annotation\ApiResource;
use Gedmo\Timestampable\Traits\TimestampableEntity;

/**
 * @ORM\Entity(repositoryClass=RookieReportRepository::class)
 * @ApiResource()
 */
class RookieReport
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
     * @ORM\Column(type="string", length=100)
     */
    private $patrolType;

    /**
     * @ORM\Column(type="text")
     */
    private $comment;

    /**
     * @ORM\ManyToOne(targetEntity=Agent::class)
     */
    private $agent;

    /**
     * @ORM\OneToOne(targetEntity=ReportRookieAcquisition::class, cascade={"persist", "remove"})
     */
    private $acquisitions;

    /**
     * @ORM\ManyToOne(targetEntity=Agent::class)
     * @ORM\JoinColumn(nullable=false)
     */
    private $rookie;


    public function getId(): ?int
    {
        return $this->id;
    }


    public function getNumeroReport(): ?string
    {
        return $this->numeroReport;
    }

    public function setNumeroReport(?string $numeroReport): self
    {
        $this->numeroReport = $numeroReport;

        return $this;
    }

    public function getPatrolType(): ?string
    {
        return $this->patrolType;
    }

    public function setPatrolType(string $patrolType): self
    {
        $this->patrolType = $patrolType;

        return $this;
    }

    public function getComment(): ?string
    {
        return $this->comment;
    }

    public function setComment(string $comment): self
    {
        $this->comment = $comment;

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

    public function getAcquisitions(): ?ReportRookieAcquisition
    {
        return $this->acquisitions;
    }

    public function setAcquisitions(?ReportRookieAcquisition $acquisitions): self
    {
        $this->acquisitions = $acquisitions;

        return $this;
    }

    public function getRookie(): ?Agent
    {
        return $this->rookie;
    }

    public function setRookie(Agent $rookie): self
    {
        $this->rookie = $rookie;

        return $this;
    }






}
