package com.iot.test.service.impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.google.gson.Gson;
import com.iot.test.dao.UserDao;
import com.iot.test.dao.impl.UserDaoImpl;
import com.iot.test.service.UserService;
import com.iot.test.vo.ClassInfo;
import com.iot.test.vo.UserClass;

public class UserServiceImpl implements UserService{
	
	private Gson gs = new Gson();
	private UserDao ud = new UserDaoImpl(); 
	private UserClass uc = new UserClass();
	private ClassInfo ci = new ClassInfo();
	@Override
	public HashMap<String, Object> login(HttpServletRequest req, HttpServletResponse res) {
		
		UserClass uc = gs.fromJson(req.getParameter("param"), UserClass.class);
		UserClass checkUc = ud.selectUser(uc.getUiId());
		HashMap<String, Object> hm = new HashMap<String, Object>();
		hm.put("msg", "로그인 성공했어!!");
		hm.put("login", "ok");
		
		if(checkUc!=null) {
			if(!checkUc.getUiPwd().equals(uc.getUiPwd())) {
				hm.put("msg", "비밀번호 확인해!");
				hm.put("login", "no");
			}
			else {
				System.out.println(uc.isSaveId()+"             isSaveId가 뭐야?");
				Cookie cId = new Cookie("userId", uc.getUiId());
				cId.setPath("/");
				Cookie cSave = new Cookie("saveId", ""+uc.isSaveId());
				cSave.setPath("/");
				int maxAge=0;
				if(uc.isSaveId()) {
					maxAge=24*60*60;
				}
				cId.setMaxAge(maxAge);
				cSave.setMaxAge(maxAge);
				res.addCookie(cId);
				res.addCookie(cSave);
				HttpSession hs = req.getSession();
				hs.setAttribute("user", checkUc);
			}
		}
		else {
			hm.put("msg", "아이디 확인해!");
			hm.put("login", "no");
		}
		return hm;
	}

	@Override
	public void logout(HttpServletRequest req) {
		HttpSession hs = req.getSession();
		hs.invalidate();
		
	}

	@Override
	public void signin(HttpServletRequest req) {
		
		String json=req.getParameter("param");
		UserClass uc = gs.fromJson(json, UserClass.class);
		int result = ud.insertUser(uc);
		Map<String, String> rm = new HashMap<String,String>();
		rm.put("result", "no");
		rm.put("msg", "회원가입실패");
		if(result==1) {
			rm.put("result", "ok");
			rm.put("msg","회원가입성공");
		}
		req.setAttribute("resStr", gs.toJson(rm));
		
	}

	@Override
	public ArrayList<UserClass> getUserList() {
		return ud.selectUserList();
	}

	@Override
	public String deleteUser(HttpServletRequest req) {
		int uiNo = Integer.parseInt(req.getParameter("uiNo"));
		uc.setUiNo(uiNo);
		int result = ud.deleteUser(uc);
		Map<String, String> rm = new HashMap<String, String>();
		rm.put("result", "no");
		rm.put("msg", "삭제 실패");
		if (result == 1) {
			rm.put("result", "ok");
			rm.put("msg", "삭제 성공");
		}
		return gs.toJson(rm);
	}

	@Override
	public String deleteConditionUser(HttpServletRequest req) {
		int result =0;
		int ciNo = Integer.parseInt(req.getParameter("ciNo"));
		System.out.println(ciNo+"          내가원하는 cino");
		ci.setCino(ciNo);
		result = ud.deleteConditionUser(ci);
		Map<String, String> rm = new HashMap<String, String>();
		rm.put("result", "no");
		rm.put("msg", "대상유저삭제 실패");
		if (result >= 1) {
			rm.put("result", "ok");
			rm.put("msg", "대상유저삭제 성공");
		}
		return gs.toJson(rm);
	}

	@Override
	public String updateUser(HttpServletRequest req) {
		String param = req.getParameter("param");
		UserClass uc = gs.fromJson(param, UserClass.class);
		int result = ud.updateUser(uc);
		Map<String, String> rm = new HashMap<String, String>();
		rm.put("result", "no");
		rm.put("msg", "수정 실패");
		if (result == 1) {
			rm.put("result", "ok");
			rm.put("msg", "수정 성공");
		}
		return gs.toJson(rm);
	}

	@Override
	public ArrayList<UserClass> getUser(HttpServletRequest req) {
		String inputValue = req.getParameter("param");
		 System.out.println(ud.searchUserList(inputValue)+"            그래서 뭐ㅏ냐고");
		return ud.searchUserList(inputValue);
	}

}
