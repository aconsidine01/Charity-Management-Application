/**
 * 
 */
package com.acons.springboot.dao;

import java.util.List;

import com.acons.springboot.entities.Address;

/**
 * @author consi
 *
 */
public interface AddressDAO {

	List<Address> get();

	Address get(int pk_address_id);

	void save(Address address);

	void delete(int pk_address_id);

	List<Address> getbyuserid(int fk_user_id);

	void update(Address address);

}
