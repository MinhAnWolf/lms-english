package com.service.cms_atn.service;

import com.service.cms_atn.model.Subject;

import com.service.cms_atn.response.BaseResponse;

public interface SubjectService {
	BaseResponse create(Subject subject);
	BaseResponse getAll(Subject subject);
	BaseResponse update(Subject subject);
	BaseResponse delete(Subject subject);	
}
