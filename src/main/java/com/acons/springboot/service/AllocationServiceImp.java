/**
 * 
 */
package com.acons.springboot.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.acons.springboot.dao.AllocationDAO;
import com.acons.springboot.entities.Allocation;

/**
 * @author consi
 *
 */

@Service
public class AllocationServiceImp implements AllocationService {

	@Autowired
	private AllocationDAO allocationDao;

	@Transactional
	@Override
	public List<Allocation> get() {
		return allocationDao.get();
	}

	@Transactional
	@Override
	public Allocation get(int pk_allocation_id) {
		return allocationDao.get(pk_allocation_id);
	}

	@Transactional
	@Override
	public void save(Allocation allocation) {
		allocationDao.save(allocation);

	}

	@Transactional
	@Override
	public void delete(int pk_allocation_id) {
		allocationDao.delete(pk_allocation_id);

	}

	@Transactional
	@Override
	public List<Allocation> getbyrecipientid(int fk_recipient_id) {
		return allocationDao.getbyrecipientid(fk_recipient_id);
	}

	@Transactional
	@Override
	public List<Allocation> getbyprojectid(int fk_project_id) {
		return allocationDao.getbyprojectid(fk_project_id);
	}

	@Transactional
	@Override
	public void update(Allocation allocation) {
		allocationDao.update(allocation);

	}


}
