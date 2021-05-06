/**
 * 
 */
package com.acons.springboot.controllers;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.acons.springboot.entities.Address;
import com.acons.springboot.entities.Allocation;
import com.acons.springboot.entities.Donations;
import com.acons.springboot.service.AllocationService;

/**
 * @author consi
 *
 */

@RestController
@RequestMapping("/api")
public class AllocationController {

	@Autowired
	private AllocationService allocationService;

	@GetMapping("/allocation")
	public List<Allocation> get() {
		return allocationService.get();
	}

	@PostMapping("/allocation/insert")
	public Allocation save(@RequestBody Allocation allocation) {
		LocalDateTime currenttime = LocalDateTime.now();
		if (allocation.getAllocation_datetime() == null) {
			allocation.setAllocation_datetime(currenttime);
		}
		else {
			allocation.setAllocation_datetime(currenttime);
		}
		allocationService.save(allocation);
		return allocation;
	}


	@GetMapping("/allocation/byallocationid")
	public Allocation get(@RequestBody Allocation allocation) {
		return allocationService.get(allocation.getPk_allocation_id());
	}





	@DeleteMapping("/allocation/delete")
	public String delete(@RequestBody Allocation allocation) {		  
		allocationService.delete(allocation.getPk_allocation_id());

		return "Allocation removed with id "+ allocation.getPk_allocation_id();


	}


	@GetMapping("/allocation/byrecipientid")
	public List<Allocation> getbyrecipientid(@RequestBody Allocation allocation) 
	{
		return allocationService.getbyrecipientid(allocation.getFk_recipient_id());
	}

	@GetMapping("/allocation/pathbyrecipientid/{fk_recipient_id}")
	public List<Allocation> getbyrecipientidpath(@RequestBody int fk_recipient_id) 
	{
		return allocationService.getbyrecipientid(fk_recipient_id);
	}

	@GetMapping("/allocation/byprojectid")
	public List<Allocation> getbyprojectid(@RequestBody Allocation allocation) 
	{
		return allocationService.getbyprojectid(allocation.getFk_project_id());
	}
	
	@GetMapping("/allocation/pathbyprojectid/{fk_project_id}")
	public List<Allocation> getbyprojectidpath(@RequestBody int fk_project_id) 
	{
		return allocationService.getbyprojectid(fk_project_id);
	}

	@PutMapping("/allocation/update")
	public Allocation update(@RequestBody Allocation allocation) {
		Allocation newAllocation = allocationService.get(allocation.getPk_allocation_id());
		LocalDateTime currenttime = LocalDateTime.now();
		
		if (allocation.getAllocation_amount() != newAllocation.getAllocation_amount() && allocation.getAllocation_amount() != 0) {
			newAllocation.setAllocation_amount(allocation.getAllocation_amount());
		}	
		if (allocation.getAllocation_datetime() != null) {
			newAllocation.setAllocation_datetime(allocation.getAllocation_datetime());
		}	
		else {
			newAllocation.setAllocation_datetime(currenttime);
		}

		allocationService.update(newAllocation);
		return newAllocation;
	}


}
