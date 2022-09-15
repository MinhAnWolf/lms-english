package com.service.cms_atn.service;

import com.service.cms_atn.model.Lesson;
import com.service.cms_atn.response.BaseResponse;

public interface LessonService {
	BaseResponse getAll(Lesson lesson);
	BaseResponse getByBookAndUnit(int lessonId, int bookId, int unitId);
	BaseResponse create(Lesson lesson);
	BaseResponse update(Lesson lesson);
	BaseResponse delete(Lesson lesson);
}
