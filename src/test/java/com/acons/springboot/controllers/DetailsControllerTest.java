/**
 * 
 */
package com.acons.springboot.controllers;

import static org.junit.jupiter.api.Assertions.*;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.acons.springboot.entities.Charities;
import com.acons.springboot.entities.Details;

/**
 * @author consi
 *
 */

@SpringBootTest
class DetailsControllerTest {
	
	@Autowired
	DetailsController detailsController;

	/**
	 * Test method for {@link com.acons.springboot.controllers.DetailsController#get()}.
	 */
	@Test
	void testGet() {
		List<Details> result = detailsController.get();
		assert !result.isEmpty();
	}

	/**
	 * Test method for {@link com.acons.springboot.controllers.DetailsController#getbyuseridpath(int)}.
	 */
	@Test
	void testGetbyuseridpath() {
		List<Details> result = detailsController.getbyuseridpath(1);
		System.out.println(result.toString());
		assert !result.isEmpty();
	}

}
