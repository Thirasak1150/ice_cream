-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Dec 10, 2024 at 05:25 AM
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

--
-- Dumping data for table `customer`
--

INSERT INTO `customer` (`CustomerID`, `FName`, `LName`, `Phon_No`, `Location`) VALUES
(28, 'cc', 'bb', '123456', 'aa'),
(29, 'best', 'ty', '12345', ''),
(30, 'adf', 'swe', '1236547', ''),
(31, 'cream', 'wowwwww', '02345813', 'bkk'),
(32, 'see', 'saw', '024861512', ''),
(33, 'dgr', 'aaa', '215473225', ''),
(34, 'gtr', 'lol', '125975', ''),
(35, 'sss', 'jjjjj', '21543957', ''),
(36, 'asd', 'ghj', '12345678', ''),
(37, 'awe', 'hyt', '12578', ''),
(38, 'lll', 'aaa', '1236549', ''),
(39, 'aaaaa', 'bbbbb', '123456', '');

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

--
-- Dumping data for table `delivery`
--

INSERT INTO `delivery` (`DeliveryID`, `Delivery_Address`, `Delivery_Date`, `Customer_Name`, `OrderID`) VALUES
(24, 'aa', '10/12/2024', 'cc bb', 25),
(25, 'bkk', '10/12/2024', 'cream wowwwww', 27);

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
(2, 'Chocolate', '30'),
(3, 'Vanila', '25'),
(4, 'Strawberry', '25'),
(5, 'Chocolate Chip', '30'),
(6, 'ThaiTea', '35'),
(7, 'Matcha', '40');

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

--
-- Dumping data for table `item`
--

INSERT INTO `item` (`ItemID`, `IceCreamID`, `ToppingID`, `SauceID`, `ServingTypeID`, `OrderID`) VALUES
(23, 2, 1, 2, 1, 25),
(24, 2, 1, 2, 1, 26),
(25, 2, 7, 5, 2, 27),
(26, 2, 3, 3, 2, 28),
(27, 6, 3, 3, 2, 29),
(28, 3, 3, 3, 3, 30),
(29, 3, 3, 6, 3, 31),
(30, 3, 3, 3, 3, 32),
(31, 3, 3, 7, 3, 33),
(32, 3, 3, 5, 3, 34),
(33, 7, 3, 7, 3, 35),
(34, 6, 6, 3, 3, 36),
(35, 6, 7, 3, 3, 37),
(36, 6, 3, 6, 3, 38),
(37, 6, 3, 7, 2, 39),
(38, 6, 3, 5, 2, 40),
(39, 6, 3, 3, 2, 41),
(40, 6, 3, 3, 3, 42),
(41, 4, 3, 6, 2, 43),
(42, 3, 7, 7, 3, 44),
(43, 5, 6, 5, 3, 45),
(44, 6, 7, 7, 2, 46),
(45, 7, 6, 3, 2, 47),
(46, 7, 7, 6, 2, 48),
(47, 7, 7, 6, 3, 49),
(48, 4, 3, 6, 3, 50),
(49, 4, 9, 3, 3, 51),
(50, 4, 9, 3, 2, 52),
(51, 4, 10, 6, 3, 53),
(52, 4, 11, 6, 3, 54),
(53, 4, 10, 9, 3, 55),
(54, 4, 10, 10, 3, 56),
(55, 4, 10, 10, 5, 57),
(56, 4, 11, 5, 5, 58);

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

--
-- Dumping data for table `messege`
--

INSERT INTO `messege` (`MessegeID`, `Reviewer_Name`, `Rating`, `Comment`, `Review_Date`, `Item_ID`) VALUES
(18, 'cc bb', 5, 'ดี', '10/12/2024', 23),
(19, 'best ty', 4, 'อร่อยมากครับ', '10/12/2024', 24),
(20, 'cream wowwwww', 5, 'ดีมากค่ะ', '10/12/2024', 25),
(21, 'dgr aaa', 3, '5555', '10/12/2024', 26),
(22, 'asd ghj', 3, 'dff', '10/12/2024', 27),
(23, 'lll aaa', 5, 'ดีสุดๆ', '10/12/2024', 47);

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

--
-- Dumping data for table `order`
--

INSERT INTO `order` (`OrderID`, `Order_Date`, `Order_Price`, `CustomerID`) VALUES
(25, '10/12/2024', '40', 28),
(26, '10/12/2024', '60', 29),
(27, '10/12/2024', '115', 31),
(28, '10/12/2024', '115', 33),
(29, '10/12/2024', '120', 36),
(30, '10/12/2024', '110', 37),
(31, '10/12/2024', '110', 37),
(32, '10/12/2024', '110', 37),
(33, '10/12/2024', '110', 37),
(34, '10/12/2024', '110', 37),
(35, '10/12/2024', '125', 37),
(36, '10/12/2024', '120', 38),
(37, '10/12/2024', '120', 38),
(38, '10/12/2024', '120', 38),
(39, '10/12/2024', '120', 38),
(40, '10/12/2024', '120', 38),
(41, '10/12/2024', '120', 38),
(42, '10/12/2024', '120', 38),
(43, '10/12/2024', '110', 38),
(44, '10/12/2024', '110', 38),
(45, '10/12/2024', '115', 38),
(46, '10/12/2024', '120', 38),
(47, '10/12/2024', '125', 38),
(48, '10/12/2024', '125', 38),
(49, '10/12/2024', '125', 38),
(50, '10/12/2024', '110', 39),
(51, '10/12/2024', '110', 39),
(52, '10/12/2024', '110', 39),
(53, '10/12/2024', '110', 39),
(54, '10/12/2024', '110', 39),
(55, '10/12/2024', '110', 39),
(56, '10/12/2024', '110', 39),
(57, '10/12/2024', '125', 39),
(58, '10/12/2024', '125', 39);

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
(23, '9/12/2024', 21),
(25, '10/12/2024', 22),
(26, '10/12/2024', 23),
(27, '10/12/2024', 24),
(28, '10/12/2024', 25),
(29, '10/12/2024', 26),
(49, '10/12/2024', 27);

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

--
-- Dumping data for table `payment`
--

INSERT INTO `payment` (`PaymentID`, `Payment_Method`, `Payment_Amount`, `Payment_Date`, `Payment_Status`, `Reference_Number`) VALUES
(22, 'บัตรเครดิต', '40', '10/12/2024', 'payed', '9045680025'),
(23, 'บัตรเครดิต', '60', '10/12/2024', 'payed', '2657918431'),
(24, 'บัตรเครดิต', '115', '10/12/2024', 'payed', '4101349688'),
(25, 'เงินสด', '115', '10/12/2024', 'Waiting', '8353871114'),
(26, 'บัตรเครดิต', '120', '10/12/2024', 'Waiting', '8407680692'),
(27, 'บัตรเครดิต', '125', '10/12/2024', 'Waiting', '4919886701');

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
(3, 'Chocolate ', '25', ''),
(4, ' Caramel ', '25', ''),
(5, 'Strawberry', '25', ''),
(6, 'Matcha', '25', ''),
(7, 'Butter', '25', ''),
(9, 'Caramel', '25', ''),
(10, 'White Choc', '25', '');

-- --------------------------------------------------------

--
-- Table structure for table `sending_message`
--

CREATE TABLE `sending_message` (
  `CustomerID` int(255) NOT NULL,
  `MessegeID` int(255) NOT NULL,
  `DateTimeSend` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `sending_message`
--

INSERT INTO `sending_message` (`CustomerID`, `MessegeID`, `DateTimeSend`) VALUES
(28, 18, '10/12/2024'),
(29, 19, '10/12/2024'),
(31, 20, '10/12/2024'),
(33, 21, '10/12/2024'),
(36, 22, '10/12/2024'),
(38, 23, '10/12/2024');

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
(2, 'Cone', '25', ''),
(3, 'Cup', '25', ''),
(5, 'Chocolate Cone', '40', '');

-- --------------------------------------------------------

--
-- Table structure for table `topping`
--

CREATE TABLE `topping` (
  `ToppingID` int(255) NOT NULL,
  `Topping_name` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `Topping_Price` decimal(65,0) NOT NULL,
  `Topping_Status` varchar(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `topping`
--

INSERT INTO `topping` (`ToppingID`, `Topping_name`, `Topping_Price`, `Topping_Status`) VALUES
(3, 'Almonds', '35', ''),
(6, 'BUD\'S Wafer', '35', ''),
(7, 'Strawberry', '35', ''),
(9, 'Maraschino Cherries', '35', ''),
(10, 'Chocrice Color', '35', ''),
(11, 'Whipped cream', '35', '');

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
  MODIFY `CustomerID` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- AUTO_INCREMENT for table `delivery`
--
ALTER TABLE `delivery`
  MODIFY `DeliveryID` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `icecream`
--
ALTER TABLE `icecream`
  MODIFY `IceCreamID` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `item`
--
ALTER TABLE `item`
  MODIFY `ItemID` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=57;

--
-- AUTO_INCREMENT for table `messege`
--
ALTER TABLE `messege`
  MODIFY `MessegeID` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `order`
--
ALTER TABLE `order`
  MODIFY `OrderID` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=59;

--
-- AUTO_INCREMENT for table `payment`
--
ALTER TABLE `payment`
  MODIFY `PaymentID` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT for table `sauce`
--
ALTER TABLE `sauce`
  MODIFY `SauceID` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `servingtype`
--
ALTER TABLE `servingtype`
  MODIFY `ServingTypeID` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `topping`
--
ALTER TABLE `topping`
  MODIFY `ToppingID` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
