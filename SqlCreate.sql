-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema Contact Manger
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `Contact Manager` ;

-- -----------------------------------------------------
-- Schema Contact Manger
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `Contact Manager` DEFAULT CHARACTER SET utf8 ;
USE `Contact Manager` ;

-- -----------------------------------------------------
-- Table `Contact Manger`.`User Information`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Contact Manager`.`User Information` (
  `First Name` VARCHAR(45) NULL,
  `Last Name` VARCHAR(45) NULL,
  `Username` VARCHAR(45) NOT NULL,
  `Password` VARCHAR(45) NOT NULL,
  `Email Address` VARCHAR(45) NOT NULL,
  `user id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  UNIQUE INDEX `Username_UNIQUE` (`Username` ASC),
  UNIQUE INDEX `Email Adress_UNIQUE` (`Email Address` ASC),
  PRIMARY KEY (`user id`),
  UNIQUE INDEX `user id_UNIQUE` (`user id` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Contact Manger`.`Contact Information`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Contact Manager`.`Contact Information` (
  `First Name` VARCHAR(45) NULL,
  `Last Name` VARCHAR(45) NULL,
  `Home Phone` VARCHAR(45) NULL,
  `Work Phone` VARCHAR(45) NULL,
  `Cell Phone` VARCHAR(45) NULL,
  `Personal Email` VARCHAR(45) NULL,
  `Work Email` VARCHAR(45) NULL,
  `Address` VARCHAR(100) NULL,
  `CID` INT NOT NULL AUTO_INCREMENT,
  `UID` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`CID`),
  INDEX `fk_Contact Information_User Information_idx` (`UID` ASC),
  CONSTRAINT `fk_Contact Information_User Information`
    FOREIGN KEY (`UID`)
    REFERENCES `Contact Manager`.`User Information` (`user id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
