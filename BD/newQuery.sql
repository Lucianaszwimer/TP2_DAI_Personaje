USE [DAI_Personaje]
GO

/****** Object:  Table [dbo].[Personajes]    Script Date: 3/5/2022 08:56:55 ******/
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


