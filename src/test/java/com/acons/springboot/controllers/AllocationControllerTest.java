/**
 * 
 */
package com.acons.springboot.controllers;

import static org.junit.jupiter.api.Assertions.*;

import java.util.List;

import org.json.JSONException;
import org.json.JSONObject;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.web.bind.annotation.RequestBody;

import com.acons.springboot.entities.Allocation;

/**
 * @author consi
 *
 */
@SpringBootTest
class AllocationControllerTest {
	
	@Autowired
	AllocationController allocationController;

	/**
	 * @throws java.lang.Exception
	 */
	@BeforeAll
	static void setUpBeforeClass() throws Exception {
	}

	/**
	 * @throws java.lang.Exception
	 */
	@BeforeEach
	void setUp() throws Exception {
	}

	/**
	 * Test method for {@link com.acons.springboot.controllers.AllocationController#get()}.
	 */
	@Test
	void testGet() {
		//List<Allocation> response = allocationController.get();
		//System.out.println(response.toString());
		assert !allocationController.get().isEmpty();
	}

	/**
	 * Test method for {@link com.acons.springboot.controllers.AllocationController#get(com.acons.springboot.entities.Allocation)}.
	 * @throws JSONException 
	 */
	@Test
	void testGetAllocation() throws JSONException {
		JSONObject allocation = new JSONObject();
		allocation.put("pk_allocation_id", 9);
		List<Allocation> actual = allocationController.get();
		assert !actual.isEmpty();
	}

	/**
	 * Test method for {@link com.acons.springboot.controllers.AllocationController#getbyrecipientid(com.acons.springboot.entities.Allocation)}.
	 */
	@Test
	void testGetbyrecipientid() {
		List<Allocation> result = allocationController.getbyrecipientidpath(14);
		System.out.println(result.toString());
		assert result.toString().contains("34535");
	}

	/**
	 * Test method for {@link com.acons.springboot.controllers.AllocationController#getbyprojectid(com.acons.springboot.entities.Allocation)}.
	 */
	@Test
	void testGetbyprojectid() {
		List<Allocation> result = allocationController.getbyprojectidpath(5);
		System.out.println(result.toString());
		assert result.toString().contains("34535");
	}

}
