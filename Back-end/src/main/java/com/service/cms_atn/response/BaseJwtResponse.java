package com.service.cms_atn.response;

public class BaseJwtResponse extends BaseResponse{
	
	private String role;
	
	public BaseJwtResponse(String errCode, String errDesc, Object data,String role) {
		super(errCode, errDesc, data);
		this.role = role;
	}
	
	public BaseJwtResponse(Object data,String role) {
		super(data);
		this.role = role;
	}
	
	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}
	
}
