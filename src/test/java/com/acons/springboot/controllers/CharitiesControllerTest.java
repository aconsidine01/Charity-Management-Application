/**
 * 
 */
package com.acons.springboot.controllers;

import static org.junit.jupiter.api.Assertions.*;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.acons.springboot.entities.AllocationsRecords;
import com.acons.springboot.entities.Charities;

/**
 * @author consi
 *
 */

@SpringBootTest
class CharitiesControllerTest {
	
	@Autowired
	CharitiesController charitiesController;

	/**
	 * Test method for {@link com.acons.springboot.controllers.CharitiesController#get()}.
	 */
	@Test
	void testGet() {
		List<Charities> result = charitiesController.get();
		System.out.println(result.toString());
		assert !result.isEmpty();
	}

}
