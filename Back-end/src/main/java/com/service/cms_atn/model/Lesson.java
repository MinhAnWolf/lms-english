package com.service.cms_atn.model;

public class Lesson {
	private int lessonId;
	private int unitId;
	private int bookId;
	private String name;
	private String pages;
	private String videos;
	private String audios;
	
	public int getLessonId() {
		return lessonId;
	}
	public void setLessonId(int lessonId) {
		this.lessonId = lessonId;
	}
	public int getUnitId() {
		return unitId;
	}
	public void setUnitId(int unitId) {
		this.unitId = unitId;
	}
	public int getBookId() {
		return bookId;
	}
	public void setBookId(int bookId) {
		this.bookId = bookId;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getPages() {
		return pages;
	}
	public void setPages(String pages) {
		this.pages = pages;
	}
	public String getVideos() {
		return videos;
	}
	public void setVideos(String videos) {
		this.videos = videos;
	}
	public String getAudios() {
		return audios;
	}
	public void setAudios(String audios) {
		this.audios = audios;
	}
	public Lesson(int lessonId, int unitId, int bookId, String name, String pages, String videos, String audios) {
		super();
		this.lessonId = lessonId;
		this.unitId = unitId;
		this.bookId = bookId;
		this.name = name;
		this.pages = pages;
		this.videos = videos;
		this.audios = audios;
	}
	public Lesson(int lessonId, int unitId, int bookId) {
		super();
		this.lessonId = lessonId;
		this.unitId = unitId;
		this.bookId = bookId;
	}
	public Lesson() {
		super();
	}
	
}
