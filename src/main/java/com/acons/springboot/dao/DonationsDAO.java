/**
 * 
 */
package com.acons.springboot.dao;

import java.util.List;

import com.acons.springboot.entities.Donations;

/**
 * @author consi
 *
 */
public interface DonationsDAO {

	List<Donations> get();

	Donations get(int pk_donation_id);

	void save(Donations donations);

	void delete(int pk_donation_id);
	
	List<Donations> getbydonorid(int fk_donor_id);

	List<Donations> getbyrecipientid(int fk_recipient_id);
	
	void update(Donations donations);
}
