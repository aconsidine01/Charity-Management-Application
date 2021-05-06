package com.acons.springboot.service;

import java.util.List;

import com.acons.springboot.entities.Address;

public interface AddressService {

	List<Address> get();

	Address get(int pk_address_id);

	void save(Address address);

	void delete(int pk_address_id);

	List<Address> getbyuserid(Integer fk_user_id);
	
	void update(Address address);

}
