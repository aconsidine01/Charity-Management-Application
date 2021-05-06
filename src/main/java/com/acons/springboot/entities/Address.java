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
@Table(name = "Address")
public class Address {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column
	 private Integer pk_address_id;
	
	@Column
	private Integer fk_user_id;
	
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

	@Override
	public String toString() {
		return "Address [pk_address_id=" + pk_address_id + ", fk_user_id=" + fk_user_id + ", buildingname="
				+ buildingname + ", address_line1=" + address_line1 + ", address_line2=" + address_line2 + ", area="
				+ area + ", city=" + city + ", county=" + county + ", postcode=" + postcode + "]";
	}

	public Integer getPk_address_id() {
		return pk_address_id;
	}

	public void setPk_address_id(Integer pk_address_id) {
		this.pk_address_id = pk_address_id;
	}

	public Integer getFk_user_id() {
		return fk_user_id;
	}

	public void setFk_user_id(Integer fk_user_id) {
		this.fk_user_id = fk_user_id;
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
	
	
}
