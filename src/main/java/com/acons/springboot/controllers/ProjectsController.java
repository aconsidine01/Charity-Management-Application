/**
 * 
 */
package com.acons.springboot.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.acons.springboot.entities.Allocation;
import com.acons.springboot.entities.Projects;
import com.acons.springboot.service.ProjectsService;

/**
 * @author consi
 *
 */

@RestController
@RequestMapping("/api")
public class ProjectsController {

	@Autowired
	ProjectsService projectsService;

	@GetMapping("/projects")
	public List<Projects> get() {
		return projectsService.get();
	}

	@PostMapping("/projects/insert")
	public Projects save(@RequestBody Projects projects) {
		projectsService.save(projects);
		return projects;
	}


	@GetMapping("/projects/byprojectid")
	public Projects get(@RequestBody Projects projects) {
		return projectsService.get(projects.getPk_project_id());
	}



	@DeleteMapping("/projects/delete")
	public String delete(@RequestBody Projects projects) {		  
		projectsService.delete(projects.getPk_project_id());

		return "Project removed with id "+ projects.getPk_project_id();	  
	}


	@GetMapping("/projects/byrecipientid")
	public List<Projects> getbyrecipientid(@RequestBody Projects projects) 
	{
		return projectsService.getbyrecipientid(projects.getFk_recipient_id());
	}
	
	@GetMapping("/projects/pathbyrecipientid/{fk_recipient_id}")
	public List<Projects> getbyrecipientidpath(@PathVariable int fk_recipient_id) 
	{
		return projectsService.getbyrecipientid(fk_recipient_id);
	}

	@PutMapping("/projects/update")
	public Projects update(@RequestBody Projects projects) {
		Projects newProjects = projectsService.get(projects.getPk_project_id());

		if (projects.getProject_statement() != null && !projects.getProject_statement().isEmpty()) {
			newProjects.setProject_statement(projects.getProject_statement());
		}	
		if (projects.getProject_photo() != null && !projects.getProject_photo().isEmpty()) {
			newProjects.setProject_photo(projects.getProject_photo());
		}	
		if (projects.getProject_video() != null && !projects.getProject_video().isEmpty()) {
			newProjects.setProject_video(projects.getProject_video());
		}	
		if (projects.getProject_url() != null && !projects.getProject_url().isEmpty()) {
			newProjects.setProject_url(projects.getProject_url());
		}	

		projectsService.update(newProjects);
		return newProjects;
	}


}
