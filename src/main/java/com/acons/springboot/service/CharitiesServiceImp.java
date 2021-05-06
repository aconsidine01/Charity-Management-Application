/**
 * 
 */
package com.acons.springboot.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.acons.springboot.dao.CharitiesDAO;
import com.acons.springboot.entities.Charities;

/**
 * @author consi
 *
 */

@Service
public class CharitiesServiceImp implements CharitiesService {
	
	@Autowired
	private CharitiesDAO charitiesDao;

	@Transactional
	@Override
	public List<Charities> get() {
		// TODO Auto-generated method stub
		return charitiesDao.get();
	}

}
