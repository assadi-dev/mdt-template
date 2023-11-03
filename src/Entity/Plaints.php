<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use App\Repository\PlaintsRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=PlaintsRepository::class)
 */
class Plaints
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=50)
     */
    private $depository;

    /**
     * @ORM\Column(type="string", length=50)
     */
    private $accused;

    /**
     * @ORM\Column(type="text")
     */
    private $depositionText;

    /**
     * @ORM\ManyToOne(targetEntity=Agent::class)
     */
    private $agent;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getDepository(): ?string
    {
        return $this->depository;
    }

    public function setDepository(string $depository): self
    {
        $this->depository = $depository;

        return $this;
    }

    public function getAccused(): ?string
    {
        return $this->accused;
    }

    public function setAccused(string $accused): self
    {
        $this->accused = $accused;

        return $this;
    }

    public function getDepositionText(): ?string
    {
        return $this->depositionText;
    }

    public function setDepositionText(string $depositionText): self
    {
        $this->depositionText = $depositionText;

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