/**
 * 
 */
package com.acons.springboot.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.acons.springboot.dao.DonationsDAO;
import com.acons.springboot.entities.Donations;

/**
 * @author consi
 *
 */

@Service
public class DonationsServiceImp implements DonationsService {
	
	@Autowired
	DonationsDAO donationsDao;

	@Transactional
	@Override
	public List<Donations> get() {
		return donationsDao.get();
	}

	@Transactional
	@Override
	public Donations get(int pk_donation_id) {
		return donationsDao.get(pk_donation_id);
	}

	@Transactional
	@Override
	public void save(Donations donations) {
		donationsDao.save(donations);		
	}

	@Transactional
	@Override
	public void delete(int pk_donation_id) {
		donationsDao.delete(pk_donation_id);		
	}

	@Transactional
	@Override
	public List<Donations> getbydonorid(int fk_donor_id) {
		return donationsDao.getbydonorid(fk_donor_id);
	}

	@Transactional
	@Override
	public List<Donations> getbyrecipientid(int fk_recipient_id) {
		// TODO Auto-generated method stub
		return donationsDao.getbyrecipientid(fk_recipient_id);
	}

	@Transactional
	@Override
	public void update(Donations donations) {
		// TODO Auto-generated method stub
		donationsDao.update(donations);
		
	}

}
