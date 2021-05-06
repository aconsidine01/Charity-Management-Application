/**
 * 
 */
package com.acons.springboot.controllers;

import static org.junit.jupiter.api.Assertions.*;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.acons.springboot.entities.Recipients;

/**
 * @author consi
 *
 */

@SpringBootTest
class RecipientsControllerTest {
	
	@Autowired
	RecipientsController recipientsController;

	/**
	 * Test method for {@link com.acons.springboot.controllers.RecipientsController#get()}.
	 */
	@Test
	void testGet() {
		List<Recipients> result = recipientsController.get();
		System.out.println(result.toString());
		assert !result.isEmpty();
	}

	/**
	 * Test method for {@link com.acons.springboot.controllers.RecipientsController#get(int)}.
	 */
	@Test
	void testGetInt() {
		Recipients result = recipientsController.get(5);
		assert result.toString().contains("pk_recipient_id=5");
	}

	/**
	 * Test method for {@link com.acons.springboot.controllers.RecipientsController#getbyuseridpath(int)}.
	 */
	@Test
	void testGetbyuseridpath() {
		List<Recipients> result = recipientsController.getbyuseridpath(9);
		assert result.toString().contains("fk_user_id=9");
	}

}
