package com.service.cms_atn.serviceImpl;

import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;
import java.util.List;

import javax.imageio.ImageIO;
import javax.servlet.ServletContext;

import org.apache.pdfbox.pdmodel.PDDocument;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.apache.pdfbox.pdmodel.PDPage;


import com.service.cms_atn.mapper.bookMapper;
import com.service.cms_atn.model.Account;
import com.service.cms_atn.model.Book;
import com.service.cms_atn.response.BaseResponse;
import com.service.cms_atn.service.BookService;
import com.service.cms_atn.util.FileUtils;
import com.service.cms_atn.util.Storage;

@Service
public class BookServiceImpl implements BookService {
	
	@Autowired
	bookMapper bookMapper;
	
	@Autowired
	private ServletContext app;
	
	@Autowired
	private Storage storage;

	@Override
	public BaseResponse create(Book book) {
		try {
			bookMapper.insert(book);
			return new BaseResponse("1", "Insert success!");
		} catch (Exception e) {
			return new BaseResponse("-1", "Insert fail!");
		}
	}

	@Override
	public BaseResponse getAll(Book book) {
		Account account = (Account) storage.getSession("auth");
		if (book.getBookId() < 0) {
			book.setBookId(Integer.valueOf(account.getLevels()));
		}
		return new BaseResponse(bookMapper.getAll(book));
	}

	@Override
	public BaseResponse update(Book book) {
		try {
			bookMapper.update(book);
			return new BaseResponse("1", "Update success!");
		} catch (Exception e) {
			return new BaseResponse("-1", "Update fail!");
		}
	}
	
	
	
	@Override
	public BaseResponse delete(Book book) {
		try {
			bookMapper.delete(book);
			return new BaseResponse("1", "Delete success!");
		} catch (Exception e) {
			System.out.println(e.getMessage());
			return new BaseResponse("-1", "Delete fail!");
		}	
	}

	@Override
	public BaseResponse upload(MultipartFile files) {
		try {
			File folder = new File(app.getRealPath("Data"));
			String type = files.getOriginalFilename().split("\\.")[1];
			
			if (folder.mkdir()) {
				folder.exists();
			}
			FileUtils.save(files, folder);
			
			if (type.equals("pdf")) { // nếu là file pdf thì chuyển file sang dạng ảnh
				String path = app.getRealPath("Data\\" + files.getOriginalFilename());
				FileUtils.convertPdftoImg(path, folder + "\\");
			}
		} catch (Exception e) {
			System.out.println(e.getMessage());
			return new BaseResponse("-1", e.getMessage());
		}
		return new BaseResponse("1", "Upload success...");
	}


}
