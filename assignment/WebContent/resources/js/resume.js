(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#sideNav'
  });

})(jQuery); // End of use strict




$(window).ready(function(){
	$.ajax({
		url : '/class/list',
		type : 'get',
		success:function(res){
			var list = JSON.parse(res);
			alert(list);
			var str = "";
			for(var ci of list){
				str += "<option value='" + ci.ciNo + "'>" + ci.ciName +"</option>";
			}
			$("#ciNo").html(str);
		},
		error:function(xhr,status,error){
			
		}
	});
	
});


$(document).ready(function(){
	$.ajax({
		url : '/user/list',
		type : 'get',
		success:function(res){
			var list = JSON.parse(res);
			var str ="";
			for(var uc of list){
				str += "<tr>";
				str += "<td class='text-center'>" + uc.uiNo + "</td>";
				str += "<td class='text-center'>" + uc.uiName + "</td>";
				str += "<td class='text-center'>" + uc.uiAge + "</td>";
				str += "<td class='text-center'>" + uc.uiId + "</td>";
				str += "<td class='text-center'>" + uc.uiRegdate + "</td>";
				str += "<td class='text-center'>" + uc.address + "</td>";
				str += '<td align="center">';
				str += '<a class="btn btn-default"><em class="glyphicon glyphicon-refresh"></em></a>';
				str += '<a class="btn btn-danger"><em class="glyphicon glyphicon-trash"></em></a>';
				str += '</td>';
			}
			$("#result_tb").html(str);
		},
		error:function(xhr,status,error){
			
		}
	});
	
});

var colsInfo = [];

$(document).ready(function(){
	var colList = $("#grid1 th[data-field]");
	for(var i=0; i<colList.length;i++){
		// colsInfo[colsInfo.length]=colList[i]; 예전방식
		colsInfo.push(colList[i].getAttribute("data-field"));
	}
	var keyCol = $("#grid1").attr("data-key");
	$.ajax({
		url : '/class/list',
		type : 'get',
		success:function(res){
			var list = JSON.parse(res);
			var str ="";
			for(var num in list){
				var key = list[num].ciNo;
				str += "<tr>";
				for(var field of colsInfo){
					str += "<td class='text-center'>";
					if(field=="BTN"){
						str += '<a class="btn btn-default" onclick="updateClass('+key+')"><em class="glyphicon glyphicon-refresh"></em></a>';
						str += '<a class="btn btn-danger" onclick="deleteClass('+key+')"><em class="glyphicon glyphicon-trash"></em></a>';
					}
					else{
						var colName = field.split(",")[0];
						var colType = field.split(",")[1];
						if(colType=="ro"){
							str+=list[num].ciNo;
						}
						else if(colName=="ciName"){
							str+="<input type='text' class='form-control' id='"+colName+key+"' value='"+list[num].ciName+"'>";
							
						}
						else if(colName=="ciDesc"){
							str+="<input type='text' class='form-control' id='"+colName+key+"' value='"+list[num].ciDesc+"'>";
						}
					}
					str+="</td>";
				}
				str+='</tr>'; 
			}
			$("#result_tb").html(str);
		},
		error:function(xhr,status,error){
			
		}
	});
	
});





function signin(){
	// "uiName,uiAge,uiId,uiPwd,ciNo,address"
	var uiName = $("#uiName").val().trim();
	var uiAge = $("#uiAge").val().trim();
	var uiId = $("#uiId").val().trim();
	var uiPwd = $("#uiPwd").val().trim();
	var ciNo = $("#ciNo").val();
	var address = $("#address").val().trim();
	var param= {uiName:uiName, uiAge:uiAge, uiId:uiId, uiPwd:uiPwd,ciNo:ciNo,address:address};
	param = "param=" + JSON.stringify(param);
	$.ajax({
		url : '/user/signin',
		type : 'post',
		data : param,
		success:function(res){
			var obj = JSON.parse(res);
			alert(obj.msg);
			if(obj.result=="ok"){
				// location.href="/view/user/login";
				// <a class="nav-link js-scroll-trigger" href="#experience">
				location.replace("/index.jsp");
			}
		},
		error:function(xhr,status,error){
			
		}		
	})
}

function checkValue(){
	var userId = $("#userId").val().trim();
	var userPwd = $("#userPwd").val().trim();
	if(userId.length<3){
		alert("유저아이디 확인해!!");
		$("#userId").focus();
		return;
	}
	if(userPwd.length<3){
		alert("비밀번호 확인해!!");
		$("#userPwd").focus();
		return;
	}
	var param = {uiId:userId, uiPwd:userPwd};
	
	param = "param=" + encodeURIComponent(JSON.stringify(param));
	$.ajax({
		url : '/user/login',
		data : param,
		type :'get',
		success:function(res){
			var obj = JSON.parse(res);
			if(obj.login=="ok"){
				window.location.reload();
				// location.href="#experience";
			}
		}
	})
}

function logOut(){
	$.ajax({
		url : '/user/logout',
		// data : param,
		type :'get',
		success:function(res){
			
			var obj = res;
			// if(obj=="#about"){
				window.location.reload();
				// location.href="<%=rootPath%>/index.jsp";
			// }
		}
	})
}



