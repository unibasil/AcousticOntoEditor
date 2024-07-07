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
-- Table structure for table `editor_objectfieldvalue`
--

DROP TABLE IF EXISTS `editor_objectfieldvalue`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `editor_objectfieldvalue` (
  `id` int NOT NULL AUTO_INCREMENT,
  `value` longtext NOT NULL,
  `id_field_id` int NOT NULL,
  `id_object_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `editor_objectfieldva_id_field_id_ce58e247_fk_editor_en` (`id_field_id`),
  KEY `editor_objectfieldva_id_object_id_c48791a5_fk_editor_ob` (`id_object_id`),
  CONSTRAINT `editor_objectfieldva_id_field_id_ce58e247_fk_editor_en` FOREIGN KEY (`id_field_id`) REFERENCES `editor_entityfield` (`id`),
  CONSTRAINT `editor_objectfieldva_id_object_id_c48791a5_fk_editor_ob` FOREIGN KEY (`id_object_id`) REFERENCES `editor_object` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `editor_objectfieldvalue`
--

LOCK TABLES `editor_objectfieldvalue` WRITE;
/*!40000 ALTER TABLE `editor_objectfieldvalue` DISABLE KEYS */;
/*!40000 ALTER TABLE `editor_objectfieldvalue` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-07-07 13:29:23
