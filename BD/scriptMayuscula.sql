/****** Script for SelectTopNRows command from SSMS  ******/
SELECT TOP (1000) [Id]
      ,[Imagen]
      ,[Nombre]
      ,[Edad]
      ,[Peso]
      ,[Historia]
  FROM [DAI_Personaje].[dbo].[Personajes]