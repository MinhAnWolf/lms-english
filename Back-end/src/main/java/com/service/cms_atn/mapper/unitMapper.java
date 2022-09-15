package com.service.cms_atn.mapper;

import java.util.List;

import com.service.cms_atn.model.Unit;

public interface unitMapper {

	List<Unit> getAll(Unit unit);

	List<Unit> getById(Unit unit);

	void create(Unit unit);

	void update(Unit unit);

	void delete(Unit unit);

}
