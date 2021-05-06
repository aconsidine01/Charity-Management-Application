/**
 * 
 */
package com.acons.springboot.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.acons.springboot.dao.DonorsDAO;
import com.acons.springboot.entities.Donors;

/**
 * @author consi
 *
 */

@Service
public class DonorsServiceImp implements DonorsService {
	
	@Autowired
	 private DonorsDAO donorsDao;

	@Transactional
	@Override
	public List<Donors> get() {
		// TODO Auto-generated method stub
		return donorsDao.get();
	}

	@Transactional
	@Override
	public Donors get(int pk_donor_id) {
		// TODO Auto-generated method stub
		return donorsDao.get(pk_donor_id);
	}

	@Transactional
	@Override
	public void save(Donors donors) {
		// TODO Auto-generated method stub
		donorsDao.save(donors);
	}

	@Transactional
	@Override
	public void delete(int pk_donors_id) {
		// TODO Auto-generated method stub
		donorsDao.delete(pk_donors_id);
		
	}

	@Transactional
	@Override
	public List<Donors> getbyuserid(Integer fk_donor_id) {
		// TODO Auto-generated method stub
		return donorsDao.getbyuserid(fk_donor_id);
	}

	@Transactional
	@Override
	public void update(Donors donors) {
		// TODO Auto-generated method stub
		donorsDao.update(donors);
		
	}

}
