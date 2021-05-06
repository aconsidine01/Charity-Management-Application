/**
 * 
 */
package com.acons.springboot.entities;

import java.sql.Date;
import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


import com.fasterxml.jackson.annotation.JsonFormat;

/**
 * @author consi
 *
 */

@Entity
@Table (name = "Donations")
public class Donations {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column
	private Integer pk_donation_id;

	@Column
	private Integer fk_donor_id;
	
	@Column
	private Integer fk_recipient_id;
	
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
	private boolean processed;

	@Override
	public String toString() {
		return "Donations [pk_donation_id=" + pk_donation_id + ", fk_donor_id=" + fk_donor_id + ", fk_recipient_id="
				+ fk_recipient_id + ", donation_datetime=" + donation_datetime + ", donation_amount=" + donation_amount
				+ ", anonymity=" + anonymity + ", giftaid=" + giftaid + "]";
	}

	public Integer getPk_donation_id() {
		return pk_donation_id;
	}

	public void setPk_donation_id(Integer pk_donation_id) {
		this.pk_donation_id = pk_donation_id;
	}

	public Integer getFk_donor_id() {
		return fk_donor_id;
	}

	public void setFk_donor_id(Integer fk_donor_id) {
		this.fk_donor_id = fk_donor_id;
	}

	public Integer getFk_recipient_id() {
		return fk_recipient_id;
	}

	public void setFk_recipient_id(Integer fk_recipient_id) {
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

	public boolean isProcessed() {
		return processed;
	}

	public void setProcessed(boolean processed) {
		this.processed = processed;
	}
	
	
	


	

	
	
	
	

}
