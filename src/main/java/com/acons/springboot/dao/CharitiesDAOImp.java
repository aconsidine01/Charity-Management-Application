/**
 * 
 */
package com.acons.springboot.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;

import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.acons.springboot.entities.Allocation;
import com.acons.springboot.entities.Charities;
import com.acons.springboot.entities.User;

/**
 * @author consi
 *
 */

@Repository
public class CharitiesDAOImp implements CharitiesDAO {
	
	@Autowired
	private EntityManager entityManager;

	@Override
	public List<Charities> get() {
		// TODO Auto-generated method stub
		String queryString = "SELECT pk_user_id, user_statement, user_photo, user_video, user_url, username, email, "
				+ " prefix, firstname, middlename, lastname, suffix, orgname, pk_recipient_id, "
				+ " buildingname, address_line1, address_line2, area, city, county, postcode, reg_approval "
				+ "FROM user INNER JOIN recipients ON (user.pk_user_id = recipients.fk_user_id) "
				+ "LEFT OUTER JOIN details on (user.pk_user_id = details.fk_user_id) "
				+ "LEFT OUTER JOIN name on (user.pk_user_id = name.fk_user_id) "
				+ "LEFT OUTER JOIN address on (user.pk_user_id = address.fk_user_id) "
				+ "WHERE user_type = 2";
		Session currSession = entityManager.unwrap(Session.class);
		Query<Charities> query = currSession.createNativeQuery(queryString, Charities.class);
		//Query<Charities> query = currSession.createQuery(queryString);
		List<Charities> list = query.getResultList();
		return list;
		
	
	}
	

}
