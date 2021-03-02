-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 21-02-2021 a las 20:21:21
-- Versión del servidor: 5.7.31
-- Versión de PHP: 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `fast_food_v4`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `orden`
--

DROP TABLE IF EXISTS `orden`;
CREATE TABLE IF NOT EXISTS `orden` (
  `id_orden` int(10) NOT NULL AUTO_INCREMENT,
  `total_pagar` decimal(8,2) DEFAULT NULL,
  `especificacion_orden` varchar(500) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_orden`)
) ENGINE=MyISAM AUTO_INCREMENT=21 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `orden`
--

INSERT INTO `orden` (`id_orden`, `total_pagar`, `especificacion_orden`, `created_at`, `updated_at`) VALUES
(1, '130.00', 'todo sin mayonesa', '2021-02-21 19:22:25', '2021-02-21 12:22:25'),
(2, '150.00', 'con todo', '2021-02-21 19:22:25', '2021-02-21 12:22:25'),
(3, '210.00', 'jumbo sin mayonesa', '2021-02-21 19:22:25', '2021-02-21 12:22:25'),
(4, '30.00', '-', '2021-02-21 19:22:25', '2021-02-21 12:22:25'),
(5, '30.00', 'sin lechuga', '2021-02-21 19:22:25', '2021-02-21 12:22:25'),
(6, '30.00', '-', '2021-02-21 19:22:25', '2021-02-21 12:22:25'),
(7, '295.00', 'una hamburguesa sin verdura', '2021-02-21 19:22:25', '2021-02-21 12:22:25'),
(8, '145.00', 'salsa bbq, dogo sin mayonesa', '2021-02-21 19:22:25', '2021-02-21 12:22:25'),
(9, '210.00', '-', '2021-02-21 19:22:25', '2021-02-21 12:22:25'),
(10, '60.00', '', '2021-02-21 19:22:25', '2021-02-21 12:22:25'),
(11, '124.00', '-', '2021-02-21 19:22:25', '2021-02-21 12:22:25'),
(12, '145.00', '-', '2021-02-21 19:22:25', '2021-02-21 12:22:25'),
(13, '55.00', 'bebida sin hielo', '2021-02-21 19:22:25', '2021-02-21 12:22:25'),
(14, '50.00', '-', '2021-02-21 19:22:25', '2021-02-21 12:22:25'),
(15, '60.00', 'sin lechuga', '2021-02-21 19:22:25', '2021-02-21 12:22:25'),
(16, '30.00', 'con todo', '2021-02-21 19:22:25', '2021-02-21 12:22:25'),
(17, '30.00', 'con todo', '2021-02-21 19:22:25', '2021-02-21 12:22:25'),
(18, '160.00', 'dogos sin mayonesa', '2021-02-21 19:22:25', '2021-02-21 12:22:25'),
(19, '170.00', '-', '2021-02-21 19:22:25', '2021-02-21 12:22:25'),
(20, '190.00', '-', '2021-02-21 19:22:25', '2021-02-21 12:22:25');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `partida`
--

DROP TABLE IF EXISTS `partida`;
CREATE TABLE IF NOT EXISTS `partida` (
  `id_partida` int(10) NOT NULL AUTO_INCREMENT,
  `id_producto` int(10) NOT NULL,
  `cantidad` int(10) NOT NULL,
  `importe` decimal(6,2) NOT NULL,
  `id_orden` int(10) NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_partida`),
  KEY `id_orden` (`id_orden`),
  KEY `id_producto` (`id_producto`)
) ENGINE=MyISAM AUTO_INCREMENT=42 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `partida`
--

INSERT INTO `partida` (`id_partida`, `id_producto`, `cantidad`, `importe`, `id_orden`, `created_at`, `updated_at`) VALUES
(1, 7, 2, '60.00', 1, '2021-02-21 19:22:25', '2021-02-21 12:22:25'),
(2, 33, 2, '70.00', 1, '2021-02-21 19:22:25', '2021-02-21 12:22:25'),
(3, 7, 5, '150.00', 2, '2021-02-21 19:22:25', '2021-02-21 12:22:25'),
(4, 7, 3, '90.00', 3, '2021-02-21 19:22:25', '2021-02-21 12:22:25'),
(5, 9, 1, '40.00', 3, '2021-02-21 19:22:25', '2021-02-21 12:22:25'),
(6, 16, 4, '80.00', 3, '2021-02-21 19:22:25', '2021-02-21 12:22:25'),
(7, 7, 1, '30.00', 4, '2021-02-21 19:22:25', '2021-02-21 12:22:25'),
(8, 7, 1, '30.00', 5, '2021-02-21 19:22:25', '2021-02-21 12:22:25'),
(9, 7, 1, '30.00', 6, '2021-02-21 19:22:25', '2021-02-21 12:22:25'),
(10, 1, 2, '170.00', 7, '2021-02-21 19:22:25', '2021-02-21 12:22:25'),
(11, 33, 1, '35.00', 7, '2021-02-21 19:22:25', '2021-02-21 12:22:25'),
(12, 34, 1, '40.00', 7, '2021-02-21 19:22:25', '2021-02-21 12:22:25'),
(13, 18, 2, '50.00', 7, '2021-02-21 19:22:25', '2021-02-21 12:22:25'),
(14, 32, 1, '85.00', 8, '2021-02-21 19:22:25', '2021-02-21 12:22:25'),
(15, 7, 1, '30.00', 8, '2021-02-21 19:22:25', '2021-02-21 12:22:25'),
(16, 17, 1, '30.00', 8, '2021-02-21 19:22:25', '2021-02-21 12:22:25'),
(17, 7, 5, '150.00', 9, '2021-02-21 19:22:25', '2021-02-21 12:22:25'),
(18, 17, 2, '60.00', 9, '2021-02-21 19:22:25', '2021-02-21 12:22:25'),
(19, 7, 2, '60.00', 10, '2021-02-21 19:22:25', '2021-02-21 12:22:25'),
(20, 10, 1, '99.00', 11, '2021-02-21 19:22:25', '2021-02-21 12:22:25'),
(21, 22, 1, '25.00', 11, '2021-02-21 19:22:25', '2021-02-21 12:22:25'),
(22, 30, 1, '55.00', 12, '2021-02-21 19:22:25', '2021-02-21 12:22:25'),
(23, 7, 2, '60.00', 12, '2021-02-21 19:22:25', '2021-02-21 12:22:25'),
(24, 17, 1, '30.00', 12, '2021-02-21 19:22:25', '2021-02-21 12:22:25'),
(25, 7, 1, '30.00', 13, '2021-02-21 19:22:25', '2021-02-21 12:22:25'),
(26, 22, 1, '25.00', 13, '2021-02-21 19:22:25', '2021-02-21 12:22:25'),
(27, 7, 1, '30.00', 14, '2021-02-21 19:22:25', '2021-02-21 12:22:25'),
(28, 16, 1, '20.00', 14, '2021-02-21 19:22:25', '2021-02-21 12:22:25'),
(29, 9, 1, '40.00', 15, '2021-02-21 19:22:25', '2021-02-21 12:22:25'),
(30, 16, 1, '20.00', 15, '2021-02-21 19:22:25', '2021-02-21 12:22:25'),
(31, 7, 1, '30.00', 16, '2021-02-21 19:22:25', '2021-02-21 12:22:25'),
(32, 7, 1, '30.00', 17, '2021-02-21 19:22:25', '2021-02-21 12:22:25'),
(33, 7, 2, '60.00', 18, '2021-02-21 19:22:25', '2021-02-21 12:22:25'),
(34, 33, 2, '70.00', 18, '2021-02-21 19:22:25', '2021-02-21 12:22:25'),
(35, 17, 1, '30.00', 18, '2021-02-21 19:22:25', '2021-02-21 12:22:25'),
(36, 7, 2, '60.00', 19, '2021-02-21 19:22:25', '2021-02-21 12:22:25'),
(37, 33, 2, '70.00', 19, '2021-02-21 19:22:25', '2021-02-21 12:22:25'),
(38, 16, 2, '40.00', 19, '2021-02-21 19:22:25', '2021-02-21 12:22:25'),
(39, 7, 2, '60.00', 20, '2021-02-21 19:22:25', '2021-02-21 12:22:25'),
(40, 34, 2, '100.00', 20, '2021-02-21 19:22:25', '2021-02-21 12:22:25'),
(41, 17, 1, '30.00', 20, '2021-02-21 19:22:25', '2021-02-21 12:22:25');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `producto`
--

DROP TABLE IF EXISTS `producto`;
CREATE TABLE IF NOT EXISTS `producto` (
  `id_producto` int(10) NOT NULL AUTO_INCREMENT,
  `nombre_producto` varchar(100) NOT NULL,
  `precio_producto` decimal(6,2) NOT NULL,
  `id_tc` int(10) NOT NULL,
  `url` varchar(500) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_producto`),
  UNIQUE KEY `nombre_producto` (`nombre_producto`),
  KEY `id_tc` (`id_tc`)
) ENGINE=MyISAM AUTO_INCREMENT=47 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `producto`
--

INSERT INTO `producto` (`id_producto`, `nombre_producto`, `precio_producto`, `id_tc`, `url`, `created_at`, `updated_at`) VALUES
(1, 'H. Clasica', '85.00', 1, 'https://cdn.kiwilimon.com/recetaimagen/23667/th5-640x426-17028.jpg', '2021-02-21 19:22:25', '2021-02-21 12:22:25'),
(2, 'H. Portobello', '95.00', 1, 'https://sifu.unileversolutions.com/image/es-CR/recipe-topvisual/2/1260-709/falsa-hamburguesa-de-portobello-50349552.jpg', '2021-02-21 19:22:25', '2021-02-21 12:22:25'),
(3, 'H. Boneless', '95.00', 1, 'https://taquisos.com/wp-content/uploads/2020/04/hamburguesaBoneless-1.jpg', '2021-02-21 19:22:25', '2021-02-21 12:22:25'),
(4, 'H. Hass', '95.00', 1, 'https://www.superama.com.mx/views/micrositio/recetas/images/diadelpadre/hamburguesateriyaki/Web_fotoreceta.jpg', '2021-02-21 19:22:25', '2021-02-21 12:22:25'),
(5, 'H. Pollo', '85.00', 1, 'https://dam.cocinafacil.com.mx/wp-content/uploads/2019/05/hamburguesa-pollo-frito.png', '2021-02-21 19:22:25', '2021-02-21 12:22:25'),
(6, 'H. Vaquera', '95.00', 1, 'https://toromccoy.com/bogota/wp-content/uploads/2018/01/VAQUERA.png', '2021-02-21 19:22:25', '2021-02-21 12:22:25'),
(7, 'D. Sencillo', '30.00', 2, 'https://cdn.kiwilimon.com/recetaimagen/239/th5-640x640-15057.jpg', '2021-02-21 19:22:25', '2021-02-21 12:22:25'),
(8, 'D. Doble Winnie', '35.00', 2, 'https://comps.canstockphoto.es/embutido-alimento-doble-vegetales-almacen-de-fotos_csp70292234.jpg', '2021-02-21 19:22:25', '2021-02-21 12:22:25'),
(9, 'D. Jumbo', '40.00', 2, 'https://images-na.ssl-images-amazon.com/images/I/61jCmZ4eIZL._SL1000_.jpg', '2021-02-21 19:22:25', '2021-02-21 12:22:25'),
(10, 'D. QueDogo', '99.00', 2, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoV4h5SGN9xP6aG_vzx2DH3v_-jLnOR0fkdg&usqp=CAU', '2021-02-21 19:22:25', '2021-02-21 12:22:25'),
(11, 'D. Dogo Boneless', '50.00', 2, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSMjX-R9Ee1Td5ruleictDUJqjitwd8CbuAw&usqp=CAU', '2021-02-21 19:22:25', '2021-02-21 12:22:25'),
(12, 'D. 3 Quesos', '50.00', 2, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZfpAkG-LuqJSxuzS8Ke26Ptgc3WfmTwE7sw&usqp=CAU', '2021-02-21 19:22:25', '2021-02-21 12:22:25'),
(13, 'D. Pizza Dogo', '50.00', 2, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8J2lzvJlNKEly9o0Fki75nhNh67rRbxdPGw&usqp=CAU', '2021-02-21 19:22:25', '2021-02-21 12:22:25'),
(14, 'D. Vaquero', '50.00', 2, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0eNh1NM_jp28LwsBQFPPXRn0ms4MxvA6o-g&usqp=CAU', '2021-02-21 19:22:25', '2021-02-21 12:22:25'),
(15, 'D. Hass', '50.00', 2, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD7IMVwOxE_GUwkuBKRM0GTVK9cYaM8eLmew&usqp=CAU', '2021-02-21 19:22:25', '2021-02-21 12:22:25'),
(16, 'B. Coca Cola chica', '20.00', 3, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVKVDvJh-N08U_cCu7qi9T9j49jcjV20byeQ&usqp=CAU', '2021-02-21 19:22:25', '2021-02-21 12:22:25'),
(17, 'B. Coca Cola grande', '30.00', 3, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKnDyx_1-CXKgv8KD9CP4o8kvso76KO7J-Ww&usqp=CAU', '2021-02-21 19:22:25', '2021-02-21 12:22:25'),
(18, 'B. Limonada Mineral chica', '25.00', 3, 'https://www.mycolombianrecipes.com/wp-content/uploads/2014/06/como-hacer-limonada-de-pina.jpg', '2021-02-21 19:22:25', '2021-02-21 12:22:25'),
(19, 'B. Limonada Mineral grande', '35.00', 3, 'https://www.mycolombianrecipes.com/wp-content/uploads/2014/06/como-hacer-limonada-de-pina.jpg', '2021-02-21 19:22:25', '2021-02-21 12:22:25'),
(20, 'B. Limonada Fresa chica', '25.00', 3, 'https://unaricareceta.com/wp-content/uploads/2020/06/licuado-de-fresas.jpg', '2021-02-21 19:22:25', '2021-02-21 12:22:25'),
(21, 'B. Limonada Fresa grande', '40.00', 3, 'https://unaricareceta.com/wp-content/uploads/2020/06/licuado-de-fresas.jpg', '2021-02-21 19:22:25', '2021-02-21 12:22:25'),
(22, 'B. Uvola chica', '25.00', 3, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw7n7fkGPEDQMDTOxGDtLVT34Rtavf_iafNw&usqp=CAU', '2021-02-21 19:22:25', '2021-02-21 12:22:25'),
(23, 'B. Uvola grande', '40.00', 3, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw7n7fkGPEDQMDTOxGDtLVT34Rtavf_iafNw&usqp=CAU', '2021-02-21 19:22:25', '2021-02-21 12:22:25'),
(24, 'B. Jamaica chica', '20.00', 3, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnWs25Vcis2qNBvJmHm3EmuFmJZYwm7oHuGw&usqp=CAU', '2021-02-21 19:22:25', '2021-02-21 12:22:25'),
(25, 'B. Jamaica grande', '30.00', 3, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnWs25Vcis2qNBvJmHm3EmuFmJZYwm7oHuGw&usqp=CAU', '2021-02-21 19:22:25', '2021-02-21 12:22:25'),
(26, 'B. Horchata chica', '20.00', 3, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYkam42jR-7nnSpf1xV0mQ9suUpWEzQ2MIsQ&usqp=CAU', '2021-02-21 19:22:25', '2021-02-21 12:22:25'),
(27, 'B. Horchata grande', '30.00', 3, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYkam42jR-7nnSpf1xV0mQ9suUpWEzQ2MIsQ&usqp=CAU', '2021-02-21 19:22:25', '2021-02-21 12:22:25'),
(28, 'E. QueCombo', '150.00', 4, 'https://www.ecestaticos.com/image/clipping/1200/675/7616cc0f10fe4cdf992130720ce3e7fe/las-fast-food-mas-caloricas-que-deberias-evitar.jpg', '2021-02-21 19:22:25', '2021-02-21 12:22:25'),
(29, 'E. Salchipapas con boneless', '85.00', 4, 'https://scontent.fhmo2-1.fna.fbcdn.net/v/t1.0-9/135898623_3627194920692614_2291045142898445217_n.jpg?_nc_cat=111&ccb=3&_nc_sid=730e14&_nc_ohc=3d3lsBM-i5oAX-_Rqr8&_nc_ht=scontent.fhmo2-1.fna&oh=73c58035d4ea585f21a58fb93df7c80c&oe=6052E074', '2021-02-21 19:22:25', '2021-02-21 12:22:25'),
(30, 'E. Salchipapas', '55.00', 4, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTd8VHFZ6eZv1XiuPr8qNOXbZvtb_Z_nC3Kg&usqp=CAU', '2021-02-21 19:22:25', '2021-02-21 12:22:25'),
(31, 'E. Papas Sonora', '85.00', 4, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3Rs7JOQYC3oQkzzYhiXM0c9hW3rhxwlP7ZQ&usqp=CAU', '2021-02-21 19:22:25', '2021-02-21 12:22:25'),
(32, 'E. Boneless', '85.00', 4, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnfew6fQpsq2gJ-mujGNnhPMIM6D0P6u8c3g&usqp=CAU', '2021-02-21 19:22:25', '2021-02-21 12:22:25'),
(33, 'E. Orden de Papas a la francesa', '35.00', 4, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3Rs7JOQYC3oQkzzYhiXM0c9hW3rhxwlP7ZQ&usqp=CAU', '2021-02-21 19:22:25', '2021-02-21 12:22:25'),
(34, 'E. Orden de Papas sazonadas', '50.00', 4, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3Rs7JOQYC3oQkzzYhiXM0c9hW3rhxwlP7ZQ&usqp=CAU', '2021-02-21 19:22:25', '2021-02-21 12:22:25'),
(35, 'P. Burro Tradicional medio', '100.00', 5, 'https://scontent.fhmo2-1.fna.fbcdn.net/v/t1.0-9/116092937_3171712179574226_5775134417571537783_n.jpg?_nc_cat=100&ccb=3&_nc_sid=8bfeb9&_nc_ohc=fgQEG95YrIUAX92DFlv&_nc_ht=scontent.fhmo2-1.fna&oh=6d22f4f9afb1f50341eae5bf05baa192&oe=6054142C', '2021-02-21 19:22:25', '2021-02-21 12:22:25'),
(36, 'P. Burro Tradicional entero', '120.00', 5, 'https://scontent.fhmo2-1.fna.fbcdn.net/v/t1.0-9/116092937_3171712179574226_5775134417571537783_n.jpg?_nc_cat=100&ccb=3&_nc_sid=8bfeb9&_nc_ohc=fgQEG95YrIUAX92DFlv&_nc_ht=scontent.fhmo2-1.fna&oh=6d22f4f9afb1f50341eae5bf05baa192&oe=6054142C', '2021-02-21 19:22:25', '2021-02-21 12:22:25'),
(37, 'P. Burro Italiano medio', '115.00', 5, 'https://scontent.fhmo2-1.fna.fbcdn.net/v/t1.0-9/116092937_3171712179574226_5775134417571537783_n.jpg?_nc_cat=100&ccb=3&_nc_sid=8bfeb9&_nc_ohc=fgQEG95YrIUAX92DFlv&_nc_ht=scontent.fhmo2-1.fna&oh=6d22f4f9afb1f50341eae5bf05baa192&oe=6054142C', '2021-02-21 19:22:25', '2021-02-21 12:22:25'),
(38, 'P. Burro Italiano entero', '135.00', 5, 'https://scontent.fhmo2-1.fna.fbcdn.net/v/t1.0-9/116092937_3171712179574226_5775134417571537783_n.jpg?_nc_cat=100&ccb=3&_nc_sid=8bfeb9&_nc_ohc=fgQEG95YrIUAX92DFlv&_nc_ht=scontent.fhmo2-1.fna&oh=6d22f4f9afb1f50341eae5bf05baa192&oe=6054142C', '2021-02-21 19:22:25', '2021-02-21 12:22:25'),
(39, 'P. Burro Sonora medio', '115.00', 5, 'https://scontent.fhmo2-1.fna.fbcdn.net/v/t1.0-9/136115571_3627195337359239_1610418731385488358_n.jpg?_nc_cat=101&ccb=3&_nc_sid=730e14&_nc_ohc=Q2xHcc0kbqUAX-7NOZO&_nc_ht=scontent.fhmo2-1.fna&oh=9b9fee07a6ddc25c7407668387d57618&oe=6053D55C', '2021-02-21 19:22:25', '2021-02-21 12:22:25'),
(40, 'P. Burro Sonora entero', '135.00', 5, 'https://scontent.fhmo2-1.fna.fbcdn.net/v/t1.0-9/136115571_3627195337359239_1610418731385488358_n.jpg?_nc_cat=101&ccb=3&_nc_sid=730e14&_nc_ohc=Q2xHcc0kbqUAX-7NOZO&_nc_ht=scontent.fhmo2-1.fna&oh=9b9fee07a6ddc25c7407668387d57618&oe=6053D55C', '2021-02-21 19:22:25', '2021-02-21 12:22:25'),
(41, 'P. Burro Boneless medio', '105.00', 5, 'https://scontent.fhmo2-1.fna.fbcdn.net/v/t1.0-9/136115571_3627195337359239_1610418731385488358_n.jpg?_nc_cat=101&ccb=3&_nc_sid=730e14&_nc_ohc=Q2xHcc0kbqUAX-7NOZO&_nc_ht=scontent.fhmo2-1.fna&oh=9b9fee07a6ddc25c7407668387d57618&oe=6053D55C', '2021-02-21 19:22:25', '2021-02-21 12:22:25'),
(42, 'P. Burro Boneless entero', '125.00', 5, 'https://scontent.fhmo2-1.fna.fbcdn.net/v/t1.0-9/136115571_3627195337359239_1610418731385488358_n.jpg?_nc_cat=101&ccb=3&_nc_sid=730e14&_nc_ohc=Q2xHcc0kbqUAX-7NOZO&_nc_ht=scontent.fhmo2-1.fna&oh=9b9fee07a6ddc25c7407668387d57618&oe=6053D55C', '2021-02-21 19:22:25', '2021-02-21 12:22:25'),
(43, 'P. Burro Philadelphia medio', '115.00', 5, 'https://scontent.fhmo2-1.fna.fbcdn.net/v/t1.0-9/136115571_3627195337359239_1610418731385488358_n.jpg?_nc_cat=101&ccb=3&_nc_sid=730e14&_nc_ohc=Q2xHcc0kbqUAX-7NOZO&_nc_ht=scontent.fhmo2-1.fna&oh=9b9fee07a6ddc25c7407668387d57618&oe=6053D55C', '2021-02-21 19:22:25', '2021-02-21 12:22:25'),
(44, 'P. Burro Philadelphia entero', '135.00', 5, 'https://scontent.fhmo2-1.fna.fbcdn.net/v/t1.0-9/136115571_3627195337359239_1610418731385488358_n.jpg?_nc_cat=101&ccb=3&_nc_sid=730e14&_nc_ohc=Q2xHcc0kbqUAX-7NOZO&_nc_ht=scontent.fhmo2-1.fna&oh=9b9fee07a6ddc25c7407668387d57618&oe=6053D55C', '2021-02-21 19:22:25', '2021-02-21 12:22:25'),
(45, 'P. Burro Ahogado medio', '105.00', 5, 'https://scontent.fhmo2-1.fna.fbcdn.net/v/t1.0-9/116092937_3171712179574226_5775134417571537783_n.jpg?_nc_cat=100&ccb=3&_nc_sid=8bfeb9&_nc_ohc=fgQEG95YrIUAX92DFlv&_nc_ht=scontent.fhmo2-1.fna&oh=6d22f4f9afb1f50341eae5bf05baa192&oe=6054142C', '2021-02-21 19:22:25', '2021-02-21 12:22:25'),
(46, 'P. Burro Ahogado entero', '125.00', 5, 'https://scontent.fhmo2-1.fna.fbcdn.net/v/t1.0-9/116092937_3171712179574226_5775134417571537783_n.jpg?_nc_cat=100&ccb=3&_nc_sid=8bfeb9&_nc_ohc=fgQEG95YrIUAX92DFlv&_nc_ht=scontent.fhmo2-1.fna&oh=6d22f4f9afb1f50341eae5bf05baa192&oe=6054142C', '2021-02-21 19:22:25', '2021-02-21 12:22:25');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo_comida`
--

DROP TABLE IF EXISTS `tipo_comida`;
CREATE TABLE IF NOT EXISTS `tipo_comida` (
  `id_tc` int(10) NOT NULL AUTO_INCREMENT,
  `nombre_tc` varchar(20) NOT NULL,
  PRIMARY KEY (`id_tc`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `tipo_comida`
--

INSERT INTO `tipo_comida` (`id_tc`, `nombre_tc`) VALUES
(1, 'hamburguesa'),
(2, 'dogo'),
(3, 'bebida'),
(4, 'especialidad'),
(5, 'percherones'),
(6, 'hamburguesa'),
(7, 'dogo'),
(8, 'bebida'),
(9, 'especialidad'),
(10, 'percherones');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
