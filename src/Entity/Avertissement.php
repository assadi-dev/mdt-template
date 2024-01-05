<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use App\Repository\AvertissementRepository;
use ApiPlatform\Core\Annotation\ApiResource;
use Gedmo\Timestampable\Traits\TimestampableEntity;

/**
 * @ORM\Entity(repositoryClass=AvertissementRepository::class)
 * @ApiResource()
 */
class Avertissement
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
    private $numeroAvertissement;

    /**
     * @ORM\Column(type="string", length=100)
     */
    private $location;

    /**
     * @ORM\Column(type="text")
     */
    private $description;

    /**
     * @ORM\ManyToOne(targetEntity=Civil::class)
     * @ORM\JoinColumn(nullable=false)
     */
    private $civil;

    /**
     * @ORM\ManyToOne(targetEntity=Agent::class)
     */
    private $agent;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNumeroAvertissement(): ?string
    {
        return $this->numeroAvertissement;
    }

    public function setNumeroAvertissement(?string $numeroAvertissement): self
    {
        $this->numeroAvertissement = $numeroAvertissement;

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

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getCivil(): ?Civil
    {
        return $this->civil;
    }

    public function setCivil(?Civil $civil): self
    {
        $this->civil = $civil;

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