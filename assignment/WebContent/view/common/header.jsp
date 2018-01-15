<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%
String loginMsg="";
String loginMenu = "Login";
String loginUrl = rootPath + "/view/user/login";
if(user!=null){
	loginMsg = " 님  환영합니다!";
	loginMenu = "Logout";
	loginUrl = rootPath + "/user/logout";
}
%>

    <!-- Bootstrap core CSS -->
    <link href="resources/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">

    <!-- Custom fonts for this template -->
    <link href="https://fonts.googleapis.com/css?family=Saira+Extra+Condensed:100,200,300,400,500,600,700,800,900" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i" rel="stylesheet">
    <link href="resources/vendor/font-awesome/css/font-awesome.min.css" rel="stylesheet">
    <link href="resources/vendor/devicons/css/devicons.min.css" rel="stylesheet">
    <link href="resources/vendor/simple-line-icons/css/simple-line-icons.css" rel="stylesheet">

    <!-- Custom styles for this template -->
    <link href="/resources/css/resume.min.css" rel="stylesheet">
 	<link rel="/stylesheet" href="/resources/css/sign.css" />
