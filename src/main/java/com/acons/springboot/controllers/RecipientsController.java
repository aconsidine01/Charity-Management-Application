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

import com.acons.springboot.entities.Recipients;
import com.acons.springboot.service.RecipientsService;

/**
 * @author consi
 *
 */

@RestController
@RequestMapping("/api")
public class RecipientsController {
	
	@Autowired
	 private RecipientsService recipientsService;
	
	 @GetMapping("/recipients")
	 public List<Recipients> get() {
	  return recipientsService.get();
	 }
	 
	 @PostMapping("/recipients/insert")
	 public Recipients save(@RequestBody Recipients recipients) {
	  recipientsService.save(recipients);
	  return recipients;
	 }
	 
	 
	 @GetMapping("/recipients/byrecipientid")
	 public Recipients get(@RequestBody Recipients recipients) {
	  return recipientsService.get(recipients.getPk_recipient_id());
	 }
	 
	 @GetMapping("/recipients/{pk_recipient_id}")
	 public Recipients get(@PathVariable int pk_recipient_id) {
	  return recipientsService.get(pk_recipient_id);
	 }
	 

	 

	 
	 @DeleteMapping("/recipients/delete")
	 public String delete(@RequestBody Recipients recipients) {
	  
	  recipientsService.delete(recipients.getPk_recipient_id());
	  
	  return "Recipient removed with id "+ recipients.getPk_recipient_id();
	  
	 }
	 
	 @PutMapping("/recipients")
	 public Recipients update(@RequestBody Recipients recipients) {
	  recipientsService.save(recipients);
	  return recipients;
	 }
	 
	 @GetMapping("/recipients/byuserid")	 
	 public List<Recipients> getbyuserid(@RequestBody Recipients recipients) 
	 {
	  return recipientsService.getbyuserid(recipients.getFk_user_id());
	 }
	 
	 @GetMapping("/recipients/pathbyuserid/{fk_user_id}")
	 
	 public List<Recipients> getbyuseridpath(@PathVariable int fk_user_id) 
	 {
	  return recipientsService.getbyuserid(fk_user_id);
	 }

}
