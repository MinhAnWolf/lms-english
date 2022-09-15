package com.service.cms_atn.mapper;

import java.util.List;

import org.springframework.stereotype.Service;

import com.service.cms_atn.model.Book;

@Service
public interface bookMapper {
	List<Book> getAll(Book book);
	
	List<Book> findAllById(Book book);
	
	void insert(Book book);
	
	void delete(Book book);
	
	void update(Book book);
}
