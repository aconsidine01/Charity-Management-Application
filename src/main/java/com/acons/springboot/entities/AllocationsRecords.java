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

import org.hibernate.annotations.FilterJoinTable;

/**
 * @author consi
 *
 */

@Entity
@Table(name = "Allocation")
@FilterJoinTable(name = "Projects", condition="allocation.fk_project_id = projects.pk_project_id")
//@SecondaryTable(name = "Allocation", pkJoinColumns = @PrimaryKeyJoinColumn(name="fk_recipient_id", referencedColumnName="pk_recipient_id"))
@FilterJoinTable(name="Recipients", condition="allocation.fk_recipient_id = recipients.pk_recipient_id")
public class AllocationsRecords {
	

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column
	private Integer pk_allocation_id;
	
	@Column
	private String project_name;
	
	@Column
	private double allocation_amount;
	
	@Column
	private String allocation_datetime;

	public Integer getPk_recipient_id() {
		return pk_allocation_id;
	}

	public void setPk_recipient_id(Integer pk_recipient_id) {
		this.pk_allocation_id = pk_recipient_id;
	}

	public String getProject_name() {
		return project_name;
	}

	public void setProject_name(String project_name) {
		this.project_name = project_name;
	}

	public double getAllocation_amount() {
		return allocation_amount;
	}

	public void setAllocation_amount(double allocation_amount) {
		this.allocation_amount = allocation_amount;
	}

	public String getAllocation_datetime() {
		return allocation_datetime;
	}

	public void setAllocation_datetime(String allocation_datetime) {
		this.allocation_datetime = allocation_datetime;
	}

	public Integer getPk_allocation_id() {
		return pk_allocation_id;
	}

	public void setPk_allocation_id(Integer pk_allocation_id) {
		this.pk_allocation_id = pk_allocation_id;
	}


	
	
	

}
