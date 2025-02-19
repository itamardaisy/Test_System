USE [master]
GO
/****** Object:  Database [TestingSystemDB]    Script Date: 2/10/2019 5:18:19 PM ******/
CREATE DATABASE [TestingSystemDB]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'TestingSystemDB', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.SQLEXPRESS\MSSQL\DATA\TestingSystemDB.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'TestingSystemDB_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.SQLEXPRESS\MSSQL\DATA\TestingSystemDB_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
GO
ALTER DATABASE [TestingSystemDB] SET COMPATIBILITY_LEVEL = 120
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [TestingSystemDB].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [TestingSystemDB] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [TestingSystemDB] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [TestingSystemDB] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [TestingSystemDB] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [TestingSystemDB] SET ARITHABORT OFF 
GO
ALTER DATABASE [TestingSystemDB] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [TestingSystemDB] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [TestingSystemDB] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [TestingSystemDB] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [TestingSystemDB] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [TestingSystemDB] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [TestingSystemDB] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [TestingSystemDB] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [TestingSystemDB] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [TestingSystemDB] SET  DISABLE_BROKER 
GO
ALTER DATABASE [TestingSystemDB] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [TestingSystemDB] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [TestingSystemDB] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [TestingSystemDB] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [TestingSystemDB] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [TestingSystemDB] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [TestingSystemDB] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [TestingSystemDB] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [TestingSystemDB] SET  MULTI_USER 
GO
ALTER DATABASE [TestingSystemDB] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [TestingSystemDB] SET DB_CHAINING OFF 
GO
ALTER DATABASE [TestingSystemDB] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [TestingSystemDB] SET TARGET_RECOVERY_TIME = 0 SECONDS 
GO
ALTER DATABASE [TestingSystemDB] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [TestingSystemDB] SET QUERY_STORE = OFF
GO
USE [TestingSystemDB]
GO
ALTER DATABASE SCOPED CONFIGURATION SET IDENTITY_CACHE = ON;
GO
ALTER DATABASE SCOPED CONFIGURATION SET LEGACY_CARDINALITY_ESTIMATION = OFF;
GO
ALTER DATABASE SCOPED CONFIGURATION FOR SECONDARY SET LEGACY_CARDINALITY_ESTIMATION = PRIMARY;
GO
ALTER DATABASE SCOPED CONFIGURATION SET MAXDOP = 0;
GO
ALTER DATABASE SCOPED CONFIGURATION FOR SECONDARY SET MAXDOP = PRIMARY;
GO
ALTER DATABASE SCOPED CONFIGURATION SET PARAMETER_SNIFFING = ON;
GO
ALTER DATABASE SCOPED CONFIGURATION FOR SECONDARY SET PARAMETER_SNIFFING = PRIMARY;
GO
ALTER DATABASE SCOPED CONFIGURATION SET QUERY_OPTIMIZER_HOTFIXES = OFF;
GO
ALTER DATABASE SCOPED CONFIGURATION FOR SECONDARY SET QUERY_OPTIMIZER_HOTFIXES = PRIMARY;
GO
USE [TestingSystemDB]
GO
/****** Object:  Table [dbo].[Admin]    Script Date: 2/10/2019 5:18:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Admin](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Username] [nvarchar](50) NOT NULL,
	[Email] [varchar](50) NOT NULL,
	[Password] [varchar](50) NOT NULL,
	[PhoneNumber] [nvarchar](50) NOT NULL,
	[IsActive] [bit] NOT NULL,
 CONSTRAINT [PK_Admin] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[AdminToCompany]    Script Date: 2/10/2019 5:18:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AdminToCompany](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[CompanyId] [int] NOT NULL,
	[AdminId] [int] NOT NULL,
 CONSTRAINT [PK_AdminToCompany] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Answare]    Script Date: 2/10/2019 5:18:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Answare](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[QuestionId] [int] NOT NULL,
	[IsCorrect] [bit] NOT NULL,
	[Answer Content] [nvarchar](2000) NOT NULL,
 CONSTRAINT [PK_Answare] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Category]    Script Date: 2/10/2019 5:18:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Category](
	[Id] [uniqueidentifier] NOT NULL,
	[Name] [nvarchar](50) NOT NULL,
	[CompanyId] [int] NOT NULL,
 CONSTRAINT [PK_Category] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[CategoryToQuestion]    Script Date: 2/10/2019 5:18:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CategoryToQuestion](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[CategoryId] [uniqueidentifier] NOT NULL,
	[QuestionId] [int] NOT NULL,
 CONSTRAINT [PK_CategoryToQuestion] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Company]    Script Date: 2/10/2019 5:18:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Company](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](50) NOT NULL,
 CONSTRAINT [PK_Company] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Question]    Script Date: 2/10/2019 5:18:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Question](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[IsMultiple] [bit] NOT NULL,
	[Content] [nvarchar](2000) NOT NULL,
	[Text below] [nvarchar](2000) NOT NULL,
	[IsHorizontal] [bit] NOT NULL,
	[Tags] [nvarchar](100) NOT NULL,
	[IsActive] [bit] NOT NULL,
 CONSTRAINT [PK_Question] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[QuestionToTest]    Script Date: 2/10/2019 5:18:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[QuestionToTest](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[TestId] [uniqueidentifier] NOT NULL,
	[QuestionId] [int] NOT NULL,
 CONSTRAINT [PK_QuestionToTest] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Test]    Script Date: 2/10/2019 5:18:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Test](
	[Id] [uniqueidentifier] NOT NULL,
	[Language] [varchar](50) NULL,
	[Name] [nvarchar](50) NOT NULL,
	[Header Content] [nvarchar](250) NOT NULL,
	[Creator Email] [varchar](50) NOT NULL,
	[Passing Grade] [int] NOT NULL,
	[Show Correct Answers] [bit] NOT NULL,
	[Certificate URL ] [varchar](250) NULL,
	[Text Success] [nvarchar](50) NULL,
	[Text Failure] [nvarchar](50) NULL,
	[Subject Failure Text] [nvarchar](50) NULL,
	[Subject Success Text] [nvarchar](50) NULL,
	[Subject Failure Body] [nvarchar](500) NOT NULL,
	[Subject Success Body] [nvarchar](500) NULL,
	[IsActive] [bit] NOT NULL,
 CONSTRAINT [PK_Test] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TestAnswers]    Script Date: 2/10/2019 5:18:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TestAnswers](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[QuestionId] [int] NOT NULL,
	[AnswrId] [int] NOT NULL,
	[UserToTestId] [int] NOT NULL,
 CONSTRAINT [PK_TestAnswers] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[User]    Script Date: 2/10/2019 5:18:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[User](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[FirstName] [varchar](50) NOT NULL,
	[LastName] [varchar](50) NOT NULL,
	[Email] [varchar](50) NOT NULL,
	[Phone] [varchar](50) NOT NULL,
 CONSTRAINT [PK_User] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[UserToTest]    Script Date: 2/10/2019 5:18:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[UserToTest](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[UserId] [int] NOT NULL,
	[TestId] [uniqueidentifier] NOT NULL,
	[Date] [date] NOT NULL,
	[Grade] [int] NOT NULL,
 CONSTRAINT [PK_UserToTest] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Admin] ADD  CONSTRAINT [DF_Admin_isActive]  DEFAULT ((0)) FOR [IsActive]
GO
ALTER TABLE [dbo].[Answare] ADD  CONSTRAINT [DF_Answare_IsCorrect]  DEFAULT ((0)) FOR [IsCorrect]
GO
ALTER TABLE [dbo].[Question] ADD  CONSTRAINT [DF_Question_isMultiple]  DEFAULT ((0)) FOR [IsMultiple]
GO
ALTER TABLE [dbo].[Question] ADD  CONSTRAINT [DF_Question_IsHorizontal]  DEFAULT ((0)) FOR [IsHorizontal]
GO
ALTER TABLE [dbo].[Question] ADD  CONSTRAINT [DF_Question_IsActive]  DEFAULT ((0)) FOR [IsActive]
GO
ALTER TABLE [dbo].[Test] ADD  CONSTRAINT [DF_Test_Show Correct Answers]  DEFAULT ((0)) FOR [Show Correct Answers]
GO
ALTER TABLE [dbo].[Test] ADD  CONSTRAINT [DF_Test_IsActive]  DEFAULT ((0)) FOR [IsActive]
GO
ALTER TABLE [dbo].[AdminToCompany]  WITH CHECK ADD  CONSTRAINT [FK_AdminToCompany_Admin] FOREIGN KEY([AdminId])
REFERENCES [dbo].[Admin] ([Id])
GO
ALTER TABLE [dbo].[AdminToCompany] CHECK CONSTRAINT [FK_AdminToCompany_Admin]
GO
ALTER TABLE [dbo].[AdminToCompany]  WITH CHECK ADD  CONSTRAINT [FK_CompanyId] FOREIGN KEY([CompanyId])
REFERENCES [dbo].[Company] ([Id])
GO
ALTER TABLE [dbo].[AdminToCompany] CHECK CONSTRAINT [FK_CompanyId]
GO
ALTER TABLE [dbo].[Answare]  WITH CHECK ADD  CONSTRAINT [FK_Answare_Question] FOREIGN KEY([QuestionId])
REFERENCES [dbo].[Question] ([Id])
GO
ALTER TABLE [dbo].[Answare] CHECK CONSTRAINT [FK_Answare_Question]
GO
ALTER TABLE [dbo].[Category]  WITH CHECK ADD  CONSTRAINT [FK_Category_Company] FOREIGN KEY([CompanyId])
REFERENCES [dbo].[Company] ([Id])
GO
ALTER TABLE [dbo].[Category] CHECK CONSTRAINT [FK_Category_Company]
GO
ALTER TABLE [dbo].[CategoryToQuestion]  WITH CHECK ADD  CONSTRAINT [FK_CategoryToQuestion_Category] FOREIGN KEY([CategoryId])
REFERENCES [dbo].[Category] ([Id])
GO
ALTER TABLE [dbo].[CategoryToQuestion] CHECK CONSTRAINT [FK_CategoryToQuestion_Category]
GO
ALTER TABLE [dbo].[CategoryToQuestion]  WITH CHECK ADD  CONSTRAINT [FK_CategoryToQuestion_Question] FOREIGN KEY([QuestionId])
REFERENCES [dbo].[Question] ([Id])
GO
ALTER TABLE [dbo].[CategoryToQuestion] CHECK CONSTRAINT [FK_CategoryToQuestion_Question]
GO
ALTER TABLE [dbo].[QuestionToTest]  WITH CHECK ADD  CONSTRAINT [FK_QuestionToTest_Question] FOREIGN KEY([QuestionId])
REFERENCES [dbo].[Question] ([Id])
GO
ALTER TABLE [dbo].[QuestionToTest] CHECK CONSTRAINT [FK_QuestionToTest_Question]
GO
ALTER TABLE [dbo].[QuestionToTest]  WITH CHECK ADD  CONSTRAINT [FK_QuestionToTest_Test] FOREIGN KEY([TestId])
REFERENCES [dbo].[Test] ([Id])
GO
ALTER TABLE [dbo].[QuestionToTest] CHECK CONSTRAINT [FK_QuestionToTest_Test]
GO
ALTER TABLE [dbo].[TestAnswers]  WITH CHECK ADD  CONSTRAINT [FK_TestAnswers_Answare] FOREIGN KEY([AnswrId])
REFERENCES [dbo].[Answare] ([id])
GO
ALTER TABLE [dbo].[TestAnswers] CHECK CONSTRAINT [FK_TestAnswers_Answare]
GO
ALTER TABLE [dbo].[TestAnswers]  WITH CHECK ADD  CONSTRAINT [FK_TestAnswers_Question] FOREIGN KEY([QuestionId])
REFERENCES [dbo].[Question] ([Id])
GO
ALTER TABLE [dbo].[TestAnswers] CHECK CONSTRAINT [FK_TestAnswers_Question]
GO
ALTER TABLE [dbo].[TestAnswers]  WITH CHECK ADD  CONSTRAINT [FK_TestAnswers_UserToTest] FOREIGN KEY([UserToTestId])
REFERENCES [dbo].[UserToTest] ([Id])
GO
ALTER TABLE [dbo].[TestAnswers] CHECK CONSTRAINT [FK_TestAnswers_UserToTest]
GO
ALTER TABLE [dbo].[UserToTest]  WITH CHECK ADD  CONSTRAINT [FK_UserToTest_Test] FOREIGN KEY([TestId])
REFERENCES [dbo].[Test] ([Id])
GO
ALTER TABLE [dbo].[UserToTest] CHECK CONSTRAINT [FK_UserToTest_Test]
GO
ALTER TABLE [dbo].[UserToTest]  WITH CHECK ADD  CONSTRAINT [FK_UserToTest_User] FOREIGN KEY([UserId])
REFERENCES [dbo].[User] ([Id])
GO
ALTER TABLE [dbo].[UserToTest] CHECK CONSTRAINT [FK_UserToTest_User]
GO
/****** Object:  StoredProcedure [dbo].[sp_addNewAdmin]    Script Date: 2/10/2019 5:18:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[sp_addNewAdmin] 
	@Email varchar(50),
	@Password varchar(50),
	@IsActive bit = false
AS
BEGIN
	SET NOCOUNT ON;

	INSERT INTO [Admin](
		Email, 
		Password,
		IsActive
	)
	VALUES(@Email, @Password, @IsActive)
END
GO
/****** Object:  StoredProcedure [dbo].[sp_addNewUser]    Script Date: 2/10/2019 5:18:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[sp_addNewUser]
	@FirstName varchar(50),
	@LastName varchar(50),
	@Email varchar(50),
	@Phone varchar(50)
AS
BEGIN
	SET NOCOUNT ON;

	insert into [dbo].[User](
		FirstName,
		LastName,
		Email,
		Phone
	)
	values(@FirstName, @LastName, @Email, @Phone)
END
GO
/****** Object:  StoredProcedure [dbo].[sp_login]    Script Date: 2/10/2019 5:18:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[sp_login] 
	@Email varchar(50),
	@Password varchar(50)
AS
BEGIN
	SET NOCOUNT ON;

	SELECT *
	FROM Admin
	WHERE [Admin].Email = @Email and [Admin].Password = @Password
END
GO
USE [master]
GO
ALTER DATABASE [TestingSystemDB] SET  READ_WRITE 
GO
