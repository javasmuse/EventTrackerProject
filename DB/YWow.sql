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
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `country` VARCHAR(45) NULL,
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
INSERT INTO `wine` (`id`, `name`, `country`, `region`, `grape`, `price`, `location_Purchased`, `rating`, `notes`, `year`, `image`, `Winery`) VALUES (1, 'Anima de Raimat Blanco', 'Spain', 'Costers del Segre', 'Xarel-lo', 16.52, 'Wine Shop', 3.9, 'citrussy zing to the finish', 2018, '/assets/photos/Anima.jpg', 'Raimat');
INSERT INTO `wine` (`id`, `name`, `country`, `region`, `grape`, `price`, `location_Purchased`, `rating`, `notes`, `year`, `image`, `Winery`) VALUES (2, 'El Mago', 'Spain', 'Terra Alta', 'Garnacha', 15.04, 'Wine Shop', 3.4, 'easy drinking', 2017, '/assets/photos/ElMago.jpg', 'Franck Massard');
INSERT INTO `wine` (`id`, `name`, `country`, `region`, `grape`, `price`, `location_Purchased`, `rating`, `notes`, `year`, `image`, `Winery`) VALUES (3, 'Ramon Bilbao', 'Spain', 'Rioja', 'Tempranillo', 14.99, 'Sitges', 3.8, 'very tasty', 2015, '/assets/photos/RamonBilbao.jpg', 'Ramon Bilbao');
INSERT INTO `wine` (`id`, `name`, `country`, `region`, `grape`, `price`, `location_Purchased`, `rating`, `notes`, `year`, `image`, `Winery`) VALUES (4, 'Tour de Pierres', 'France', 'Languedoc-Roussillon', 'Shiraz', 19.99, 'null', 3.7, 'Earthy, blackberry, leather', 2016, '/assets/photos/Tour.jpg', 'Ermitage du Pic Saint Loup');
INSERT INTO `wine` (`id`, `name`, `country`, `region`, `grape`, `price`, `location_Purchased`, `rating`, `notes`, `year`, `image`, `Winery`) VALUES (5, 'Educated Guess', 'USA', 'Napa', 'Cabernet Sauvignon', 23.99, 'null', 4.1, 'Dry Bold', 2016, '/assets/photos/EducatedGuess.jpg', 'Roots Run Deep');
INSERT INTO `wine` (`id`, `name`, `country`, `region`, `grape`, `price`, `location_Purchased`, `rating`, `notes`, `year`, `image`, `Winery`) VALUES (6, 'Two Angels', 'USA', 'North Coast', 'Petite Syrah', 24.49, 'Wine Warehouse', 3.5, 'cool label', 2015, '/assets/photos/TwoAngles.jpg', 'Two Angles');
INSERT INTO `wine` (`id`, `name`, `country`, `region`, `grape`, `price`, `location_Purchased`, `rating`, `notes`, `year`, `image`, `Winery`) VALUES (7, 'Big Smooth', 'USA', 'Lodi', 'Old Vine Zinfandel', 16.99, 'Wine Warehouse', 3.9, 'Dark berries, tobacco, pepper', 2015, '/assets/photos/BigSmooth.jpg', 'Big Smooth');
INSERT INTO `wine` (`id`, `name`, `country`, `region`, `grape`, `price`, `location_Purchased`, `rating`, `notes`, `year`, `image`, `Winery`) VALUES (8, 'Dialogo Tinto', 'Portugal', 'Douro', 'Touriga Nacional', 7.41, 'Wine Shop', 3.7, 'Good with Pizza', 2017, 'assets/photos/Dialogo.jpg', 'Niepoort');
INSERT INTO `wine` (`id`, `name`, `country`, `region`, `grape`, `price`, `location_Purchased`, `rating`, `notes`, `year`, `image`, `Winery`) VALUES (9, 'Cata de Morante Verdejo', 'Spain', 'Rueda', 'Verdejo', 19.99, 'Restaurant', 3.9, 'Lively Refreshing', 2012, '/assets/Photos/Cata.jpg', 'Finca Los Aljibes');

COMMIT;

