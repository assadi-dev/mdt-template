<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use App\ApiPlatform\GradeCategoryCustom;
use ApiPlatform\Core\Annotation\ApiFilter;
use App\Repository\GradeCategoryRepository;
use Doctrine\Common\Collections\Collection;
use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\Common\Collections\ArrayCollection;
use Gedmo\Timestampable\Traits\TimestampableEntity;
use Symfony\Component\Serializer\Annotation\Groups;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\SearchFilter;

/**
 * @ORM\Entity(repositoryClass=GradeCategoryRepository::class)
 * @ApiResource(
 *
 * collectionOperations = {
 *      "post",
 *      "get",
 *      "get_collection_for_permission"={
 *          "pagination_enabled"=false,
 *           "normalization_context"={"groups"={"read:gradeCategory:permission"}},
 *             "method"="GET",
 *              "read"=true,
 *              "path"="/grade_categories/permissions/{faction}",
 *              "controller" = GradeCategoryCustom::class
 *      }
 * }
 *
 * )
 *
 */

#@ApiFilter(SearchFilter::class, properties= {"faction" : "partial"})
class GradeCategory
{
    use TimestampableEntity;

    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     * @Groups({"read:gradeCategory:permission"})
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=100)
     * @Groups({"read:gradeCategory:permission"})
     */
    private $name;

    /**
     * @ORM\OneToMany(targetEntity=Grade::class, mappedBy="gradeCategory")
     * @Groups({"read:gradeCategory:permission"})
     *
     */
    private $grades;

    /**
     * @ORM\Column(type="string", length=50)
     * @Groups({"read:gradeCategory:permission"})
     */
    private $faction;

    public function __construct()
    {
        $this->grades = new ArrayCollection();
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

    /**
     * @return Collection<int, Grade>
     */
    public function getGrades(): Collection
    {
        return $this->grades;
    }

    public function addGrade(Grade $grade): self
    {
        if (!$this->grades->contains($grade)) {
            $this->grades[] = $grade;
            $grade->setGradeCategory($this);
        }

        return $this;
    }

    public function removeGrade(Grade $grade): self
    {
        if ($this->grades->removeElement($grade)) {
            // set the owning side to null (unless already changed)
            if ($grade->getGradeCategory() === $this) {
                $grade->setGradeCategory(null);
            }
        }

        return $this;
    }

    public function getFaction(): ?string
    {
        return $this->faction;
    }

    public function setFaction(string $faction): self
    {
        $this->faction = $faction;

        return $this;
    }
}
