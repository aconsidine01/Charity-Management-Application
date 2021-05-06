/**
 * 
 */
package com.acons.springboot.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.acons.springboot.dao.DonatorsDAO;
import com.acons.springboot.entities.Donators;

/**
 * @author consi
 *
 */

@Service
public class DonatorsServiceImp implements DonatorsService{
	
	@Autowired
	DonatorsDAO donatorsDao;

	@Transactional
	@Override
	public List<Donators> get() {
		// TODO Auto-generated method stub
		return donatorsDao.get();
	}


}
