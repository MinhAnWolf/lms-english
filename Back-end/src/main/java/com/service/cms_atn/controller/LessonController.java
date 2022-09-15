package com.service.cms_atn.controller;

import java.io.FileNotFoundException;
import java.io.IOException;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.service.cms_atn.response.BaseResponse;
import com.service.cms_atn.serviceImpl.LessonServiceImpl;
import com.service.cms_atn.constrant.ApiContrant;
import com.service.cms_atn.model.Lesson;

@RestController
@RequestMapping(ApiContrant.LESSION)
@CrossOrigin(origins = "*")
public class LessonController {

	@Autowired
	private LessonServiceImpl lessonService;

	@PostMapping(value = "/getAll")
	public ResponseEntity<BaseResponse> getAll(@RequestBody Lesson lesson) {
		return new ResponseEntity<>(lessonService.getAll(lesson), HttpStatus.OK);
	}

	@PostMapping(value = "/getby-book-unit")
	public ResponseEntity<BaseResponse> getBookAndUnit(@RequestParam("idl") int idl,
			@RequestParam("idb") int idb, @RequestParam("idu") int idu) {
		return new ResponseEntity<>(lessonService.getByBookAndUnit(idl, idb, idu), HttpStatus.OK);
	}

	@PostMapping(value = "/create")
	public ResponseEntity<BaseResponse> create(@RequestBody Lesson lesson) {
		return new ResponseEntity<>(lessonService.create(lesson), HttpStatus.OK);
	}

	@PostMapping(value = "/delete")
	public ResponseEntity<BaseResponse> delete(@RequestBody Lesson lesson) {
		return new ResponseEntity<>(lessonService.delete(lesson), HttpStatus.OK);
	}

	@PostMapping(value = "/upload")
	public ResponseEntity<BaseResponse> upload(@RequestParam("files") MultipartFile files) {
		return new ResponseEntity<>(lessonService.upload(files), HttpStatus.OK);
	}

	@PostMapping(value = "/show")
	public ResponseEntity<BaseResponse> show(@RequestParam("name") String name,
			HttpServletRequest request) throws IOException { 
		String referer = request.getHeader("Referer");

		if (referer == null) {
			return null;
		}

		if (!referer.equals("http://localhost:4200/")) {
			return null;
		} else {
			return new ResponseEntity<>(lessonService.getFile(name) , HttpStatus.OK);
		}

	}
	
	@GetMapping("/get-image")
	public ResponseEntity<InputStreamResource> getImage(
			@RequestParam("name") String name) throws FileNotFoundException {
		InputStreamResource isr = lessonService.getImage(name);
		return ResponseEntity.ok()
				.contentType(MediaType.IMAGE_JPEG)
				.body(isr);
	}

}
