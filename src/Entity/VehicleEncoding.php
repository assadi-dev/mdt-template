<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\VehicleEncodingRepository;
use Gedmo\Timestampable\Traits\TimestampableEntity;

/**
 * @ORM\Entity(repositoryClass=VehicleEncodingRepository::class)
 * @ApiResource()
 */
class VehicleEncoding
{
    use TimestampableEntity;

    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=150)
     */
    private $immatriculation;

    /**
     * @ORM\Column(type="string", length=150)
     */
    private $type;

    /**
     * @ORM\ManyToOne(targetEntity=Civil::class)
     */
    private $civil;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getImmatriculation(): ?string
    {
        return $this->immatriculation;
    }

    public function setImmatriculation(string $immatriculation): self
    {
        $this->immatriculation = $immatriculation;

        return $this;
    }

    public function getType(): ?string
    {
        return $this->type;
    }

    public function setType(string $type): self
    {
        $this->type = $type;

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
}
