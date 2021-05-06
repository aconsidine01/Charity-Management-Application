/**
 * 
 */
package com.acons.springboot.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * @author consi
 *
 */
@Entity
@Table(name = "Donors")
public class Donors {
	
	@Id
	 @GeneratedValue(strategy = GenerationType.IDENTITY)
	 @Column
	 private Integer pk_donor_id;
	
	@Column
	private Integer fk_user_id;
	
	@Column
	private String privacy_level;

	@Override
	public String toString() {
		return "Donors [pk_donor_id=" + pk_donor_id + ", fk_user_id=" + fk_user_id + ", privacy_level=" + privacy_level
				+ "]";
	}

	public Integer getPk_donor_id() {
		return pk_donor_id;
	}

	public void setPk_donor_id(Integer pk_donor_id) {
		this.pk_donor_id = pk_donor_id;
	}

	public Integer getFk_user_id() {
		return fk_user_id;
	}

	public void setFk_user_id(Integer fk_user_id) {
		this.fk_user_id = fk_user_id;
	}

	public String getPrivacy_level() {
		return privacy_level;
	}

	public void setPrivacy_level(String privacy_level) {
		this.privacy_level = privacy_level;
	}

	
}
