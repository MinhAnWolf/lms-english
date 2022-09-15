package com.service.cms_atn.serviceImpl;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.Base64;
import java.util.List;

import javax.servlet.ServletContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.InputStreamResource;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.service.cms_atn.mapper.lessonMapper;
import com.service.cms_atn.model.Lesson;
import com.service.cms_atn.response.BaseResponse;
import com.service.cms_atn.service.LessonService;
import com.service.cms_atn.util.FileUtils;

@Service
public class LessonServiceImpl implements LessonService {

	@Autowired
	private lessonMapper lessonMap;

	@Autowired
	private ServletContext app;

	@Override
	public BaseResponse getAll(Lesson lesson) {
		List<Lesson> list = lessonMap.getAll(lesson);
		return new BaseResponse(list);
	}

	@Override
	public BaseResponse getByBookAndUnit(int lessonId, int bookId, int unitId) {
		List<Lesson> list = lessonMap.getByBookAndUnit(new Lesson(lessonId, unitId, bookId));
		return new BaseResponse(list);
	}

	@Override
	public BaseResponse create(Lesson lesson) {
		int result = lessonMap.create(lesson);
		if (result > 0) {
			return new BaseResponse("1", "Insert success...");
		}
		return new BaseResponse("-1", "Insert fail...");
	}

	@Override
	public BaseResponse update(Lesson lesson) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public BaseResponse delete(Lesson lesson) {

		File folder = new File(app.getRealPath("Data"));

		String nameVideos[] = lesson.getVideos().split("#");
		for (int i = 0; i < nameVideos.length; i++) {
			FileUtils.delete(new File(folder + "\\" + nameVideos[i]));
		}

		String nameAudios[] = lesson.getAudios().split("#");
		for (int i = 0; i < nameAudios.length; i++) {
			FileUtils.delete(new File(folder + "\\" + nameAudios[i]));
		}

		int result = lessonMap.delete(lesson);
		if (result > 0) {
			return new BaseResponse("1", "Delete success...");
		}
		return new BaseResponse("-1", "Delete fail...");
	}

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

	public BaseResponse getFile(String name) {
		String path = app.getRealPath("Data" + "\\" + name);
		String typeFile = name.split("\\.")[1];
		String typeConvertBase64 = convertBase64(typeFile);
		String base64String;

		if (path == null) {
			return new BaseResponse("-1", "File invalid...");
		}

		try {

			byte[] byteData = Files.readAllBytes(Paths.get(path));
			base64String = Base64.getEncoder().encodeToString(byteData);

		} catch (IOException e) {
			return new BaseResponse("-1", e.getMessage());
		}
		return new BaseResponse(typeConvertBase64 + base64String);
	}
	
	public InputStreamResource getImage(String name) throws FileNotFoundException {
		File file = new File(app.getRealPath("Data\\" + name));
		FileInputStream fis = new FileInputStream(file);
		return new InputStreamResource(fis);
	}

	public String convertBase64(String type) {
		switch (type) {
		case "mp4":
			return "data:video/" + type + ";base64,";
		case "mp3":
			return "data:audio/" + type + ";base64,";
		case "jpg":
			return "data:image/" + type + ";base64,";
		default:
			return "data:application/" + type + ";base64,";
		}
	}

}
