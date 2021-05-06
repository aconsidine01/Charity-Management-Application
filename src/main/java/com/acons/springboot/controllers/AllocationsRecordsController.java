/**
 * 
 */
package com.acons.springboot.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.acons.springboot.entities.AllocationsRecords;
import com.acons.springboot.service.AllocationsRecordsService;

/**
 * @author consi
 *
 */

@RestController
@RequestMapping("/api")
public class AllocationsRecordsController {
	
	@Autowired
	private AllocationsRecordsService allocationsrecordsService;
	
	@GetMapping("/allocationsrecords/pathbyuserid/{pk_user_id}")
	public List<AllocationsRecords> getbyuseridpath(@PathVariable int pk_user_id) 
	{
		return allocationsrecordsService.getbyuserid(pk_user_id);
	}

}
