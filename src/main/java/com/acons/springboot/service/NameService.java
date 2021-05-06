/**
 * 
 */
package com.acons.springboot.service;

/**
 * @author consi
 *
 */

import java.util.List;

import com.acons.springboot.entities.Name;

public interface NameService {

	List<Name> get();

	Name get(int pk_name_id);

	void save(Name name);

	void delete(int pk_name_id);

	List<Name> getbyuserid(Integer fk_user_id);
	
	void update(Name name);


}
