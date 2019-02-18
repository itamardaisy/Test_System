SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE spCreateNewTest
	@Language varchar(50), @Name varchar(50), @HeaderContent nvarchar(250),
	@CreatorEmail varchar(50), @PassingGrade int, @ShowCorrectAnswers bit,
	@CertificateURL varchar(250), @TextSuccess nvarchar(50), @TextFailure nvarchar(50),
	@SubjectFailureText nvarchar(50), @SubjectSuccessText nvarchar(50),	@SubjectFailureBody nvarchar(500),
	@SubjectSuccessBody nvarchar(500), @IsActive bit


AS
BEGIN
	SET NOCOUNT ON;
	DECLARE @Id AS uniqueidentifier;
	SET @Id = NEWID()
	INSERT INTO Test( [Id], [Language], [Name], [Header Content],
					  [Creator Email], [Passing Grade], [Show Correct Answers],
					  [Certificate URL ], [Text Success], [Text Failure], 
					  [Subject Failure Text], [Subject Success Text], [Subject Failure Body], 
					  [Subject Success Body], [IsActive] )

	VALUES( @Id, @Language, @Name, @HeaderContent, @CreatorEmail, @PassingGrade, @ShowCorrectAnswers, 
		    @CertificateURL, @TextSuccess, @TextFailure, @SubjectFailureText, 
		    @SubjectSuccessText, @SubjectFailureBody, @SubjectSuccessBody, @IsActive )
END
GO
