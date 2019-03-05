SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE spAddAnswers
	@QuestionId int,
	@Answers AS [dbo].[Answers] READONLY
AS
BEGIN
	SET NOCOUNT ON;

	INSERT INTO Answare(QuestionId, [Answer Content], IsCorrect)
	SELECT @QuestionId, [Answer Content], IsCorrect FROM @Answers
END
GO
