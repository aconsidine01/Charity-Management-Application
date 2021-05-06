/**
 * 
 */
package com.acons.springboot.controllers;

import static org.junit.jupiter.api.Assertions.*;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.acons.springboot.entities.Projects;

/**
 * @author consi
 *
 */

@SpringBootTest
class ProjectsControllerTest {
	
	@Autowired
	ProjectsController projectsController;

	/**
	 * Test method for {@link com.acons.springboot.controllers.ProjectsController#get()}.
	 */
	@Test
	void testGet() {
		List<Projects> result = projectsController.get();
		System.out.println(result.toString());
		assert !result.isEmpty();
	}

	/**
	 * Test method for {@link com.acons.springboot.controllers.ProjectsController#getbyrecipientidpath(int)}.
	 */
	@Test
	void testGetbyrecipientidpath() {
		List<Projects> result = projectsController.getbyrecipientidpath(14);
		assert result.toString().contains("fk_recipient_id=14");
	}

}
