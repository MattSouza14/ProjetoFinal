import './FilterGroup.css'
export default function FilterGroup(){
return(

    <div class="form-container">
                <div class="box">
                    <form action="">
                    <h2> Filtrar por </h2>
                         <div class="form-line"></div>
                         <h3>Marca</h3>    
                         <input class="form-check-input" type="checkbox" value="" id="Adiddas"/>
                         <label class="form-check-label" for="Adiddas">Adiddas </label>
                         <br/>
                         <input class="form-check-input" type="checkbox" value="" id="Calenciaga"/>
                         <label class="form-check-label" for="Calenciaga">Calenciaga </label>
                         <br/>
                         <input class="form-check-input" type="checkbox" value="" id="Swiss"/>
                         <label class="form-check-label" for="K-Swiss">K-Swiss </label>
                         <br/>
                         <input class="form-check-input" type="checkbox" value="" id="Nike"/>
                         <label class="form-check-label" for="Nike">Nike </label>
                         <br/>
                         <input class="form-check-input" type="checkbox" value="" id="Puma"/>
                         <label class="form-check-label" for="Puma">Puma </label>
                    </form>
                    <form action="">
                    <h3>Categoria</h3> 
                         <input class="form-check-input" type="checkbox" value="" id="Esporte e lazer"/>
                         <label class="form-check-label" for="Esporte e lazer">Esporte e lazer </label>
                         <br/>
                         <input class="form-check-input" type="checkbox" value="" id="Casual"/>
                         <label class="form-check-label" for="Casual">Casual </label>
                         <br/>
                         <input class="form-check-input" type="checkbox" value="" id="Utilitário"/>
                         <label class="form-check-label" for="Utilitário">Utilitário </label>
                         <br/>
                         <input class="form-check-input" type="checkbox" value="" id="Corrida"/>
                         <label class="form-check-label" for="Corrida">Corrida </label>
                    </form>
                       
                     <form action="">
                     <h3>Gênero</h3>
                         <input class="form-check-input" type="checkbox" value="" id="Masculino"/>
                         <label class="form-check-label" for="Masculino"> Masculino </label>
                         <br/>
                         <input class="form-check-input" type="checkbox" value="" id="Feminino"/>
                         <label class="form-check-label" for="Feminino"> Feminino  </label>
                         <br/>
                         <input class="form-check-input" type="checkbox" value="" id="Unisex"/>
                         <label class="form-check-label" for="Unisex">Unisex </label>
                    </form>  
                       
                        <form action="">
                        <h3> Estado</h3>
                         <input class="form-check-input" type="radio" value="novos" id="novos"/>
                         <label class="form-check-label" for="novos"> Novos</label>
                         <br/>
                         <input class="form-check-input" type="radio" value="usados" id="usados"/>
                         <label class="form-check-label" for="usados">Usados</label>
                    
                        </form>       
            </div>
        </div>
    
)
}