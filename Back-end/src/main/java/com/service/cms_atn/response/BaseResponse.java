package com.service.cms_atn.response;

public class BaseResponse {

	private String errCode;
	private String errDesc;
	private Object data;

	public BaseResponse(String errCode, String errDesc, Object data) {
		this.errCode = errCode;
		this.errDesc = errDesc;
		this.data = data;
	}

	public BaseResponse(String errCode, String errDesc) {
		this.errCode = errCode;
		this.errDesc = errDesc;
	}

	public BaseResponse() {
		this.errCode = null;
		this.errDesc = null;
		this.data = null;
	}

	public BaseResponse(Object data) {
		this.data = data;
	}

	public String getErrCode() {
		return errCode;
	}

	public void setErrCode(String errCode) {
		this.errCode = errCode;
	}

	public String getErrDesc() {
		return errDesc;
	}

	public void setErrDesc(String errDesc) {
		this.errDesc = errDesc;
	}

	public Object getData() {
		return data;
	}

	public void setData(Object data) {
		this.data = data;
	}

}
