/**
 * 
 */
package com.acons.springboot.controllers;

import java.sql.Date;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

import javax.mail.internet.MimeMessage;

/**
 * @author consi
 *
 */

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.acons.springboot.entities.Address;
import com.acons.springboot.entities.Name;
import com.acons.springboot.entities.User;
import com.acons.springboot.service.UserService;


/**
 * @author consi
 *
 */

@RestController
@RequestMapping("/api")
public class UserController {

	@Autowired
	private UserService userService;
	


	@GetMapping("/user")
	public List<User> get() {
		return userService.get();
	}

	@PostMapping("/user/insert")
	public User save(@RequestBody User user) {

		LocalDateTime currenttime = LocalDateTime.now();
		LocalDate currentdate = LocalDate.now();
		if (user.getLogon_datetime() == null) {
			user.setLogon_datetime(currenttime);
		}
		else {
			user.setLogon_datetime(currenttime);
		}
		if (user.getReg_date() == null) {
			user.setReg_date(currentdate);
		}
		else {
			user.setReg_date(currentdate);
		}

		userService.save(user);
		return user;

	}


	@GetMapping("/user/byuserid")
	public User get(@RequestBody User user) {
		System.out.println(user.toString());
		return userService.get(user.getPk_user_id());
	}
	
	@GetMapping("/user/byuseridpath/{pk_user_id}")
	public User getbyuseridpath(@PathVariable int pk_user_id)  {
		return userService.get(pk_user_id);
	}



	@DeleteMapping("/user/delete")
	public String delete(@RequestBody User user) {

		userService.delete(user.getPk_user_id());

		return "User removed with id "+ user.getPk_user_id() ;

	}


	@GetMapping("/user/byemail")
	public List<User> getbyemail(@RequestBody User user) {
		return userService.getbyemail(user.getEmail());
	}

	@GetMapping("/user/byemailpassword")
	public List<User> getbyemailpassword(@RequestBody User user) {
		return userService.getbyemailpassword(user.getEmail(), user.getPassword());
	}

	@GetMapping("/user/byusernamepassword")
	public List<User> getbyusernamepassword(@RequestBody User user) {
		return userService.getbyusernamepassword(user.getUsername(), user.getPassword());
	}

	@PutMapping("/user/update")
	public User update(@RequestBody User user) {
		User newUser = userService.get(user.getPk_user_id());

		LocalDateTime currenttime = LocalDateTime.now();

		if (user.getUsername() != null && !user.getUsername().isEmpty()) {
			newUser.setUsername(user.getUsername());
		}		
		if (user.getEmail() != null && !user.getEmail().isEmpty()) {
			newUser.setEmail(user.getEmail());
		}	
		if (user.getPassword() != null && !user.getPassword().isEmpty()) {
			newUser.setPassword(user.getPassword());
		}
		if (user.getReg_approval() != null && !user.getReg_approval().isEmpty()) {
			newUser.setReg_approval(user.getReg_approval());
		}
		if (user.getReg_date() != null) {
			newUser.setReg_date(user.getReg_date());
		}
		if (user.getUser_type() != null && !user.getUser_type().isEmpty()) {
			newUser.setUser_type(user.getUser_type());
		}
		if (user.getFail_count() != newUser.getFail_count()) {
			newUser.setFail_count(user.getFail_count());
		}
		if (user.getLogon_datetime() == null) {
			newUser.setLogon_datetime(currenttime);
		}
		else {
			newUser.setLogon_datetime(user.getLogon_datetime());
		}
		if (user.getAccount_name() != null && !user.getAccount_name().isEmpty()) {
			newUser.setAccount_name(user.getAccount_name());
		}
		if (user.getSort_code() != newUser.getSort_code() && user.getSort_code() != 0) {
			newUser.setSort_code(user.getSort_code());
		}
		if (user.getAccount_number() != newUser.getAccount_number() && user.getAccount_number() != 0) {
			newUser.setAccount_number(user.getAccount_number());
		}

		userService.update(newUser);
		return newUser;
	}

	@PutMapping("/user/failedlogon")
	public User failedlogon(@RequestBody User user) {
		User newUser = userService.get(user.getPk_user_id());

		newUser.setFail_count(newUser.getFail_count()+1);
		userService.failedlogon(newUser);
		return newUser;
	}
	

	 

}
