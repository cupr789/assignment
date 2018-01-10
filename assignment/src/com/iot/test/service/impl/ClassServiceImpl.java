package com.iot.test.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import com.google.gson.Gson;
import com.iot.test.dao.ClassDao;
import com.iot.test.dao.impl.ClassDaoImpl;
import com.iot.test.service.ClassService;
import com.iot.test.vo.ClassInfo;

public class ClassServiceImpl implements ClassService{
	private ClassDao cdao = new ClassDaoImpl();
	private ClassInfo ci = new ClassInfo();
	private Gson gs = new Gson();
	
	@Override
	public List<ClassInfo> getClassList() {
		return cdao.selectClassList();
	}
	@Override
	public String deleteClass(HttpServletRequest req) {
		int ciNo = Integer.parseInt(req.getParameter("ciNo"));
		System.out.println(ciNo+"             ?ciNo가 뭐야");
		ci.setCino(ciNo);
		int result = cdao.deleteClass(ci);
		Map<String, String> rm = new HashMap<String, String>();
		rm.put("result", "no");
		rm.put("msg", "삭제실패");
		if (result == 1) {
			rm.put("result", "ok");
			rm.put("msg", "삭제 성공");
		}
		return gs.toJson(rm);
	}
	@Override
	public String updateClass(HttpServletRequest req) {

		String param = req.getParameter("param");
		ClassInfo ci = gs.fromJson(param, ClassInfo.class);
		int result = cdao.updateClass(ci);
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
	public String insertClass(HttpServletRequest req) {
		String param = req.getParameter("param");
		ClassInfo ci = gs.fromJson(param, ClassInfo.class);
		int result = cdao.insertClass(ci);
		Map<String, String> rm = new HashMap<String, String>();
		rm.put("result", "no");
		rm.put("msg", "강의 입력 실패");
		if (result == 1) {
			rm.put("result", "ok");
			rm.put("msg", "강의 입력  성공");
		}
		return gs.toJson(rm);
	}

}
