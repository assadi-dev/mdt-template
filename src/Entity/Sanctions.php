<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use App\Repository\SanctionsRepository;
use ApiPlatform\Core\Annotation\ApiResource;
use Gedmo\Timestampable\Traits\TimestampableEntity;

/**
 * @ORM\Entity(repositoryClass=SanctionsRepository::class)
 * @ApiResource()
 */
class Sanctions
{
    use TimestampableEntity;
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="text")
     */
    private $decisionMaker;

    /**
     * @ORM\ManyToOne(targetEntity=Agent::class)
     */
    private $agentConcerned;

    /**
     * @ORM\Column(type="string", length=50)
     */
    private $typeSanction;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $comment;

    /**
     * @ORM\ManyToOne(targetEntity=Agent::class)
     */
    private $agent;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getDecisionMaker(): ?string
    {
        return $this->decisionMaker;
    }

    public function setDecisionMaker(string $decisionMaker): self
    {
        $this->decisionMaker = $decisionMaker;
        return $this;
    }

    public function getAgentConcerned(): ?Agent
    {
        return $this->agentConcerned;
    }

    public function setAgentConcerned(?Agent $agentConcerned): self
    {
        $this->agentConcerned = $agentConcerned;

        return $this;
    }

    public function getTypeSanction(): ?string
    {
        return $this->typeSanction;
    }

    public function setTypeSanction(string $typeSanction): self
    {
        $this->typeSanction = $typeSanction;

        return $this;
    }

    public function getComment(): ?string
    {
        return $this->comment;
    }

    public function setComment(?string $comment): self
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


}
