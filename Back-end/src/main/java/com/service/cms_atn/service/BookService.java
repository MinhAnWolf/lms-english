package com.service.cms_atn.service;

import org.springframework.web.multipart.MultipartFile;

import com.service.cms_atn.model.Book;
import com.service.cms_atn.response.BaseResponse;

public interface BookService {
	BaseResponse create(Book book);
	BaseResponse getAll(Book book);
	BaseResponse update(Book book);
	BaseResponse delete(Book book);	
	BaseResponse upload(MultipartFile files);	
}
