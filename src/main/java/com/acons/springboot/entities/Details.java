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
@Table(name = "Details")
public class Details {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column
	 private Integer pk_details_id;
	
	@Column
	private Integer fk_user_id;
	
	@Column
	private String user_statement;
	
	@Column
	private String user_photo;
	
	@Column
	private String user_video;
	
	@Column
	private String user_url;

	@Override
	public String toString() {
		return "Details [pk_details_id=" + pk_details_id + ", fk_user_id=" + fk_user_id + ", user_statement="
				+ user_statement + ", user_photo=" + user_photo + ", user_video=" + user_video + ", user_url="
				+ user_url + "]";
	}

	public Integer getPk_details_id() {
		return pk_details_id;
	}

	public void setPk_details_id(Integer pk_details_id) {
		this.pk_details_id = pk_details_id;
	}

	public Integer getFk_user_id() {
		return fk_user_id;
	}

	public void setFk_user_id(Integer fk_user_id) {
		this.fk_user_id = fk_user_id;
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
	
	

	
	

}
