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

import com.acons.springboot.entities.Details;
import com.acons.springboot.entities.Donations;
import com.acons.springboot.service.DetailsService;

/**
 * @author consi
 *
 */

@RestController
@RequestMapping("/api")
public class DetailsController {

	@Autowired
	private DetailsService detailsService;

	@GetMapping("/details")
	public List<Details> get() {
		return detailsService.get();
	}

	@PostMapping("/details/insert")
	public Details save(@RequestBody Details details) {
		detailsService.save(details);
		return details;
	}


	@GetMapping("/details/bydetailsid")
	public Details get(@RequestBody Details details) {
		return detailsService.get(details.getPk_details_id());
	}





	@DeleteMapping("/details/delete")
	public String delete(@RequestBody Details details) {		  
		detailsService.delete(details.getPk_details_id());

		return "Details removed with id "+ details.getPk_details_id();


	}


	@GetMapping("/details/byuserid")
	public List<Details> getbyuserid(@RequestBody Details details) 
	{
		return detailsService.getbyuserid(details.getFk_user_id());
	}
	
	@GetMapping("/details/pathbyuserid/{fk_user_id}")
	public List<Details> getbyuseridpath(@PathVariable int fk_user_id) 
	{
		return detailsService.getbyuserid(fk_user_id);
	}

	@PutMapping("/details/update")
	public Details update(@RequestBody Details details) {
		Details newDetails = detailsService.get(details.getPk_details_id());

		if (details.getUser_statement() != null && !details.getUser_statement().isEmpty()) {
			newDetails.setUser_statement(details.getUser_statement());
		}	
		if (details.getUser_photo() != null && !details.getUser_photo().isEmpty()) {
			newDetails.setUser_photo(details.getUser_photo());
		}	
		if (details.getUser_video() != null && !details.getUser_video().isEmpty()) {
			newDetails.setUser_video(details.getUser_video());
		}	
		if (details.getUser_url() != null && !details.getUser_url().isEmpty()) {
			newDetails.setUser_url(details.getUser_url());
		}	

		detailsService.update(newDetails);
		return newDetails;
	}


}
