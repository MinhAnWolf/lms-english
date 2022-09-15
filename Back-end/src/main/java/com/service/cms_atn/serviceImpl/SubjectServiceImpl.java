package com.service.cms_atn.serviceImpl;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.service.cms_atn.mapper.subjectMapper;
import com.service.cms_atn.model.Subject;
import com.service.cms_atn.response.BaseResponse;
import com.service.cms_atn.service.SubjectService;

@Service
public class SubjectServiceImpl implements SubjectService{
	
	@Autowired
	subjectMapper subjectMapper;
	
	@Override
	public BaseResponse create(Subject subject) {
		try {
			subjectMapper.insert(subject);
			return new BaseResponse("1", "Insert success!");
		} catch (Exception e) {
			return new BaseResponse("-1", "Insert fail!");
		}	
	}

	@Override
	public BaseResponse getAll(Subject subject) {
		return new BaseResponse(subjectMapper.getAll(subject));
	}

	@Override
	public BaseResponse update(Subject subject) {
		try {
			subjectMapper.update(subject);
			return new BaseResponse("1", "Update success!");
		} catch (Exception e) {
			return new BaseResponse("-1", "Update fail!");
		}
	}

	@Override
	public BaseResponse delete(Subject subject) {
		try {
			subjectMapper.delete(subject);
			return new BaseResponse("1", "Delete success!");
		} catch (Exception e) {
			System.out.println(e.getMessage());
			return new BaseResponse("-1", "Delete fail!");
		}		
	}

}
