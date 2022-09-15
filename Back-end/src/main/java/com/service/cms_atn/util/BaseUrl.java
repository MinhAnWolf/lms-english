package com.service.cms_atn.util;

import com.service.cms_atn.constrant.ApiContrant;

public interface BaseUrl {
	//http://localhost:8080
	static final String MAIN_URL = "/api/learning-atn";
	static final String ACCOUNT_GETALL = MAIN_URL + ApiContrant.ACCOUNT + "/getAll";
	static final String ACCOUNT_REGISTER = MAIN_URL + ApiContrant.ACCOUNT + "/register";
	static final String ACCOUNT_UPDATE = MAIN_URL + ApiContrant.ACCOUNT + "/update";
	static final String ACCOUNT_DELETE = MAIN_URL + ApiContrant.ACCOUNT + "/delete";
	static final String ACCOUNT_LOGIN = MAIN_URL + ApiContrant.ACCOUNT + "/login";
	static final String ACCOUNT_CHANGE_PASSWORD = MAIN_URL + ApiContrant.ACCOUNT + "/change-password";
	
	// url lesson
	static final String LESSON_GETALL = MAIN_URL + ApiContrant.LESSION + "/getAll";
	static final String LESSON_GET_BY_BOOK_UNIT = MAIN_URL + ApiContrant.LESSION + "/getby-book-unit";
	static final String LESSON_CREATE = MAIN_URL + ApiContrant.LESSION + "/create";
	static final String LESSON_DELETE = MAIN_URL + ApiContrant.LESSION + "/delete";
	static final String LESSON_UPLOAD = MAIN_URL + ApiContrant.LESSION + "/upload";
	static final String LESSON_SHOW = MAIN_URL + ApiContrant.LESSION + "/show";
	static final String LESSON_GET_IMAGE = MAIN_URL + ApiContrant.LESSION + "/get-image";
}
