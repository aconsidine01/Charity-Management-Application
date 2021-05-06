/**
 * 
 */
package com.acons.springboot.controllers;

import static org.junit.jupiter.api.Assertions.*;

import java.util.List;

import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;

import com.acons.springboot.entities.Address;

/**
 * @author consi
 *
 */
@SpringBootTest
class AddressControllerTest {
	
	@Autowired
	AddressController addressController;

	/**
	 * @throws java.lang.Exception
	 */
	/*
	@BeforeAll
	static void setUpBeforeClass() throws Exception {
	}
	*/

	
	

	/**
	 * Test method for {@link com.acons.springboot.controllers.AddressController#get()}.
	 */
	@Test
	void testGet() {
		assert !addressController.get().isEmpty();
	}



	/**
	 * Test method for {@link com.acons.springboot.controllers.AddressController#get(com.acons.springboot.entities.Address)}.
	 */
	@Test
	void testGetAddress() {
		Address result = addressController.getbyaddressid(1);
		System.err.println(result);
		String expected = "23 Elmfield Road";
		String actual = result.getAddress_line1();
		assertEquals(expected, actual);

	}


	@Test
	void testGetbyaddressid() {
		Address result = addressController.getbyaddressid(1);
		System.err.println(result);
		String expected = "23 Elmfield Road";
		String actual = result.getAddress_line1();
		assertEquals(expected, actual);
	}


	/**
	 * Test method for {@link com.acons.springboot.controllers.AddressController#getbyuserid(com.acons.springboot.entities.Address)}.
	 */
	@Test
	void testGetbyuserid() {
		List<Address> result = addressController.getbyuseridpath(1);
		System.err.println(result);
		String returned = result.toString();
		assert returned.contains("23 Elmfield Road");
	}


}
