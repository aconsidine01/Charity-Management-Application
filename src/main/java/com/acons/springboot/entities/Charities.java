/**
 * 
 */
package com.acons.springboot.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.persistence.SecondaryTable;
import javax.persistence.Table;

/**
 * @author consi
 *
 */

@Entity
@Table(name = "User")
@SecondaryTable(name = "Details", pkJoinColumns = @PrimaryKeyJoinColumn(name="fk_user_id", referencedColumnName="pk_user_id"))
@SecondaryTable(name = "Name", pkJoinColumns = @PrimaryKeyJoinColumn(name="fk_user_id", referencedColumnName="pk_user_id"))
@SecondaryTable(name = "Address", pkJoinColumns = @PrimaryKeyJoinColumn(name="fk_user_id", referencedColumnName="pk_user_id"))
public class Charities {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column
	private Integer pk_user_id;
	
	@Column
	private String user_statement;
	
	@Column
	private String user_photo;
	
	@Column
	private String user_video;
	
	@Column
	private String user_url;
	
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
	private String username;

	@Column
	private String email;
	
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
	private String reg_approval;
	
	@Column
	private int pk_recipient_id;

	public Integer getPk_user_id() {
		return pk_user_id;
	}

	public void setPk_user_id(Integer pk_user_id) {
		this.pk_user_id = pk_user_id;
	}

	public String getUser_statement() {
		return user_statement;
	}

	public void setUser_statement(String user_statement) {
		this.user_statement = user_statement;
	}

	public String getUser_photo() {
		return user_photo;
	}

	public void setUser_photo(String user_photo) {
		this.user_photo = user_photo;
	}

	public String getUser_video() {
		return user_video;
	}

	public void setUser_video(String user_video) {
		this.user_video = user_video;
	}

	public String getUser_url() {
		return user_url;
	}

	public void setUser_url(String user_url) {
		this.user_url = user_url;
	}

	public String getOrgname() {
		return orgname;
	}

	public void setOrgname(String orgname) {
		this.orgname = orgname;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
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

	public String getReg_approval() {
		return reg_approval;
	}

	public void setReg_approval(String reg_approval) {
		this.reg_approval = reg_approval;
	}

	public int getPk_recipient_id() {
		return pk_recipient_id;
	}

	public void setPk_recipient_id(int pk_recipient_id) {
		this.pk_recipient_id = pk_recipient_id;
	}
	
	
	
	


}
