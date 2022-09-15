package com.service.cms_atn.util;

import java.sql.Date;
import java.util.Random;

import org.springframework.stereotype.Service;

@Service
public class AccountUtil {

	public String provider() {
		Random random = new Random();
		int rand = random.nextInt(10000);
		return "ATN_" + rand;
	}

	public Date dateNow() {
		long millis = System.currentTimeMillis();
		java.sql.Date date = new java.sql.Date(millis);
		return date;
	}
}
