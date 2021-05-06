/**
 * 
 */
package com.acons.springboot.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.acons.springboot.entities.Charities;
import com.acons.springboot.service.CharitiesService;

/**
 * @author consi
 *
 */

@RestController
@RequestMapping("/api")
public class CharitiesController {
	
	@Autowired
	private CharitiesService charitiesService;

	@GetMapping("/charities")
	public List<Charities> get() {
		return charitiesService.get();
	}

}
