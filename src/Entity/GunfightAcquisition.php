<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\GunfightAcquisitionRepository;

/**
 * @ORM\Entity(repositoryClass=GunfightAcquisitionRepository::class)
 * @ApiResource()
 */
class GunfightAcquisition
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=150)
     */
    private $fullname;

    /**
     * @ORM\Column(type="string", length=150)
     */
    private $seizure;

    /**
     * @ORM\Column(type="string", length=50)
     */
    private $affiliation;

    /**
     * @ORM\ManyToOne(targetEntity=GunfightReport::class)
     */
    private $gunfightReport;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getFullname(): ?string
    {
        return $this->fullname;
    }

    public function setFullname(string $fullname): self
    {
        $this->fullname = $fullname;

        return $this;
    }

    public function getSeizure(): ?string
    {
        return $this->seizure;
    }

    public function setSeizure(string $seizure): self
    {
        $this->seizure = $seizure;

        return $this;
    }

    public function getAffiliation(): ?string
    {
        return $this->affiliation;
    }

    public function setAffiliation(string $affiliation): self
    {
        $this->affiliation = $affiliation;

        return $this;
    }

    public function getGunfightReport(): ?GunfightReport
    {
        return $this->gunfightReport;
    }

    public function setGunfightReport(?GunfightReport $gunfightReport): self
    {
        $this->gunfightReport = $gunfightReport;

        return $this;
    }
}