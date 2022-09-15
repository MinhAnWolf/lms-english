package com.service.cms_atn.config;

import java.io.IOException;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.filter.GenericFilterBean;
import org.springframework.web.filter.OncePerRequestFilter;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import com.service.cms_atn.mapper.accountMapper;
import com.service.cms_atn.model.Account;
import com.service.cms_atn.util.Storage;
import com.service.cms_atn.util.TokenUtils;

import io.jsonwebtoken.Claims;

@Component
public class TransactionFilter extends  OncePerRequestFilter  {

	@Autowired
	TokenUtils tokenUtils;
	@Autowired
	accountMapper accountMapper;
	@Autowired
	Storage storage;
		
	@CrossOrigin("*")
	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain chain)
			throws ServletException, IOException {
		HttpServletRequest httpRequest = (HttpServletRequest) request;
		HttpServletResponse httpResponse = (HttpServletResponse) response;
		
		httpResponse.setHeader("Access-Control-Allow-Origin", "*");
		httpResponse.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
		httpResponse.setHeader("Access-Control-Max-Age", "3600");
		httpResponse.setHeader("Access-Control-Allow-Headers", "authentication, content-type, xsrf-token");
		httpResponse.addHeader("Access-Control-Expose-Headers", "xsrf-token");
		
		String token = httpRequest.getHeader("authentication");
		String uri = httpRequest.getRequestURI();
		
		System.out.println("Token " + token );

		
		if (uri.contains("login")) {
			chain.doFilter(request, response);
		}

		
		if (token == null) {
			return;
		}

		if (tokenUtils.validateToken(token) == true) {
			Claims claims = tokenUtils.getAllClaimsFromToken(token);
			String id = claims.getSubject();
			Account account = accountMapper.getById(id);
			
			if (account == null) {
				System.out.println("account không tồn tại!");
				return;
			}
			
			storage.setSession("auth", account);
			System.out.println(account.getUsername());
			
			if (account.getRole().equals("USER") ) {
				if (uri.contains("getAll")
					|| uri.contains("getby-book-unit")
					|| uri.contains("show")) {
					chain.doFilter(request, response);
				}
				return;
			}	
			
			chain.doFilter(request, response);
			return;
		}
		
	}
	
}