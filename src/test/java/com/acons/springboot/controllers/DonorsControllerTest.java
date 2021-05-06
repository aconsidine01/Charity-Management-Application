/**
 * 
 */
package com.acons.springboot.controllers;

import static org.junit.jupiter.api.Assertions.*;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.acons.springboot.entities.Donors;

/**
 * @author consi
 *
 */

@SpringBootTest
class DonorsControllerTest {
	
	@Autowired
	DonorsController donorsController;

	/**
	 * Test method for {@link com.acons.springboot.controllers.DonorsController#get()}.
	 */
	@Test
	void testGet() {
		List<Donors> result = donorsController.get();
		System.out.println(result.toString());
		assert !result.isEmpty();
	}

	/**
	 * Test method for {@link com.acons.springboot.controllers.DonorsController#getbyuseridpath(int)}.
	 */
	@Test
	void testGetbyuseridpath() {
		List<Donors> result = donorsController.getbyuseridpath(230);
		System.out.println(result.toString());
		assert result.toString().contains("fk_user_id=230");
	}

}
