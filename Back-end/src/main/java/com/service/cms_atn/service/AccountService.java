package com.service.cms_atn.service;

import com.service.cms_atn.model.Account;
import com.service.cms_atn.response.BaseResponse;

public interface AccountService {
		BaseResponse getAll(Account account);
		BaseResponse update(Account account);
		BaseResponse delete(Account account);
		BaseResponse login(Account account);
		BaseResponse register(Account account);
		BaseResponse check();
		BaseResponse loginOut();
		BaseResponse changePassword(Account account);
}
