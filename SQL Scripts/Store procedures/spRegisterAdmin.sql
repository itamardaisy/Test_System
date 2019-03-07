USE [TestingSystemDB]
GO
/****** Object:  StoredProcedure [dbo].[spRegisterAdmin]    Script Date: 2/19/2019 10:03:32 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE spRegisterAdmin
	@Username nvarchar(50),
	@Email varchar(50),
	@Password nvarchar(50),
	@PhoneNumber nvarchar(50)
AS
BEGIN
	SET NOCOUNT ON;
	
	IF EXISTS(SELECT Username FROM [Admin] WHERE Username = @Username)
		BEGIN
			SELECT 2
		END
	ELSE IF EXISTS(SELECT Email FROM [Admin] WHERE Email = @Email)
		BEGIN
			SELECT 3
		END
	ELSE 
		BEGIN
			INSERT INTO [Admin](Username, Email, Password, PhoneNumber, IsActive)
			VALUES(@Username, @Email, @Password, @PhoneNumber, 1)	
		END
END
