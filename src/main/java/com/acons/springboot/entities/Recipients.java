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
@Table (name = "Recipients")
public class Recipients {
	
	@Id
	 @GeneratedValue(strategy = GenerationType.IDENTITY)
	 @Column
	 private Integer pk_recipient_id;
	
	@Column
	private Integer fk_user_id;

	@Override
	public String toString() {
		return "Recipients [pk_recipient_id=" + pk_recipient_id + ", fk_user_id=" + fk_user_id + "]";
	}

	public Integer getPk_recipient_id() {
		return pk_recipient_id;
	}

	public void setPk_recipient_id(Integer pk_recipient_id) {
		this.pk_recipient_id = pk_recipient_id;
	}

	public Integer getFk_user_id() {
		return fk_user_id;
	}

	public void setFk_user_id(Integer fk_user_id) {
		this.fk_user_id = fk_user_id;
	}


	
	
	

}
