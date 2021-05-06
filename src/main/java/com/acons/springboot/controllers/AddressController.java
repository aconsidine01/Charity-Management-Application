/**
 * 
 */
package com.acons.springboot.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.acons.springboot.entities.Address;
import com.acons.springboot.entities.Name;
import com.acons.springboot.service.AddressService;

/**
 * @author consi
 *
 */

@RestController
@RequestMapping("/api")
public class AddressController {

	@Autowired
	private AddressService addressService;

	@GetMapping("/address")
	public List<Address> get() {
		return addressService.get();
	}

	@PostMapping("/address/insert")
	public Address save(@RequestBody Address address) {
		addressService.save(address);
		return address;
	}


	@GetMapping("/address/byaddressid")
	public Address get(@RequestBody Address address) {
		return addressService.get(address.getPk_address_id());
	}
	
	@GetMapping("/address/pathbyaddressid/{pk_address_id}")
	public Address getbyaddressid(@PathVariable int pk_address_id) {
		return addressService.get(pk_address_id);
	}






	@DeleteMapping("/address/delete")
	public String delete(@RequestBody Address address) {

		addressService.delete(address.getPk_address_id());

		return "Address removed with id " + address.getPk_address_id();

	}



	@GetMapping("/address/byuserid")
	public List<Address> getbyuserid(@RequestBody Address address) 
	{
		return addressService.getbyuserid(address.getFk_user_id());
	}
	
	@GetMapping("/address/pathbyuserid/{fk_user_id}")
	public List<Address> getbyuseridpath(@PathVariable int fk_user_id) 
	{
		return addressService.getbyuserid(fk_user_id);
	}

	@PutMapping("/address/update")
	public Address update(@RequestBody Address address) {
		Address newAddress = addressService.get(address.getPk_address_id());

		if (address.getBuildingname() != null && !address.getBuildingname().isEmpty()) {
			newAddress.setBuildingname(address.getBuildingname());
		}		
		if (address.getAddress_line1() != null && !address.getAddress_line1().isEmpty()) {
			newAddress.setAddress_line1(address.getAddress_line1());
		}	
		if (address.getAddress_line2() != null && !address.getAddress_line2().isEmpty()) {
			newAddress.setAddress_line2(address.getAddress_line2());
		}	
		if (address.getArea() != null && !address.getArea().isEmpty()) {
			newAddress.setArea(address.getArea());
		}
		if (address.getCity() != null && !address.getCity().isEmpty()) {
			newAddress.setCity(address.getCity());
		}
		if (address.getCounty() != null && !address.getCounty().isEmpty()) {
			newAddress.setCounty(address.getCounty());
		}
		if (address.getPostcode() != null && !address.getPostcode().isEmpty()) {
			newAddress.setPostcode(address.getPostcode());
		}

		addressService.update(newAddress);
		return newAddress;
	}

}
