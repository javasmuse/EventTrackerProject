-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema YWow
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `YWow` ;

-- -----------------------------------------------------
-- Schema YWow
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `YWow` DEFAULT CHARACTER SET utf8 ;
USE `YWow` ;

-- -----------------------------------------------------
-- Table `wine`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `wine` ;

CREATE TABLE IF NOT EXISTS `wine` (
  `id` INT NOT NULL,
  `name` VARCHAR(45) NULL,
  `country` VARCHAR(45) NOT NULL,
  `region` VARCHAR(45) NULL,
  `grape` VARCHAR(45) NULL,
  `price` DOUBLE NULL,
  `location_Purchased` VARCHAR(45) NULL,
  `rating` INT NULL,
  `notes` LONGTEXT NULL,
  `year` INT NULL,
  `image` VARCHAR(500) NULL,
  `Winery` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

SET SQL_MODE = '';
DROP USER IF EXISTS ywowuser@localhost;
SET SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
CREATE USER 'ywowuser'@'localhost' IDENTIFIED BY 'ywowuser';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'ywowuser'@'localhost';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `wine`
-- -----------------------------------------------------
START TRANSACTION;
USE `YWow`;
INSERT INTO `wine` (`id`, `name`, `country`, `region`, `grape`, `price`, `location_Purchased`, `rating`, `notes`, `year`, `image`, `Winery`) VALUES (1, 'Upper Ridge', 'USA', 'California', 'Malbec ', 35.00, 'winery', 8, 'scrumptious, blueberry, blackberry, spice', 2016, NULL, 'Imagery');
INSERT INTO `wine` (`id`, `name`, `country`, `region`, `grape`, `price`, `location_Purchased`, `rating`, `notes`, `year`, `image`, `Winery`) VALUES (2, 'Wow Oui', 'USA', 'California', 'Sauvignon Blanc', 27.00, 'winery', 7, 'Zesty with 5% Muscat', 2018, NULL, 'Imagery');
INSERT INTO `wine` (`id`, `name`, `country`, `region`, `grape`, `price`, `location_Purchased`, `rating`, `notes`, `year`, `image`, `Winery`) VALUES (3, 'The Seeker', 'New Zealand', 'Marlborough', 'Sauvignon Blanc', 13.00, NULL, 4, 'average for style', 2018, NULL, 'Capricorn Wine Estates');

COMMIT;

