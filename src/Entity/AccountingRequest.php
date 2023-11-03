<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\AccountingRequestRepository;
use Gedmo\Timestampable\Traits\TimestampableEntity;

/**
 * @ORM\Entity(repositoryClass=AccountingRequestRepository::class)
 * @ApiResource()
 */
class AccountingRequest
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
    private $subject;

    /**
     * @ORM\Column(type="text")
     */
    private $reason;

    /**
     * @ORM\Column(type="decimal", precision=16, scale=2)
     */
    private $amount;

    /**
     * @ORM\Column(type="string", columnDefinition="ENUM('pending','accepted','rejected')")
     */
    private $requestState;

    /**
     * @ORM\Column(name="idAgent")
     * @ORM\ManyToOne(targetEntity=Agent::class)
     */
    private $agent;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getSubject(): ?string
    {
        return $this->subject;
    }

    public function setSubject(string $subject): self
    {
        $this->subject = $subject;

        return $this;
    }

    public function getReason(): ?string
    {
        return $this->reason;
    }

    public function setReason(string $reason): self
    {
        $this->reason = $reason;

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

    public function getRequestState(): ?string
    {
        return $this->requestState;
    }

    public function setRequestState(string $requestState): self
    {
        $this->requestState = $requestState;

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