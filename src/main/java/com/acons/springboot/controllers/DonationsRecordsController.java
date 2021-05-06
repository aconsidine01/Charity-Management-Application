package com.acons.springboot.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.acons.springboot.entities.Donations;
import com.acons.springboot.service.DonationsRecordsService;
import com.acons.springboot.service.DonationsService;

@RestController
@RequestMapping("/api")
public class DonationsRecordsController {

	@Autowired
	private DonationsRecordsService donationsrecordsService;
	
	@GetMapping("/donationsrecords/pathbydonorid/{fk_donor_id}")
	public List<com.acons.springboot.entities.DonationsRecords> getbydonoridpath(@PathVariable int fk_donor_id) 
	{
		return donationsrecordsService.getbydonorid(fk_donor_id);
	}


	
	@GetMapping("/donationsrecords/pathbyrecipientid/{fk_recipient_id}")
	public List<com.acons.springboot.entities.DonationsRecords> getbyrecipientidpath(@PathVariable int fk_recipient_id) 
	{
		return donationsrecordsService.getbyrecipientid(fk_recipient_id);
	}
	
	@GetMapping("/donationsrecords/processed")
	public List<com.acons.springboot.entities.DonationsRecords> getprocessed() 
	{
		return donationsrecordsService.getprocessed();
	}
	
	@GetMapping("/donationsrecords/unprocessed")
	public List<com.acons.springboot.entities.DonationsRecords> getunprocessed() 
	{
		return donationsrecordsService.getunprocessed();
	}
}
