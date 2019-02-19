USE [TestingSystemDB]
GO
/****** Object:  StoredProcedure [dbo].[spLogin]    Script Date: 2/19/2019 9:57:49 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE spLogin
	@Email varchar(50),
	@Password varchar(50)
AS
BEGIN
	SET NOCOUNT ON;

	IF EXISTS(	SELECT Username FROM [Admin] WHERE [Admin].Email = @Email and [Admin].Password = @Password)
		BEGIN
			SELECT Username
			FROM [Admin]
			WHERE [Admin].Email = @Email and [Admin].Password = @Password
		END
	ELSE
		BEGIN
			SELECT 1
		END
END
