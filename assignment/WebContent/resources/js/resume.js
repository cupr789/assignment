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
			var str = "";
			for(var ci of list){
				str += "<option value='" + ci.ciNo + "'>" + ci.ciName +"</option>";
			}
			$("#ciNo").html(str);
			$("#ciNo1").html(str);
		},
		error:function(xhr,status,error){
			
		}
	});
	
});

var colsInfo2 = [];

$(document).ready(function(){
	var colList = $("#grid1 th[data-field]");
	for(var i=0; i<colList.length;i++){
		// colsInfo[colsInfo.length]=colList[i]; 예전방식
		colsInfo2.push(colList[i].getAttribute("data-field"));
	}
	var keyCol = $("#grid1").attr("data-key");
	
	$.ajax({
		url : '/user/list',
		type : 'get',
		success:function(res){
			var list = JSON.parse(res);
			var str ="";
			for(var uc of list){
				var key = uc.uiNo;
				str += "<tr>";
				for(var field of colsInfo2){
					str += "<td class='text-center'>";
					if(field=="BTN"){
						/*
						 * <em class="glyphicon glyphicon-refresh"></em>
						 * <em class="glyphicon glyphicon-trash"></em>
						 */
						  
						str += '<a class="btn btn-default" ><button style="border-radius:4px; border-style: none; background: yellowgreen; color : white" value="수정" onclick="updateUser('+key+')">수정</button><button style="border-radius:4px; border-style: none; background: red; color : white" value="삭제" onclick="deleteUser('+key+')">삭제</button></a>';
						/*
						 * str += '<a class="btn btn-danger"
						 * onclick="deleteUser('+key+')"></a>';
						 */
					}
					else{
						var colName = field.split(",")[0];
						var colType = field.split(",")[1];
						if(colType=="ro"){
							str+=uc[colName];
						}
						else{
							str+="<input type='text' class='form-control' id='"+colName+key+"' value='"+uc[colName]+"'>";					
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

var colsInfo1 = [];

$(document).ready(function firstClassList(){
	var colList = $("#grid2 th[data-field]");
	for(var i=0; i<colList.length;i++){
		// colsInfo[colsInfo.length]=colList[i]; 예전방식
		colsInfo1.push(colList[i].getAttribute("data-field"));
	}
	var keyCol = $("#grid2").attr("data-key");
	$.ajax({
		url : '/class/list',
		type : 'get',
		success:function(res){
			var list = JSON.parse(res);
			var str ="";
			for(var num in list){
				var key = list[num].ciNo;
				str += "<tr id='classTr'>";
				for(var field of colsInfo1){
					str += "<td class='text-center'>";
					if(field=="BTN"){
						str += '<a class="btn btn-default" ><button style="border-radius:4px; border-style: none; background: yellowgreen; color : white" value="수정" onclick="updateClass('+key+')">수정</button><button style="border-radius:4px; border-style: none; background: red; color : white" value="삭제" onclick="deleteClass('+key+')">삭제</button></a>';
					}
					else{
						var colName = field.split(",")[0];
						var colType = field.split(",")[1];
						if(colType=="ro"){
							str+=list[num].ciNo;
						}
						else if(colName=="ciName"){
							str+="<input type='text' class='form-control inclass'  id='"+colName+key+"' value='"+list[num].ciName+"'>";
							
						}
						else if(colName=="ciDesc"){
							str+="<input type='text' class='form-control inclass' id='"+colName+key+"' value='"+list[num].ciDesc+"'>";
						}
					}
					str+="</td>";
				}
				str+='</tr>'; 
			}
			$("#result_tb_class").html(str);
		},
		error:function(xhr,status,error){
			
		}
	});
	
});


function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

$(document).ready(function(){
   var userId = getCookie("userId");
   var saveId = getCookie("saveId");
   if(userId){
      $("#userId").val(userId);
      $("#saveId").prop("checked",true);
   }
});


function insertUser(){ 
	window.open("/index.jsp#insertUser","","width=500,height=800,left=700,top=150");
}


function signin(part){
	if(part==0){
		part="";
	}
	// "uiName,uiAge,uiId,uiPwd,ciNo,address"
	var uiName = $("#uiName"+part).val().trim();
	var uiAge = $("#uiAge"+part).val().trim();
	var uiId = $("#uiId"+part).val().trim();
	var uiPwd = $("#uiPwd"+part).val().trim();
	var ciNo = $("#ciNo"+part).val();
	var address = $("#address"+part).val().trim();
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
				if(part==0){
					alert("유저가 추가되었습니다 새로고침해주세요")
					location.replace("/index.jsp");
				}
				else{
					alert("유저가 추가되었습니다 새로고침해주세요")
					location.reload(true); 
				}
			}
		},
		error:function(xhr,status,error){
			
		}		
	})
}

function checkValue(){
	var userId = $("#userId").val().trim();
	var userPwd = $("#userPwd").val().trim();
	var saveId = $("#saveId").prop("checked");
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
	var param = {uiId:userId, uiPwd:userPwd,saveId:saveId};
	
	param = "param=" + encodeURIComponent(JSON.stringify(param));
	$.ajax({
		url : '/user/login',
		data : param,
		type :'get',
		success:function(res){
			var obj = JSON.parse(res);
			if(obj.login=="ok"){
				/* location.reload(); */
				// location.href="#experience";
				location.replace("/index.jsp");
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



function deleteUser(uiNo){
	var isDelete = confirm("진짜 지우게?");
	var param = "uiNo="+uiNo;
	if(isDelete){
		$.ajax({
			url : '/user/delete',
			type : 'post',
			data : param,
			dataType: 'json',
			success:function(res){
			  // var obj = JSON.parse(res);
			  alert(res.msg);
			  if(res.result=='ok'){
				  location.reload();
			  }
			},
		
			error: function(xhr,status,error){
				
			}
			
		})
	}
}

function updateUser(uiNo){
	var uiName=$("#uiName"+uiNo).val().trim();
	var uiAge=$("#uiAge"+uiNo).val().trim();
	var address=$("#address"+uiNo).val().trim();
	var param={uiNo:uiNo,uiName:uiName,uiAge:uiAge,address:address};
	param="param="+JSON.stringify(param);
	alert(param);
	$.ajax({
		url: '/user/update',
		type: 'post',
		data: param,
		dataType: 'json',
		success: function(res){
			alert(res.msg);
			if(res.result=="ok"){
				location.reload();
			}
			else{
				alert(res.result);
			}
		},
		error: function(xhr,status,error){
			
		}
	
	})
	
	
} 


function deleteClass(ciNo){
	var inFunctionciNo = ciNo;
	var isDelete = confirm("진짜 지우게?");
	var param = "ciNo="+ciNo;
	if(isDelete){
		$.ajax({
			url : '/class/delete',
			type : 'post',
			data : param,
			dataType: 'json',
			success:function(res){
			  // var obj = JSON.parse(res);
			  alert(res.msg);
			  if(res.result=="no"){
				  var isRealDelete = confirm("이 수업을 듣는 학생들이 있어 학생을 지우고서라도 반을 삭제할래?");
				  if(isRealDelete){
					  $.ajax({
							url : '/user/deleteCondition',
							type : 'post',
							data : param,
							dataType: 'json',
							success:function(res){
								alert(res.msg);
								if(res.result=="ok"){
									alert("필요한 조치를 취했고 이제 클래스를 삭제할꺼야!");
									deleteClass(inFunctionciNo);
								}
							},
					  		error:function(xhr,status,error){
					  		
					  		}
					  	})
				  }
			  }
			  if(res.result=='ok'){
				  location.reload();
			  }
			},
			error: function(xhr,status,error){
				
			}
			
		})
	}
}

function updateClass(ciNo){
	var ciName=$("#ciName"+ciNo).val().trim();
	var ciDesc=$("#ciDesc"+ciNo).val().trim();
	var param={ciNo:ciNo,ciName:ciName,ciDesc:ciDesc};
	param="param="+JSON.stringify(param);
	alert(param);
	$.ajax({
		url: '/class/update',
		type: 'post',
		data: param,
		dataType: 'json',
		success: function(res){
			alert(res.msg);
			if(res.result=="ok"){
				location.reload();
			}
		},
		error: function(xhr,status,error){
			
		}
	
	})
	
	
} 

function insertClass(){
	window.open("/index.jsp#insertClass","","width=550,height=500,left=700,top=150");
}

function inputClass(){
	var ciName=$("#ciName").val().trim();
	var ciDesc=$("#ciDesc").val().trim();
	var param={ciName:ciName,ciDesc:ciDesc};
	param="param="+JSON.stringify(param);
	alert(param);
	$.ajax({
		url: '/class/insert',
		type: 'post',
		data: param,
		dataType: 'json',
		success: function(res){
			alert(res.msg);
			if(res.result=="ok"){
				location.reload();
			}
		},
		error: function(xhr,status,error){
			
		}
	
	})
}


function searchUser(){
	var searchValue = $("#searchUser").val().trim();
	var param = "param="+JSON.stringify(searchValue);
	$.ajax({
		url: '/user/searchUser',
		type: 'post',
		data: param,
		dataType: 'json',
		success: function(res){
			
			var list = res;
			var str ="";
			for(var uc of list){
				var key = uc.uiNo;
				str += "<tr>";
				for(var field of colsInfo2){
					str += "<td class='text-center'>";
					if(field=="BTN"){
						/*
						 * <em class="glyphicon glyphicon-refresh"></em>
						 * <em class="glyphicon glyphicon-trash"></em>
						 */
						  
						str += '<a class="btn btn-default" ><button style="border-radius:4px; border-style: none; background: yellowgreen; color : white" value="수정" onclick="updateUser('+key+')">수정</button><button style="border-radius:4px; border-style: none; background: red; color : white" value="삭제" onclick="deleteUser('+key+')">삭제</button></a>';
						/*
						 * str += '<a class="btn btn-danger"
						 * onclick="deleteUser('+key+')"></a>';
						 */
					}
					else{
						var colName = field.split(",")[0];
						var colType = field.split(",")[1];
						if(colType=="ro"){
							str+=uc[colName];
						}
						else{
							str+="<input type='text' class='form-control' id='"+colName+key+"' value='"+uc[colName]+"'>";					
						}
					}
					str+="</td>";
				}
				str+='</tr>'; 
			}
			$("#result_tb").html(str);
			if(res==""){
				$("#result_tb").html("<tr><td colspan='7' align='center'>검색결과가 없습니다.</td></tr>");
			}
		},
		error: function(xhr,status,error){
			
		}
	
	})
	
}

function searchClass(){
	str += "<tr id='classTr'>";
	
	
	str += "<td class='text-center'>";
	var inputTag = $("#result_tb_class");

	
	//str+="<input type='text' class='form-control inclass'  id='"+colName+key+"' value='"+list[num].ciName+"'>";
	var inputText = $("#searchClass").val();
	
	//alert(inputText+"            akadkaskdkasdkasd");
	
	var parentObj = window.document.getElementById("result_tb_class");
	var childObjs = parentObj.getElementsByTagName("tr");
	
	var str="";
	for(var obj of childObjs){
		//alert(obj.innerHTML);
		var o1 = obj.getElementsByTagName("td");
		str += "<tr id='classTr'>";
		for(var o1Obj of o1){
			var html1 = o1Obj.innerHTML;
			//alert(html1);
			
			if(html1.indexOf(inputText)!=-1){
				str+= "<td class='text-center'>"+html1+"</td>";
			}
			
/*			var o2 = obj.getElementsByTagName("input");
			for(var o2Obj of o2){
				
				//alert(o2Obj.value);	
				
			}*/
		}
		str +="</tr>";
				
	}
	inputTag.html(str);
	

//	var div2Child = div2.getElementsByTagName("div");

	

	/*var tbodyObj = document.getElementById("result_tb_class");
	
	var childrens = tbodyObj.childNodes;
	
	for(var children in childrens){
		alert(childrens[children].childNodes[children].childNodes[children].childNodes[children].nodeName+"   자식노드의 자식!!");
	}*/
	
	//$("#result_tb_class").html(str);
}


