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

/**
 * @author consi
 *
 */
@SpringBootTest
class AllocationsRecordsControllerTest {
	
	@Autowired
	AllocationsRecordsController allocationsRecordsController;

	/**
	 * Test method for {@link com.acons.springboot.controllers.AllocationsRecordsController#getbyuseridpath(int)}.
	 */
	@Test
	void testGetbyuseridpath() {
		List<AllocationsRecords> result = allocationsRecordsController.getbyuseridpath(236);
		System.out.println(result.toString());
		assert !result.isEmpty();
	}

}
