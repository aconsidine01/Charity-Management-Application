/**
 * 
 */
package com.acons.springboot.controllers;

import static org.junit.jupiter.api.Assertions.*;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.acons.springboot.entities.Donations;
import com.acons.springboot.entities.DonationsRecords;

/**
 * @author consi
 *
 */

@SpringBootTest
class DonationsRecordsControllerTest {
	
	@Autowired
	DonationsRecordsController donationsRecordsController;

	/**
	 * Test method for {@link com.acons.springboot.controllers.DonationsRecordsController#getbydonoridpath(int)}.
	 */
	@Test
	void testGetbydonoridpath() {
		List<DonationsRecords> result = donationsRecordsController.getbydonoridpath(9);
		System.out.println(result.toString());
		assert !result.isEmpty();
	}

	/**
	 * Test method for {@link com.acons.springboot.controllers.DonationsRecordsController#getbyrecipientidpath(int)}.
	 */
	@Test
	void testGetbyrecipientidpath() {
		List<DonationsRecords> result = donationsRecordsController.getbyrecipientidpath(5);
		System.out.println(result.toString());
		assert !result.isEmpty();
	}

	/**
	 * Test method for {@link com.acons.springboot.controllers.DonationsRecordsController#getprocessed()}.
	 */
	@Test
	void testGetprocessed() {
		List<DonationsRecords> result = donationsRecordsController.getprocessed();
		System.out.println(result.toString());
		assert !result.isEmpty();
	}

	/**
	 * Test method for {@link com.acons.springboot.controllers.DonationsRecordsController#getunprocessed()}.
	 */
	@Test
	void testGetunprocessed() {
		List<DonationsRecords> result = donationsRecordsController.getunprocessed();
		System.out.println(result.toString());
		assert !result.isEmpty();
	}

}
