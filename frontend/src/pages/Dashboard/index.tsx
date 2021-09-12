import NavBar from "components/navBar";
//import DataTable from "components/dataTable";
//import ImgDsDark from 'assets/img/ds-dark.svg';
import BarChart from 'components/barChart';
import DonutChart from 'components/donutChart';

const Dashboard=()=>{
	return(
		<div>
       <script href="C:/Users/Utilizador/Downloads/Todo-er-master/frontend/src/chrt.js"></script>
       
      <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-light border-bottom shadow-sm">
        <NavBar />
        <br></br>
        <div className="container">
          <h1 className="text-primary py-3">Dashboard Vendas</h1>   
      </div>
    </div>
    <div className="row px-3">
       <div className="col-sm-6"><h5>Sucesso</h5><BarChart /></div>
       </div>
       <div className="col-sm-6"><h5>Vendas</h5><DonutChart /></div>
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

export default Dashboard;