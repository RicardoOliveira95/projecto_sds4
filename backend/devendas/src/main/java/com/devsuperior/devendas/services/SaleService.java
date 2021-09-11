package com.devsuperior.devendas.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.devendas.dto.SaleDTO;
import com.devsuperior.devendas.dto.SaleSuccessDTO;
import com.devsuperior.devendas.dto.SaleSumDTO;
import com.devsuperior.devendas.entities.Sale;
import com.devsuperior.devendas.entities.Seller;
import com.devsuperior.devendas.repositories.SaleRepository;
import com.devsuperior.devendas.repositories.SellerRepository;

@Service
public class SaleService {
	@Autowired
	public SaleRepository repo;
	@Autowired
	private SellerRepository sellerRepo;
	
	@Transactional(readOnly=true)
	public Page<SaleDTO> findAll(Pageable pageable){
		sellerRepo.findAll();
		Page<Sale> result = repo.findAll(pageable);
		return result.map(x->new SaleDTO(x));
	}
	
	@Transactional(readOnly=true)
	public List<SaleSumDTO> amountGroupedBySeller(){
		return repo.amountGroupedBySeller();
	}
	
	@Transactional(readOnly=true)
	public List<SaleSuccessDTO> successGroupedBySeller(){
		return repo.successGroupedBySeller();
	}
}
