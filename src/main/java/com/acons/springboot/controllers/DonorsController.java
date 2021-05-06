/**
 * 
 */
package com.acons.springboot.controllers;

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
import com.acons.springboot.entities.Donors;
import com.acons.springboot.service.DonorsService;



/**
 * @author consi
 *
 */

@RestController
@RequestMapping("/api")
public class DonorsController {

	@Autowired
	private DonorsService donorsService;

	@GetMapping("/donors")
	public List<Donors> get() {
		return donorsService.get();
	}

	@PostMapping("/donors/insert")
	public Donors save(@RequestBody Donors donors) {
		donorsService.save(donors);
		return donors;
	}


	@GetMapping("/donors/bydonorid")
	public Donors get(@RequestBody Donors donors) {
		return donorsService.get(donors.getPk_donor_id());
	}


	@DeleteMapping("/donors/delete")
	public String delete(@RequestBody Donors donors) {  
		donorsService.delete(donors.getPk_donor_id());	  
		return "Donor removed with id "+donors.getPk_donor_id();	  
	}


	@GetMapping("/donors/byuserid")
	public List<Donors> getbyuserid(@RequestBody Donors donors) 
	{
		return donorsService.getbyuserid(donors.getFk_user_id());
	}
	
	@GetMapping("/donors/pathbyuserid/{fk_user_id}")
	public List<Donors> getbyuseridpath(@PathVariable int fk_user_id)
	{
		return donorsService.getbyuserid(fk_user_id);
	}

	@PutMapping("/donors/update")
	public Donors update(@RequestBody Donors donors) {
		Donors newDonors = donorsService.get(donors.getPk_donor_id());

		if (donors.getPrivacy_level() != null && !donors.getPrivacy_level().isEmpty()) {
			newDonors.setPrivacy_level(donors.getPrivacy_level());
		}		

		donorsService.update(newDonors);
		return newDonors;
	}

}
