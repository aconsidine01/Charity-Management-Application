/**
 * 
 */
package com.acons.springboot.service;

import java.util.List;

import com.acons.springboot.entities.User;

/**
 * @author consi
 *
 */

public interface UserService {

	List<User> get();

	User get(int pk_user_id);

	void save(User user);

	void delete(int pk_user_id);

	List<User> getbyemail(String email);

	List<User> getbyemailpassword(String email, String password);

	List<User> getbyusernamepassword(String username, String password);
	
	void update(User user);

	void failedlogon(User user);

}
