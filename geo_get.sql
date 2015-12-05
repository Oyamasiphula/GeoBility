-- phpMyAdmin SQL Dump
-- version 4.0.10deb1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Dec 03, 2015 at 05:29 PM
-- Server version: 5.5.44-0ubuntu0.14.04.1
-- PHP Version: 5.5.9-1ubuntu4.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `geo_get`
--

-- --------------------------------------------------------

--
-- Table structure for table `Issues`
--

CREATE TABLE IF NOT EXISTS `Issues` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `description` varchar(100) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `association_id` int(100) DEFAULT NULL,
  `rank_id` int(100) DEFAULT NULL,
  `start_location_latitude` decimal(20,10) DEFAULT NULL,
  `start_location_longitude` decimal(20,10) DEFAULT NULL,
  `start_location_time` bigint(20) DEFAULT NULL,
  `end_location_latitude` decimal(20,10) DEFAULT NULL,
  `end_location_longitude` decimal(20,10) DEFAULT NULL,
  `end_location_time` bigint(20) DEFAULT NULL,
  `speed` decimal(20,0) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `association_id` (`association_id`),
  KEY `rank_id` (`rank_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=7 ;

--
-- Dumping data for table `Issues`
--

INSERT INTO `Issues` (`id`, `description`, `date`, `association_id`, `rank_id`, `start_location_latitude`, `start_location_longitude`, `start_location_time`, `end_location_latitude`, `end_location_longitude`, `end_location_time`, `speed`) VALUES
(1, 'overspending', '2015-12-03', 3, 3, -88.0000000000, 42.0000000000, 9223372036854775807, -88.0000000000, 42.0000000000, 9223372036854775807, 33),
(2, 'over speeding', '2015-12-16', 1, 3, -88.0000000000, 42.0000000000, 9223372036854775807, -88.0000000000, 42.0000000000, 9223372036854775807, 900),
(3, 'reckless driving', '2015-06-17', 1, 1, -88.0000000000, 42.0000000000, 9223372036854775807, -88.0000000000, 42.0000000000, 9223372036854775807, 55),
(4, 'over speeding', '2015-11-11', 2, 3, -88.0000000000, 42.0000000000, 9223372036854775807, -88.0000000000, 42.0000000000, 9223372036854775807, 4),
(5, 'alcohol driving limit', '2015-12-24', 2, 3, -88.0000000000, 42.0000000000, 9223372036854775807, -88.0000000000, 42.0000000000, 9223372036854775807, 59),
(6, 'over speeding', '2015-12-08', 3, 6, -88.0000000000, 42.0000000000, 9223372036854775807, NULL, NULL, NULL, 120);

-- --------------------------------------------------------

--
-- Table structure for table `Ranks`
--

CREATE TABLE IF NOT EXISTS `Ranks` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `Rank_name` varchar(100) DEFAULT NULL,
  `association_id` int(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `association_id` (`association_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=7 ;

--
-- Dumping data for table `Ranks`
--

INSERT INTO `Ranks` (`id`, `Rank_name`, `association_id`) VALUES
(1, 'Langa', NULL),
(2, 'Khayelitsha', NULL),
(3, 'Cape Town', NULL),
(4, 'Gugulethu ', NULL),
(5, 'BELLVILLE', NULL),
(6, 'DUNOON', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `Taxi_associations`
--

CREATE TABLE IF NOT EXISTS `Taxi_associations` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `taxiAssociation_name` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=7 ;

--
-- Dumping data for table `Taxi_associations`
--

INSERT INTO `Taxi_associations` (`id`, `taxiAssociation_name`) VALUES
(1, 'Uncedo'),
(2, 'CATA'),
(3, 'SANTAGO'),
(4, 'PENINSULA TAXI '),
(5, 'WESTERN CAPE METERED'),
(6, 'GARDEN ROUTE');

--
-- Constraints for dumped tables
--

--
-- Constraints for table `Issues`
--
ALTER TABLE `Issues`
  ADD CONSTRAINT `Issues_ibfk_1` FOREIGN KEY (`association_id`) REFERENCES `Taxi_associations` (`id`),
  ADD CONSTRAINT `Issues_ibfk_2` FOREIGN KEY (`rank_id`) REFERENCES `Ranks` (`id`);

--
-- Constraints for table `Ranks`
--
ALTER TABLE `Ranks`
  ADD CONSTRAINT `Ranks_ibfk_1` FOREIGN KEY (`association_id`) REFERENCES `Taxi_associations` (`id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
