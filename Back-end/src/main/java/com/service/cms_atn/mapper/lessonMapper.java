package com.service.cms_atn.mapper;

import java.util.List;

import org.springframework.stereotype.Service;

import com.service.cms_atn.model.Lesson;

@Service
public interface lessonMapper {
	List<Lesson> getAll(Lesson lesson);
	
	List<Lesson> getByBookAndUnit(Lesson lesson);
	
	int create(Lesson lesson);
	
	int delete(Lesson lesson);
}
