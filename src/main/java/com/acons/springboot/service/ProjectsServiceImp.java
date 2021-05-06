/**
 * 
 */
/**
 * 
 */
package com.acons.springboot.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.acons.springboot.dao.ProjectsDAO;
import com.acons.springboot.entities.Projects;

/**
 * @author consi
 *
 */

@Service
public class ProjectsServiceImp implements ProjectsService {

	@Autowired
	ProjectsDAO projectsDao;

	@Transactional
	@Override
	public List<Projects> get() {
		return projectsDao.get();
	}

	@Transactional
	@Override
	public Projects get(int pk_project_id) {
		return projectsDao.get(pk_project_id);
	}

	@Transactional
	@Override
	public void save(Projects projects) {
		projectsDao.save(projects);

	}

	@Transactional
	@Override
	public void delete(int pk_project_id) {
		projectsDao.delete(pk_project_id);

	}

	@Transactional
	@Override
	public List<Projects> getbyrecipientid(Integer fk_recipient_id) {
		return projectsDao.getbyrecipientid(fk_recipient_id);
	}

	@Transactional
	@Override
	public void update(Projects projects) {
		projectsDao.update(projects);

	}



}
