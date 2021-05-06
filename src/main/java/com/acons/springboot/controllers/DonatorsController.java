/**
 * 
 */
package com.acons.springboot.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.acons.springboot.entities.Details;
import com.acons.springboot.entities.Donators;
import com.acons.springboot.service.DonatorsService;

/**
 * @author consi
 *
 */

@RestController
@RequestMapping("/api")
public class DonatorsController {
	
	@Autowired
	private DonatorsService donatorsService;	
	
	@GetMapping("/donators")	
	public List<Donators> get() {
		return donatorsService.get();
	}
	
	

}
