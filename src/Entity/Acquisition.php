<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use App\Repository\AcquisitionRepository;
use ApiPlatform\Core\Annotation\ApiResource;
use Gedmo\Timestampable\Traits\TimestampableEntity;

/**
 * @ORM\Entity(repositoryClass=AcquisitionRepository::class)
 * @ApiResource()
 */
class Acquisition
{

    use TimestampableEntity;

    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=25)
     */
    private $post;

    /**
     * @ORM\Column(type="string", length=25)
     */
    private $dateOfAcquisition;

    /**
     * @ORM\Column(type="text")
     */
    private $acquisitionDescription;

    /**
     * @ORM\ManyToOne(targetEntity=Agent::class)
     */
    private $agent;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getPost(): ?string
    {
        return $this->post;
    }

    public function setPost(string $post): self
    {
        $this->post = $post;

        return $this;
    }

    public function getDateOfAcquisition(): ?string
    {
        return $this->dateOfAcquisition;
    }

    public function setDateOfAcquisition(string $dateOfAcquisition): self
    {
        $this->dateOfAcquisition = $dateOfAcquisition;

        return $this;
    }

    public function getAcquisitionDescription(): ?string
    {
        return $this->acquisitionDescription;
    }

    public function setAcquisitionDescription(string $acquisitionDescription): self
    {
        $this->acquisitionDescription = $acquisitionDescription;

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