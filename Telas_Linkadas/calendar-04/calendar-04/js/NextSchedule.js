function MostrarProximosEventos(){

    document.querySelector("#EventsCard").innerHTML = `<div class="card border-dark bg-secondary" style="width: 780px;">

					<div class="card-body">

						<ul class="list-group nav-pills nav-stacked" style="height: 240px; overflow-y: scroll;">
							<li class="list-group-item nav-item" style="font-size: 20px;"> <a class="nav-link" href="#">Apresentação de Frank Artanis <br> 19/05/2024 - 19:00</a><button class="btn btn-success" onclick=MostrarAnotacoes() style="margin-left: 20px;">Mostrar Anotações</button></li>
							<li class="list-group-item nav-item" style="font-size: 20px;"> <a class="nav-link" href="#">Dingle de Stevie Maravilha <br> 19/05/2024 - 18:00</a><button class="btn btn-success" onclick=MostrarAnotacoes() style="margin-left: 20px;">Mostrar Anotações</button></li>
							<li class="list-group-item nav-item" style="font-size: 20px;"> <a class="nav-link" href="#">Show de Marivalda Mendonça <br> 19/05/2024 - 22:00</a><button class="btn btn-success" onclick=MostrarAnotacoes() style="margin-left: 20px;">Mostrar Anotações</button></li>
							<li class="list-group-item nav-item" style="font-size: 20px;"> <a class="nav-link" href="#">Rua Armando panunzio <br> 07/05/2024 - 09:00</a><button class="btn btn-success" onclick=MostrarAnotacoes() style="margin-left: 20px;">Mostrar Anotações</button></li>
							<li class="list-group-item nav-item" style="font-size: 20px;"> <a class="nav-link" href="#">Rua 9 de Julho <br> 19/05/2024 - 19:00</a><button class="btn btn-success" onclick=MostrarAnotacoes() style="margin-left: 20px;">Mostrar Anotações</button></li>
						  </ul>

					</div>

				</div>				
`

    

}

function MostrarAnotacoes(){

    document.querySelector("#NotationsCard").innerHTML = `<div class="card border-dark bg-secondary" style="width: 780px;">

					<div class="card-body">

						<p class="text-light" style="text-align: center;">Não se esqueça de levar o seu amplificador de Áudio e de afinar as cordas</p>

					</div>

				</div>				
`

}