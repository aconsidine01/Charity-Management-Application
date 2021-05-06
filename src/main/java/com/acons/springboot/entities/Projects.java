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
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonFormat;

/**
 * @author consi
 *
 */

@Entity
@Table(name = "Projects")
public class Projects {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column
	 private Integer pk_project_id;
	
	@Column
	private Integer fk_recipient_id;
	
	@Column
	private String project_name;
	
	@Column
	private String project_statement;
	
	@Column
	private String project_photo;
	
	@Column
	private String project_video;
	
	@Column
	private String project_url;

	@Override
	public String toString() {
		return "Projects [pk_project_id=" + pk_project_id + ", fk_recipient_id=" + fk_recipient_id
				+ ", project_statement=" + project_statement + ", project_photo=" + project_photo + ", project_video="
				+ project_video + ", project_url=" + project_url + "]";
	}

	public Integer getPk_project_id() {
		return pk_project_id;
	}

	public void setPk_project_id(Integer pk_project_id) {
		this.pk_project_id = pk_project_id;
	}

	public Integer getFk_recipient_id() {
		return fk_recipient_id;
	}

	public void setFk_recipient_id(Integer fk_recipient_id) {
		this.fk_recipient_id = fk_recipient_id;
	}

	public String getProject_statement() {
		return project_statement;
	}

	public void setProject_statement(String project_statement) {
		this.project_statement = project_statement;
	}

	public String getProject_photo() {
		return project_photo;
	}

	public void setProject_photo(String project_photo) {
		this.project_photo = project_photo;
	}

	public String getProject_video() {
		return project_video;
	}

	public void setProject_video(String project_video) {
		this.project_video = project_video;
	}

	public String getProject_url() {
		return project_url;
	}

	public void setProject_url(String project_url) {
		this.project_url = project_url;
	}

	public String getProject_name() {
		return project_name;
	}

	public void setProject_name(String project_name) {
		this.project_name = project_name;
	}
	
	
	
	
}
