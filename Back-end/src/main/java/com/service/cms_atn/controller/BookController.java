package com.service.cms_atn.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.service.cms_atn.constrant.ApiContrant;
import com.service.cms_atn.model.Book;
import com.service.cms_atn.response.BaseResponse;
import com.service.cms_atn.service.BookService;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping(ApiContrant.BOOK)
public class BookController {
	@Autowired
	BookService bookService;

	@PostMapping(value = "/getAll",  produces = "application/json")
	public ResponseEntity<BaseResponse> getAll(@RequestBody Book book) {
		return new ResponseEntity<BaseResponse>(bookService.getAll(book), HttpStatus.OK);
	}
	
	@PostMapping(value = "/create", produces = "application/json")
	public ResponseEntity<BaseResponse> create(@RequestBody Book book) {
		return new ResponseEntity<>(bookService.create(book), HttpStatus.OK);
	}
	
	@PostMapping(value = "/update", produces = "application/json")
	public ResponseEntity<BaseResponse> update(@RequestBody Book book) {
		return new ResponseEntity<>(bookService.update(book), HttpStatus.OK);
	}
	
	
	@PostMapping(value = "/delete", produces = "application/json")
	public ResponseEntity<BaseResponse> delete(@RequestBody Book book) {
		return new ResponseEntity<>(bookService.delete(book), HttpStatus.OK);
	}
	
	@PostMapping(value = "/upload")
	public ResponseEntity<BaseResponse> upload(@RequestParam("files") MultipartFile files) {
		return new ResponseEntity<>(bookService.upload(files), HttpStatus.OK);
	}
}
