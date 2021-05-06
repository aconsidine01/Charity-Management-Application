/**
 * 
 */
package com.acons.springboot.service;

import java.util.List;

import com.acons.springboot.entities.Allocation;

/**
 * @author consi
 *
 */
public interface AllocationService {
	
	List<Allocation> get();

	Allocation get(int pk_allocation_id);

	void save(Allocation allocation);

	void delete(int pk_allocation_id);
	
	List<Allocation> getbyrecipientid(int fk_recipient_id);

	List<Allocation> getbyprojectid(int fk_project_id);
	
	void update(Allocation allocation);

}
