/**
 * 
 */
package com.acons.springboot.dao;

import java.util.List;

import com.acons.springboot.entities.Address;
import com.acons.springboot.entities.Donors;

/**
 * @author consi
 *
 */
public interface DonorsDAO {

	List<Donors> get();

	Donors get(int pk_donor_id);

	void save(Donors donors);

	void delete(int pk_donor_id);

	List<Donors> getbyuserid(int fk_user_id);

	void update(Donors donors);
}
