package com.iot.test.service;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import com.iot.test.vo.ClassInfo;

public interface ClassService {
	List<ClassInfo> getClassList();
	String deleteClass(HttpServletRequest req);
	String updateClass(HttpServletRequest req);
	String insertClass(HttpServletRequest req);
}
