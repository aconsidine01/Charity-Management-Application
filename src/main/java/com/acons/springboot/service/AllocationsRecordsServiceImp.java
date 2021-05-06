/**
 * 
 */
package com.acons.springboot.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.acons.springboot.dao.AllocationsRecordsDAO;
import com.acons.springboot.entities.AllocationsRecords;

/**
 * @author consi
 *
 */

@Service
public class AllocationsRecordsServiceImp implements AllocationsRecordsService {
	
	@Autowired
	private AllocationsRecordsDAO allocationsrecordsDao;

	@Transactional
	@Override
	public List<AllocationsRecords> getbyuserid(int pk_user_id) {
		// TODO Auto-generated method stub
		return allocationsrecordsDao.getbyuserid(pk_user_id);
	}



}
