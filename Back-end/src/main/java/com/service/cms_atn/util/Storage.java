package com.service.cms_atn.util;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.service.cms_atn.model.Account;

@Service
public class Storage {
	@Autowired
	HttpServletRequest request;
	@Autowired
	HttpSession httpSession;
	
	public boolean setSession(String key, Object value) {
		httpSession = request.getSession();
	    httpSession.setAttribute(key, value);
	    if(checkSession(key) == true) {
	    	return true;
	    }
	    return false;
	}
	
	public boolean checkSession(String key) {
	 Object object = httpSession.getAttribute(key);
	 if(object != null) {
		 return true;
	 }
	 return false;
	}
	
	public Object getSession(String key) {
		 Object object = new Object();
		try {
			 object = httpSession.getAttribute(key);
		}catch(IllegalStateException e) {
			System.out.println("lỗi getSession");
		}
		 return object;
	}
	
	public boolean clearSession(String key) {
		httpSession.removeAttribute(key);
		if(checkSession(key) == true) {
			// hủy không thành công
			return false;
		}
		// hủy thành công
		return true;
	}
	
	public String setCookie() {
		return "update later";
	}
	
	public String getCookie() {
		return "update later";
	}
}
