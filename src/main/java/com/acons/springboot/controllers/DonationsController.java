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
import com.acons.springboot.entities.Donations;
import com.acons.springboot.service.DonationsService;

/**
 * @author consi
 *
 */

@RestController
@RequestMapping("/api")
public class DonationsController {

	@Autowired
	private DonationsService donationsService;

	@GetMapping("/donations")
	public List<Donations> get() {
		return donationsService.get();
	}

	@PostMapping("/donations/insert")
	public Donations save(@RequestBody Donations donations) {

		LocalDateTime currenttime = LocalDateTime.now();
		if (donations.getDonation_datetime() == null) {
			donations.setDonation_datetime(currenttime);
		}
		else {
			donations.setDonation_datetime(currenttime);
		}
		donationsService.save(donations);
		return donations;
	}


	@GetMapping("/donations/bydonationid")
	public Donations get(@RequestBody Donations donations) {
		return donationsService.get(donations.getPk_donation_id());
	}





	@DeleteMapping("/donations/delete")
	public String delete(@RequestBody Donations donations) {		  
		donationsService.delete(donations.getPk_donation_id());

		return "Donations removed with id "+ donations.getPk_donation_id();


	}


	@GetMapping("/donations/bydonorid")
	public List<Donations> getbydonorid(@RequestBody Donations donations) 
	{
		return donationsService.getbydonorid(donations.getFk_donor_id());
	}
	
	@GetMapping("/donations/pathbydonorid/{fk_donor_id}")
	public List<Donations> getbydonoridpath(@PathVariable int fk_donor_id) 
	{
		return donationsService.getbydonorid(fk_donor_id);
	}


	@GetMapping("/donations/byrecipientid")
	public List<Donations> getbyrecipientid(@RequestBody Donations donations) 
	{
		return donationsService.getbyrecipientid(donations.getFk_recipient_id());
	}
	
	@GetMapping("/donations/pathbyrecipientid/{fk_recipient_id}")
	public List<Donations> getbyrecipientidpath(@RequestBody int fk_recipient_id) 
	{
		return donationsService.getbyrecipientid(fk_recipient_id);
	}

	@PutMapping("/donations/update")
	public Donations update(@RequestBody Donations donations) {
		Donations newDonations = donationsService.get(donations.getPk_donation_id());
		LocalDateTime currenttime = LocalDateTime.now();

		/*
		if (donations.getDonation_datetime() != null) {
			newDonations.setDonation_datetime(donations.getDonation_datetime());
		}	
		else {
			newDonations.setDonation_datetime(currenttime);
		}
		*/
		if (donations.getDonation_amount() != newDonations.getDonation_amount() && donations.getDonation_amount() != 0) {
			newDonations.setDonation_amount(donations.getDonation_amount());
		}	
		if (donations.getAnonymity() != null && !donations.getAnonymity().isEmpty()) {
			newDonations.setAnonymity(donations.getAnonymity());
		}	
		if (donations.isGiftaid() != newDonations.isGiftaid()) {
			newDonations.setGiftaid(donations.isGiftaid());
		}	
		if (donations.isProcessed() != newDonations.isProcessed()) {
			newDonations.setProcessed(donations.isProcessed());
		}	


		donationsService.update(newDonations);
		return newDonations;
	}
}
