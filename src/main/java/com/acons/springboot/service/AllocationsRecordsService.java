/**
 * 
 */
package com.acons.springboot.service;

import java.util.List;

import com.acons.springboot.entities.AllocationsRecords;

/**
 * @author consi
 *
 */
public interface AllocationsRecordsService {

	List<AllocationsRecords> getbyuserid(int pk_user_id);
	
}
