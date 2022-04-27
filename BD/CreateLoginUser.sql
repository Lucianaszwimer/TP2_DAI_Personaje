USE [master]
GO
CREATE LOGIN [Personaje] WITH PASSWORD=N'Personaje', DEFAULT_DATABASE=[DAI_Personaje], CHECK_EXPIRATION=OFF, CHECK_POLICY=OFF
GO

USE [DAI_Personaje]
GO
CREATE USER [Personaje] FOR LOGIN [Personaje]
GO
USE [DAI_Personaje]
GO
ALTER ROLE [db_owner] ADD MEMBER [Personaje]
GO