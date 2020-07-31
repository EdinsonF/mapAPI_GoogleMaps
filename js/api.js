class api{

    async consultarDatos(){
        const result = await fetch('https://www.datos.gov.co/resource/jpus-ug29.json');
        const datosJSON = result.json();

        return{
            datosJSON
        }
    }
}