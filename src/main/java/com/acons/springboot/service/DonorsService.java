/**
 * 
 */
package com.acons.springboot.service;

import java.util.List;

import com.acons.springboot.entities.Address;
import com.acons.springboot.entities.Donors;

/**
 * @author consi
 *
 */
public interface DonorsService {

	List<Donors> get();

	Donors get(int pk_donor_id);

	void save(Donors donors);

	void delete(int pk_donor_id);

	List<Donors> getbyuserid(Integer fk_user_id);

	void update(Donors donors);

}
