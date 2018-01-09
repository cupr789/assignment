package com.iot.test.vo;

public class ClassInfo {
	private int ciNo;
	private String ciName;
	private String ciDesc;

	public int getCino() {
		return ciNo;
	}

	public void setCino(int cino) {
		this.ciNo = cino;
	}

	public String getCiname() {
		return ciName;
	}

	public void setCiname(String ciname) {
		this.ciName = ciname;
	}

	public String getCidesc() {
		return ciDesc;
	}

	public void setCidesc(String cidesc) {
		this.ciDesc = cidesc;
	}

	@Override
	public String toString() {
		return " [ciNo=" + ciNo + ", ciName=" + ciName + ", ciDesc=" + ciDesc + "]";
	}
}
