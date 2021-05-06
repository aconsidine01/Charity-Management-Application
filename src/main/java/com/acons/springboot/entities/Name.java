/**
 * 
 */
package com.acons.springboot.entities;

/**
 * @author consi
 *
 */



import java.sql.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
@Entity
@Table(name = "Name")
public class Name {
	
	@Id
	 @GeneratedValue(strategy = GenerationType.IDENTITY)
	 @Column
	 private Integer pk_name_id;
	
	@Column
	private Integer fk_user_id;
	
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

	@Override
	public String toString() {
		return "Name [pk_name_id=" + pk_name_id + ", fk_user_id=" + fk_user_id + ", prefix=" + prefix + ", firstname="
				+ firstname + ", middlename=" + middlename + ", lastname=" + lastname + ", suffix=" + suffix
				+ ", orgname=" + orgname + "]";
	}

	public Integer getPk_name_id() {
		return pk_name_id;
	}

	public void setPk_name_id(Integer pk_name_id) {
		this.pk_name_id = pk_name_id;
	}

	public Integer getFk_user_id() {
		return fk_user_id;
	}

	public void setFk_user_id(Integer fk_user_id) {
		this.fk_user_id = fk_user_id;
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

	


	
}
