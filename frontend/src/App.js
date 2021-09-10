import React, { Component } from 'react';
//import NavBar from "components/navBar";
//import DataTable from "components/dataTable";
//import ImgDsDark from 'assets/img/ds-dark.svg';

class App extends Component {
  render() {
    return (
      <div>
      <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-light border-bottom shadow-sm">
        <div className="container">
          <nav className="my-2 my-md-0 mr-md-3">
            <img src="https://raw.githubusercontent.com/devsuperior/sds4/516e3c1b2705ea72587ec19ac30002052dc4d3e2/_assets/ds-dark.svg" alt="DevSuperior" width="120" />
          </nav>
        </div>
        <br></br>
        <div className="container">
          <h1 className="text-primary">APP</h1>   
      </div>
    </div>
    <div className="table-responsive">
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
            <tr>
                <td>22/04/2021</td>
                <td>Barry Allen</td>
                <td>34</td>
                <td>25</td>
                <td>15017.00</td>
            </tr>
            <tr>
                <td>22/04/2021</td>
                <td>Barry Allen</td>
                <td>34</td>
                <td>25</td>
                <td>15017.00</td>
            </tr>
            <tr>
                <td>22/04/2021</td>
                <td>Barry Allen</td>
                <td>34</td>
                <td>25</td>
                <td>15017.00</td>
            </tr>
            <tr>
                <td>22/04/2021</td>
                <td>Barry Allen</td>
                <td>34</td>
                <td>25</td>
                <td>15017.00</td>
            </tr>
            <tr>
                <td>22/04/2021</td>
                <td>Barry Allen</td>
                <td>34</td>
                <td>25</td>
                <td>15017.00</td>
            </tr>
            <tr>
                <td>22/04/2021</td>
                <td>Barry Allen</td>
                <td>34</td>
                <td>25</td>
                <td>15017.00</td>
            </tr>
            <tr>
                <td>22/04/2021</td>
                <td>Barry Allen</td>
                <td>34</td>
                <td>25</td>
                <td>15017.00</td>
            </tr>
            <tr>
                <td>22/04/2021</td>
                <td>Barry Allen</td>
                <td>34</td>
                <td>25</td>
                <td>15017.00</td>
            </tr>
            <tr>
                <td>22/04/2021</td>
                <td>Barry Allen</td>
                <td>34</td>
                <td>25</td>
                <td>15017.00</td>
            </tr>
        </tbody>
    </table>
    </div>
    <br></br>
    <footer className="footer mt-auto py-3 bg-dark">
      <div className="container">
      <p className="text-light">App desenvolvido por <a href="https://github.com/RicardoOliveira95" rel="noreferrer">Ricardo Oliveira</a></p>
      <p className="text-light"><small><strong>Semana Spring React</strong><br/>
        Evento promovido pela escola DevSuperior: <a href="https://instagram.com/devsuperior.ig" rel="noreferrer">@devsuperior.ig</a></small></p>
      </div>
      </footer>
      </div>
    );
  }
}

export default App;
