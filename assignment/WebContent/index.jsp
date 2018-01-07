<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ include file="/view/common/header.jsp" %>
<!DOCTYPE html>
<html lang="en">

  <head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>Resume - Start Bootstrap Theme</title>
  </head>
  

  <body id="page-top">

    <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
      <a class="navbar-brand js-scroll-trigger" href="#page-top">
        <span class="d-block d-lg-none">Start Bootstrap</span>
        <span class="d-none d-lg-block">
          <img class="img-fluid img-profile rounded-circle mx-auto mb-2" src="img/profile.jpg" alt="">
        </span>
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav">
          <li class="nav-item">
          <%if(loginMenu.equals("Login")){ %>
            <a class="nav-link js-scroll-trigger" href="#about"><%=loginMenu %></a>
            <%} else{ %>
            <a class="nav-link js-scroll-trigger" href="/user/logout" onclick="logOut()"><%=loginMenu %></a>
            <%} %>
            
          </li>
          <li class="nav-item">
          <% if(user==null){%>
            <a class="nav-link js-scroll-trigger" href="#experience">SIGN IN</a>
           <%}else{ %>
           	<a class="nav-link js-scroll-trigger" href="#experience">WELLCOME</a> 
           <%} %>  
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#education">USER LIST</a>
          </li>
        </ul>
      </div>
    </nav>

    <div class="container-fluid p-0">
<% 
if(user==null){
%>
      <section class="resume-section p-3 p-lg-5 d-flex d-column" id="about">
        <div class="my-auto">
          <h1 class="mb-0">LOGIN		
            <span class="text-primary"></span>
          </h1>
				<form class="form-signin">
				<label for="userId" class="sr-only">ID</label> 
				<input type="text" id="userId" name="userId" class="form-control"
					placeholder="ID" autofocus>
					
				<label for="userPwd" class="sr-only">Password</label> 
				<input type="password" id="userPwd" name="userPwd" class="form-control"
					placeholder="Password">
					
				<input class="btn btn-lg btn-primary btn-block" type="button"
					id="loginBtn" value="Login" onclick="checkValue()" style="background-color: white; color: black; border-color: black; " >
					
				<a href="/user/signin" style="margin: 1em"><input class="btn btn-lg btn-primary btn-block" type="button"
					id="signinBtn" value="Sign In"  style="background-color: white; color: black; border-color: black;" ></a>
			</form>
          <ul class="list-inline list-social-icons mb-0">
            <li class="list-inline-item">
              <a href="#">
                <span class="fa-stack fa-lg">
                  <i class="fa fa-circle fa-stack-2x"></i>
                  <i class="fa fa-facebook fa-stack-1x fa-inverse"></i>
                </span>
              </a>
            </li>
            <li class="list-inline-item">
              <a href="#">
                <span class="fa-stack fa-lg">
                  <i class="fa fa-circle fa-stack-2x"></i>
                  <i class="fa fa-twitter fa-stack-1x fa-inverse"></i>
                </span>
              </a>
            </li>
            <li class="list-inline-item">
              <a href="#">
                <span class="fa-stack fa-lg">
                  <i class="fa fa-circle fa-stack-2x"></i>
                  <i class="fa fa-linkedin fa-stack-1x fa-inverse"></i>
                </span>
              </a>
            </li>
            <li class="list-inline-item">
              <a href="#">
                <span class="fa-stack fa-lg">
                  <i class="fa fa-circle fa-stack-2x"></i>
                  <i class="fa fa-github fa-stack-1x fa-inverse"></i>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </section>
      <% 
}
else if(user.getUiName()!=null){
%>
      <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="experience">
        <div class="my-auto">
          <h2 class="mb-5"><%=user.getUiName()+loginMsg%></h2>

        </div>

      </section>

<% 
}
if(user==null){
%>

       <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="experience">
        <div class="my-auto">
          <div class="container">
		<div class="starter-template">

			<form class="form-signin">
				<table class="table">
					<tr>
						<th>이름</th>
						<td><input type="text" id="uiName" name="uiName"
							class="form-control" placeholder="이름" autofocus></td>
					</tr>
					<tr>
						<th>나이</th>
						<td><input type="text" id="uiAge" name="uiAge"
							class="form-control" placeholder="나이"></td>
					</tr>
					<tr>
						<th>아이디</th>
						<td><input type="text" id="uiId" name="uiId"
							class="form-control" placeholder="아이디"></td>
					</tr>
					<tr>
						<th>비밀번호</th>
						<td><input type="password" id="uiPwd" name="uiPwd"
							class="form-control" placeholder="비밀번호"></td>
					</tr>
					<tr>
						<th>반</th>
						<td>
							<select name="ciNo" id="ciNo" class="form-control">
							</select>
						</td>
					</tr>
					<tr>
						<th>주소</th>
						<td><input type="text" id="address" name="address"
							class="form-control" placeholder="주소"></td>
					</tr>
					<tr>
						<td colspan="2"> 
							<input class="btn btn-lg btn-primary btn-block" type="button"
								id="singnBtn" value="Signin" onclick="signin()">
						</td>
					</tr>
				</table>
			</form>
		</div>
	</div>

          
        </div>

      </section> 
<%
} if(user!=null){
%>
      <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="education">
        <div class="my-auto">
          <h2 class="mb-5">USER LIST</h2>
	<div class="container">
	    <div class="row">
	    
	        <div class="col-md-10 col-md-offset-1">
	
	            <div class="panel panel-default panel-table">
	              <div class="panel-heading">
	                <div class="row">
	                  <div class="col col-xs-6">
	                    <h3 class="panel-title">User List</h3>
	                  </div>
	                  <div class="col col-xs-6 text-right">
	                  	<input type="text" class="input">
	                    <button type="button" class="btn btn-sm btn-primary btn-create">검색</button>
	                  </div>
	                </div>
	              </div>
	              <div class="panel-body">
	                <table class="table table-striped table-bordered table-list">
	                  	<thead>
		                    <tr>
		                        <th class="text-center">번호</th>
		                        <th class="text-center">이름</th>
		                        <th class="text-center">나이</th>
		                        <th class="text-center">ID</th>
		                        <th class="text-center">가입일자</th>
		                        <th class="text-center">주소</th>
		                        <th class="text-center"><em class="glyphicon glyphicon-asterisk"></em></th>
		                    </tr>  
	                  	</thead>
	                  	<tbody id="result_tb">
						</tbody>
	                </table>
	              </div>
	            </div>
			</div>
		</div>
	</div>
        </div>
      </section>
<%
}
%>

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
