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
import com.service.cms_atn.model.Subject;
import com.service.cms_atn.response.BaseResponse;
import com.service.cms_atn.service.SubjectService;


@RestController
@CrossOrigin(origins = "*")
@RequestMapping(ApiContrant.SUBJECT)
public class SubjectController {
	@Autowired
	SubjectService subjectService;

	@PostMapping(value = "/getAll",  produces = "application/json")
	public ResponseEntity<BaseResponse> getAll(@RequestBody Subject subject) {
		return new ResponseEntity<BaseResponse>(subjectService.getAll(subject), HttpStatus.OK);
	}
	
	@PostMapping(value = "/create", produces = "application/json")
	public ResponseEntity<BaseResponse> insert(@RequestBody Subject subject) {
		return new ResponseEntity<BaseResponse>(subjectService.create(subject), HttpStatus.OK);
	}
	
	@PostMapping(value = "/update", produces = "application/json")
	public ResponseEntity<BaseResponse> update(@RequestBody Subject subject) {
		return new ResponseEntity<BaseResponse>(subjectService.update(subject), HttpStatus.OK);
	}
	
	
	@PostMapping(value = "/delete", produces = "application/json")
	public ResponseEntity<BaseResponse> delete(@RequestBody Subject subject) {
		return new ResponseEntity<BaseResponse>(subjectService.delete(subject), HttpStatus.OK);
	}
	
	
}
