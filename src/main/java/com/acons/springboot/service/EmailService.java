/**
 * 
 */
package com.acons.springboot.service;

import org.springframework.web.bind.annotation.PathVariable;

/**
 * @author consi
 *
 */
public interface EmailService {


	void sendRegistrationConfirmation(String emailaddr, String regapproval) throws Exception;
	
	void sendDonationEmail(String donoremail, String recipientemail, double amount) throws Exception;
	


}
