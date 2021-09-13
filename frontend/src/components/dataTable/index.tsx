import React, { Component } from 'react';
import {useState,useEffect} from 'react';
import {SalePage} from 'types/sale';
import axios from 'axios';
import {BASE_URL} from 'utils/requests';
import {formatLocalDate} from 'utils/format';

function DataTable(){

  const [page,setPage]=useState<SalePage>({
  		first: true,
  		last: true,
  		number: 0,
  		totalElements: 0,
  		totalPages:0,
  });

  useEffect(()=>{
  	axios.get(BASE_URL+'/sales?page=0&size=2&sort=date,desc').then(res=>{
  		setPage(res.data);
  	});
  },[]);

  return(
    <div id="tab" className="table-responsive">
    <table className="table table-striped table-sm">
        <thead>
            <tr>
                <th>Data</th>
                <th>Vendedor</th>
                <th>Clientes visitados</th>
                <th>Negócios fechados</th>
                <th>Valor</th>
            </tr>
        </thead>
        <tbody>
            {page.content?.map(item=>{
            console.log(item);
            <tr key={item.id}>
                //<td>{formatLocalDate(item.date,"yyyy-MM-dd")}</td>
                tab=document.getElementById(tab);
                tab.innerHTML=item.id
                <td>{item.date}</td>
                <td>{item.seller.name}</td>
                <td>{item.visited}</td>
                <td>{item.deals}</td>
                <td>{item.amount.toFixed(2)}</td>
            </tr>})}
        </tbody>
    </table>
</div>);
}

export default DataTable;