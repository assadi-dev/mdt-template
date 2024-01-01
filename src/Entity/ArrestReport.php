<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use App\Repository\ArrestReportRepository;
use ApiPlatform\Core\Annotation\ApiResource;
use Gedmo\Timestampable\Traits\TimestampableEntity;

/**
 * @ORM\Entity(repositoryClass=ArrestReportRepository::class)
 * @ApiResource()
 */
class ArrestReport
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
    private $numeroArrestReport;

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
     * @ORM\Column(type="decimal", precision=16, scale=2)
     */
    private $amount;

    /**
     * @ORM\Column(type="string", length=50)
     */
    private $sentence;

    /**
     * @ORM\Column(type="boolean")
     */
    private $conversionUp;

    /**
     * @ORM\Column(type="datetime")
     */
    private $dateOfEntry;

    /**
     * @ORM\ManyToOne(targetEntity=Agent::class)
     */
    private $agent;

    public function __construct()
    {
        $this->conversionUp = false;

    }


    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNumeroArrestReport(): ?string
    {
        return $this->numeroArrestReport;
    }

    public function setNumeroArrestReport(?string $numeroArrestReport): self
    {
        $this->numeroArrestReport = $numeroArrestReport;

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

    public function isConversionUp(): ?bool
    {
        return $this->conversionUp;
    }

    public function setConversionUp(bool $conversionUp): self
    {
        $this->conversionUp = $conversionUp;

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
