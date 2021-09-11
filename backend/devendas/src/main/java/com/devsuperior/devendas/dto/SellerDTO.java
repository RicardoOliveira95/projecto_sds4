package com.devsuperior.devendas.dto;

import java.io.Serializable;

import com.devsuperior.devendas.entities.Seller;

public class SellerDTO implements Serializable{
	private long id;
	private String name;
	
	public SellerDTO() {}
	
	public SellerDTO(long id, String name) {
		this.id = id;
		this.name = name;
	}
	
	public SellerDTO(Seller entity) {
		this.id=entity.getId();
		this.name=entity.getName();
	}
	
	public long getId() {
		return id;
	}
	
	public void setId(long id) {
		this.id = id;
	}
	
	public String getName() {
		return name;
	}
	
	public void setName(String name) {
		this.name = name;
	}
}
