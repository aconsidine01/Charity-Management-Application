/**
 * 
 */
package com.acons.springboot.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.acons.springboot.dao.AddressDAO;
import com.acons.springboot.dao.DetailsDAO;
import com.acons.springboot.entities.Details;

/**
 * @author consi
 *
 */

@Service
public class DetailsServiceImp implements DetailsService {

	@Autowired
	private DetailsDAO detailsDao;

	@Transactional
	@Override
	public List<Details> get() {
		return detailsDao.get();
	}

	@Transactional
	@Override
	public Details get(int pk_details_id) {
		return detailsDao.get(pk_details_id);
	}

	@Transactional
	@Override
	public void save(Details details) {
		detailsDao.save(details);
	}

	@Transactional
	@Override
	public void delete(int pk_details_id) {
		detailsDao.delete(pk_details_id);
	}

	@Transactional
	@Override
	public List<Details> getbyuserid(int fk_user_id) {
		return detailsDao.getbyuserid(fk_user_id);
	}

	@Transactional
	@Override
	public void update(Details details) {
		detailsDao.update(details);
	}

}
