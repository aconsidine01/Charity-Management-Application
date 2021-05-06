/**
 * 
 */
package com.acons.springboot.service;

import java.util.List;

import com.acons.springboot.entities.Projects;

/**
 * @author consi
 *
 */
public interface ProjectsService {
	
	List<Projects> get();

	Projects get(int pk_project_id);

	void save(Projects projects);

	void delete(int pk_project_id);

	List<Projects> getbyrecipientid(Integer fk_recipient_id);
	
	void update(Projects projects);

}
