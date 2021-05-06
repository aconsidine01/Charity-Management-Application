/**
 * 
 */
package com.acons.springboot.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.acons.springboot.dao.NameDAO;
import com.acons.springboot.dao.UserDAO;
import com.acons.springboot.entities.Name;

/**
 * @author consi
 *
 */

@Service
public class NameServiceImp implements NameService {
	
	@Autowired
	 private NameDAO nameDao;

	@Transactional
	@Override
	public List<Name> get() {
		// TODO Auto-generated method stub
		return nameDao.get();
	}

	@Transactional
	@Override
	public Name get(int pk_name_id) {
		// TODO Auto-generated method stub
		return nameDao.get(pk_name_id);
	}

	@Transactional
	@Override
	public void save(Name name) {
		// TODO Auto-generated method stub
		nameDao.save(name);
	}

	@Transactional
	@Override
	public void delete(int pk_name_id) {
		// TODO Auto-generated method stub
		nameDao.delete(pk_name_id);
		
	}

	@Transactional
	@Override
	public List<Name> getbyuserid(Integer fk_user_id) {
		// TODO Auto-generated method stub
		return nameDao.getbyuserid(fk_user_id);
	}

	@Transactional
	@Override
	public void update(Name name) {
		// TODO Auto-generated method stub
		nameDao.update(name);
		
	}

	
}
