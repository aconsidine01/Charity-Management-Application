/**
 * 
 */
package com.acons.springboot.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.acons.springboot.dao.DetailsDAO;
import com.acons.springboot.dao.DonationsRecordsDAO;
import com.acons.springboot.entities.DonationsRecords;

/**
 * @author consi
 *
 */

@Service
public class DonationsRecordsServiceImp  implements DonationsRecordsService {
	

	@Autowired
	private DonationsRecordsDAO donationsrecordsDao;

	@Transactional
	@Override
	public List<DonationsRecords> getbydonorid(int fk_donor_id) {
		// TODO Auto-generated method stub
		return donationsrecordsDao.getbydonorid(fk_donor_id);
	}

	@Transactional
	@Override
	public List<DonationsRecords> getbyrecipientid(int fk_recipient_id) {
		// TODO Auto-generated method stub
		return donationsrecordsDao.getbyrecipientid(fk_recipient_id);
	}

	@Transactional
	@Override
	public List<DonationsRecords> getprocessed() {
		// TODO Auto-generated method stub
		return donationsrecordsDao.getprocessed();
	}

	@Transactional
	@Override
	public List<DonationsRecords> getunprocessed() {
		// TODO Auto-generated method stub
		return donationsrecordsDao.getunprocessed();
	}
	
	

}
