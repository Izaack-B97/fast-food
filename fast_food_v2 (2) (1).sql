-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 07-05-2021 a las 02:33:08
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
-- Base de datos: `fast_food_v2`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `almacen`
--

DROP TABLE IF EXISTS `almacen`;
CREATE TABLE IF NOT EXISTS `almacen` (
  `id_almacen` int(10) NOT NULL AUTO_INCREMENT,
  `producto` varchar(50) NOT NULL,
  `tipo_producto` varchar(50) DEFAULT NULL,
  `cantidad` int(10) NOT NULL,
  `id_sucursal` int(10) DEFAULT NULL,
  `url` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id_almacen`),
  KEY `id_sucursal` (`id_sucursal`)
) ENGINE=MyISAM AUTO_INCREMENT=16 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `almacen`
--

INSERT INTO `almacen` (`id_almacen`, `producto`, `tipo_producto`, `cantidad`, `id_sucursal`, `url`) VALUES
(1, 'Pan Hot-Dog', 'Pan', 100, 1, 'https://image.freepik.com/foto-gratis/pan-hot-dog-aislado-sobre-fondo-blanco_188078-776.jpg'),
(2, 'Aguacate', 'Verduras', 50, 1, 'https://www.frutasmontosa.com/es/wp-content/uploads/2018/01/810x540_aguacate_v2.jpg'),
(3, 'Tomate', 'Verduras', 40, 1, 'https://agroactivocol.com/wp-content/uploads/2020/07/Tomate-Lancero.jpg'),
(4, 'Salchicha rosarito', 'Carne', 150, 1, 'https://i1.wp.com/tuminisuper.mx/wp-content/uploads/2020/11/SAL30.jpg?fit=600%2C600&ssl=1'),
(5, 'Salchicha jumbo', 'Carne', 30, 1, 'https://cdn.shopify.com/s/files/1/0485/4405/5445/products/380_600x600_crop_center.jpg?v=1602014626'),
(6, 'Pan Hamburguesa', 'Pan', 60, 10, 'https://t2.uc.ltmcdn.com/images/8/3/6/como_hacer_pan_de_hamburguesa_32638_600.jpg'),
(7, 'Carne Hamburguesa', 'Carne', 60, 10, 'https://jameaperu.com/wp-content/uploads/2020/10/hamburguesa-casera_700x465.jpg'),
(8, 'Papas francesas', 'Papa', 200, 6, 'https://www.semana.com/resizer/ANxE5WGqJwTg8p3ELkZGFj7xy5M=/1200x675/filters:format(jpg):quality(70)//cloudfront-us-east-1.images.arcpublishing.com/semana/5IVPUHTNIVBDDK7EGPOYUUFQU4.jpg'),
(9, 'Pan Hot-Dog', 'Pan', 30, 8, 'https://image.freepik.com/foto-gratis/pan-hot-dog-aislado-sobre-fondo-blanco_188078-776.jpg'),
(10, 'Salchicha rosarito', 'Carne', 20, 6, 'https://i1.wp.com/tuminisuper.mx/wp-content/uploads/2020/11/SAL30.jpg?fit=600%2C600&ssl=1');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `empleado`
--

DROP TABLE IF EXISTS `empleado`;
CREATE TABLE IF NOT EXISTS `empleado` (
  `id_empleado` int(10) NOT NULL AUTO_INCREMENT,
  `nombre_empleado` varchar(80) NOT NULL,
  `celular` varchar(12) NOT NULL,
  `sexo` varchar(10) DEFAULT NULL,
  `edad` int(3) DEFAULT NULL,
  `puesto` varchar(50) NOT NULL,
  `id_equipo` int(10) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `entrada` time DEFAULT NULL,
  `salida` time DEFAULT NULL,
  `correo` varchar(50) DEFAULT NULL,
  `url` varchar(500) DEFAULT NULL,
  `id_sucursal` int(10) NOT NULL,
  PRIMARY KEY (`id_empleado`),
  KEY `id_equipo` (`id_equipo`),
  KEY `id_sucursal` (`id_sucursal`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `empleado`
--

INSERT INTO `empleado` (`id_empleado`, `nombre_empleado`, `celular`, `sexo`, `edad`, `puesto`, `id_equipo`, `created_at`, `updated_at`, `entrada`, `salida`, `correo`, `url`, `id_sucursal`) VALUES
(1, 'Juan Carlos de la Torre', '6628145949', 'Hombre', 35, 'Cajero', 1, '2021-02-20 08:47:56', '2021-02-19 18:47:56', '18:00:00', '02:00:00', 'juancarlost@gmail.com', 'https://karlacsphotography.com/wp-content/uploads/2020/04/JoseAndresRivera-233x300.jpg?_t=1586314915', 1),
(2, 'Pancracia de los Angeles', '6623575846', 'Mujer', 30, 'Cajero', 7, '2021-02-20 08:47:56', '2021-02-19 18:47:56', '18:00:00', '01:00:00', 'pancraciadeangel@outlook.com', 'https://fotos-id.com/wp-content/uploads/2016/03/foto-tamano-infantil.jpg?6ad25c&6ad25c', 8),
(3, 'Luis Fernando Ochoa', '6622453575', 'Hombre', 25, 'Cocinero', 2, '2021-02-20 08:47:56', '2021-02-19 18:47:56', '20:00:00', '01:00:00', 'luis8a@gmail.com', 'https://media.istockphoto.com/photos/face-of-businessman-against-white-background-picture-id913062404?k=6&m=913062404&s=612x612&w=0&h=nlJJOMI8TXBtZ7QCF8jhiN_4DMCOo9mbCAhFpQFkxso=', 10),
(4, 'Francisco de la Cruz', '6621563245', 'Hombre', 22, 'Cocinero', 4, '2021-02-20 08:47:56', '2021-02-19 18:47:56', '19:00:00', '02:00:00', 'panchitocruz@gmail.com', 'https://media.istockphoto.com/photos/portrait-of-an-african-american-man-with-glasses-picture-id502581380?k=6&m=502581380&s=612x612&w=0&h=574qb-a-HNWkmDqG0t4S14YnroyYARd4rAngvlj-IAk=', 1),
(5, 'Maria de los Angeles Cardenas', '6627485976', 'Mujer', 28, 'Cocinero', 2, '2021-02-20 08:47:56', '2021-02-19 18:47:56', '18:00:00', '00:00:00', 'cardenasmaria@outlook.com', 'https://media.istockphoto.com/photos/serious-hispanic-woman-picture-id180739975?k=6&m=180739975&s=612x612&w=0&h=y6J62wQcXVEehPJiCrVv4hQpbQQb3FuYfW7aawrOAJg=', 10),
(6, 'Edi Uriel Maldonado', '6621450320', 'Hombre', 21, 'Cajero', 6, '2021-02-20 08:47:56', '2021-02-19 18:47:56', '18:00:00', '03:00:00', 'edicraft45@yahoo.com', 'https://media.istockphoto.com/photos/face-of-indian-man-against-white-background-picture-id912896880?k=6&m=912896880&s=612x612&w=0&h=r0Zczl53ehKfeFx4CBfMQots5g5524auYVqByYiM35w=', 6),
(7, 'Paul David Yucatan', '6622510320', 'Hombre', 26, 'Cocinero', 8, '2021-02-20 08:47:56', '2021-02-19 18:47:56', '19:00:00', '23:00:00', 'pauldelayucatana@yahoo.com', 'https://media.istockphoto.com/photos/serious-man-looking-at-the-camera-picture-id1020710376?k=6&m=1020710376&s=612x612&w=0&h=q7NTARSvbIkN8a3PYEY304j4G7gH1-JqnLSzX_ERWuw=', 1),
(8, 'Elias Rosarito Rosales', '6623545659', 'Hombre', 40, 'Cajero', 8, '2021-02-20 08:47:56', '2021-02-19 18:47:56', '20:00:00', '03:00:00', 'eliasrosamelo@yahoo.com', 'https://media.istockphoto.com/photos/portrait-of-a-german-businessman-with-beard-picture-id480286744?k=6&m=480286744&s=612x612&w=0&h=eq7WUAL9bNV0PJF_XArGI-l6s3jk5WWkaDUmvnY-Fc4=', 1),
(9, 'Armando Esteban Quito', '6621264589', 'Hombre', 23, 'Cajero', 7, '2021-02-20 08:47:56', '2021-02-19 18:47:56', '19:00:00', '02:00:00', 'yasearmoelbanquito@outlook.com', 'https://media.istockphoto.com/photos/young-man-looking-at-the-camera-picture-id955157076?k=6&m=955157076&s=612x612&w=0&h=gZBEZD-DXDlOlvPClbBnW4CPhWRcwTzp4CC3BHxK4Sg=', 8),
(10, 'Solomeo Paredes', '6629563669', 'Hombre', 26, 'Cocinero', 10, '2021-02-20 08:47:56', '2021-02-19 18:47:56', '19:00:00', '00:00:00', 'asiesellameo@gmail.com', 'https://media.istockphoto.com/photos/passport-picture-of-a-laughing-guy-in-a-grey-shirt-picture-id471015650?k=6&m=471015650&s=612x612&w=0&h=YCuPt1V-7LLhbIGPkIdRAknKPvtFWRw_6lZpzNmNnz0=', 7);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `equipo`
--

DROP TABLE IF EXISTS `equipo`;
CREATE TABLE IF NOT EXISTS `equipo` (
  `id_equipo` int(10) NOT NULL AUTO_INCREMENT,
  `descripcion_equipo` varchar(300) DEFAULT NULL,
  `id_sucursal` int(10) NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_equipo`),
  KEY `id_sucursal` (`id_sucursal`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `equipo`
--

INSERT INTO `equipo` (`id_equipo`, `descripcion_equipo`, `id_sucursal`, `created_at`, `updated_at`) VALUES
(1, 'Equipo de ventas', 1, '2021-02-20 08:47:56', '2021-02-19 18:47:56'),
(2, 'Equipo de las papas', 1, '2021-02-20 08:47:56', '2021-02-19 18:47:56'),
(3, 'Equipo de caja', 1, '2021-02-20 08:47:56', '2021-02-19 18:47:56'),
(4, 'Equipo Dogo', 1, '2021-02-20 08:47:56', '2021-02-19 18:47:56'),
(5, 'Equipo Hamburguesa', 6, '2021-02-20 08:47:56', '2021-02-19 18:47:56'),
(6, 'Equipo de Limpieza', 6, '2021-02-20 08:47:56', '2021-02-19 18:47:56'),
(7, 'Equipo de caja 2', 8, '2021-02-20 08:47:56', '2021-02-19 18:47:56'),
(8, 'Equipo de Limpieza 2', 1, '2021-02-20 08:47:56', '2021-02-19 18:47:56'),
(9, 'Equipo Hamburguesa 2', 8, '2021-02-20 08:47:56', '2021-02-19 18:47:56'),
(10, 'Equipo Dogo 2', 7, '2021-02-20 08:47:56', '2021-02-19 18:47:56');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `orden`
--

DROP TABLE IF EXISTS `orden`;
CREATE TABLE IF NOT EXISTS `orden` (
  `id_orden` int(10) NOT NULL AUTO_INCREMENT,
  `total_pagar` decimal(6,2) DEFAULT NULL,
  `especificacion_orden` varchar(500) DEFAULT NULL,
  `metodo_pago` int(1) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_orden`)
) ENGINE=MyISAM AUTO_INCREMENT=23 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `orden`
--

INSERT INTO `orden` (`id_orden`, `total_pagar`, `especificacion_orden`, `metodo_pago`, `created_at`, `updated_at`) VALUES
(1, '130.00', 'todo sin mayonesa', 0, '2021-02-20 08:47:56', '2021-02-19 18:47:56'),
(2, '150.00', 'con todo', 0, '2021-02-20 08:47:56', '2021-02-19 18:47:56'),
(3, '210.00', 'jumbo sin mayonesa', 2, '2021-02-20 08:47:56', '2021-02-19 18:47:56'),
(4, '30.00', '-', 0, '2021-02-20 08:47:56', '2021-02-19 18:47:56'),
(5, '30.00', 'sin lechuga', 0, '2021-02-20 08:47:56', '2021-02-19 18:47:56'),
(6, '30.00', '-', 1, '2021-02-20 08:47:56', '2021-02-19 18:47:56'),
(7, '295.00', 'una hamburguesa sin verdura', 1, '2021-02-20 08:47:56', '2021-02-19 18:47:56'),
(8, '145.00', 'salsa bbq, dogo sin mayonesa', 0, '2021-02-20 08:47:56', '2021-02-19 18:47:56'),
(9, '210.00', '-', 0, '2021-02-20 08:47:56', '2021-02-19 18:47:56'),
(10, '60.00', '', 0, '2021-02-20 08:47:56', '2021-02-19 18:47:56'),
(11, '124.00', '-', 0, '2021-02-20 08:47:56', '2021-02-19 18:47:56'),
(12, '145.00', '-', 0, '2021-02-20 08:47:56', '2021-02-19 18:47:56'),
(13, '55.00', 'bebida sin hielo', 1, '2021-02-20 08:47:56', '2021-02-19 18:47:56'),
(14, '50.00', '-', 1, '2021-02-20 08:47:56', '2021-02-19 18:47:56'),
(15, '60.00', 'sin lechuga', 0, '2021-02-20 08:47:56', '2021-02-19 18:47:56'),
(16, '30.00', 'con todo', 0, '2021-02-20 08:47:56', '2021-02-19 18:47:56'),
(17, '30.00', 'con todo', 0, '2021-02-20 08:47:56', '2021-02-19 18:47:56'),
(18, '160.00', 'dogos sin mayonesa', 0, '2021-02-20 08:47:56', '2021-02-19 18:47:56'),
(19, '170.00', '-', 0, '2021-02-20 08:47:56', '2021-02-19 18:47:56'),
(20, '190.00', '-', 0, '2021-02-20 08:47:56', '2021-02-19 18:47:56'),
(21, '20.00', 'dsdsds', 2, '2021-02-20 08:50:38', '2021-02-19 18:50:38'),
(22, '20.00', 'dsdsd', 0, '2021-02-21 01:15:11', '2021-02-20 11:15:11');

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
  `id_sucursal` int(10) NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_partida`),
  KEY `id_orden` (`id_orden`),
  KEY `id_producto` (`id_producto`),
  KEY `id_sucursal` (`id_sucursal`)
) ENGINE=MyISAM AUTO_INCREMENT=44 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `partida`
--

INSERT INTO `partida` (`id_partida`, `id_producto`, `cantidad`, `importe`, `id_orden`, `id_sucursal`, `created_at`, `updated_at`) VALUES
(1, 7, 2, '60.00', 1, 1, '2021-02-20 08:47:56', '2021-02-19 18:47:56'),
(2, 33, 2, '70.00', 1, 1, '2021-02-20 08:47:56', '2021-02-19 18:47:56'),
(3, 7, 5, '150.00', 2, 8, '2021-02-20 08:47:56', '2021-02-19 18:47:56'),
(4, 7, 3, '90.00', 3, 8, '2021-02-20 08:47:56', '2021-02-19 18:47:56'),
(5, 9, 1, '40.00', 3, 7, '2021-02-20 08:47:56', '2021-02-19 18:47:56'),
(6, 16, 4, '80.00', 3, 7, '2021-02-20 08:47:56', '2021-02-19 18:47:56'),
(7, 7, 1, '30.00', 4, 6, '2021-02-20 08:47:56', '2021-02-19 18:47:56'),
(8, 7, 1, '30.00', 5, 6, '2021-02-20 08:47:56', '2021-02-19 18:47:56'),
(9, 7, 1, '30.00', 6, 1, '2021-02-20 08:47:56', '2021-02-19 18:47:56'),
(10, 1, 2, '170.00', 7, 1, '2021-02-20 08:47:56', '2021-02-19 18:47:56'),
(11, 33, 1, '35.00', 7, 1, '2021-02-20 08:47:56', '2021-02-19 18:47:56'),
(12, 34, 1, '40.00', 7, 1, '2021-02-20 08:47:56', '2021-02-19 18:47:56'),
(13, 18, 2, '50.00', 7, 1, '2021-02-20 08:47:56', '2021-02-19 18:47:56'),
(14, 32, 1, '85.00', 8, 1, '2021-02-20 08:47:56', '2021-02-19 18:47:56'),
(15, 7, 1, '30.00', 8, 8, '2021-02-20 08:47:56', '2021-02-19 18:47:56'),
(16, 17, 1, '30.00', 8, 8, '2021-02-20 08:47:56', '2021-02-19 18:47:56'),
(17, 7, 5, '150.00', 9, 8, '2021-02-20 08:47:56', '2021-02-19 18:47:56'),
(18, 17, 2, '60.00', 9, 8, '2021-02-20 08:47:56', '2021-02-19 18:47:56'),
(19, 7, 2, '60.00', 10, 8, '2021-02-20 08:47:56', '2021-02-19 18:47:56'),
(20, 10, 1, '99.00', 11, 8, '2021-02-20 08:47:56', '2021-02-19 18:47:56'),
(21, 22, 1, '25.00', 11, 8, '2021-02-20 08:47:56', '2021-02-19 18:47:56'),
(22, 30, 1, '55.00', 12, 7, '2021-02-20 08:47:56', '2021-02-19 18:47:56'),
(23, 7, 2, '60.00', 12, 7, '2021-02-20 08:47:56', '2021-02-19 18:47:56'),
(24, 17, 1, '30.00', 12, 7, '2021-02-20 08:47:56', '2021-02-19 18:47:56'),
(25, 7, 1, '30.00', 13, 6, '2021-02-20 08:47:56', '2021-02-19 18:47:56'),
(26, 22, 1, '25.00', 13, 6, '2021-02-20 08:47:56', '2021-02-19 18:47:56'),
(27, 7, 1, '30.00', 14, 6, '2021-02-20 08:47:56', '2021-02-19 18:47:56'),
(28, 16, 1, '20.00', 14, 6, '2021-02-20 08:47:56', '2021-02-19 18:47:56'),
(29, 9, 1, '40.00', 15, 6, '2021-02-20 08:47:56', '2021-02-19 18:47:56'),
(30, 16, 1, '20.00', 15, 6, '2021-02-20 08:47:56', '2021-02-19 18:47:56'),
(31, 7, 1, '30.00', 16, 8, '2021-02-20 08:47:56', '2021-02-19 18:47:56'),
(32, 7, 1, '30.00', 17, 1, '2021-02-20 08:47:56', '2021-02-19 18:47:56'),
(33, 7, 2, '60.00', 18, 1, '2021-02-20 08:47:56', '2021-02-19 18:47:56'),
(34, 33, 2, '70.00', 18, 6, '2021-02-20 08:47:56', '2021-02-19 18:47:56'),
(35, 17, 1, '30.00', 18, 7, '2021-02-20 08:47:56', '2021-02-19 18:47:56'),
(36, 7, 2, '60.00', 19, 7, '2021-02-20 08:47:56', '2021-02-19 18:47:56'),
(37, 33, 2, '70.00', 19, 7, '2021-02-20 08:47:56', '2021-02-19 18:47:56'),
(38, 16, 2, '40.00', 19, 7, '2021-02-20 08:47:56', '2021-02-19 18:47:56'),
(39, 7, 2, '60.00', 20, 7, '2021-02-20 08:47:56', '2021-02-19 18:47:56'),
(40, 34, 2, '100.00', 20, 6, '2021-02-20 08:47:56', '2021-02-19 18:47:56'),
(41, 17, 1, '30.00', 20, 6, '2021-02-20 08:47:56', '2021-02-19 18:47:56'),
(42, 16, 1, '20.00', 21, 6, '2021-02-20 08:50:38', '2021-02-19 18:50:38'),
(43, 16, 1, '20.00', 22, 8, '2021-02-21 01:15:11', '2021-02-20 11:15:11');

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
(1, 'H. Clasica', '85.00', 1, 'https://cdn.kiwilimon.com/recetaimagen/23667/th5-640x426-17028.jpg', '2021-02-20 08:47:56', '2021-02-19 18:47:56'),
(2, 'H. Portobello', '95.00', 1, 'https://sifu.unileversolutions.com/image/es-CR/recipe-topvisual/2/1260-709/falsa-hamburguesa-de-portobello-50349552.jpg', '2021-02-20 08:47:56', '2021-02-19 18:47:56'),
(3, 'H. Boneless', '95.00', 1, 'https://taquisos.com/wp-content/uploads/2020/04/hamburguesaBoneless-1.jpg', '2021-02-20 08:47:56', '2021-02-19 18:47:56'),
(4, 'H. Hass', '95.00', 1, 'https://www.superama.com.mx/views/micrositio/recetas/images/diadelpadre/hamburguesateriyaki/Web_fotoreceta.jpg', '2021-02-20 08:47:56', '2021-02-19 18:47:56'),
(5, 'H. Pollo', '85.00', 1, 'https://dam.cocinafacil.com.mx/wp-content/uploads/2019/05/hamburguesa-pollo-frito.png', '2021-02-20 08:47:56', '2021-02-19 18:47:56'),
(6, 'H. Vaquera', '95.00', 1, 'https://toromccoy.com/bogota/wp-content/uploads/2018/01/VAQUERA.png', '2021-02-20 08:47:56', '2021-02-19 18:47:56'),
(7, 'D. Sencillo', '30.00', 2, 'https://cdn.kiwilimon.com/recetaimagen/239/th5-640x640-15057.jpg', '2021-02-20 08:47:56', '2021-02-19 18:47:56'),
(8, 'D. Doble Winnie', '35.00', 2, 'https://comps.canstockphoto.es/embutido-alimento-doble-vegetales-almacen-de-fotos_csp70292234.jpg', '2021-02-20 08:47:56', '2021-02-19 18:47:56'),
(9, 'D. Jumbo', '40.00', 2, 'https://images-na.ssl-images-amazon.com/images/I/61jCmZ4eIZL._SL1000_.jpg', '2021-02-20 08:47:56', '2021-02-19 18:47:56'),
(10, 'D. QueDogo', '99.00', 2, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoV4h5SGN9xP6aG_vzx2DH3v_-jLnOR0fkdg&usqp=CAU', '2021-02-20 08:47:56', '2021-02-19 18:47:56'),
(11, 'D. Dogo Boneless', '50.00', 2, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSMjX-R9Ee1Td5ruleictDUJqjitwd8CbuAw&usqp=CAU', '2021-02-20 08:47:56', '2021-02-19 18:47:56'),
(12, 'D. 3 Quesos', '50.00', 2, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZfpAkG-LuqJSxuzS8Ke26Ptgc3WfmTwE7sw&usqp=CAU', '2021-02-20 08:47:56', '2021-02-19 18:47:56'),
(13, 'D. Pizza Dogo', '50.00', 2, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8J2lzvJlNKEly9o0Fki75nhNh67rRbxdPGw&usqp=CAU', '2021-02-20 08:47:56', '2021-02-19 18:47:56'),
(14, 'D. Vaquero', '50.00', 2, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0eNh1NM_jp28LwsBQFPPXRn0ms4MxvA6o-g&usqp=CAU', '2021-02-20 08:47:56', '2021-02-19 18:47:56'),
(15, 'D. Hass', '50.00', 2, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD7IMVwOxE_GUwkuBKRM0GTVK9cYaM8eLmew&usqp=CAU', '2021-02-20 08:47:56', '2021-02-19 18:47:56'),
(16, 'B. Coca Cola chica', '20.00', 3, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVKVDvJh-N08U_cCu7qi9T9j49jcjV20byeQ&usqp=CAU', '2021-02-20 08:47:56', '2021-02-19 18:47:56'),
(17, 'B. Coca Cola grande', '30.00', 3, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKnDyx_1-CXKgv8KD9CP4o8kvso76KO7J-Ww&usqp=CAU', '2021-02-20 08:47:56', '2021-02-19 18:47:56'),
(18, 'B. Limonada Mineral chica', '25.00', 3, 'https://www.mycolombianrecipes.com/wp-content/uploads/2014/06/como-hacer-limonada-de-pina.jpg', '2021-02-20 08:47:56', '2021-02-19 18:47:56'),
(19, 'B. Limonada Mineral grande', '35.00', 3, 'https://www.mycolombianrecipes.com/wp-content/uploads/2014/06/como-hacer-limonada-de-pina.jpg', '2021-02-20 08:47:56', '2021-02-19 18:47:56'),
(20, 'B. Limonada Fresa chica', '25.00', 3, 'https://unaricareceta.com/wp-content/uploads/2020/06/licuado-de-fresas.jpg', '2021-02-20 08:47:56', '2021-02-19 18:47:56'),
(21, 'B. Limonada Fresa grande', '40.00', 3, 'https://unaricareceta.com/wp-content/uploads/2020/06/licuado-de-fresas.jpg', '2021-02-20 08:47:56', '2021-02-19 18:47:56'),
(22, 'B. Uvola chica', '25.00', 3, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw7n7fkGPEDQMDTOxGDtLVT34Rtavf_iafNw&usqp=CAU', '2021-02-20 08:47:56', '2021-02-19 18:47:56'),
(23, 'B. Uvola grande', '40.00', 3, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw7n7fkGPEDQMDTOxGDtLVT34Rtavf_iafNw&usqp=CAU', '2021-02-20 08:47:56', '2021-02-19 18:47:56'),
(24, 'B. Jamaica chica', '20.00', 3, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnWs25Vcis2qNBvJmHm3EmuFmJZYwm7oHuGw&usqp=CAU', '2021-02-20 08:47:56', '2021-02-19 18:47:56'),
(25, 'B. Jamaica grande', '30.00', 3, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnWs25Vcis2qNBvJmHm3EmuFmJZYwm7oHuGw&usqp=CAU', '2021-02-20 08:47:56', '2021-02-19 18:47:56'),
(26, 'B. Horchata chica', '20.00', 3, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYkam42jR-7nnSpf1xV0mQ9suUpWEzQ2MIsQ&usqp=CAU', '2021-02-20 08:47:56', '2021-02-19 18:47:56'),
(27, 'B. Horchata grande', '30.00', 3, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYkam42jR-7nnSpf1xV0mQ9suUpWEzQ2MIsQ&usqp=CAU', '2021-02-20 08:47:56', '2021-02-19 18:47:56'),
(28, 'E. QueCombo', '150.00', 4, 'https://www.ecestaticos.com/image/clipping/1200/675/7616cc0f10fe4cdf992130720ce3e7fe/las-fast-food-mas-caloricas-que-deberias-evitar.jpg', '2021-02-20 08:47:56', '2021-02-19 18:47:56'),
(29, 'E. Salchipapas con boneless', '85.00', 4, 'https://scontent.fhmo2-1.fna.fbcdn.net/v/t1.0-9/135898623_3627194920692614_2291045142898445217_n.jpg?_nc_cat=111&ccb=3&_nc_sid=730e14&_nc_ohc=3d3lsBM-i5oAX-_Rqr8&_nc_ht=scontent.fhmo2-1.fna&oh=73c58035d4ea585f21a58fb93df7c80c&oe=6052E074', '2021-02-20 08:47:56', '2021-02-19 18:47:56'),
(30, 'E. Salchipapas', '55.00', 4, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTd8VHFZ6eZv1XiuPr8qNOXbZvtb_Z_nC3Kg&usqp=CAU', '2021-02-20 08:47:56', '2021-02-19 18:47:56'),
(31, 'E. Papas Sonora', '85.00', 4, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3Rs7JOQYC3oQkzzYhiXM0c9hW3rhxwlP7ZQ&usqp=CAU', '2021-02-20 08:47:56', '2021-02-19 18:47:56'),
(32, 'E. Boneless', '85.00', 4, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnfew6fQpsq2gJ-mujGNnhPMIM6D0P6u8c3g&usqp=CAU', '2021-02-20 08:47:56', '2021-02-19 18:47:56'),
(33, 'E. Orden de Papas a la francesa', '35.00', 4, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3Rs7JOQYC3oQkzzYhiXM0c9hW3rhxwlP7ZQ&usqp=CAU', '2021-02-20 08:47:56', '2021-02-19 18:47:56'),
(34, 'E. Orden de Papas sazonadas', '50.00', 4, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3Rs7JOQYC3oQkzzYhiXM0c9hW3rhxwlP7ZQ&usqp=CAU', '2021-02-20 08:47:56', '2021-02-19 18:47:56'),
(35, 'P. Burro Tradicional medio', '100.00', 5, 'https://scontent.fhmo2-1.fna.fbcdn.net/v/t1.0-9/116092937_3171712179574226_5775134417571537783_n.jpg?_nc_cat=100&ccb=3&_nc_sid=8bfeb9&_nc_ohc=fgQEG95YrIUAX92DFlv&_nc_ht=scontent.fhmo2-1.fna&oh=6d22f4f9afb1f50341eae5bf05baa192&oe=6054142C', '2021-02-20 08:47:56', '2021-02-19 18:47:56'),
(36, 'P. Burro Tradicional entero', '120.00', 5, 'https://scontent.fhmo2-1.fna.fbcdn.net/v/t1.0-9/116092937_3171712179574226_5775134417571537783_n.jpg?_nc_cat=100&ccb=3&_nc_sid=8bfeb9&_nc_ohc=fgQEG95YrIUAX92DFlv&_nc_ht=scontent.fhmo2-1.fna&oh=6d22f4f9afb1f50341eae5bf05baa192&oe=6054142C', '2021-02-20 08:47:56', '2021-02-19 18:47:56'),
(37, 'P. Burro Italiano medio', '115.00', 5, 'https://scontent.fhmo2-1.fna.fbcdn.net/v/t1.0-9/116092937_3171712179574226_5775134417571537783_n.jpg?_nc_cat=100&ccb=3&_nc_sid=8bfeb9&_nc_ohc=fgQEG95YrIUAX92DFlv&_nc_ht=scontent.fhmo2-1.fna&oh=6d22f4f9afb1f50341eae5bf05baa192&oe=6054142C', '2021-02-20 08:47:56', '2021-02-19 18:47:56'),
(38, 'P. Burro Italiano entero', '135.00', 5, 'https://scontent.fhmo2-1.fna.fbcdn.net/v/t1.0-9/116092937_3171712179574226_5775134417571537783_n.jpg?_nc_cat=100&ccb=3&_nc_sid=8bfeb9&_nc_ohc=fgQEG95YrIUAX92DFlv&_nc_ht=scontent.fhmo2-1.fna&oh=6d22f4f9afb1f50341eae5bf05baa192&oe=6054142C', '2021-02-20 08:47:56', '2021-02-19 18:47:56'),
(39, 'P. Burro Sonora medio', '115.00', 5, 'https://scontent.fhmo2-1.fna.fbcdn.net/v/t1.0-9/136115571_3627195337359239_1610418731385488358_n.jpg?_nc_cat=101&ccb=3&_nc_sid=730e14&_nc_ohc=Q2xHcc0kbqUAX-7NOZO&_nc_ht=scontent.fhmo2-1.fna&oh=9b9fee07a6ddc25c7407668387d57618&oe=6053D55C', '2021-02-20 08:47:56', '2021-02-19 18:47:56'),
(40, 'P. Burro Sonora entero', '135.00', 5, 'https://scontent.fhmo2-1.fna.fbcdn.net/v/t1.0-9/136115571_3627195337359239_1610418731385488358_n.jpg?_nc_cat=101&ccb=3&_nc_sid=730e14&_nc_ohc=Q2xHcc0kbqUAX-7NOZO&_nc_ht=scontent.fhmo2-1.fna&oh=9b9fee07a6ddc25c7407668387d57618&oe=6053D55C', '2021-02-20 08:47:56', '2021-02-19 18:47:56'),
(41, 'P. Burro Boneless medio', '105.00', 5, 'https://scontent.fhmo2-1.fna.fbcdn.net/v/t1.0-9/136115571_3627195337359239_1610418731385488358_n.jpg?_nc_cat=101&ccb=3&_nc_sid=730e14&_nc_ohc=Q2xHcc0kbqUAX-7NOZO&_nc_ht=scontent.fhmo2-1.fna&oh=9b9fee07a6ddc25c7407668387d57618&oe=6053D55C', '2021-02-20 08:47:56', '2021-02-19 18:47:56'),
(42, 'P. Burro Boneless entero', '125.00', 5, 'https://scontent.fhmo2-1.fna.fbcdn.net/v/t1.0-9/136115571_3627195337359239_1610418731385488358_n.jpg?_nc_cat=101&ccb=3&_nc_sid=730e14&_nc_ohc=Q2xHcc0kbqUAX-7NOZO&_nc_ht=scontent.fhmo2-1.fna&oh=9b9fee07a6ddc25c7407668387d57618&oe=6053D55C', '2021-02-20 08:47:56', '2021-02-19 18:47:56'),
(43, 'P. Burro Philadelphia medio', '115.00', 5, 'https://scontent.fhmo2-1.fna.fbcdn.net/v/t1.0-9/136115571_3627195337359239_1610418731385488358_n.jpg?_nc_cat=101&ccb=3&_nc_sid=730e14&_nc_ohc=Q2xHcc0kbqUAX-7NOZO&_nc_ht=scontent.fhmo2-1.fna&oh=9b9fee07a6ddc25c7407668387d57618&oe=6053D55C', '2021-02-20 08:47:56', '2021-02-19 18:47:56'),
(44, 'P. Burro Philadelphia entero', '135.00', 5, 'https://scontent.fhmo2-1.fna.fbcdn.net/v/t1.0-9/136115571_3627195337359239_1610418731385488358_n.jpg?_nc_cat=101&ccb=3&_nc_sid=730e14&_nc_ohc=Q2xHcc0kbqUAX-7NOZO&_nc_ht=scontent.fhmo2-1.fna&oh=9b9fee07a6ddc25c7407668387d57618&oe=6053D55C', '2021-02-20 08:47:56', '2021-02-19 18:47:56'),
(45, 'P. Burro Ahogado medio', '105.00', 5, 'https://scontent.fhmo2-1.fna.fbcdn.net/v/t1.0-9/116092937_3171712179574226_5775134417571537783_n.jpg?_nc_cat=100&ccb=3&_nc_sid=8bfeb9&_nc_ohc=fgQEG95YrIUAX92DFlv&_nc_ht=scontent.fhmo2-1.fna&oh=6d22f4f9afb1f50341eae5bf05baa192&oe=6054142C', '2021-02-20 08:47:56', '2021-02-19 18:47:56'),
(46, 'P. Burro Ahogado entero', '125.00', 5, 'https://scontent.fhmo2-1.fna.fbcdn.net/v/t1.0-9/116092937_3171712179574226_5775134417571537783_n.jpg?_nc_cat=100&ccb=3&_nc_sid=8bfeb9&_nc_ohc=fgQEG95YrIUAX92DFlv&_nc_ht=scontent.fhmo2-1.fna&oh=6d22f4f9afb1f50341eae5bf05baa192&oe=6054142C', '2021-02-20 08:47:56', '2021-02-19 18:47:56');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sucursal`
--

DROP TABLE IF EXISTS `sucursal`;
CREATE TABLE IF NOT EXISTS `sucursal` (
  `id_sucursal` int(10) NOT NULL AUTO_INCREMENT,
  `nombre_sucursal` varchar(100) NOT NULL,
  `nombre_encargado` varchar(100) NOT NULL,
  `direccion_sucursal` varchar(300) NOT NULL,
  `celular_sucursal` varchar(12) NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_sucursal`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `sucursal`
--

INSERT INTO `sucursal` (`id_sucursal`, `nombre_sucursal`, `nombre_encargado`, `direccion_sucursal`, `celular_sucursal`, `created_at`, `updated_at`) VALUES
(1, 'Las Quintas', 'Juan Carlos', 'Quinta Bella 54', '6622415131', '2021-02-20 08:47:56', '2021-02-19 18:47:56'),
(2, 'Insurgentes', 'Carlos Juan', 'Opodepe 240', '6622415132', '2021-02-20 08:47:56', '2021-02-19 18:47:56'),
(3, 'Altares', 'Valentina', 'Lic. Ricardo Valenzuela 49', '6622415133', '2021-02-20 08:47:56', '2021-02-19 18:47:56'),
(4, 'Pueblitos', 'Maria Fernanda', 'Cda. Kikapu 145', '6622415134', '2021-02-20 08:47:56', '2021-02-19 18:47:56'),
(5, 'Los Cuatro Olivos', 'Fernanda Maria', 'Huepac 117', '6622415135', '2021-02-20 08:47:56', '2021-02-19 18:47:56'),
(6, 'Bugambilia', 'Hector Nomar', 'Av. Siete 64', '6622415136', '2021-02-20 08:47:56', '2021-02-19 18:47:56'),
(7, 'Jesus Garcia', 'Nomar Hector', 'Av. Tres 218', '6622415137', '2021-02-20 08:47:56', '2021-02-19 18:47:56'),
(8, 'Balderrama', 'Solovino', 'Av. Luis Orci 201', '6622415138', '2021-02-20 08:47:56', '2021-02-19 18:47:56'),
(9, 'Ley 57', 'Vinosolo', 'Av. 6 de Abril 344', '6622415139', '2021-02-20 08:47:56', '2021-02-19 18:47:56'),
(10, 'El Ranchito', 'Solose Fue', 'Presa Malpaso 66', '6622415130', '2021-02-20 08:47:56', '2021-02-19 18:47:56');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo_comida`
--

DROP TABLE IF EXISTS `tipo_comida`;
CREATE TABLE IF NOT EXISTS `tipo_comida` (
  `id_tc` int(10) NOT NULL AUTO_INCREMENT,
  `nombre_tc` varchar(20) NOT NULL,
  PRIMARY KEY (`id_tc`)
) ENGINE=MyISAM AUTO_INCREMENT=16 DEFAULT CHARSET=latin1;

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
(10, 'percherones'),
(11, 'hamburguesa'),
(12, 'dogo'),
(13, 'bebida'),
(14, 'especialidad'),
(15, 'percherones');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
