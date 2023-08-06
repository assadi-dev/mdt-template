<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230805210828 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE agent ADD grade_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE agent ADD CONSTRAINT FK_268B9C9DFE19A1A8 FOREIGN KEY (grade_id) REFERENCES grade (id)');
        $this->addSql('CREATE INDEX IDX_268B9C9DFE19A1A8 ON agent (grade_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE agent DROP FOREIGN KEY FK_268B9C9DFE19A1A8');
        $this->addSql('DROP INDEX IDX_268B9C9DFE19A1A8 ON agent');
        $this->addSql('ALTER TABLE agent DROP grade_id');
    }
}
