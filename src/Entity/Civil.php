<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use App\Repository\CivilRepository;
use ApiPlatform\Core\Annotation\ApiResource;
use Gedmo\Timestampable\Traits\TimestampableEntity;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;

/**
 * @ORM\Entity(repositoryClass=CivilRepository::class)
 * @ApiResource()
 * @UniqueEntity(fields="identificationNumber", message="Ce numero d'identification est déjà pris")
 */
class Civil
{
    use TimestampableEntity;

    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=100)
     */
    private $firstname;

    /**
     * @ORM\Column(type="string", length=150)
     */
    private $lastname;

    /**
     * @ORM\Column(type="date")
     */
    private $birthdate;

    /**
     * @ORM\Column(type="string", length=50)
     */
    private $hairColor;

    /**
     * @ORM\Column(type="string", length=10)
     */
    private $gender;

    /**
     * @ORM\Column(type="string", length=150, nullable=true)
     */
    private $job;

    /**
     * @ORM\Column(type="string", length=150, nullable=true)
     */
    private $affiliation;

    /**
     * @ORM\Column(type="boolean")
     */
    private $ppa;

    /**
     * @ORM\Column(type="string", columnDefinition="ENUM('none','valid','suspend','invalid')")
     */
    private $driveLicence;

    /**
     * @ORM\Column(type="string", length=18, nullable=true)
     */
    private $phone;

    /**
     * @ORM\Column(type="string", length=255, unique=true)
     */
    private $identificationNumber;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $address;

    /**
     * @ORM\Column(type="boolean")
     */
    private $isWanted;


    public function __construct()
    {

        $this->driveLicence = "none";
        $this->ppa = false;
        $this->isWanted = false;

    }



    public function getId(): ?int
    {
        return $this->id;
    }

    public function getFirstname(): ?string
    {
        return $this->firstname;
    }

    public function setFirstname(string $firstname): self
    {
        $this->firstname = $firstname;

        return $this;
    }

    public function getLastname(): ?string
    {
        return $this->lastname;
    }

    public function setLastname(string $lastname): self
    {
        $this->lastname = $lastname;

        return $this;
    }

    public function getBirthdate(): ?\DateTimeInterface
    {
        return $this->birthdate;
    }

    public function setBirthdate(\DateTimeInterface $birthdate): self
    {
        $this->birthdate = $birthdate;

        return $this;
    }

    public function getHairColor(): ?string
    {
        return $this->hairColor;
    }

    public function setHairColor(string $hairColor): self
    {
        $this->hairColor = $hairColor;

        return $this;
    }

    public function getGender(): ?string
    {
        return $this->gender;
    }

    public function setGender(string $gender): self
    {
        $this->gender = $gender;

        return $this;
    }

    public function getJob(): ?string
    {
        return $this->job;
    }

    public function setJob(?string $job): self
    {
        $this->job = $job;

        return $this;
    }

    public function getAffiliation(): ?string
    {
        return $this->affiliation;
    }

    public function setAffiliation(?string $affiliation): self
    {
        $this->affiliation = $affiliation;

        return $this;
    }

    public function isPpa(): ?bool
    {
        return $this->ppa;
    }

    public function setPpa(bool $ppa): self
    {
        $this->ppa = $ppa;

        return $this;
    }

    public function getDriveLicence(): ?string
    {
        return $this->driveLicence;
    }

    public function setDriveLicence(string $driveLicence): self
    {
        $this->driveLicence = $driveLicence;

        return $this;
    }

    public function getPhone(): ?string
    {
        return $this->phone;
    }

    public function setPhone(?string $phone): self
    {
        $this->phone = $phone;

        return $this;
    }

    public function getIdentificationNumber(): ?string
    {
        return $this->identificationNumber;
    }

    public function setIdentificationNumber(string $identificationNumber): self
    {
        $this->identificationNumber = $identificationNumber;

        return $this;
    }

    public function getAddress(): ?string
    {
        return $this->address;
    }

    public function setAddress(?string $address): self
    {
        $this->address = $address;

        return $this;
    }

    public function isIsWanted(): ?bool
    {
        return $this->isWanted;
    }

    public function setIsWanted(bool $isWanted): self
    {
        $this->isWanted = $isWanted;

        return $this;
    }
}