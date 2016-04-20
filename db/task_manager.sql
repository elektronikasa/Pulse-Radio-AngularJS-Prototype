/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50612
Source Host           : localhost:3306
Source Database       : task_manager

Target Server Type    : MYSQL
Target Server Version : 50612
File Encoding         : 65001

Date: 2014-04-29 22:10:36
*/

SET FOREIGN_KEY_CHECKS=0;
-- ----------------------------
-- Table structure for `tasks`
-- ----------------------------
DROP TABLE IF EXISTS `tasks`;
CREATE TABLE `tasks` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `task` text NOT NULL,
  `status` int(1) NOT NULL DEFAULT '0',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of tasks
-- ----------------------------
INSERT INTO `tasks` VALUES ('2', 'This is another mike', '0', '2014-04-28 14:57:13');
INSERT INTO `tasks` VALUES ('22', 'tset test test', '0', '2014-04-29 17:39:24');
INSERT INTO `tasks` VALUES ('25', 'test', '0', '2014-04-29 18:01:15');
INSERT INTO `tasks` VALUES ('26', 'tets', '0', '2014-04-29 18:01:22');

-- ----------------------------
-- Table structure for `users`
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(250) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `password_hash` text NOT NULL,
  `api_key` varchar(32) NOT NULL,
  `status` int(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES ('1', 'Mike Karamanolis', 'michaelkara@mweb.co.za', '$2a$10$72833a0e000f372b7e517OcEZzlqW6dhiFrb1WOVvVc3DjcPO36eK', '85f0abb3735bc9a88b3a8edeefabcd8b', '1', '2014-04-28 14:47:32');
INSERT INTO `users` VALUES ('2', 'piet', 'email@ht.com', '$2a$10$6ca018eb75a57804cf267uEjRZCXav0M1iZZPQ2VzfkKA/ah0llly', '4ef3eefd9984d380b3a9715234c0ac22', '1', '2014-04-28 19:19:40');
INSERT INTO `users` VALUES ('3', 'test', 'michaelkara@webmail.co.za', '$2a$10$b66040ec217bed79f5ee1uB2jYKF7nPitDJH9hkK5x6zCC06wDezi', 'cba0865f64e04a508db9e6cb98014ef0', '1', '2014-04-28 23:44:59');

-- ----------------------------
-- Table structure for `user_tasks`
-- ----------------------------
DROP TABLE IF EXISTS `user_tasks`;
CREATE TABLE `user_tasks` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `task_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `task_id` (`task_id`),
  CONSTRAINT `user_tasks_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `user_tasks_ibfk_2` FOREIGN KEY (`task_id`) REFERENCES `tasks` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of user_tasks
-- ----------------------------
INSERT INTO `user_tasks` VALUES ('2', '1', '2');
INSERT INTO `user_tasks` VALUES ('22', '1', '22');
INSERT INTO `user_tasks` VALUES ('25', '1', '25');
INSERT INTO `user_tasks` VALUES ('26', '1', '26');
