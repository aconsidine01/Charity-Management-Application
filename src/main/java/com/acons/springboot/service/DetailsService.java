/**
 * 
 */
package com.acons.springboot.service;

import java.util.List;

import com.acons.springboot.entities.Details;

/**
 * @author consi
 *
 */
public interface DetailsService {

	List<Details> get();

	Details get(int pk_details_id);

	void save(Details details);

	void delete(int pk_details_id);

	List<Details> getbyuserid(int fk_user_id);

	void update(Details details);

}
