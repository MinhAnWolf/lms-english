package com.service.cms_atn.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.service.cms_atn.mapper.accountMapper;
import com.service.cms_atn.model.Account;
import com.service.cms_atn.response.BaseJwtResponse;
import com.service.cms_atn.response.BaseListResponse;
import com.service.cms_atn.response.BaseResponse;
import com.service.cms_atn.service.AccountService;
import com.service.cms_atn.util.AccountUtil;
import com.service.cms_atn.util.Storage;
import com.service.cms_atn.util.TemplateValidate;
import com.service.cms_atn.util.TokenUtils;

@Service
public class AccountServiceImpl implements AccountService {

	@Autowired
	AccountUtil accountUtil;
	@Autowired
	accountMapper accountMapper;
	@Autowired
	Storage storage;
	@Autowired
	TokenUtils tokenUtils;

	@Override
	public BaseResponse getAll(Account account) {
		if (account.getUsername() == null) {
			account.setUsername("");
		}
		if (account.getLevels() == null) {
			account.setLevels("");
		}
		List<Account> list = accountMapper.getAll(account);
		int total = accountMapper.countRecored();
		BaseResponse baseResponse = new BaseListResponse(list, total, account.getLimit());
		return baseResponse;
	}

	@Override
	public BaseResponse update(Account account) {
		System.out.println(account.getId());
		if (!account.getUsername().matches(TemplateValidate.USERNAME)) {
			return baseResponse("-1", "username wrong format !", null);
		}
		int result = accountMapper.update(account);
		if (result == 1) {
			return baseResponse("0", "update success !", null);
		}
		return baseResponse("1", "update fail !", null);
	}

	@Override
	public BaseResponse delete(Account account) {
		int result = accountMapper.delete(account.getId());
		if (result == 1) {
			return baseResponse("0", "delete success !", null);
		}
		return baseResponse("1", "delete fail !", null);
	}

	BaseResponse baseResponse(String code, String desc, Object data) {
		BaseResponse baseResponse = new BaseResponse();
		baseResponse.setErrCode(code);
		baseResponse.setErrDesc(desc);
		baseResponse.setData(data);
		return baseResponse;
	}
	
	//BaseJwtResponse(tokenUtils.generateTokenString(account),account.getRole())
	@Override
	public BaseResponse login(Account accountRequest) {
		Account account = accountMapper.login(accountRequest);
		if (account != null) {
			String token = tokenUtils.generateTokenString(account);
			storage.setSession("auth", account);
			return new BaseJwtResponse(token, account.getRole());
		}
		return new BaseResponse("1", "Login fail !");
	}

	@Override
	public BaseResponse register(Account account) {
		try {
			if (accountMapper.countUsername(account.getUsername()) == 1) {
				return baseResponse("-1", "Student invalid !", null);
			}
			if (!account.getUsername().matches(TemplateValidate.USERNAME)) {
				return baseResponse("-1", "username wrong format !", null);
			}

			if (!account.getPassword().matches(TemplateValidate.PASSWORD)) {
				return baseResponse("-1", "password wrong format !", null);
			}
			
			account.setId(accountUtil.provider());
			account.setCreated(accountUtil.dateNow());
			account.setRole("USER");
			int result = accountMapper.register(account);
			if (result == 1) {
				return baseResponse("0", "Register success !", null);
			}
		} catch (NullPointerException e) {
			baseResponse("1", "Register fail !", null);
		}

		return baseResponse("1", "Register fail !", null);
	}

	@Override
	public BaseResponse check() {
		Account account = (Account) storage.getSession("account");
		if (account != null) {
			return baseResponse("0", "đập chớt cha mày h chớ hack", account);
		}
		return baseResponse("1", "đập chớt cha mày h chớ hack", null);
	}

	@Override
	public BaseResponse loginOut() {
		BaseResponse baseResponse = new BaseResponse();
		if (storage.clearSession("account") == true) {
			baseResponse.setErrCode("0");
			return baseResponse;
		}
		baseResponse.setErrCode("1");
		return baseResponse;
	}

	@Override
	public BaseResponse changePassword(Account account) {
		if (!account.getPassword().matches(TemplateValidate.PASSWORD)) {
			return baseResponse("-1", "password wrong format !", null);
			
		}
		int result = accountMapper.changePassword(account);
		if(result == 1) {
			return baseResponse("0", "Update Susses", null);
		}
		return baseResponse("1", "Update Fail", null);
	}
}
