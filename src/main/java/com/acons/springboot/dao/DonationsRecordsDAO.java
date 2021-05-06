/**
 * 
 */
package com.acons.springboot.dao;

import java.util.List;


import com.acons.springboot.entities.DonationsRecords;

/**
 * @author consi
 *
 */
public interface DonationsRecordsDAO {
	
	List<DonationsRecords> getbydonorid(int fk_donor_id);

	List<DonationsRecords> getbyrecipientid(int fk_recipient_id);
	
	List<DonationsRecords> getprocessed();
	
	List<DonationsRecords> getunprocessed();
	

}
