package com.service.cms_atn.util;

import java.awt.image.BufferedImage;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.List;
import java.util.Random;

import javax.imageio.ImageIO;

import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.pdmodel.PDPage;
import org.springframework.web.multipart.MultipartFile;

import com.service.cms_atn.response.BaseResponse;

public class FileUtils {

	public static BaseResponse save(MultipartFile file, File path) {
		File myfile = new File(path + "\\" + file.getOriginalFilename());
		try {
			myfile.createNewFile();
			FileOutputStream fos = new FileOutputStream(myfile);
			fos.write(file.getBytes());
			fos.close();
		} catch (IOException e) {
			return new BaseResponse("-1", e.getMessage());
		}
		return new BaseResponse("1", "Insert " + file.getOriginalFilename() + " success...");
	}

	public static BaseResponse delete(File path) {
		try {
			path.delete();
		} catch (Exception e) {
			return new BaseResponse("-1", e.getMessage());
		}
		return new BaseResponse("1", "Save success...");
	}

	public static String randomName() {
		String srt = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM0123456789";
		int countRan = 15;
		String nameRandom = "";

		Random ran = new Random();
		for (int i = 0; i < countRan; i++) {
			int numRan = ran.nextInt(srt.length());
			nameRandom += srt.charAt(numRan);
		}
		return nameRandom;
	}

	public static int convertPdftoImg(String path, String folder) throws IOException {
		File sourceFile = new File(path);
		File destinationFile = new File(folder);

		if (!sourceFile.exists()) {
			return -1;
		}

		PDDocument document = PDDocument.load(path);
		List<PDPage> list = document.getDocumentCatalog().getAllPages();

		String fileName = sourceFile.getName().replace(".pdf", "");
		int pageNumber = 1;
		for (PDPage page : list) {
			BufferedImage image = page.convertToImage();
			File outputfile = new File(folder + fileName + "$" + pageNumber + ".jpg");
			ImageIO.write(image, "jpg", outputfile);
			pageNumber++;
		}
		document.close();
		return 1;
	}

}
