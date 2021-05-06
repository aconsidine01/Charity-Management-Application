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

import com.acons.springboot.entities.Allocation;

/**
 * @author consi
 *
 */

@Repository
public class AllocationDAOImp implements AllocationDAO {

	@Autowired
	private EntityManager entityManager;

	@Override
	public List<Allocation> get() {
		Session currSession = entityManager.unwrap(Session.class);
		Query<Allocation> query = currSession.createQuery("from Allocation", Allocation.class);
		List<Allocation> list = query.getResultList();
		return list;
	}

	@Override
	public Allocation get(int pk_allocation_id) {
		Session currSession = entityManager.unwrap(Session.class);
		Allocation donations = currSession.get(Allocation.class, pk_allocation_id);
		return donations;
	}

	@Override
	public void save(Allocation allocation) {
		Session currSession = entityManager.unwrap(Session.class);
		currSession.saveOrUpdate(allocation);

	}

	@Override
	public void delete(int pk_allocation_id) {
		Session currSession = entityManager.unwrap(Session.class);
		Allocation allocation = currSession.get(Allocation.class, pk_allocation_id);
		currSession.delete(allocation);

	}

	@Override
	public List<Allocation> getbyrecipientid(int fk_recipient_id) {
		String querystring = "from Allocation where fk_recipient_id = " + fk_recipient_id;
		Session currSession = entityManager.unwrap(Session.class);
		Query<Allocation> query = currSession.createQuery(querystring, Allocation.class);
		List<Allocation> list = query.getResultList();
		return list;
	}

	@Override
	public List<Allocation> getbyprojectid(int fk_project_id) {
		String querystring = "from Allocation where fk_project_id = " + fk_project_id;
		Session currSession = entityManager.unwrap(Session.class);
		Query<Allocation> query = currSession.createQuery(querystring, Allocation.class);
		List<Allocation> list = query.getResultList();
		return list;
	}

	@Override
	public void update(Allocation allocation) {
		Session currSession = entityManager.unwrap(Session.class);
		currSession.update(allocation);
	}

}
