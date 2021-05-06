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
import com.acons.springboot.entities.DonationsRecords;

/**
 * @author consi
 *
 */
@Repository
public class DonationsRecordsDAOImp implements DonationsRecordsDAO {
	
	@Autowired
	private EntityManager entityManager;

	@Override
	public List<DonationsRecords> getbydonorid(int fk_donor_id) {
		// TODO Auto-generated method stub
		String queryString = "SELECT distinct user.pk_user_id, donations.pk_donation_id, donations.fk_donor_id, donations.fk_recipient_id, donations.donation_datetime, donations.donation_amount, donations.anonymity, donations.giftaid, donations.processed, "
				+ "name.prefix, name.firstname, name.middlename, name.lastname, name.suffix, n2.orgname, "
				+ "address.buildingname, address.address_line1, address.address_line2, address.area, address.city, address.county, address.postcode, "
				+ "u2.account_name AS recipientname, u2.sort_code AS recipientsortcode, u2.account_number as recipientaccountnumber, "
				+ "user.account_name AS donorname, user.sort_code AS donorsortcode, user.account_number as donoraccountnumber "
				+ "FROM donations "
				+ "	INNER JOIN donors ON (donations.fk_donor_id = donors.pk_donor_id) "
				+ "    INNER JOIN user ON (donors.fk_user_id = user.pk_user_id) "
				+ "    INNER JOIN name ON (user.pk_user_id = name.fk_user_id) "
				+ "    INNER JOIN address ON (user.pk_user_id = address.fk_user_id) "
				+ "    INNER JOIN recipients on (donations.fk_recipient_id = recipients.pk_recipient_id) "
				+ "	   INNER JOIN user u2 ON (recipients.fk_user_id = u2.pk_user_id) "
				+ "    INNER JOIN name n2 ON (u2.pk_user_id = n2.fk_user_id) "
				+ "    WHERE donations.fk_donor_id = "  + fk_donor_id + ""
				+ "	   ORDER BY donations.donation_datetime ";
		Session currSession = entityManager.unwrap(Session.class);
		Query<DonationsRecords> query = currSession.createNativeQuery(queryString, DonationsRecords.class);
		//Query<Charities> query = currSession.createQuery(queryString);
		List<DonationsRecords> list = query.getResultList();
		return list;
	}

	@Override
	public List<DonationsRecords> getbyrecipientid(int fk_recipient_id) {
		// TODO Auto-generated method stub
		String queryString = "SELECT distinct user.pk_user_id, donations.pk_donation_id, donations.fk_donor_id, donations.fk_recipient_id, donations.donation_datetime, donations.donation_amount, donations.anonymity, donations.giftaid, donations.processed, "
				+ "name.prefix, name.firstname, name.middlename, name.lastname, name.suffix, n2.orgname, "
				+ "address.buildingname, address.address_line1, address.address_line2, address.area, address.city, address.county, address.postcode, "
				+ "u2.account_name AS recipientname, u2.sort_code AS recipientsortcode, u2.account_number as recipientaccountnumber, "
				+ "user.account_name AS donorname, user.sort_code AS donorsortcode, user.account_number as donoraccountnumber "
				+ "FROM donations "
				+ "	INNER JOIN donors ON (donations.fk_donor_id = donors.pk_donor_id) "
				+ "    INNER JOIN user ON (donors.fk_user_id = user.pk_user_id) "
				+ "    INNER JOIN name ON (user.pk_user_id = name.fk_user_id) "
				+ "    INNER JOIN address ON (user.pk_user_id = address.fk_user_id) "
				+ "    INNER JOIN recipients on (donations.fk_recipient_id = recipients.pk_recipient_id) "
				+ "	   INNER JOIN user u2 ON (recipients.fk_user_id = u2.pk_user_id) "
				+ "    INNER JOIN name n2 ON (u2.pk_user_id = n2.fk_user_id) "
				+ "    WHERE donations.fk_recipient_id = "  + fk_recipient_id + ""
						+ "	   ORDER BY donations.donation_datetime ";
		Session currSession = entityManager.unwrap(Session.class);
		Query<DonationsRecords> query = currSession.createNativeQuery(queryString, DonationsRecords.class);
		//Query<Charities> query = currSession.createQuery(queryString);
		List<DonationsRecords> list = query.getResultList();
		return list;
	}

	@Override
	public List<DonationsRecords> getprocessed() {
		// TODO Auto-generated method stub
		String queryString = "SELECT distinct user.pk_user_id, donations.pk_donation_id, donations.fk_donor_id, donations.fk_recipient_id, donations.donation_datetime, donations.donation_amount, donations.anonymity, donations.giftaid, donations.processed, "
				+ "name.prefix, name.firstname, name.middlename, name.lastname, name.suffix, n2.orgname, "
				+ "address.buildingname, address.address_line1, address.address_line2, address.area, address.city, address.county, address.postcode, "
				+ "u2.account_name AS recipientname, u2.sort_code AS recipientsortcode, u2.account_number as recipientaccountnumber, "
				+ "user.account_name AS donorname, user.sort_code AS donorsortcode, user.account_number as donoraccountnumber "
				+ "FROM donations "
				+ "	INNER JOIN donors ON (donations.fk_donor_id = donors.pk_donor_id) "
				+ "    INNER JOIN user ON (donors.fk_user_id = user.pk_user_id) "
				+ "    INNER JOIN name ON (user.pk_user_id = name.fk_user_id) "
				+ "    INNER JOIN address ON (user.pk_user_id = address.fk_user_id) "
				+ "    INNER JOIN recipients on (donations.fk_recipient_id = recipients.pk_recipient_id) "
				+ "	   INNER JOIN user u2 ON (recipients.fk_user_id = u2.pk_user_id) "
				+ "    INNER JOIN name n2 ON (u2.pk_user_id = n2.fk_user_id) "
				+ "    WHERE donations.processed = true "
						+ "	   ORDER BY donations.donation_datetime ";
		Session currSession = entityManager.unwrap(Session.class);
		Query<DonationsRecords> query = currSession.createNativeQuery(queryString, DonationsRecords.class);
		//Query<Charities> query = currSession.createQuery(queryString);
		List<DonationsRecords> list = query.getResultList();
		return list;
	}

	@Override
	public List<DonationsRecords> getunprocessed() {
		// TODO Auto-generated method stub
		String queryString = "SELECT distinct user.pk_user_id, donations.pk_donation_id, donations.fk_donor_id, donations.fk_recipient_id, donations.donation_datetime, donations.donation_amount, donations.anonymity, donations.giftaid, donations.processed, "
				+ "name.prefix, name.firstname, name.middlename, name.lastname, name.suffix, n2.orgname, "
				+ "address.buildingname, address.address_line1, address.address_line2, address.area, address.city, address.county, address.postcode, "
				+ "u2.account_name AS recipientname, u2.sort_code AS recipientsortcode, u2.account_number as recipientaccountnumber, "
				+ "user.account_name AS donorname, user.sort_code AS donorsortcode, user.account_number as donoraccountnumber "
				+ "FROM donations "
				+ "	INNER JOIN donors ON (donations.fk_donor_id = donors.pk_donor_id) "
				+ "    INNER JOIN user ON (donors.fk_user_id = user.pk_user_id) "
				+ "    INNER JOIN name ON (user.pk_user_id = name.fk_user_id) "
				+ "    INNER JOIN address ON (user.pk_user_id = address.fk_user_id) "
				+ "    INNER JOIN recipients on (donations.fk_recipient_id = recipients.pk_recipient_id) "
				+ "	   INNER JOIN user u2 ON (recipients.fk_user_id = u2.pk_user_id) "
				+ "    INNER JOIN name n2 ON (u2.pk_user_id = n2.fk_user_id) "
				+ "    WHERE donations.processed = false "
						+ "	   ORDER BY donations.donation_datetime ";
		Session currSession = entityManager.unwrap(Session.class);
		Query<DonationsRecords> query = currSession.createNativeQuery(queryString, DonationsRecords.class);
		//Query<Charities> query = currSession.createQuery(queryString);
		List<DonationsRecords> list = query.getResultList();
		return list;
	}

	
}
