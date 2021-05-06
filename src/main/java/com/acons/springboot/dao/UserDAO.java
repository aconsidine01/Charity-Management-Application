/**
 * 
 */
package com.acons.springboot.dao;

/**
 * @author consi
 *
 */


import java.util.List;

import com.acons.springboot.entities.Name;
import com.acons.springboot.entities.User;


public interface UserDAO {
	
	 List<User> get();
	 
	 User get(int id);
	 
	 void save(User user);
	 
	 void delete(int id);
	 
	 List<User> getbyemail(String email);
	 
	 List<User> getbyemailpassword(String email, String password);
	 
	 List<User> getbyusernamepassword(String username, String password);
	 
	 void update(User user);
	 
	 void failedlogon(User user);

}
