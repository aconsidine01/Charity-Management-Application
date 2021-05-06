/**
 * 
 */
package com.acons.springboot.controllers;

import static org.junit.jupiter.api.Assertions.*;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.acons.springboot.entities.Donators;

/**
 * @author consi
 *
 */

@SpringBootTest
class DonatorsControllerTest {
	
	@Autowired
	DonatorsController donatorsController;

	/**
	 * Test method for {@link com.acons.springboot.controllers.DonatorsController#get()}.
	 */
	@Test
	void testGet() {
		List<Donators> result = donatorsController.get();
		assert !result.isEmpty();
	}

}
