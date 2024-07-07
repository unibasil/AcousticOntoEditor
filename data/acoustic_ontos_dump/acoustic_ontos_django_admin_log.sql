-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: acoustic_ontos
-- ------------------------------------------------------
-- Server version	8.0.37

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `django_admin_log`
--

DROP TABLE IF EXISTS `django_admin_log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_admin_log` (
  `id` int NOT NULL AUTO_INCREMENT,
  `action_time` datetime(6) NOT NULL,
  `object_id` longtext,
  `object_repr` varchar(200) NOT NULL,
  `action_flag` smallint unsigned NOT NULL,
  `change_message` longtext NOT NULL,
  `content_type_id` int DEFAULT NULL,
  `user_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `django_admin_log_content_type_id_c4bce8eb_fk_django_co` (`content_type_id`),
  KEY `django_admin_log_user_id_c564eba6_fk_auth_user_id` (`user_id`),
  CONSTRAINT `django_admin_log_content_type_id_c4bce8eb_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`),
  CONSTRAINT `django_admin_log_user_id_c564eba6_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`),
  CONSTRAINT `django_admin_log_chk_1` CHECK ((`action_flag` >= 0))
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_admin_log`
--

LOCK TABLES `django_admin_log` WRITE;
/*!40000 ALTER TABLE `django_admin_log` DISABLE KEYS */;
INSERT INTO `django_admin_log` VALUES (1,'2024-06-29 09:57:14.376481','2','user',1,'[{\"added\": {}}]',4,1),(2,'2024-06-29 09:59:03.942118','1','Users',1,'[{\"added\": {}}]',3,1),(3,'2024-06-29 09:59:51.483510','2','user',2,'[{\"changed\": {\"fields\": [\"Groups\"]}}]',4,1),(4,'2024-06-29 10:21:00.818009','1','Entity object (1)',1,'[{\"added\": {}}]',8,1),(5,'2024-07-01 08:48:01.195404','1','AttributeType object (1)',1,'[{\"added\": {}}]',7,1),(6,'2024-07-01 08:48:06.626731','1','AttributeType object (1)',2,'[]',7,1),(7,'2024-07-01 08:48:54.790904','1','Attribute object (1)',1,'[{\"added\": {}}]',9,1),(8,'2024-07-01 08:49:38.452115','1','Relationship object (1)',1,'[{\"added\": {}}]',11,1),(9,'2024-07-03 04:19:36.612600','8','AttributeType object (8)',1,'[{\"added\": {}}]',7,1),(10,'2024-07-03 04:20:50.744465','8','AttributeType object (8)',2,'[{\"changed\": {\"fields\": [\"Name\", \"Desc\"]}}]',7,1),(11,'2024-07-05 03:11:09.895190','2','Entity object (2)',1,'[{\"added\": {}}]',8,1),(12,'2024-07-05 03:14:06.583284','3','Entity object (3)',1,'[{\"added\": {}}]',8,1),(13,'2024-07-05 03:15:32.149557','4','Entity object (4)',1,'[{\"added\": {}}]',8,1),(14,'2024-07-05 03:19:54.662433','1','Object object (1)',1,'[{\"added\": {}}]',12,1),(15,'2024-07-05 23:43:13.756652','2','Object object (2)',1,'[{\"added\": {}}]',12,1),(16,'2024-07-05 23:43:30.802995','3','Object object (3)',1,'[{\"added\": {}}]',12,1),(17,'2024-07-05 23:43:51.787901','4','Object object (4)',1,'[{\"added\": {}}]',12,1),(18,'2024-07-05 23:50:44.142018','8','AttributeType object (8)',3,'',7,1),(19,'2024-07-05 23:58:37.974393','2','Attribute object (2)',1,'[{\"added\": {}}]',9,1),(20,'2024-07-05 23:59:55.327312','3','Attribute object (3)',1,'[{\"added\": {}}]',9,1),(21,'2024-07-06 00:01:58.231528','4','Attribute object (4)',1,'[{\"added\": {}}]',9,1),(22,'2024-07-06 00:03:49.122828','5','Attribute object (5)',1,'[{\"added\": {}}]',9,1),(23,'2024-07-06 00:06:31.832890','6','Attribute object (6)',1,'[{\"added\": {}}]',9,1),(24,'2024-07-06 00:07:01.798381','7','Attribute object (7)',1,'[{\"added\": {}}]',9,1),(25,'2024-07-06 00:09:33.963807','2','Attribute object (2)',3,'',9,1),(26,'2024-07-06 00:10:01.642499','1','AttributeType object (1)',2,'[]',7,1),(27,'2024-07-06 00:10:11.618858','8','Attribute object (8)',1,'[{\"added\": {}}]',9,1),(28,'2024-07-06 00:10:47.090740','5','Entity object (5)',1,'[{\"added\": {}}]',8,1),(29,'2024-07-06 00:12:12.705253','6','Entity object (6)',1,'[{\"added\": {}}]',8,1),(30,'2024-07-06 00:17:08.105672','1','EntityField object (1)',1,'[{\"added\": {}}]',10,1),(31,'2024-07-06 00:17:22.194964','2','EntityField object (2)',1,'[{\"added\": {}}]',10,1),(32,'2024-07-06 00:32:39.569052','9','Attribute object (9)',1,'[{\"added\": {}}]',9,1),(33,'2024-07-06 00:35:29.457262','10','Attribute object (10)',1,'[{\"added\": {}}]',9,1),(34,'2024-07-06 00:36:09.468962','7','Entity object (7)',1,'[{\"added\": {}}]',8,1),(35,'2024-07-06 00:57:14.539119','8','Entity object (8)',1,'[{\"added\": {}}]',8,1);
/*!40000 ALTER TABLE `django_admin_log` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-07-07 13:29:21
