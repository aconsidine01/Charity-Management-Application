/**
 * 
 */
package com.acons.springboot.service;

import java.util.List;

import com.acons.springboot.entities.Recipients;

/**
 * @author consi
 *
 */
public interface RecipientsService {
	
	List<Recipients> get();
	 
	Recipients get(int pk_recipient_id);
	 
	 void save(Recipients recipients);
	 
	 void delete(int pk_recipient_id);

	 List<Recipients> getbyuserid(int fk_user_id);

}
