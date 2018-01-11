<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ include file="/view/common/header.jsp"%>
<!DOCTYPE html>
<html lang="en">

<head>

<meta charset="utf-8">
<meta name="viewport"
	content="width=device-width, initial-scale=1, shrink-to-fit=no">
<meta name="description" content="">
<meta name="author" content="">

<title>Academy</title>

</head>
<style>
/*    html, body { height:100%;overflow-x:hidden; overflow-y:hidden};  */
 </style>

<body id="page-top" >

	<nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
		id="sideNav">
		<a class="navbar-brand js-scroll-trigger" href="#page-top"> <span
			class="d-block d-lg-none">MyClass</span> <span
			class="d-none d-lg-block"> <img
				class="img-fluid img-profile rounded-circle mx-auto mb-2"
				src="img/profile.jpg" alt="">
		</span>
		</a>
		<button class="navbar-toggler" type="button" data-toggle="collapse"
			data-target="#navbarSupportedContent"
			aria-controls="navbarSupportedContent" aria-expanded="false"
			aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse" id="navbarSupportedContent">
			<ul class="navbar-nav">

				<li class="nav-item">
					<%
						if (loginMenu.equals("Login")) {
					%> <a
					class="nav-link js-scroll-trigger" href="#about"><%=loginMenu%></a>
					<%
					} else {
					%> 
					<a class="nav-link js-scroll-trigger"
					href="/user/logout" onclick="logOut()"><%=loginMenu%></a> 
					<%
 					}
 					%>

				</li>
				<li class="nav-item">
					<%
					if (user == null) {
					%> 
						<a class="nav-link js-scroll-trigger"
						href="#signin">SIGN IN</a> 
					<%
					} else {
					%> 
					<a class="nav-link js-scroll-trigger" href="#wellcome">WELLCOME</a> 
					<%
					}
 					%>
				</li>
				<li class="nav-item"><a class="nav-link js-scroll-trigger"
					href="#userlist">USER LIST</a></li>

				<li class="nav-item"><a class="nav-link js-scroll-trigger"
					href="#classlist">CLASS LIST</a></li>

				<li class="nav-item" style="display: none"><a class="nav-link js-scroll-trigger"
					href="#insertUser">INSERT USER</a></li>

				<li class="nav-item" style="display: none"><a class="nav-link js-scroll-trigger"
					href="#insertClass">INSERT CLASS</a></li>
			</ul>
		</div>
	</nav>

	<div class="container-fluid p-0">
		
		<section class="resume-section p-3 p-lg-5 d-flex flex-column" id="insertUser" >
			<div class="my-auto" id="my-auto11">
				<h2 class="mb-5">Insert User</h2>
				<div class="panel-body">
				<form class="form-signin">
					<table style="width: 100%; table-layout: fixed" id="grid3"
						data-key="uiNo"
						class="table table-striped table-bordered table-list">
						<thead>
							<tr>
								<th>이름</th>
								<td><input type="text" id="uiName1" name="uiName"
									class="form-control" placeholder="이름"></td>
							</tr>
							<tr>
								<th>나이</th>
								<td><input type="text" id="uiAge1" name="uiAge"
									class="form-control" placeholder="나이"></td>
							</tr>
							<tr>
								<th>아이디</th>
								<td><input type="text" id="uiId1" name="uiId"
									class="form-control" placeholder="아이디"></td>
							</tr>
							<tr>
								<th>비밀번호</th>
								<td><input type="password" id="uiPwd1" name="uiPwd"
									class="form-control" placeholder="비밀번호"></td>
							</tr>
							<tr>
									<th>반</th>
									
									<td><select name="ciNo" id="ciNo1" class="form-control"></select></td>
							</tr>
							 <tr>
									<th>주소</th>
									<td><input type="text" id="address1" name="address"
										class="form-control" placeholder="주소"></td>
							</tr> 
							<tr>
									<td colspan="2"><input
										class="btn btn-lg btn-primary btn-block" type="button"
										id="singinBtn1" value="Signin" style="background-color: brown" onclick="signin(1)"></td>
								</tr>

						</thead>
						<tbody id="result_tb_popup_user">
						</tbody>
					</table>
					</form>
				</div>
			</div>
		</section>
		
		
		

	</div>

	<!-- Bootstrap core JavaScript -->
	<script src="resources/vendor/jquery/jquery.min.js"></script>
	<script src="resources/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

	<!-- Plugin JavaScript -->
	<script src="resources/vendor/jquery-easing/jquery.easing.min.js"></script>

	<!-- Custom scripts for this template -->
	<script src="resources/js/resume.min.js"></script>
	<script src="resources/js/resume.js"></script>




</body>

</html>
