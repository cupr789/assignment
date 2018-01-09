package com.iot.test.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.iot.test.service.ClassService;
import com.iot.test.service.UserService;
import com.iot.test.service.impl.ClassServiceImpl;
import com.iot.test.service.impl.UserServiceImpl;
import com.iot.test.vo.ClassInfo;
import com.iot.test.vo.UserClass;

public class UserServlet extends HttpServlet {
	UserService us = new UserServiceImpl();
	ClassService cs = new ClassServiceImpl();
	Gson gs = new Gson();
	public String getCommand(String uri) {
		int idx = uri.lastIndexOf("/");
		if (idx != -1) {			
			return uri.substring(idx+1);
		}
		return "";
	}

	@Override
	public void doGet(HttpServletRequest req, HttpServletResponse res) throws IOException, ServletException {
		doProcess(req, res);
	}

	@Override
	public void doPost(HttpServletRequest req, HttpServletResponse res) throws IOException, ServletException {
		doProcess(req, res);
	}

	public void doProcess(HttpServletRequest req, HttpServletResponse res) throws IOException, ServletException {
		req.setCharacterEncoding("utf-8");
		res.setCharacterEncoding("utf-8");
		res.setContentType("text/html;charset=utf-8");
		PrintWriter out =res.getWriter();
		String uri = req.getRequestURI();
		System.out.println("uri?? "+ uri);
		String cmd = getCommand(uri);
		System.out.println(cmd);
		if(cmd.equals("login")) {
			HashMap<String, Object> hm = us.login(req);
			out.println(gs.toJson(hm));
		}else if(cmd.equals("logout")) {
			us.logout(req);
			out.println("#about");
			//rd.forward(req, res);
		}else if(cmd.equals("signin")) {
			us.signin(req);
			System.out.println(req.getAttribute("resStr")+"            sss");
			out.println(req.getAttribute("resStr"));
		}else if(cmd.equals("list")) {
			ArrayList<UserClass> userList = us.getUserList();
			//List<ClassInfo> classList = cs.getClassList();
			//HashMap<String , List> rm = new HashMap<String,List>();
			//rm.put("ul", userList);
			//rm.put("cl",classList);
			out.println(gs.toJson(userList));
		}else if(cmd.equals("deleteCondition")) {
			out.println(us.deleteConditionUser(req));
		}
	}
}
