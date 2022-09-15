package com.service.cms_atn.response;

public class BaseListResponse extends BaseResponse {
	
	private int totalRecored;
	private int limit;
	
	
	public BaseListResponse(String errCode, String errDesc, Object data, int totalRecored, int limit) {
		super(errCode, errDesc, data);
		this.totalRecored = totalRecored;
		this.limit = limit;
	}
	
	public BaseListResponse(Object data, int totalRecored, int limit) {
		super(data);
		this.totalRecored = totalRecored;
		this.limit = limit;
	}

	public int getTotalRecored() {
		return totalRecored;
	}

	public void setTotalRecored(int totalRecored) {
		this.totalRecored = totalRecored;
	}

	public int getLimit() {
		return limit;
	}

	public void setLimit(int limit) {
		this.limit = limit;
	}
	
	
}
