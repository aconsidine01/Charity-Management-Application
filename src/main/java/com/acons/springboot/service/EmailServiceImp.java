/**
 * 
 */
package com.acons.springboot.service;

import java.time.LocalDateTime;
import java.util.Date;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * @author consi
 *
 */

@Service
public class EmailServiceImp implements EmailService {
	
    @Autowired
    private JavaMailSender sender;

    @Transactional
	@Override
	public void sendRegistrationConfirmation(String emailaddr, String regapproval) throws Exception {
		// TODO Auto-generated method stub
        MimeMessage message = sender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message);
        //System.out.println(emailaddr);
        String emailContent = "";
        
        if (regapproval.equalsIgnoreCase("pending")) {
        	helper.setSubject("Registration Application Recieved");
            emailContent = emailContent + "Hi, ";
            emailContent = emailContent + " \n Thanks for your application to register with Acons Charity Management. An administrator shall review your application as soon as possible, in the meantime you can update your details ";
            emailContent = emailContent + " \n If there are any questions please contact our support at Considine1980@gmail.com . \n ";
            emailContent = emailContent + " \n Many Thanks, ";
            emailContent = emailContent + " \n Acons Charity Management ";
            
		}
        else if (regapproval.equalsIgnoreCase("approved")) {
        	helper.setSubject("Registration Application Approved");
            emailContent = emailContent + "Hi, ";
            emailContent = emailContent + " \n Your application to User Acons Charity Management has been approved and you can now use the available functionality for the user type you have selected ";
            emailContent = emailContent + " \n If there are any questions please contact our support at Considine1980@gmail.com . \n ";
            emailContent = emailContent + " \n Many Thanks, ";
            emailContent = emailContent + " \n Acons Charity Management ";
		}
        else if (regapproval.equalsIgnoreCase("rejected")) {
        	helper.setSubject("Registration Application Rejected");
            emailContent = emailContent + "Hi, ";
            emailContent = emailContent + " \n Unfortunately we can't approve your requested to use our application at this time. ";
            emailContent = emailContent + " \n If you wish to discuss then please contact our support at Considine1980@gmail.com . \n ";
            emailContent = emailContent + " \n Many Thanks, ";
            emailContent = emailContent + " \n Acons Charity Management ";
		}
        else if (regapproval.equalsIgnoreCase("blocked")) {
        	helper.setSubject("User blocked from page");
            emailContent = emailContent + "Hi, ";
            emailContent = emailContent + " \n Unfortunately we have had to remove your access to give or recieve donations using this application. ";
            emailContent = emailContent + " \n If you wish to discuss then please contact our support at Considine1980@gmail.com . \n ";
            emailContent = emailContent + " \n Many Thanks, ";
            emailContent = emailContent + " \n Acons Charity Management ";
		}
        
        
        helper.setTo(emailaddr);
        helper.setText(emailContent);
         
        sender.send(message);
	}

    @Transactional
	@Override
	public void sendDonationEmail(String donoremail, String recipientemail, double amount) throws Exception {
		// TODO Auto-generated method stub
		// TODO Auto-generated method stub
        MimeMessage message = sender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message);
        //System.out.println(emailaddr);
        String emailContent = "";
        LocalDateTime date = LocalDateTime.now();  
        

        	helper.setSubject("Donation using Acons Charity Management - " + date);
            emailContent = emailContent + "Hi, ";
            emailContent = emailContent + " \n A donation of £" + amount + " has been made. Please allow up to 48 hours for admins to process";
            emailContent = emailContent + " \n If you wish to discuss then please contact our support at Considine1980@gmail.com . \n ";
            emailContent = emailContent + " \n Many Thanks, ";
            emailContent = emailContent + " \n Acons Charity Management ";

        helper.setCc(donoremail);
        helper.setTo(recipientemail);
        
        helper.setText(emailContent);
         
        sender.send(message);
		
	}


	
 




}
