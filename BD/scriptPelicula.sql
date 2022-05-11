USE [DAI_Personaje]
GO

/****** Object:  Table [dbo].[Pelicula]    Script Date: 11/5/2022 09:41:16 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Pelicula](
    [IdPelicula] [int] IDENTITY(1,1) NULL,
    [Imagen] [varchar](200) NULL,
	[Titulo] [varchar](50) NULL,
	[FechaDeCreacion] [date] NULL,
	[Calificacion] [int] NULL,
	[PersonajesAsociados] [varchar](50) NULL
) ON [PRIMARY]
GO


