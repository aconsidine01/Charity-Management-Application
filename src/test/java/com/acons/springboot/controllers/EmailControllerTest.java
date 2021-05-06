/**
 * 
 */
package com.acons.springboot.controllers;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

/**
 * @author consi
 *
 */

@SpringBootTest
class EmailControllerTest {
	
	@Autowired
	EmailController emailController;

	/**
	 * Test method for {@link com.acons.springboot.controllers.EmailController#registration(java.lang.String, java.lang.String)}.
	 */
	@Test
	void testRegistration() {
		String email = emailController.registration("aconsidine01@qub.ac.uk", "pending");
		assert !email.isBlank();
	}

	/**
	 * Test method for {@link com.acons.springboot.controllers.EmailController#donation(java.lang.String, java.lang.String, double)}.
	 */
	@Test
	void testDonation() {
		String email = emailController.donation("aconsidine01@qub.ac.uk", "Consi_@hotmail.com", 1000);
		assert !email.isBlank();
	}

}
