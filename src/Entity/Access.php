<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use App\Repository\AccessRepository;
use ApiPlatform\Core\Annotation\ApiResource;
use Gedmo\Timestampable\Traits\TimestampableEntity;

/**
 * @ORM\Entity(repositoryClass=AccessRepository::class)
 *  @ApiResource()
 */
class Access
{
    use TimestampableEntity;


    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=50, nullable=true)
     */
    private $page;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $path;

    /**
     * @ORM\Column(type="boolean")
     */
    private $isCanAdd;

    /**
     * @ORM\Column(type="boolean")
     */
    private $isCanUpdate;

    /**
     * @ORM\Column(type="boolean")
     */
    private $isCanDelete;
    /**
     * @ORM\Column(type="boolean")
     */
    private $isShow;

    /**
     * @ORM\ManyToOne(targetEntity=Grade::class, inversedBy="access")
     */
    private $grade;




    public function __construct()
    {
        $this->isCanAdd = false;
        $this->isCanUpdate = false;
        $this->isCanDelete = false;


    }



    public function getId(): ?int
    {
        return $this->id;
    }

    public function getPage(): ?string
    {
        return $this->page;
    }

    public function setPage(?string $page): self
    {
        $this->page = $page;

        return $this;
    }

    public function getPath(): ?string
    {
        return $this->path;
    }

    public function setPath(string $path): self
    {
        $this->path = $path;

        return $this;
    }

    public function isIsCanAdd(): ?bool
    {
        return $this->isCanAdd;
    }

    public function setIsCanAdd(bool $isCanAdd): self
    {
        $this->isCanAdd = $isCanAdd;

        return $this;
    }

    public function isIsCanUpdate(): ?bool
    {
        return $this->isCanUpdate;
    }

    public function setIsCanUpdate(bool $isCanUpdate): self
    {
        $this->isCanUpdate = $isCanUpdate;

        return $this;
    }

    public function isIsCanDelete(): ?bool
    {
        return $this->isCanDelete;
    }

    public function setIsCanDelete(bool $isCanDelete): self
    {
        $this->isCanDelete = $isCanDelete;

        return $this;
    }
    public function isIsShow(): ?bool
    {
        return $this->isShow;
    }

    public function setIsShow(bool $isShow): self
    {
        $this->isShow = $isShow;

        return $this;
    }


    public function getGrade(): ?Grade
    {
        return $this->grade;
    }

    public function setGrade(?Grade $grade): self
    {
        $this->grade = $grade;

        return $this;
    }

}
