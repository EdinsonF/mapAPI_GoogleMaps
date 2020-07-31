class ui{

    constructor(){
        
        this.api = new api();
        this.map = this.mostrarMapa();
        let mapa = this.mapa;
    }

    mostrarMapa(){
        //parametro de ubicacion actual
        let ubicacionMapa ={
            lat: 4.671572,
            lng:  -74.05777
        }
        //instaciamos el mapa
        this.mapa = new google.maps.Map(document.querySelector("#mapa"),{
            center: ubicacionMapa,
            zoom: 6
        });
    }

    //cargamos registros de api
    async mostrarDatos(){
        const result = await this.api.consultarDatos();
        const datos = await result.datosJSON;

        this.pintarPines(datos);

    }

    //pintamos los pines
    pintarPines(datos){
        
        const marca = datos.map(dato =>{
            console.log(dato.location.longitude);
            return new google.maps.Marker({
                position : {lat:parseFloat(dato.location.latitude), lng: parseFloat(dato.location.longitude)},
                title: dato.ciudad,
                map : this.mapa
            });
        });

    }

    

}