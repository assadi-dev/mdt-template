<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use App\Repository\GradeRepository;
use Doctrine\Common\Collections\Collection;
use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\Common\Collections\ArrayCollection;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\SearchFilter;
use Gedmo\Timestampable\Traits\TimestampableEntity;
use Symfony\Component\Serializer\Annotation\Groups;
use ApiPlatform\Core\Annotation\ApiFilter;

/**
 * @ORM\Entity(repositoryClass=GradeRepository::class)
 * @ApiResource( )
 *
 */
class Grade
{
    use TimestampableEntity;


    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     * @Groups({"read:gradeCategory:permission"})
     *
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=100)
     * @Groups({"read:gradeCategory:permission"})
     */
    private $name;

    /**
     * @ORM\ManyToOne(targetEntity=GradeCategory::class, inversedBy="grades")
     */
    private $gradeCategory;

    /**
     * @ORM\OneToMany(targetEntity=Agent::class, mappedBy="grade")
     */
    private $agents;

    /**
     * @ORM\OneToMany(targetEntity=Access::class, mappedBy="grade")
     */
    private $access;


    public function __construct()
    {
        $this->agents = new ArrayCollection();
        $this->access = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getGradeCategory(): ?GradeCategory
    {
        return $this->gradeCategory;
    }

    public function setGradeCategory(?GradeCategory $gradeCategory): self
    {
        $this->gradeCategory = $gradeCategory;

        return $this;
    }

    /**
     * @return Collection<int, Agent>
     */
    public function getAgents(): Collection
    {
        return $this->agents;
    }

    public function addAgent(Agent $agent): self
    {
        if (!$this->agents->contains($agent)) {
            $this->agents[] = $agent;
            $agent->setGrade($this);
        }

        return $this;
    }

    public function removeAgent(Agent $agent): self
    {
        if ($this->agents->removeElement($agent)) {
            // set the owning side to null (unless already changed)
            if ($agent->getGrade() === $this) {
                $agent->setGrade(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, Access>
     */
    public function getAccess(): Collection
    {
        return $this->access;
    }

    public function addAccess(Access $access): self
    {
        if (!$this->access->contains($access)) {
            $this->access[] = $access;
            $access->setGrade($this);
        }

        return $this;
    }

    public function removeAccess(Access $access): self
    {
        if ($this->access->removeElement($access)) {
            // set the owning side to null (unless already changed)
            if ($access->getGrade() === $this) {
                $access->setGrade(null);
            }
        }

        return $this;
    }


}
