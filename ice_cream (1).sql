-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Dec 09, 2024 at 03:24 PM
-- Server version: 8.0.17
-- PHP Version: 7.3.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ice_cream`
--

-- --------------------------------------------------------

--
-- Table structure for table `customer`
--

CREATE TABLE `customer` (
  `CustomerID` int(255) NOT NULL,
  `FName` varchar(100) NOT NULL,
  `LName` varchar(100) NOT NULL,
  `Phon_No` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `Location` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `delivery`
--

CREATE TABLE `delivery` (
  `DeliveryID` int(255) NOT NULL,
  `Delivery_Address` text NOT NULL,
  `Delivery_Date` varchar(20) NOT NULL,
  `Customer_Name` varchar(30) NOT NULL,
  `OrderID` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `icecream`
--

CREATE TABLE `icecream` (
  `IceCreamID` int(255) NOT NULL,
  `Flavor` varchar(30) NOT NULL,
  `Price` decimal(65,0) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `icecream`
--

INSERT INTO `icecream` (`IceCreamID`, `Flavor`, `Price`) VALUES
(2, 'Chocolate', '10'),
(3, 'vanila', '25');

-- --------------------------------------------------------

--
-- Table structure for table `item`
--

CREATE TABLE `item` (
  `ItemID` int(255) NOT NULL,
  `IceCreamID` int(255) NOT NULL,
  `ToppingID` int(255) NOT NULL,
  `SauceID` int(255) NOT NULL,
  `ServingTypeID` int(255) NOT NULL,
  `OrderID` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `messege`
--

CREATE TABLE `messege` (
  `MessegeID` int(255) NOT NULL,
  `Reviewer_Name` varchar(100) NOT NULL,
  `Rating` int(5) NOT NULL,
  `Comment` text NOT NULL,
  `Review_Date` varchar(30) NOT NULL,
  `Item_ID` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `order`
--

CREATE TABLE `order` (
  `OrderID` int(255) NOT NULL,
  `Order_Date` varchar(30) NOT NULL,
  `Order_Price` decimal(65,0) NOT NULL,
  `CustomerID` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `paying`
--

CREATE TABLE `paying` (
  `OrderID` int(255) NOT NULL,
  `DateTimepay` varchar(30) NOT NULL,
  `PaymentID` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `paying`
--

INSERT INTO `paying` (`OrderID`, `DateTimepay`, `PaymentID`) VALUES
(21, '9/12/2024', 19),
(23, '9/12/2024', 21);

-- --------------------------------------------------------

--
-- Table structure for table `payment`
--

CREATE TABLE `payment` (
  `PaymentID` int(255) NOT NULL,
  `Payment_Method` varchar(30) NOT NULL,
  `Payment_Amount` decimal(65,0) NOT NULL,
  `Payment_Date` varchar(30) NOT NULL,
  `Payment_Status` varchar(30) NOT NULL,
  `Reference_Number` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `sauce`
--

CREATE TABLE `sauce` (
  `SauceID` int(255) NOT NULL,
  `Sauce_Name` varchar(100) NOT NULL,
  `Sauce_Price` decimal(65,0) NOT NULL,
  `Sauce_Status` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `sauce`
--

INSERT INTO `sauce` (`SauceID`, `Sauce_Name`, `Sauce_Price`, `Sauce_Status`) VALUES
(2, 'sauceA', '10', '0');

-- --------------------------------------------------------

--
-- Table structure for table `sending_message`
--

CREATE TABLE `sending_message` (
  `CustomerID` int(255) NOT NULL,
  `MessegeID` int(255) NOT NULL,
  `DateTimeSend` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `servingtype`
--

CREATE TABLE `servingtype` (
  `ServingTypeID` int(255) NOT NULL,
  `Type` text NOT NULL,
  `Serving_Price` decimal(65,0) NOT NULL,
  `Serving_Status` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `servingtype`
--

INSERT INTO `servingtype` (`ServingTypeID`, `Type`, `Serving_Price`, `Serving_Status`) VALUES
(1, 'ServingtypeA', '10', '0');

-- --------------------------------------------------------

--
-- Table structure for table `topping`
--

CREATE TABLE `topping` (
  `ToppingID` int(255) NOT NULL,
  `Topping_name` varchar(30) NOT NULL,
  `Topping_Price` decimal(65,0) NOT NULL,
  `Topping_Status` varchar(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `topping`
--

INSERT INTO `topping` (`ToppingID`, `Topping_name`, `Topping_Price`, `Topping_Status`) VALUES
(1, 'ToppingA', '10', '0');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`CustomerID`);

--
-- Indexes for table `delivery`
--
ALTER TABLE `delivery`
  ADD PRIMARY KEY (`DeliveryID`);

--
-- Indexes for table `icecream`
--
ALTER TABLE `icecream`
  ADD PRIMARY KEY (`IceCreamID`);

--
-- Indexes for table `item`
--
ALTER TABLE `item`
  ADD PRIMARY KEY (`ItemID`);

--
-- Indexes for table `messege`
--
ALTER TABLE `messege`
  ADD PRIMARY KEY (`MessegeID`);

--
-- Indexes for table `order`
--
ALTER TABLE `order`
  ADD PRIMARY KEY (`OrderID`);

--
-- Indexes for table `payment`
--
ALTER TABLE `payment`
  ADD PRIMARY KEY (`PaymentID`);

--
-- Indexes for table `sauce`
--
ALTER TABLE `sauce`
  ADD PRIMARY KEY (`SauceID`);

--
-- Indexes for table `servingtype`
--
ALTER TABLE `servingtype`
  ADD PRIMARY KEY (`ServingTypeID`);

--
-- Indexes for table `topping`
--
ALTER TABLE `topping`
  ADD PRIMARY KEY (`ToppingID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `customer`
--
ALTER TABLE `customer`
  MODIFY `CustomerID` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT for table `delivery`
--
ALTER TABLE `delivery`
  MODIFY `DeliveryID` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `icecream`
--
ALTER TABLE `icecream`
  MODIFY `IceCreamID` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `item`
--
ALTER TABLE `item`
  MODIFY `ItemID` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `messege`
--
ALTER TABLE `messege`
  MODIFY `MessegeID` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `order`
--
ALTER TABLE `order`
  MODIFY `OrderID` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `payment`
--
ALTER TABLE `payment`
  MODIFY `PaymentID` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `sauce`
--
ALTER TABLE `sauce`
  MODIFY `SauceID` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `servingtype`
--
ALTER TABLE `servingtype`
  MODIFY `ServingTypeID` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `topping`
--
ALTER TABLE `topping`
  MODIFY `ToppingID` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
