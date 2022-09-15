package com.service.cms_atn.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.service.cms_atn.constrant.ApiContrant;
import com.service.cms_atn.model.Unit;
import com.service.cms_atn.response.BaseResponse;
import com.service.cms_atn.serviceImpl.UnitServiceImpl;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping(ApiContrant.UNIT)
public class UnitController {

	@Autowired
	private UnitServiceImpl unitService;

	@PostMapping(value = "/getAll", produces = "Application/json")
	public ResponseEntity<BaseResponse> getAll(@RequestBody Unit unit) {
		return new ResponseEntity<BaseResponse>(unitService.getAll(unit), HttpStatus.OK);
	}

	@PostMapping(value = "/create", produces = "Application/json")
	public ResponseEntity<BaseResponse> create(@RequestBody Unit unit) {
		return new ResponseEntity<BaseResponse>(unitService.create(unit), HttpStatus.OK);
	}
	
	@PostMapping(value = "/update", produces = "Application/json")
	public ResponseEntity<BaseResponse> update(@RequestBody Unit unit) {
		return new ResponseEntity<BaseResponse>(unitService.update(unit), HttpStatus.OK);
	}

	@PostMapping(value = "/delete")
	public ResponseEntity<BaseResponse> delete(@RequestBody Unit unit) {
		return new ResponseEntity<BaseResponse>(unitService.delete(unit), HttpStatus.OK);
	}

}
