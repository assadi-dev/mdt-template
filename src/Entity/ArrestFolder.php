<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use App\Repository\ArrestFolderRepository;
use ApiPlatform\Core\Annotation\ApiResource;
use Gedmo\Timestampable\Traits\TimestampableEntity;

/**
 * @ORM\Entity(repositoryClass=ArrestFolderRepository::class)
 * @ApiResource()
 */
class ArrestFolder
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
    private $numeroArrestFolder;

    /**
     * @ORM\ManyToOne(targetEntity=Civil::class)
     */
    private $civil;

    /**
     * @ORM\Column(type="string", length=100)
     */
    private $location;

    /**
     * @ORM\Column(type="json")
     */
    private $infractions = [];

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $description;

    /**
     * @ORM\Column(type="decimal", precision=16, scale=2)
     */
    private $amount;

    /**
     * @ORM\Column(type="string", length=50)
     */
    private $sentence;

    /**
     * @ORM\Column(type="datetime")
     */
    private $dateOfEntry;

    /**
     * @ORM\Column(type="boolean")
     */
    private $mirandaLaw;

    /**
     * @ORM\Column(type="boolean")
     */
    private $healthcare;

    /**
     * @ORM\Column(type="boolean")
     */
    private $feed;

    /**
     * @ORM\Column(type="boolean")
     */
    private $avocat;

    /**
     * @ORM\ManyToOne(targetEntity=Agent::class)
     */
    private $agent;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNumeroArrestFolder(): ?string
    {
        return $this->numeroArrestFolder;
    }

    public function setNumeroArrestFolder(?string $numeroArrestFolder): self
    {
        $this->numeroArrestFolder = $numeroArrestFolder;

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

    public function getLocation(): ?string
    {
        return $this->location;
    }

    public function setLocation(string $location): self
    {
        $this->location = $location;

        return $this;
    }

    public function getInfractions(): ?array
    {
        return $this->infractions;
    }

    public function setInfractions(array $infractions): self
    {
        $this->infractions = $infractions;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(?string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getAmount(): ?string
    {
        return $this->amount;
    }

    public function setAmount(string $amount): self
    {
        $this->amount = $amount;

        return $this;
    }

    public function getSentence(): ?string
    {
        return $this->sentence;
    }

    public function setSentence(string $sentence): self
    {
        $this->sentence = $sentence;

        return $this;
    }

    public function getDateOfEntry(): ?\DateTimeInterface
    {
        return $this->dateOfEntry;
    }

    public function setDateOfEntry(\DateTimeInterface $dateOfEntry): self
    {
        $this->dateOfEntry = $dateOfEntry;

        return $this;
    }

    public function isMirandaLaw(): ?bool
    {
        return $this->mirandaLaw;
    }

    public function setMirandaLaw(bool $mirandaLaw): self
    {
        $this->mirandaLaw = $mirandaLaw;

        return $this;
    }

    public function isHealthcare(): ?bool
    {
        return $this->healthcare;
    }

    public function setHealthcare(bool $healthcare): self
    {
        $this->healthcare = $healthcare;

        return $this;
    }

    public function isFeed(): ?bool
    {
        return $this->feed;
    }

    public function setFeed(bool $feed): self
    {
        $this->feed = $feed;

        return $this;
    }

    public function isAvocat(): ?bool
    {
        return $this->avocat;
    }

    public function setAvocat(bool $avocat): self
    {
        $this->avocat = $avocat;

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
