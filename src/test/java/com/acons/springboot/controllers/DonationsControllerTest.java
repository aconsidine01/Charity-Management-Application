/**
 * 
 */
package com.acons.springboot.controllers;

import static org.junit.jupiter.api.Assertions.*;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.acons.springboot.entities.Details;
import com.acons.springboot.entities.Donations;

/**
 * @author consi
 *
 */

@SpringBootTest
class DonationsControllerTest {
	
	@Autowired
	DonationsController donationsController;

	/**
	 * Test method for {@link com.acons.springboot.controllers.DonationsController#get()}.
	 */
	@Test
	void testGet() {
		List<Donations> result = donationsController.get();
		assert !result.isEmpty();
	}

	/**
	 * Test method for {@link com.acons.springboot.controllers.DonationsController#getbydonoridpath(int)}.
	 */
	@Test
	void testGetbydonoridpath() {
		List<Donations> result = donationsController.getbydonoridpath(9);
		System.out.println(result.toString());
		assert !result.isEmpty();
	}

	/**
	 * Test method for {@link com.acons.springboot.controllers.DonationsController#getbyrecipientidpath(int)}.
	 */
	@Test
	void testGetbyrecipientidpath() {
		List<Donations> result = donationsController.getbyrecipientidpath(5);
		System.out.println(result.toString());
		assert !result.isEmpty();
	}

}
