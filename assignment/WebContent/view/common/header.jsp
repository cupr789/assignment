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
    <link href="resources/css/resume.min.css" rel="stylesheet">
<link rel="stylesheet" href="/ui/css/sign.css" />

<%-- <link rel="stylesheet" href="<%=rootPath%>/resources/ui/css/bootstrap.min.css">
<link rel="stylesheet" href="<%=rootPath%>/resources/ui/css/bootstrap-theme.min.css">
<link rel="stylesheet" href="<%=rootPath%>/resources/ui/css/common.css"> --%>
	<%-- <nav class="navbar navbar-inverse navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">Project name</a>
        </div>
        <div id="navbar" class="collapse navbar-collapse">
          <ul class="nav navbar-nav">
            <li class="active"><a href="<%=rootPath%>/">Home</a></li>
            <li><a href="<%=loginUrl%>"><%=loginMenu%></a></li>
            <li><a href="<%=rootPath%>/view/user/list">User List</a></li>
          </ul>
        </div><!--/.nav-collapse -->
      </div>
    </nav> --%>