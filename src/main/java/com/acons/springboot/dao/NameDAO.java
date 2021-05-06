/**
 * 
 */
package com.acons.springboot.dao;

import java.util.List;

import com.acons.springboot.entities.Name;

/**
 * @author consi
 *
 */
public interface NameDAO {

	List<Name> get();

	void save(Name name);

	void delete(int pk_name_id);

	Name get(int pk_name_id);

	List<Name> getbyuserid(int fk_user_id);

	void update(Name name);
}
