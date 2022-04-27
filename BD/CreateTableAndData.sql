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
	[id] [int] NULL,
	[imagen] [varchar](50) NULL,
	[nombre] [varchar](50) NULL,
	[edad] [int] NULL,
	[peso] [int] NULL,
	[historia] [text] NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
USE [master]
GO
ALTER DATABASE [DAI_Personaje] SET  READ_WRITE 
GO
