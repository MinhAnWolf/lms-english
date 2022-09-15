package com.service.cms_atn.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.service.cms_atn.constrant.*;
import com.service.cms_atn.model.Account;
import com.service.cms_atn.response.BaseResponse;
import com.service.cms_atn.service.AccountService;
import com.service.cms_atn.util.Storage;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping(ApiContrant.ACCOUNT)
public class AccountController {

	@Autowired
	AccountService accountService;
	@Autowired
	Storage storage;

	@PostMapping(value = "/getAll",consumes = "application/json")
	public ResponseEntity<BaseResponse> getAll(@RequestBody Account account) {
		return new ResponseEntity<BaseResponse>(accountService.getAll(account), HttpStatus.OK);
	}
	
	@PostMapping(value = "/login",consumes = "application/json")
	public ResponseEntity<BaseResponse> login(@RequestBody Account account){
		return new ResponseEntity<BaseResponse>(accountService.login(account), HttpStatus.OK);
	}
	
	@PostMapping(value = "/register",consumes = "application/json")
	public ResponseEntity<BaseResponse> register(@RequestBody Account account){
		return new ResponseEntity<BaseResponse>(accountService.register(account),HttpStatus.OK);
	}
	
	@PostMapping(value = "/update",consumes = "application/json")
	public ResponseEntity<BaseResponse> update(@RequestBody Account account){
		return new ResponseEntity<BaseResponse>(accountService.update(account),HttpStatus.OK);
	}
	
	@PostMapping(value = "/delete",consumes = "application/json")
	public ResponseEntity<BaseResponse> delete(@RequestBody Account account){
		return new ResponseEntity<BaseResponse>(accountService.delete(account),HttpStatus.OK);
	}
	
	@PostMapping(value = "/check-login")
	public ResponseEntity<BaseResponse> check(){
		return new ResponseEntity<BaseResponse>(accountService.check(),HttpStatus.OK);
	}
	
	@PostMapping(value = "/login-out")
	public ResponseEntity<BaseResponse> loginOut(){
		return new ResponseEntity<BaseResponse>(accountService.loginOut(),HttpStatus.OK);
	}
	
	@PostMapping(value = "/change-password")
	public ResponseEntity<BaseResponse> changePassword(@RequestBody Account account){
		return new ResponseEntity<BaseResponse>(accountService.changePassword(account),HttpStatus.OK);
	}
	
}
