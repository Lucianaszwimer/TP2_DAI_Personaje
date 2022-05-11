USE [master]
GO
/****** Object:  Database [DAI_Personaje]    Script Date: 11/5/2022 10:32:48 ******/
CREATE DATABASE [DAI_Personaje]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'DAI_Personaje', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.MSSQLSERVER\MSSQL\DATA\DAI_Personaje.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'DAI_Personaje_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.MSSQLSERVER\MSSQL\DATA\DAI_Personaje_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
GO
ALTER DATABASE [DAI_Personaje] SET COMPATIBILITY_LEVEL = 140
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [DAI_Personaje].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [DAI_Personaje] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [DAI_Personaje] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [DAI_Personaje] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [DAI_Personaje] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [DAI_Personaje] SET ARITHABORT OFF 
GO
ALTER DATABASE [DAI_Personaje] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [DAI_Personaje] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [DAI_Personaje] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [DAI_Personaje] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [DAI_Personaje] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [DAI_Personaje] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [DAI_Personaje] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [DAI_Personaje] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [DAI_Personaje] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [DAI_Personaje] SET  DISABLE_BROKER 
GO
ALTER DATABASE [DAI_Personaje] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [DAI_Personaje] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [DAI_Personaje] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [DAI_Personaje] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [DAI_Personaje] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [DAI_Personaje] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [DAI_Personaje] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [DAI_Personaje] SET RECOVERY FULL 
GO
ALTER DATABASE [DAI_Personaje] SET  MULTI_USER 
GO
ALTER DATABASE [DAI_Personaje] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [DAI_Personaje] SET DB_CHAINING OFF 
GO
ALTER DATABASE [DAI_Personaje] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [DAI_Personaje] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [DAI_Personaje] SET DELAYED_DURABILITY = DISABLED 
GO
EXEC sys.sp_db_vardecimal_storage_format N'DAI_Personaje', N'ON'
GO
ALTER DATABASE [DAI_Personaje] SET QUERY_STORE = OFF
GO
USE [DAI_Personaje]
GO
/****** Object:  User [alumno]    Script Date: 11/5/2022 10:32:48 ******/
CREATE USER [alumno] FOR LOGIN [alumno] WITH DEFAULT_SCHEMA=[dbo]
GO
/****** Object:  Table [dbo].[Pelicula]    Script Date: 11/5/2022 10:32:48 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Pelicula](
	[IdPelicula] [int] IDENTITY(1,1) NOT NULL,
	[Imagen] [varchar](200) NULL,
	[Titulo] [varchar](50) NULL,
	[FechaDeCreacion] [date] NULL,
	[Calificacion] [int] NULL,
	[PersonajesAsociados] [varchar](50) NULL,
 CONSTRAINT [PK_Pelicula] PRIMARY KEY CLUSTERED 
(
	[IdPelicula] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Personajes]    Script Date: 11/5/2022 10:32:48 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Personajes](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Imagen] [varchar](50) NULL,
	[Nombre] [varchar](50) NULL,
	[Edad] [int] NULL,
	[Peso] [int] NULL,
	[Historia] [text] NULL,
 CONSTRAINT [PK_Personajes] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[PersonajexPelicula]    Script Date: 11/5/2022 10:32:48 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PersonajexPelicula](
	[IdPelicula] [int] NOT NULL,
	[IdPersonaje] [int] NOT NULL,
	[IdPersonajeXPelicula] [int] IDENTITY(1,1) NOT NULL,
 CONSTRAINT [PK_PersonajexPelicula] PRIMARY KEY CLUSTERED 
(
	[IdPersonajeXPelicula] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Pelicula] ON 

INSERT [dbo].[Pelicula] ([IdPelicula], [Imagen], [Titulo], [FechaDeCreacion], [Calificacion], [PersonajesAsociados]) VALUES (1, N'a', N'Back To The Future', CAST(N'1985-12-26' AS Date), 5, N'Marty McFly')
INSERT [dbo].[Pelicula] ([IdPelicula], [Imagen], [Titulo], [FechaDeCreacion], [Calificacion], [PersonajesAsociados]) VALUES (2, N'b', N'Monster Inc', CAST(N'2001-12-06' AS Date), 5, N'Sully')
INSERT [dbo].[Pelicula] ([IdPelicula], [Imagen], [Titulo], [FechaDeCreacion], [Calificacion], [PersonajesAsociados]) VALUES (3, N'c', N'Toy Story', CAST(N'1996-03-14' AS Date), 5, N'Woody')
INSERT [dbo].[Pelicula] ([IdPelicula], [Imagen], [Titulo], [FechaDeCreacion], [Calificacion], [PersonajesAsociados]) VALUES (4, N'd', N'Cars', CAST(N'2006-06-29' AS Date), 5, N'McQueen')
INSERT [dbo].[Pelicula] ([IdPelicula], [Imagen], [Titulo], [FechaDeCreacion], [Calificacion], [PersonajesAsociados]) VALUES (5, N'e', N'Ratatouille', CAST(N'2007-07-28' AS Date), 5, N'Remy')
SET IDENTITY_INSERT [dbo].[Pelicula] OFF
GO
SET IDENTITY_INSERT [dbo].[Personajes] ON 

INSERT [dbo].[Personajes] ([Id], [Imagen], [Nombre], [Edad], [Peso], [Historia]) VALUES (1, N'a', N'Woody', 19, 1, N'Hay una serpiente en mi bota')
INSERT [dbo].[Personajes] ([Id], [Imagen], [Nombre], [Edad], [Peso], [Historia]) VALUES (2, N'b', N'Remy', 3, 2, N'Cocina')
INSERT [dbo].[Personajes] ([Id], [Imagen], [Nombre], [Edad], [Peso], [Historia]) VALUES (3, N'c', N'McQuenn', 97, 1000, N'Corredor de la Copa Piston')
INSERT [dbo].[Personajes] ([Id], [Imagen], [Nombre], [Edad], [Peso], [Historia]) VALUES (4, N'd', N'Marty McFly', 18, 60, N'Viaja en el tiempo')
INSERT [dbo].[Personajes] ([Id], [Imagen], [Nombre], [Edad], [Peso], [Historia]) VALUES (5, N'e', N'Sully', 30, 280, N'Asustador')
SET IDENTITY_INSERT [dbo].[Personajes] OFF
GO
SET IDENTITY_INSERT [dbo].[PersonajexPelicula] ON 

INSERT [dbo].[PersonajexPelicula] ([IdPelicula], [IdPersonaje], [IdPersonajeXPelicula]) VALUES (3, 1, 1)
INSERT [dbo].[PersonajexPelicula] ([IdPelicula], [IdPersonaje], [IdPersonajeXPelicula]) VALUES (1, 4, 2)
INSERT [dbo].[PersonajexPelicula] ([IdPelicula], [IdPersonaje], [IdPersonajeXPelicula]) VALUES (2, 5, 3)
INSERT [dbo].[PersonajexPelicula] ([IdPelicula], [IdPersonaje], [IdPersonajeXPelicula]) VALUES (4, 3, 4)
INSERT [dbo].[PersonajexPelicula] ([IdPelicula], [IdPersonaje], [IdPersonajeXPelicula]) VALUES (5, 2, 5)
SET IDENTITY_INSERT [dbo].[PersonajexPelicula] OFF
GO
ALTER TABLE [dbo].[PersonajexPelicula]  WITH CHECK ADD  CONSTRAINT [FK_PersonajexPelicula_Pelicula] FOREIGN KEY([IdPelicula])
REFERENCES [dbo].[Pelicula] ([IdPelicula])
GO
ALTER TABLE [dbo].[PersonajexPelicula] CHECK CONSTRAINT [FK_PersonajexPelicula_Pelicula]
GO
ALTER TABLE [dbo].[PersonajexPelicula]  WITH CHECK ADD  CONSTRAINT [FK_PersonajexPelicula_Personajes] FOREIGN KEY([IdPersonaje])
REFERENCES [dbo].[Personajes] ([Id])
GO
ALTER TABLE [dbo].[PersonajexPelicula] CHECK CONSTRAINT [FK_PersonajexPelicula_Personajes]
GO
USE [master]
GO
ALTER DATABASE [DAI_Personaje] SET  READ_WRITE 
GO
