/**
 * 
 */
package com.acons.springboot.entities;

import java.time.LocalDateTime;
import java.time.LocalTime;

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
@Table (name = "Allocation")
public class Allocation {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column
	private Integer pk_allocation_id;

	@Column
	private Integer fk_recipient_id;

	@Column
	private Integer fk_project_id;

	@Column
	private double allocation_amount;

	@Column
	@JsonFormat(pattern="yyyy-MM-dd HH:mm:ss")
	private LocalDateTime allocation_datetime;

	@Override
	public String toString() {
		return "Allocation [pk_allocation_id=" + pk_allocation_id + ", fk_recipient_id=" + fk_recipient_id
				+ ", fk_project_id=" + fk_project_id + ", allocation_amount=" + allocation_amount
				+ ", allocation_datetime=" + allocation_datetime + "]";
	}

	public Integer getPk_allocation_id() {
		return pk_allocation_id;
	}

	public void setPk_allocation_id(Integer pk_allocation_id) {
		this.pk_allocation_id = pk_allocation_id;
	}

	public Integer getFk_recipient_id() {
		return fk_recipient_id;
	}

	public void setFk_recipient_id(Integer fk_recipient_id) {
		this.fk_recipient_id = fk_recipient_id;
	}

	public Integer getFk_project_id() {
		return fk_project_id;
	}

	public void setFk_project_id(Integer fk_project_id) {
		this.fk_project_id = fk_project_id;
	}

	public double getAllocation_amount() {
		return allocation_amount;
	}

	public void setAllocation_amount(double allocation_amount) {
		this.allocation_amount = allocation_amount;
	}

	public LocalDateTime getAllocation_datetime() {
		return allocation_datetime;
	}

	public void setAllocation_datetime(LocalDateTime allocation_datetime) {
		this.allocation_datetime = allocation_datetime;
	}



}
