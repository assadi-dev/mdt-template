<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\VehicleAttributionRepository;
use Gedmo\Timestampable\Traits\TimestampableEntity;

/**
 * @ORM\Entity(repositoryClass=VehicleAttributionRepository::class)
 * @ApiResource()
 */
class VehicleAttribution
{
    use TimestampableEntity;

    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
    * @ORM\Column(type="string", length=18,nullable=true)
    */
    private $numeroAttribution;


    /**
     * @ORM\ManyToOne(targetEntity=Agent::class)
     */
    private $agentAttributed;

    /**
     * @ORM\Column(type="string", length=50)
     */
    private $typeVehicle;

    /**
     * @ORM\Column(type="string", length=50)
     */
    private $immatriculation;

    /**
     * @ORM\Column(type="string", length=50)
     */
    private $idVehicle;

    /**
     * @ORM\ManyToOne(targetEntity=Agent::class)
     */
    private $agent;

    public function getId(): ?int
    {
        return $this->id;
    }


    public function getNumeroAttribution(): ?string
    {
        return $this->numeroAttribution;
    }


    public function setNumeroAttribution(string $numeroAttribution): self
    {
        $this->numeroAttribution = $numeroAttribution;

        return $this;
    }

    public function getTypeVehicle(): ?string
    {
        return $this->typeVehicle;
    }

    public function setTypeVehicle(string $typeVehicle): self
    {
        $this->typeVehicle = $typeVehicle;

        return $this;
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

    public function getIdVehicle(): ?string
    {
        return $this->idVehicle;
    }

    public function setIdVehicle(string $idVehicle): self
    {
        $this->idVehicle = $idVehicle;

        return $this;
    }

    public function getAgentAttributed(): ?Agent
    {
        return $this->agentAttributed;
    }

    public function setAgentAttributed(?Agent $agentAttributed): self
    {
        $this->agentAttributed = $agentAttributed;

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
