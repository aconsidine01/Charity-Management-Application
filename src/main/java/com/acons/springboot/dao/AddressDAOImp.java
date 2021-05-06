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

import com.acons.springboot.entities.Address;

/**
 * @author consi
 *
 */
@Repository
public class AddressDAOImp implements AddressDAO {
	
	@Autowired
	private EntityManager entityManager;

	@Override
	public List<Address> get() {
		Session currSession = entityManager.unwrap(Session.class);
		  Query<Address> query = currSession.createQuery("from Address", Address.class);
		  List<Address> list = query.getResultList();
		  return list;
	}

	@Override
	public Address get(int pk_address_id) {
		Session currSession = entityManager.unwrap(Session.class);
		Address address = currSession.get(Address.class, pk_address_id);
		  return address;
	}
	



	@Override
	public void save(Address address) {
		  Session currSession = entityManager.unwrap(Session.class);
		  currSession.saveOrUpdate(address);
		
	}

	@Override
	public void delete(int pk_address_id) {
		Session currSession = entityManager.unwrap(Session.class);
		Address address = currSession.get(Address.class, pk_address_id);
		  currSession.delete(address);
		
	}
	
	@Override
	public List<Address> getbyuserid(int fk_user_id) {
		String querystring = "from Address where fk_user_id = " + fk_user_id;
		Session currSession = entityManager.unwrap(Session.class);
		  Query<Address> query = currSession.createQuery(querystring, Address.class);
		  List<Address> list = query.getResultList();
		  return list;
	}

	@Override
	public void update(Address address) {
		// TODO Auto-generated method stub
		  Session currSession = entityManager.unwrap(Session.class);
		  currSession.update(address);
	}

}
