-- ================================================
-- Template generated from Template Explorer using:
-- Create Procedure (New Menu).SQL
--
-- Use the Specify Values for Template Parameters 
-- command (Ctrl-Shift-M) to fill in the parameter 
-- values below.
--
-- This block of comments will not be included in
-- the definition of the procedure.
-- ================================================
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE spAddNewQuestion 
	@IsMultiple bit,
	@Content nvarchar(200),
	@TextBelow nvarchar(2000),
	@IsHorizontal bit,
	@Tags nvarchar(100),
	@IsActive bit
AS
BEGIN
	SET NOCOUNT ON;
	
	IF EXISTS( SELECT Id FROM [dbo].[Question] 
			   WHERE Content = @Content AND Tags = @Tags )
		BEGIN
			SELECT 0
		END
	ELSE
		BEGIN
			INSERT INTO Question(IsMultiple, Content, [Text below], IsHorizontal, Tags, IsActive)
			VALUES (@IsMultiple, @Content, @TextBelow, @IsHorizontal, @Tags, @IsActive)
		END
END
GO
