/**
 * 
 */
package com.acons.springboot.entities;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.persistence.SecondaryTable;
import javax.persistence.Table;

import org.hibernate.annotations.FilterJoinTable;

import com.fasterxml.jackson.annotation.JsonFormat;


/**
 * @author consi
 *
 */

@Entity
@Table(name = "Donation")
@FilterJoinTable(name = "Donors",  condition="donors.pk_donor_id = donations.fk_donor_id")
@FilterJoinTable(name = "User",  condition="donors.fk_user_id = user.pk_user_id")
@FilterJoinTable(name = "Name",  condition="name.fk_user_id = user.pk_user_id")
@FilterJoinTable(name = "Address",  condition="address.fk_user_id = user.pk_user_id")
@FilterJoinTable(name = "Recipients",  condition="recipients.pk_recipient_id = donations.fk_recipient_id")
@FilterJoinTable(name = "User U2", condition="recipients.fk_user_id = U2.pk_user_id")
@FilterJoinTable(name = "Name N2", condition="N2.fk_user_id = U2.pk_user_id")


public class DonationsRecords {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column
	private Integer pk_donation_id;
	
	@Column
	private Integer pk_user_id;
	

	
	@Column
	private String fk_donor_id;
	
	@Column
	private String fk_recipient_id;
	
	@Column
	@JsonFormat(pattern="yyyy-MM-dd HH:mm:ss")
	private LocalDateTime donation_datetime;
	
	@Column
	private double donation_amount;
	
	@Column
	private String anonymity;
	
	@Column
	private boolean giftaid;
	
	@Column
	private String prefix;
	
	@Column
	private String firstname;
	
	@Column
	private String middlename;
	
	@Column
	private String lastname;
	
	@Column
	private String suffix;
	
	@Column
	private String orgname;
	
	@Column
	private String buildingname;
	
	@Column
	private String address_line1;
	
	@Column
	private String address_line2;
	
	@Column
	private String area;
	
	@Column
	private String city;
	
	@Column
	private String county;
	
	@Column
	private String postcode;
	
	@Column
	private boolean processed;
	
	@Column
	private String recipientname;

	@Column
	private int recipientsortcode;
	
	@Column
	private int recipientaccountnumber;
	
	@Column
	private String donorname;

	@Column
	private int donorsortcode;
	
	@Column
	private int donoraccountnumber;
	
	public Integer getPk_donation_id() {
		return pk_donation_id;
	}

	public void setPk_donation_id(Integer pk_donation_id) {
		this.pk_donation_id = pk_donation_id;
	}

	public String getFk_donor_id() {
		return fk_donor_id;
	}

	public void setFk_donor_id(String fk_donor_id) {
		this.fk_donor_id = fk_donor_id;
	}

	public String getFk_recipient_id() {
		return fk_recipient_id;
	}

	public void setFk_recipient_id(String fk_recipient_id) {
		this.fk_recipient_id = fk_recipient_id;
	}

	public LocalDateTime getDonation_datetime() {
		return donation_datetime;
	}

	public void setDonation_datetime(LocalDateTime donation_datetime) {
		this.donation_datetime = donation_datetime;
	}

	public double getDonation_amount() {
		return donation_amount;
	}

	public void setDonation_amount(double donation_amount) {
		this.donation_amount = donation_amount;
	}

	public String getAnonymity() {
		return anonymity;
	}

	public void setAnonymity(String anonymity) {
		this.anonymity = anonymity;
	}

	public boolean isGiftaid() {
		return giftaid;
	}

	public void setGiftaid(boolean giftaid) {
		this.giftaid = giftaid;
	}

	public String getPrefix() {
		return prefix;
	}

	public void setPrefix(String prefix) {
		this.prefix = prefix;
	}

	public String getFirstname() {
		return firstname;
	}

	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}

	public String getMiddlename() {
		return middlename;
	}

	public void setMiddlename(String middlename) {
		this.middlename = middlename;
	}

	public String getLastname() {
		return lastname;
	}

	public void setLastname(String lastname) {
		this.lastname = lastname;
	}

	public String getSuffix() {
		return suffix;
	}

	public void setSuffix(String suffix) {
		this.suffix = suffix;
	}

	public String getOrgname() {
		return orgname;
	}

	public void setOrgname(String orgname) {
		this.orgname = orgname;
	}

	public String getBuildingname() {
		return buildingname;
	}

	public void setBuildingname(String buildingname) {
		this.buildingname = buildingname;
	}

	public String getAddress_line1() {
		return address_line1;
	}

	public void setAddress_line1(String address_line1) {
		this.address_line1 = address_line1;
	}

	public String getAddress_line2() {
		return address_line2;
	}

	public void setAddress_line2(String address_line2) {
		this.address_line2 = address_line2;
	}

	public String getArea() {
		return area;
	}

	public void setArea(String area) {
		this.area = area;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getCounty() {
		return county;
	}

	public void setCounty(String county) {
		this.county = county;
	}

	public String getPostcode() {
		return postcode;
	}

	public void setPostcode(String postcode) {
		this.postcode = postcode;
	}

	public Integer getPk_user_id() {
		return pk_user_id;
	}

	public void setPk_user_id(Integer pk_user_id) {
		this.pk_user_id = pk_user_id;
	}

	public boolean isProcessed() {
		return processed;
	}

	public void setProcessed(boolean processed) {
		this.processed = processed;
	}

	public String getRecipientname() {
		return recipientname;
	}

	public void setRecipientname(String recipientname) {
		this.recipientname = recipientname;
	}

	public int getRecipientsortcode() {
		return recipientsortcode;
	}

	public void setRecipientsortcode(int recipientsortcode) {
		this.recipientsortcode = recipientsortcode;
	}

	public int getRecipientaccountnumber() {
		return recipientaccountnumber;
	}

	public void setRecipientaccountnumber(int recipientaccountnumber) {
		this.recipientaccountnumber = recipientaccountnumber;
	}

	public String getDonorname() {
		return donorname;
	}

	public void setDonorname(String donorname) {
		this.donorname = donorname;
	}

	public int getDonorsortcode() {
		return donorsortcode;
	}

	public void setDonorsortcode(int donorsortcode) {
		this.donorsortcode = donorsortcode;
	}

	public int getDonoraccountnumber() {
		return donoraccountnumber;
	}

	public void setDonoraccountnumber(int donoraccountnumber) {
		this.donoraccountnumber = donoraccountnumber;
	}



	


}
