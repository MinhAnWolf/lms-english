package com.service.cms_atn.util;

import java.util.Date;

import org.springframework.stereotype.Service;

import com.service.cms_atn.model.Account;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@Service
public class TokenUtils {

	private final String JWT_SECRET = "JUBNXVFO";
	private final String JWT_KEY_VIRTUAL = "ATN";
	private final long JWT_EXPORATION = 7000L;

	public String generateTokenString(Account account) {
		Date now = new Date();
		Date expirydate = new Date(now.getTime() + JWT_EXPORATION);
		return JWT_KEY_VIRTUAL + " " 
		+ Jwts.builder().setSubject(account.getId()).setIssuedAt(expirydate)
		.signWith(SignatureAlgorithm.HS512,JWT_SECRET).compact();
	}
	
	public Claims getAllClaimsFromToken(String tokenRequest) {
		String[] token = tokenRequest.split("ATN ");
		return Jwts.parser().setSigningKey(JWT_SECRET).parseClaimsJws(token[1])
		.getBody();
	}
	
	public boolean validateToken(String token) {
		Claims claims = getAllClaimsFromToken(token);
		if(claims != null) {
			return true;
		}
		return false;
	}
}
