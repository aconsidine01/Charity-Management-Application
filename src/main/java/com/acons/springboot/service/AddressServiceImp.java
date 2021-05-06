/**
 * 
 */
package com.acons.springboot.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.acons.springboot.dao.AddressDAO;
import com.acons.springboot.entities.Address;
import com.acons.springboot.entities.Name;

/**
 * @author consi
 *
 */

@Service
public class AddressServiceImp implements AddressService{
	
	@Autowired
	 private AddressDAO addressDao;

	@Transactional
	@Override
	public List<Address> get() {
		// TODO Auto-generated method stub
		return addressDao.get();
	}

	@Transactional
	@Override
	public Address get(int pk_address_id) {
		// TODO Auto-generated method stub
		return addressDao.get(pk_address_id);
	}

	@Transactional
	@Override
	public void save(Address address) {
		// TODO Auto-generated method stub
		addressDao.save(address);
	}

	@Transactional
	@Override
	public void delete(int pk_address_id) {
		// TODO Auto-generated method stub
		addressDao.delete(pk_address_id);
		
	}

	@Transactional
	@Override
	public List<Address> getbyuserid(Integer fk_user_id) {
		// TODO Auto-generated method stub
		return addressDao.getbyuserid(fk_user_id);
	}

	@Transactional
	@Override
	public void update(Address address) {
		// TODO Auto-generated method stub
		addressDao.update(address);
	}


}
