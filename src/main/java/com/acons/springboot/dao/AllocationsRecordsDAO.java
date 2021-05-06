/**
 * 
 */
package com.acons.springboot.dao;

import java.util.List;
import com.acons.springboot.entities.AllocationsRecords;


/**
 * @author consi
 *
 */
public interface AllocationsRecordsDAO {
	
	List<AllocationsRecords> getbyuserid(int pk_user_id);

}
