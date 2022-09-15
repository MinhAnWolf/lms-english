package com.service.cms_atn;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@MapperScan(basePackages = {"com.service.cms_atn.mapper"})
@SpringBootApplication
public class CmsAtnApplication {

	public static void main(String[] args) {
		SpringApplication.run(CmsAtnApplication.class, args);
	}

}
