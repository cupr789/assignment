package com.iot.test.dao;

import java.util.ArrayList;

import com.iot.test.vo.ClassInfo;
import com.iot.test.vo.UserClass;

public interface UserDao {
	ArrayList<UserClass> selectUserList();
	UserClass selectUser(int uiNo);
	UserClass selectUser(String uiId);
	int insertUser(UserClass uc);
	int updateUser(UserClass uc);
	int deleteUser(UserClass uc);
	int deleteConditionUser(ClassInfo ci);
	ArrayList<UserClass> searchUserList(String inputValue);
}
