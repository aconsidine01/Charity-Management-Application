/**
 * 
 */
package com.acons.springboot.controllers;

import static org.junit.jupiter.api.Assertions.*;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.acons.springboot.entities.User;

/**
 * @author consi
 *
 */

@SpringBootTest
class UserControllerTest {
	
	@Autowired
	UserController userController;

	/**
	 * Test method for {@link com.acons.springboot.controllers.UserController#get()}.
	 */
	@Test
	void testGet() {
		List<User> result = userController.get();
		System.out.println(result.toString());
		assert !result.isEmpty();
	}

	/**
	 * Test method for {@link com.acons.springboot.controllers.UserController#getbyuseridpath(int)}.
	 */
	@Test
	void testGetbyuseridpath() {
		User result = userController.getbyuseridpath(1);
		assert result.toString().contains("pk_user_id=1");
	}

}
