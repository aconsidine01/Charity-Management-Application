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

import com.acons.springboot.entities.AllocationsRecords;
import com.acons.springboot.entities.Charities;

/**
 * @author consi
 *
 */

@Repository
public class AllocationsRecordsDAOImp implements AllocationsRecordsDAO {

	@Autowired
	private EntityManager entityManager;
	
	@Override
	public List<AllocationsRecords> getbyuserid(int pk_user_id) {
		// TODO Auto-generated method stub
		String queryString = "SELECT pk_allocation_id, project_name, allocation_amount, allocation_datetime FROM allocation "
				+ "	INNER JOIN projects ON (allocation.fk_project_id = projects.pk_project_id) "
				+ " INNER JOIN recipients ON (allocation.fk_recipient_id = recipients.pk_recipient_id) "
				+ " WHERE fk_user_id = " + pk_user_id + ""
				+ " ORDER by allocation_datetime";
		Session currSession = entityManager.unwrap(Session.class);
		Query<AllocationsRecords> query = currSession.createNativeQuery(queryString, AllocationsRecords.class);
		//Query<Charities> query = currSession.createQuery(queryString);
		List<AllocationsRecords> list = query.getResultList();
		return list;
	}

}
