package com.acons.springboot.controllers;


import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import com.acons.springboot.entities.Name;
import com.acons.springboot.entities.Projects;
import com.acons.springboot.entities.User;
import com.acons.springboot.service.DonorsService;
import com.acons.springboot.service.EmailService;
 
@RestController
@RequestMapping("/email")
public class EmailController {
	
	@Autowired
	private EmailService emailService;
     
 

	 @GetMapping("/{emailaddr}/{regapproval}") 
	    String registration(@PathVariable String emailaddr, @PathVariable String regapproval)  {
	        try {
	        	emailService.sendRegistrationConfirmation(emailaddr, regapproval);
	            return "Email Sent!";
	        }catch(Exception ex) {
	            return "Error in sending email: "+ex;
	        }
	    }
 
	 @GetMapping("/{donoremail}/{recipientemail}/{amount}") 
	    String donation(@PathVariable String donoremail, @PathVariable String recipientemail, @PathVariable double amount)  {
	        try {
	        	//emailService.sendRegistrationConfirmation(emailaddr, regapproval);
	        	emailService.sendDonationEmail(donoremail, recipientemail, amount);
	            return "Email Sent!";
	        }catch(Exception ex) {
	            return "Error in sending email: "+ex;
	        }
	    }

    
}