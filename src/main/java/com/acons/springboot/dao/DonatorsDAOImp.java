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

import com.acons.springboot.entities.Charities;
import com.acons.springboot.entities.Donators;

/**
 * @author consi
 *
 */

@Repository
public class DonatorsDAOImp implements DonatorsDAO {
	
	@Autowired
	private EntityManager entityManager;

	@Override
	public List<Donators> get() {
		// TODO Auto-generated method stub
		String queryString = "SELECT pk_user_id, user_statement, user_photo, user_video, user_url, username, email, "
				+ " prefix, firstname, middlename, lastname, suffix, orgname, "
				+ " buildingname, address_line1, address_line2, area, city, county, postcode, privacy_level, reg_approval "
				+ "FROM user LEFT OUTER JOIN details on (user.pk_user_id = details.fk_user_id) "
				+ "INNER JOIN donors ON (user.pk_user_id = donors.fk_user_id)"
				+ "LEFT OUTER JOIN name on (user.pk_user_id = name.fk_user_id) "
				+ "LEFT OUTER JOIN address on (user.pk_user_id = address.fk_user_id) "
				+ "WHERE user_type = 1";
		Session currSession = entityManager.unwrap(Session.class);
		Query<Donators> query = currSession.createNativeQuery(queryString, Donators.class);
		//Query<Charities> query = currSession.createQuery(queryString);
		List<Donators> list = query.getResultList();
		return list;
	}

}
