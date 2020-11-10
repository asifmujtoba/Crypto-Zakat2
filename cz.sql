-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 07, 2020 at 01:21 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cz`
--

-- --------------------------------------------------------

--
-- Table structure for table `invoice`
--

CREATE TABLE `invoice` (
  `id` varchar(30) NOT NULL,
  `username` varchar(30) NOT NULL,
  `amount` int(11) NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `invoice`
--

INSERT INTO `invoice` (`id`, `username`, `amount`, `date`) VALUES
('6aqdwfgzn5AosaxWJaBtbF', 'Yusuf', 10, '2020-10-13'),
('6CAtFKW25Uyyn91ZshFRBu', 'Yusuf', 10, '2020-10-14'),
('7zWbqa3ZYk9EpGfZCWXpQ5', 'Yusuf', 10, '2020-10-14'),
('At2A87yVSMuqiXcZaYyvNb', 'Yusuf', 10, '2020-10-14'),
('DSk3AqaC3c7pz3oNuqFkSx', 'Yusuf', 10, '2020-10-13'),
('FkKBADWPrNcnTmV6c32qho', 'Rakib', 10, '2020-10-25'),
('FpbJbKNieohAGQxqUrGC6N', 'Yusuf', 10, '2020-10-13'),
('G2binTnwXZsVbBy5SPSJY6', 'Yusuf', 10, '2020-10-13'),
('GgtTy7Uh3NM1w8geDgUPWH', 'Yusuf', 15, '2020-10-13'),
('HeL5NAECLv5i8u7vnhxorL', 'Yusuf', 11, '2020-10-14'),
('QRg6BkF4tx3Z9jF9DKkD5V', 'Yusuf', 10, '2020-10-13'),
('WBN9xKbp6ZRSi7S2riakdd', 'Rakib', 25, '2020-10-25');

-- --------------------------------------------------------

--
-- Table structure for table `user-info`
--

CREATE TABLE `user-info` (
  `username` varchar(30) NOT NULL,
  `firstname` varchar(20) NOT NULL,
  `lastname` varchar(20) NOT NULL,
  `street` varchar(20) NOT NULL,
  `address` varchar(40) NOT NULL,
  `country` varchar(20) NOT NULL,
  `phone` varchar(12) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user-info`
--

INSERT INTO `user-info` (`username`, `firstname`, `lastname`, `street`, `address`, `country`, `phone`) VALUES
('Newaz', 'Asif', 'Newaz', 'Jalan Gombak', 'IIUM', 'Malaysia', '01151387258'),
('rakib', '  Rakib  ', '  Hasan', '  Jalan Gombak', '  Selangor', ' Bangladesh', '  6011534875'),
('Yusuf', 'Yusuf', 'Jamal', 'Jalan Gombak', 'Selangor', 'Malaysia', '01151354875');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(10) NOT NULL,
  `name` text NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `role` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `role`) VALUES
(1, 'Newaz', 'asifmujtoba@gmail.com', 'Qwedsazxc', 'Admin'),
(3, 'Yusuf', 'yusuf@gmail.com', '32145324', 'User'),
(4, 'Rakib', 'rakib@gmail.com', '123456', 'User');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `invoice`
--
ALTER TABLE `invoice`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user-info`
--
ALTER TABLE `user-info`
  ADD PRIMARY KEY (`username`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
