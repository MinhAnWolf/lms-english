package com.service.cms_atn.serviceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.service.cms_atn.mapper.unitMapper;
import com.service.cms_atn.model.Unit;
import com.service.cms_atn.response.BaseResponse;
import com.service.cms_atn.service.UnitService;

@Service
public class UnitServiceImpl implements UnitService {

	@Autowired
	unitMapper unitMapper;

	@Override
	public BaseResponse getAll(Unit unit) {
		return new BaseResponse(unitMapper.getAll(unit));
	}

	@Override
	public BaseResponse getById(Unit unit) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public BaseResponse create(Unit unit) {
		try {
			unitMapper.create(unit);
			return new BaseResponse("1", "Successful Create");
		} catch (Exception e) {
			System.out.println(e);
			return new BaseResponse("-1", "Create Unit Failed !");
		}
	}

	@Override
	public BaseResponse update(Unit unit) {
		try {
			unitMapper.update(unit);
			return new BaseResponse("1", "Sucessful Update");
		} catch (Exception e) {
			System.out.println(e);
			return new BaseResponse("-1", "Update Unit Failed !");
		}
	}

	@Override
	public BaseResponse delete(Unit unit) {
		try {
			unitMapper.delete(unit);
			return new BaseResponse("1", "Successfull Delete");
		} catch (Exception e) {
			System.out.println(e);
			return new BaseResponse("1", "Delete Unit Failed !");
		}
	}

}
