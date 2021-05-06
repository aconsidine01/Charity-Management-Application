/**
 * 
 */
package com.acons.springboot.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.acons.springboot.dao.UserDAO;
import com.acons.springboot.entities.Name;
import com.acons.springboot.entities.User;



@Service
public class UserServiceImp implements UserService{

	@Autowired
	private UserDAO userDao;

	@Transactional
	@Override
	public List<User> get() {
		// TODO Auto-generated method stub
		return userDao.get();
	}

	@Transactional
	@Override
	public User get(int pk_user_id) {
		// TODO Auto-generated method stub
		return userDao.get(pk_user_id);
	}

	@Transactional
	@Override
	public void save(User user) {
		// TODO Auto-generated method stub
		userDao.save(user);	
	}

	@Transactional
	@Override
	public void delete(int pk_user_id) {
		// TODO Auto-generated method stub
		userDao.delete(pk_user_id);
	}

	@Transactional
	@Override
	public List<User> getbyemail(String email) {
		// TODO Auto-generated method stub
		return userDao.getbyemail(email);
	}

	@Transactional
	@Override
	public List<User> getbyemailpassword(String email, String password) {
		// TODO Auto-generated method stub
		return userDao.getbyemailpassword(email, password);
	}

	@Transactional
	@Override
	public List<User> getbyusernamepassword(String username, String password) {
		// TODO Auto-generated method stub
		return userDao.getbyusernamepassword(username, password);
	}

	@Transactional
	@Override
	public void update(User user) {
		// TODO Auto-generated method stub
		userDao.update(user);

	}

	@Transactional
	@Override
	public void failedlogon(User user) {
		// TODO Auto-generated method stub
		userDao.update(user);
	}


}
