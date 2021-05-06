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

import com.acons.springboot.entities.Name;
import com.acons.springboot.service.NameService;


/**
 * @author consi
 *
 */

@RestController
@RequestMapping("/api")
public class NameController {
	
	@Autowired
	 private NameService nameService;
	
	 @GetMapping("/name")
	 public List<Name> get() {
	  return nameService.get();
	 }
	 
	 @PostMapping("/name/insert")
	 public Name save(@RequestBody Name name) {
	  nameService.save(name);
	  return name;
	 }
	 
	 
	 @GetMapping("/name/bynameid")
	 public Name get(@RequestBody Name name) {
	  return nameService.get(name.getPk_name_id());
	 }
	 

	 @GetMapping("/name/pathbynameid/{pk_name_id}")
	 public Name getbynameid(@PathVariable int pk_name_id) {
	  return nameService.get(pk_name_id);
	 }
	 
	 

	 
	 @DeleteMapping("/name/delete")
	 public String delete(@RequestBody Name name) {
	  
	  nameService.delete(name.getPk_name_id());
	  
	  return "Name removed with id "+ name.getPk_name_id();
	  
	 }
	 

	 
	 @GetMapping("/name/byuserid") 
	 public List<Name> getbyuserid(@RequestBody Name name) 
	 {
	  return nameService.getbyuserid(name.getFk_user_id());
	 }
	 
	 @GetMapping("/name/pathbyuserid/{fk_user_id}") 
	 public List<Name> getbyuserid(@PathVariable int fk_user_id) 
	 {
	  return nameService.getbyuserid(fk_user_id);
	 }
	 
		@PutMapping("/name/update")
		public Name update(@RequestBody Name name) {
			Name newName = nameService.get(name.getPk_name_id());

			if (name.getPrefix() != null && !name.getPrefix().isEmpty()) {
				newName.setPrefix(name.getPrefix());
			}		
			if (name.getFirstname() != null && !name.getFirstname().isEmpty()) {
				newName.setFirstname(name.getFirstname());
			}		
			if (name.getMiddlename() != null && !name.getMiddlename().isEmpty()) {
				newName.setMiddlename(name.getMiddlename());
			}
			if (name.getLastname() != null && !name.getLastname().isEmpty()) {
				newName.setLastname(name.getLastname());
			}
			if (name.getSuffix() != null && !name.getSuffix().isEmpty()) {
				newName.setSuffix(name.getSuffix());
			}
			if (name.getOrgname() != null && !name.getOrgname().isEmpty()) {
				newName.setOrgname(name.getOrgname());
			}

			nameService.update(newName);
			return newName;
		}

}
