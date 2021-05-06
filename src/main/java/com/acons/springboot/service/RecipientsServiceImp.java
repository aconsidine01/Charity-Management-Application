/**
 * 
 */
package com.acons.springboot.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.acons.springboot.dao.RecipientsDAO;
import com.acons.springboot.entities.Recipients;

/**
 * @author consi
 *
 */

@Service
public class RecipientsServiceImp implements RecipientsService {
	
	@Autowired
	private RecipientsDAO recipientsDao;

	@Transactional
	@Override
	public List<Recipients> get() {
		return recipientsDao.get();
	}

	@Transactional
	@Override
	public Recipients get(int pk_recipient_id) {
		return recipientsDao.get(pk_recipient_id);
	}

	@Transactional
	@Override
	public void save(Recipients recipients) {
		recipientsDao.save(recipients);
		
	}

	@Transactional
	@Override
	public void delete(int pk_recipient_id) {
		recipientsDao.delete(pk_recipient_id);
		
	}

	@Transactional
	@Override
	public List<Recipients> getbyuserid(int fk_user_id) {
		return recipientsDao.getbyuserid(fk_user_id);
	}

}
