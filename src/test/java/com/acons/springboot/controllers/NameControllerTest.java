/**
 * 
 */
package com.acons.springboot.controllers;

import static org.junit.jupiter.api.Assertions.*;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import com.acons.springboot.entities.Name;

/**
 * @author consi
 *
 */

@SpringBootTest
class NameControllerTest {
	
	@Autowired
	NameController nameController;

	/**
	 * Test method for {@link com.acons.springboot.controllers.NameController#get()}.
	 */
	@Test
	void testGet() {
		List<Name> result = nameController.get();
		System.out.println(result.toString());
		assert !result.isEmpty();
	}

	/**
	 * Test method for {@link com.acons.springboot.controllers.NameController#getbynameid(int)}.
	 */
	@Test
	void testGetbynameid() {
		Name result = nameController.getbynameid(1);
		assert result.toString().contains("pk_name_id=1");
	}

	/**
	 * Test method for {@link com.acons.springboot.controllers.NameController#getbyuserid(int)}.
	 */
	@Test
	void testGetbyuseridInt() {
		List<Name> result = nameController.getbyuserid(1);
		assert result.toString().contains("fk_user_id=1");
	}

}
