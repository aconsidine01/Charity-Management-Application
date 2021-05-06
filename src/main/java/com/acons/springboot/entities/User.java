/**
 * 
 */
package com.acons.springboot.entities;

import java.security.Key;

/**
 * @author consi
 *
 */


import java.sql.Date;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Base64;

import javax.crypto.Cipher;
import javax.crypto.spec.SecretKeySpec;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonFormat;
@Entity
@Table(name = "User")
public class User {
	
	//Fields for encryting and decrypting password
	private static final String ALGO = "AES";
	  private static final byte[] keyValue =
	            new byte[]{'A', 'n', 't', 's', 'P', 'r', 'o', 'j', 'e', 'c', 't', '@', '2', '0', '2', '0'};
	  
	  /**
	     * Encrypt a string with AES algorithm.
	     *
	     * @param data is a string
	     * @return the encrypted string
	     */
	    public static String encrypt(String data) throws Exception {
	        Key key = generateKey();
	        Cipher c = Cipher.getInstance(ALGO);
	        c.init(Cipher.ENCRYPT_MODE, key);
	        byte[] encVal = c.doFinal(data.getBytes());
	        return Base64.getEncoder().encodeToString(encVal);
	    }

	    /**
	     * Decrypt a string with AES algorithm.
	     *
	     * @param encryptedData is a string
	     * @return the decrypted string
	     */
	    public static String decrypt(String encryptedData) throws Exception {
	        Key key = generateKey();
	        Cipher c = Cipher.getInstance(ALGO);
	        c.init(Cipher.DECRYPT_MODE, key);
	        byte[] decordedValue = Base64.getDecoder().decode(encryptedData);
	        byte[] decValue = c.doFinal(decordedValue);
	        return new String(decValue);
	    }
	    
	    /**
	     * Generate a new encryption key.
	     */
	    private static Key generateKey() throws Exception {
	        return new SecretKeySpec(keyValue, ALGO);
	    }


	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column
	private Integer pk_user_id;

	@Column
	private String username;

	@Column
	private String email;

	@Column
	private String password;

	@Column
	private String reg_approval;

	@Column
	private LocalDate reg_date;

	@Column
	private String user_type;
	
	@Column
	@JsonFormat(pattern="yyyy-MM-dd HH:mm:ss")
	private LocalDateTime logon_datetime;

	@Column
	private int fail_count;
	
	@Column
	private String account_name;

	@Column
	private int sort_code;
	
	@Column
	private int account_number;


	

	@Override
	public String toString() {
		return "User [pk_user_id=" + pk_user_id + ", username=" + username + ", email=" + email + ", password="
				+ password + ", reg_approval=" + reg_approval + ", reg_date=" + reg_date + ", user_type=" + user_type
				+ ", logon_datetime=" + logon_datetime + ", fail_count=" + fail_count + "]";
	}

	public Integer getPk_user_id() {
		return pk_user_id;
	}

	public void setPk_user_id(Integer pk_user_id) {
		this.pk_user_id = pk_user_id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		String decrytpted = null;
		try {
			decrytpted = decrypt(password);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return decrytpted;
	}

	public void setPassword(String password) {
		try {
			this.password = encrypt(password);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	public String getReg_approval() {
		return reg_approval;
	}

	public void setReg_approval(String reg_approval) {
		this.reg_approval = reg_approval;
	}

	public LocalDate getReg_date() {
		return reg_date;
	}

	public void setReg_date(LocalDate reg_date) {
		this.reg_date = reg_date;
	}	

	public String getUser_type() {
		return user_type;
	}

	public void setUser_type(String user_type) {
		this.user_type = user_type;
	}

	public LocalDateTime getLogon_datetime() {
		return logon_datetime;
	}

	public void setLogon_datetime(LocalDateTime logon_datetime) {
		this.logon_datetime = logon_datetime;
	}

	public int getFail_count() {
		return fail_count;
	}

	public void setFail_count(int fail_count) {
		this.fail_count = fail_count;
	}

	public String getAccount_name() {
		return account_name;
	}

	public void setAccount_name(String account_name) {
		this.account_name = account_name;
	}

	public int getSort_code() {
		return sort_code;
	}

	public void setSort_code(int sort_code) {
		this.sort_code = sort_code;
	}

	public int getAccount_number() {
		return account_number;
	}

	public void setAccount_number(int account_number) {
		this.account_number = account_number;
	}


	


}
