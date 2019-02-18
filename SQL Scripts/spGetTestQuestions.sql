SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE spGetTestQuestions 
	@TestId uniqueidentifier
AS
BEGIN
	SET NOCOUNT ON;

	SELECT q.Content and q.Tags
	FROM [dbo].[Question] AS q
	WHERE Id = ( SELECT qtt.[QuestionId]
				 FROM [dbo].[QuestionToTest] as qtt
				 WHERE TestId = @TestId )
	VALUES(TestId)
END
GO
