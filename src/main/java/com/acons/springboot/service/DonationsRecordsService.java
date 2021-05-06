/**
 * 
 */
package com.acons.springboot.service;

import java.util.List;

import com.acons.springboot.entities.DonationsRecords;

/**
 * @author consi
 *
 */
public interface DonationsRecordsService {

	List<DonationsRecords> getbydonorid(int fk_donor_id);

	List<DonationsRecords> getbyrecipientid(int fk_recipient_id);
	
	List<DonationsRecords> getprocessed();
	
	List<DonationsRecords> getunprocessed();
}
