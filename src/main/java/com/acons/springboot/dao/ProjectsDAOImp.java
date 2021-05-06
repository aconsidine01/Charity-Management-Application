/**
 * 
 */
package com.acons.springboot.dao;

import java.util.List;

import javax.persistence.EntityManager;

import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.acons.springboot.entities.Projects;

/**
 * @author consi
 *
 */

@Repository
public class ProjectsDAOImp implements ProjectsDAO {

	@Autowired
	private EntityManager entityManager;

	@Override
	public List<Projects> get() {
		Session currSession = entityManager.unwrap(Session.class);
		Query<Projects> query = currSession.createQuery("from Projects", Projects.class);
		List<Projects> list = query.getResultList();
		return list;
	}

	@Override
	public Projects get(int pk_project_id) {
		Session currSession = entityManager.unwrap(Session.class);
		Projects projects = currSession.get(Projects.class, pk_project_id);
		return projects;
	}

	@Override
	public void save(Projects projects) {
		Session currSession = entityManager.unwrap(Session.class);
		currSession.saveOrUpdate(projects);

	}

	@Override
	public void delete(int pk_project_id) {
		Session currSession = entityManager.unwrap(Session.class);
		Projects projects = currSession.get(Projects.class, pk_project_id);
		currSession.delete(projects);

	}

	@Override
	public List<Projects> getbyrecipientid(Integer fk_recipient_id) {
		String querystring = "from Projects where fk_recipient_id = " + fk_recipient_id;
		Session currSession = entityManager.unwrap(Session.class);
		Query<Projects> query = currSession.createQuery(querystring, Projects.class);
		List<Projects> list = query.getResultList();
		return list;
	}

	@Override
	public void update(Projects projects) {
		Session currSession = entityManager.unwrap(Session.class);
		currSession.update(projects);
	}
}
