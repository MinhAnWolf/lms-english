package com.service.cms_atn.service;

import com.service.cms_atn.model.Unit;
import com.service.cms_atn.response.BaseResponse;

public interface UnitService {

	BaseResponse getAll(Unit unit);

	BaseResponse getById(Unit unit);

	BaseResponse create(Unit unit);

	BaseResponse update(Unit unit);

	BaseResponse delete(Unit unit);
}
