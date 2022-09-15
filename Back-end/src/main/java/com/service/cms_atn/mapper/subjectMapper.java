package com.service.cms_atn.mapper;

import java.util.List;

import org.springframework.stereotype.Service;

import com.service.cms_atn.model.Subject;

@Service
public interface subjectMapper {
	
	List<Subject> getAll(Subject subject);
	
	List<Subject> findAllById(Subject subject);
	
	void insert(Subject subject);
	
	void delete(Subject subject);
	
	void update(Subject subject);
}
