USE [DAI_Personaje]
GO
/****** Object:  User [alumno]    Script Date: 26/4/2022 09:07:10 ******/
CREATE USER [alumno] FOR LOGIN [alumno] WITH DEFAULT_SCHEMA=[dbo]
GO
/****** Object:  Table [dbo].[Personajes]    Script Date: 26/4/2022 09:07:10 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Personajes](
	[Id] [int] IDENTITY(1,1) NULL,
	[Imagen] [varchar](255) NULL,
	[Nombre] [varchar](50) NULL,
	[Edad] [int] NULL,
	[Peso] [int] NULL,
	[Historia] [varchar](255) NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
USE [master]
GO
ALTER DATABASE [DAI_Personaje] SET  READ_WRITE 
GO