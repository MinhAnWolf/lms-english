package com.service.cms_atn.mapper;

import java.util.List;
import org.springframework.stereotype.Service;

import com.service.cms_atn.model.Account;

@Service
public interface accountMapper {
		List<Account> getAll(Account account);
		Account login(Account account);
		Integer register(Account account);
		Integer update(Account account);
		Integer delete(String id);
		Integer countRecored();
		Integer countUsername(String id);
		Integer changePassword(Account account);
		Account getById(String id);
}
