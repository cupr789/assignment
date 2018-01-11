package com.iot.test.dao.impl;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.iot.test.common.DBCon;
import com.iot.test.dao.ClassDao;
import com.iot.test.utils.DBUtil;
import com.iot.test.vo.ClassInfo;
import com.iot.test.vo.UserClass;

public class ClassDaoImpl implements ClassDao{

	@Override
	public List<ClassInfo> selectClassList() {
		List<ClassInfo> classList = new ArrayList<ClassInfo>();
		Connection con = null;
		PreparedStatement ps = null;
		ResultSet rs = null;
		try {
			con = DBCon.getCon();
			String sql = "select * from class_info";
			ps = con.prepareStatement(sql);
			rs = ps.executeQuery();
			
			while (rs.next()) {
				ClassInfo ci = new ClassInfo();
				ci.setCino(rs.getInt("cino"));
				ci.setCiname(rs.getString("ciname"));
				ci.setCidesc(rs.getString("cidesc"));
				classList.add(ci);			
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}finally {
			if(rs!=null) {
				
			}
		}

		return classList;
	}

	@Override
	public int deleteClass(ClassInfo ci) {
		Connection con = null;
		PreparedStatement ps = null;

		try {
			con = DBCon.getCon();
			String sql = "delete from class_info where cino=?";
			ps = con.prepareStatement(sql);
			ps.setInt(1, ci.getCino());
			int result = ps.executeUpdate();
			System.out.println("조건클래스 삭제결과값은?  "+result);
			return result;
		} catch (SQLException e) {
			
		} finally {
			DBUtil.closeAll(null, con, ps);
		}
		return 0;
	}

	@Override
	public int updateClass(ClassInfo ci) {
		Connection con = null;
		PreparedStatement ps = null;
		try {
			con = DBCon.getCon();
			String sql = "update class_info set ciname=?,cidesc=? where cino=?";
			ps = con.prepareStatement(sql);
			ps.setString(1, ci.getCiname());
			ps.setString(2, ci.getCidesc());
			ps.setInt(3, ci.getCino());
			return ps.executeUpdate();
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			DBUtil.closeAll(null, con, ps);
		}
		return 0;
	}

	@Override
	public int insertClass(ClassInfo ci) {
		Connection con = null;
		PreparedStatement ps = null;

		try {
			con = DBCon.getCon();
			String sql = "insert into class_info(ciname,cidesc) values(?,?)";
			ps = con.prepareStatement(sql);
			ps.setString(1, ci.getCiname());
			ps.setString(2, ci.getCidesc());
			return ps.executeUpdate();
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			DBUtil.closeAll(null, con, ps);
		}
		return 0;
	}

}
