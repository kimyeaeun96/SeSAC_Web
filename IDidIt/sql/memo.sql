CREATE TABLE `memo` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` varchar(30) NOT NULL,
  `title` varchar(50) NOT NULL,
  `date` date NOT NULL,
  `content` mediumtext NOT NULL,
  `writedate` timestamp NOT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id_idx` (`user_id`),
  CONSTRAINT `user_id` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;