SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE spGetTestQuestions 
	@TestId uniqueidentifier
AS
BEGIN
	SET NOCOUNT ON;

	SELECT q.Content, q.Tags
	FROM [dbo].[Question] AS q
	WHERE Id IN ( SELECT qtt.[QuestionId]
				  FROM [dbo].[QuestionToTest] AS qtt
				  WHERE TestId = @TestId )
END
GO
