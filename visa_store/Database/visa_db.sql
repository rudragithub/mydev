-- phpMyAdmin SQL Dump
-- version 4.0.4
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Aug 28, 2014 at 11:24 AM
-- Server version: 5.6.12-log
-- PHP Version: 5.4.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `visa_db`
--
CREATE DATABASE IF NOT EXISTS `visa_db` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `visa_db`;

-- --------------------------------------------------------

--
-- Table structure for table `adminuser`
--

CREATE TABLE IF NOT EXISTS `adminuser` (
  `UserName` varchar(64) NOT NULL DEFAULT '',
  PRIMARY KEY (`UserName`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `adminuser`
--

INSERT INTO `adminuser` (`UserName`) VALUES
('100'),
('101');

-- --------------------------------------------------------

--
-- Table structure for table `masteruser`
--

CREATE TABLE IF NOT EXISTS `masteruser` (
  `UserName` varchar(64) NOT NULL,
  `Password` varchar(64) NOT NULL,
  PRIMARY KEY (`UserName`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `masteruser`
--

INSERT INTO `masteruser` (`UserName`, `Password`) VALUES
('admin', 'admin');

-- --------------------------------------------------------

--
-- Table structure for table `registrationtable`
--

CREATE TABLE IF NOT EXISTS `registrationtable` (
  `Sl_no` int(11) NOT NULL AUTO_INCREMENT,
  `UserName` varchar(64) DEFAULT NULL,
  `Password` varchar(64) NOT NULL,
  `Question` varchar(64) NOT NULL,
  `Answer` varchar(64) NOT NULL,
  `UserType` varchar(64) NOT NULL,
  PRIMARY KEY (`Sl_no`),
  UNIQUE KEY `UserName` (`UserName`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=14 ;

--
-- Dumping data for table `registrationtable`
--

INSERT INTO `registrationtable` (`Sl_no`, `UserName`, `Password`, `Question`, `Answer`, `UserType`) VALUES
(1, 'aaa', '123', 'Where is your Birth Place', 'a', 'Normal'),
(5, 'jp1', 'root1', 'Where is your Birth Place', 'madurai', 'Normal'),
(7, 'root', 'root', 'What is your childhood name?', 'kutti', 'Normal'),
(8, 'www', '456', 'What is your childhood name?', 'sss', 'Normal'),
(9, '2000', '456', 'What is your childhood name?', 'sss', 'Normal'),
(11, '100', '1', 'What is your childhood name?', '22', 'Admin'),
(12, 'root1', '1', 'What is your childhood name?', '2', 'Normal'),
(13, '101', '1', 'What is your childhood name?', '22', 'Admin');

-- --------------------------------------------------------

--
-- Table structure for table `visadetails`
--

CREATE TABLE IF NOT EXISTS `visadetails` (
  `slno` int(11) NOT NULL AUTO_INCREMENT,
  `Ps_no` int(11) DEFAULT NULL,
  `Name` varchar(64) NOT NULL,
  `Status` varchar(64) NOT NULL,
  `AvailableBy` varchar(64) NOT NULL,
  `BaseAccount` varchar(64) NOT NULL,
  `BaseDH` varchar(64) NOT NULL,
  `PrimaryDomain` varchar(64) NOT NULL,
  `PrimarySkills` varchar(64) NOT NULL,
  `AdditionalSkills` varchar(64) NOT NULL,
  `ClientName` varchar(64) NOT NULL,
  `BoardingDate` date NOT NULL,
  `TargetDH` varchar(64) NOT NULL,
  `Resume` mediumblob,
  PRIMARY KEY (`slno`),
  UNIQUE KEY `slno` (`slno`),
  UNIQUE KEY `Ps_no` (`Ps_no`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=58 ;

--
-- Dumping data for table `visadetails`
--

INSERT INTO `visadetails` (`slno`, `Ps_no`, `Name`, `Status`, `AvailableBy`, `BaseAccount`, `BaseDH`, `PrimaryDomain`, `PrimarySkills`, `AdditionalSkills`, `ClientName`, `BoardingDate`, `TargetDH`, `Resume`) VALUES
(1, 1112, '1', 'Available', '0000-00-00', '3', '4', '5', '7', '6', '8', '0000-00-00', '9', ''),
(2, 1123, '1', 'Not Available', '2', '3', '4', '5', '7', '6', '8', '2014-01-01', '9', ''),
(3, 1124, '1', 'Not Available', '2', '3', '4', '5', '7', '6', '8', '2014-01-01', '9', 0x54656c65636f6d),
(4, 66666, '1', 'Available', '1', '1', '2', '3', '5', '4', '6', '2014-01-01', 'asdasd', 0x6764732e747874),
(5, 5, '23', 'Available', 'wsew', 'wew', 'wew', 'as', 'sds', '1', 'samsung', '2014-01-01', '3453', 0x66697265666f782e657865),
(6, 7, '23', 'Available', 'wsew', 'wew', 'wew', 'as', 'sds', '4343', 'cisco', '2014-01-01', '3453', 0x66697265666f782e657865),
(7, 9, '23', 'Available', 'wsew', 'wew', 'wew', 'as', 'sds', '4343', 'IDC', '2014-01-01', '3453', 0x66697265666f782e657865),
(8, 21, '23', 'Available', 'wsew', 'wew', 'wew', 'as', 'sds', '4343', 'samsung', '2014-01-01', '3453', 0x66697265666f782e657865),
(9, 211, '23', 'Available', 'wsew', 'wew', 'wew', 'as', 'sds', '4343', 'cisco', '2014-01-01', '3453', 0x66697265666f782e657865),
(10, 32, '23', 'Available', 'wsew', 'wew', 'wew', 'as', 'sds', '4343', 'cisco', '2014-01-01', '3453', 0x66697265666f782e657865),
(11, 321, '23', 'Available', 'wsew', 'wew', 'wew', 'as', 'sds', '4343', 'samsung', '2014-01-01', '3453', 0x66697265666f782e657865),
(12, 322, '23', 'Available', 'wsew', 'wew', 'wew', 'as', 'sds', '4343', 'IDC', '2014-01-01', '3453', 0x66697265666f782e657865),
(13, 323, '23', 'Available', 'wsew', 'wew', 'wew', 'as', 'sds', '4343', 'cisco', '2014-01-01', '3453', 0x66697265666f782e657865),
(14, 324, 'jeyaprakash', 'Available', 'wsew', 'wew', 'wew', 'as', 'sds', '4343', 'samsug', '2014-01-01', '3453', 0x66697265666f782e657865),
(15, 325, 'jeyaprakash', 'Available', 'wsew', 'wew', 'wew', 'as', 'sds', '4343', 'samsug', '2014-01-01', 'sdfe', 0x66697265666f782e657865),
(16, 326, 'jeyaprakash', 'Available', 'wsew', 'wew', 'wew', 'as', 'sds', '4343', 'IDC', '2014-01-01', 'sdfe', 0x66697265666f782e657865),
(17, 222, '', '', '', '', '', '', '', '1', '', '2014-01-01', '', ''),
(18, 100, 'df', 'Not Available', '12', '12', '343', '343', '2123', '121', '1213', '2014-01-01', '3432534', ''),
(19, 101, 'df', 'Not Available', '12', '12', '343', '343', '2123', '121', '1213', '2014-01-01', '3432534', ''),
(20, 102, 'df', 'Not Available', '12', '12', '343', '343', '2123', '121', '1213', '2014-01-01', '3432534', ''),
(21, 103, 'new', 'Not Available', '12', '12', '343', '343', '2123', '121', 'IDC', '2014-01-01', '3432534', ''),
(22, 104, 'new', 'Not Available', '12', '12', '343', '343', '2123', '121', 'samsung', '2014-01-01', '3432534', ''),
(23, 20072206, 'jeyaprakash', 'Available', 'All Days', '121121', '2323', 'ses', 'sdfsdf', '1', 'cisco', '2014-01-01', '232', ''),
(24, 11, 'qewqw', 'Available', 'qwewq', 'qwewq', 'qweqw', 'qwewq', 'qwewq', '10', 'qwewq', '2014-01-01', 'qwewqeqw', ''),
(35, 2000, 'new jp', 'Available', '232', '34', '3434', '232', '343', '12', 'samsung', '2014-01-01', '4343', ''),
(36, 2001, 'success', 'Available', '3434', 'wrwer', 'wre', 'wrew', 'dfdfsd', '121', 'IDC', '2014-01-01', '23', ''),
(37, 20001, 'dsf', 'Available', 'sdfsd', 'sdf', 'sdfs', 'qw3eqw', '1', '1', '3w', '2014-01-01', '232', ''),
(38, 20002, 'dsf', 'Available', 'sdfsd', 'sdf', 'sdfs', 'qw3eqw', '1', '1', '3w', '2014-01-01', '232', ''),
(39, 20003, 'dsf', 'Available', 'sdfsd', 'sdf', 'sdfs', 'qw3eqw', '1', '1', '3w', '2014-01-01', '232', ''),
(40, 20004, 'dsf', 'Available', 'sdfsd', 'sdf', 'sdfs', 'qw3eqw', '1', '1', '3w', '2014-01-01', '232', ''),
(41, 20005, 'dsf', 'Available', 'sdfsd', 'sdf', 'sdfs', 'qw3eqw', '1', '1', '3w', '2014-01-01', '232', ''),
(42, 20006, 'dsf', 'Available', 'sdfsd', 'sdf', 'sdfs', 'qw3eqw', '1', '1', '3w', '2014-01-01', '232', ''),
(43, 20007, 'dsf', 'Available', 'sdfsd', 'sdf', 'sdfs', 'qw3eqw', '1', '1', '3w', '2014-01-01', '232', ''),
(44, 20008, 'SDFSDS', 'Available', 'SADFAS', 'AASD', '1', '3', '23', '3', '3D', '2014-01-01', '2', ''),
(45, 20009, 'SDFS', 'Available', 'SDFSD', 'SDF', 'AFSD', '1', '1', '1', 'SDS', '2014-01-01', 'DF', ''),
(46, 20010, 'SDFS', 'Available', 'SDFSD', 'SDF', 'AFSD', '1', '1', '1', 'SDS', '2014-01-01', 'DF', ''),
(47, 20011, 'SDFS', 'Available', 'SDFSD', 'SDF', 'AFSD', '1', '1', '1', 'SDS', '2014-01-01', 'DF', ''),
(48, 20012, 'SDFS', 'Available', 'SDFSD', 'SDF', 'AFSD', '1', '1', '1', 'SDS', '2014-01-01', 'DF', ''),
(49, 20013, 'SDFS', 'Available', 'SDFSD', 'SDF', 'AFSD', '1', '1', '1', 'SDS', '2014-01-01', 'DF', ''),
(50, 20014, 'SDFS', 'Available', 'SDFSD', 'SDF', 'AFSD', '1', '1', '1', 'SDS', '2014-01-01', 'DF', ''),
(51, 20015, 'SDFS', 'Available', 'SDFSD', 'SDF', 'AFSD', '1', '1', '1', 'SDS', '2014-01-01', 'DF', ''),
(52, 20016, 'SDFS', 'Available', 'SDFSD', 'SDF', 'AFSD', '1', '1', '1', 'samsung', '2014-01-01', 'DF', ''),
(53, 20017, 'SDFS', 'Available', 'SDFSD', 'SDF', 'AFSD', '1', '1', '1', 'IDC', '2014-01-01', 'DF', ''),
(54, 5000, 'sads', 'Available', 'asdsa', 'ads', 'asds', 'asda', '232', '2', 'samsung', '2014-01-01', '323', ''),
(55, 5001, 'sads', 'Available', 'asdsa', 'ads', 'asds', 'asda', '232', '2', 'samsung', '2014-01-01', '323', ''),
(56, 10000, 'sssss', 'Not Available', 'dfdf', '343', '23', '23', '34', '34', 'samsung', '2017-01-01', 'dsfdsf', ''),
(57, 2007823, 'sfsdf', 'Available', 'sddsd', 'sds', 'wrwer', 'werwe', 'were', '1', 'samsung', '2014-01-01', 'jgjh', '');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
