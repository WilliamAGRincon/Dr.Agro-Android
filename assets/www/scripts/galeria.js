   var ruta="https://dl.dropboxusercontent.com/u/105758706/json-Dr.Agro/";
   var ruta2="https://dl.dropboxusercontent.com/u/75467020/";//
   var ruta3="https://dl.dropboxusercontent.com/s/bh5xqiu0ahf0x82/";
   var IdProductoSeleccionado;
   var IdOrganismoSeleccionado;
   var idsOrganismos=[];
   var idsFotos=[];
   var orden=[];
   

function onLoad() {
    document.addEventListener("deviceready", onDeviceReady, false);
}

function onDeviceReady() {
    window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotFS, fail);
}

function gotFS(fileSystem) {
    //fileSystem.root.getFile("TATB_Productos2.json", null, gotFileEntry, fail);

    var dirReader = fileSystem.root.createReader();
    dirReader.readEntries(success, fail);
}

function success (entries) {
    for (var i = 0; i < entries.length; i++) {
        if(entries[i].name === "DrAgro")
        {
            entries[i].getFile("TATB_Productos2.json", null, gotFileEntry, fail);
        }
    };
}

function gotFileEntry(fileEntry) {
    fileEntry.file(gotFile, fail);
}

function gotFile(file){
    var path = file.fullPath;
    ruta = path.substring(0, path.lastIndexOf('/') + 1);

    cargar_Productos();
  
}

function cargar_Productos() {
    var networkState = navigator.connection.type;

            if(networkState === "wifi" || networkState === "2g" || networkState === "3g" || networkState === "4g" || networkState === "unknown")
            {
    var db = window.openDatabase("bd_doctoragro", "1.0", "Listado Productos", 200000);
    db.transaction(cargar_lista_productos, errorCargar_productos, function () {
        console.log("Consultó los productos")
    });
}else{
    var windowWidth = $(window).width();
    var windowHeight = $(window).height();
    var ancho=windowWidth-(windowWidth/10);
    $('#content-alert').html('<p>Debe tener conexión a internet para usar esta funcionalidad.</p>');
    $("#div-confirm").dialog({
    modal: true,
    draggable: false,
    resizable: false,
    title: 'Advertencia:',
    minWidth:ancho,
    //position: ['center', 'top'],
    my: "center",
   at: "center",
   of: window,
    show: 'blind',
    hide: 'blind',
    dialogClass: 'prueba',
    buttons: {
         "Aceptar": function() {
            $(this).dialog("close");
        }
    }
});

    //alert("debe tener conexión a internet si para usar esta funcionalidad.")
}
}

function fail(evt) {
    console.log(evt.target.error.code);
}



function cargar_lista_productos(tx) {
    tx.executeSql("SELECT * FROM productos", [], crear_lista_productos, function (error) {
        console.log("Error consultado productos: " + error)
    });
}


   function crear_lista_productos(tx, results) {
    $("#enfermedad").html("");
    var texto = "";
   var len = results.rows.length;
    for (var i = 0; i < len; i++) {
            texto += '<h3 style="margin-left:20px;font-family:Verdana;"><input type="radio" name="producto" value="'+ results.rows.item(i).producto_id + '" onchange="cambioCheckProd(this)" />'+ results.rows.item(i).descripcion+'</h3>';
        };           
        $("#producto").html(texto);
}

function cambioCheckProd(element){
    $("#enfermedad").html("");
    idsFotos=[];
    idsOrganismos=[];
    orden=[];
    if(element.checked){
        var id=element.getAttribute("value")
        buscarOrganismoCultivo(id)
        IdProductoSeleccionado=id;
        //cargar_PartesPlanta(id);
    }
}



function cambioCheckOrg(element){
    if(element.checked){
        var id=element.getAttribute("value")
        //buscarOrganismoCultivo(id)
        IdOrganismoSeleccionado=id;
        //cargar_PartesPlanta(id);
    }
}

function errorCargar_productos(err) {
    console.log(err);
    alert("Error consultando listado productos" + err);
}

function Buscar() {
    $("input:checkbox[name=producto]:checked").each(function () {
        var id = $(this).val();
        buscarOrganismoCultivo(id)
    });
}

function buscarOrganismoCultivo(Id) 
{    
    var path = ruta2 + "TATB_OrganismosProdEtapa2.json";
    var cadena="";
        //alert(path);    
        cont = 0;
        numeropp = 1;
        $.getJSON("" + path + "", function(data) {   
            $.each(data, function (i, field) {
                if(data[i].Prod_Id == Id){
                    //cadena+=field.Organismo_Id+","
                    idsOrganismos.push(field.Organismo_Id);

                }
            });     
            //idsOrganismos=cadena.split(",")
            Lista_OrganismosGaleria();
        });
    }
    function Lista_OrganismosGaleria() 
    {    
        var path = ruta + "TATB_Organismos.json";
        //alert(path);
        //var id_organismo = Id;
        var texto = "";
        cont = 0;
        numeropp = 1;
        $.getJSON("" + path + "", function(data) {   
            $.each(data, function (i, field) {
                var t=$.inArray(data[i].Organismo_Id, idsOrganismos)
                if(t!==-1){
                    texto += '<h3 style="margin-left:20px;font-family:Verdana;"><input type="radio" name="organismo" value="'+ data[i].Organismo_Id + '" id="'+ data[i].Organismo_Id +'" onchange="cambioCheckOrg(this)" />'+ data[i].Organismo_Desc +'</h3>';                                   
                }         
            });    
            
            $("#enfermedad").html(texto);
        });
    }


    function buscarFotos(){
        var path=ruta2+"TATB_FotosDrGaleria.json";
        $.getJSON("" + path + "", function(data) {   
            $.each(data, function (i, field) {
                if(data[i].Prod_Id === (IdProductoSeleccionado*1)&&data[i].Organismo_Id===(IdOrganismoSeleccionado*1)){
                    idsFotos.push(field.Foto_Id);
                    orden.push(field.Foto_Orden);
                }         
            });    
            SacarImagenes();
        });
    }

    function SacarImagenes(){
     var path=ruta+"TATB_Fotos.json";
     var cont =1;
     var texto = ""; 
     var tamArr=Math.max.apply(Math,orden)
     var imagenes=new Array(tamArr)
     $("#ResultadoBusqueda").html("");
     $.getJSON("" + path + "", function(data) {
        texto="";
        $.each(data, function (i, field) {
            var t=$.inArray(field.Foto_Id, idsFotos)
            if(t!==-1){
                imagenes[orden[t]-1]=field
            }         
        });
        orden=[];
        pintarImagenes(imagenes)
    });
 }

 function pintarImagenes(imagenes){
    var cont=1;
    var texto="";
    $.each(imagenes,function(i,imagen){
        if(cont%2!=0){
            texto += '<div class="portfolio-item-thumb one-half borderImagenesGaleria"><a href="'+imagen.Foto_Url+'" title="'+imagen.Foto_Desc+'" class="swipebox portfolio-item-full-width">';
            texto+='<img class="responsive-image" src="'+imagen.Foto_Url+'" alt="img"></a></div>'
            cont++;
        }else{
            texto += '<div class="portfolio-item-thumb one-half last-column borderImagenesGaleria"><a href="'+imagen.Foto_Url+'" title="'+imagen.Foto_Desc+'" class="swipebox portfolio-item-full-width">';
            texto+='<img class="responsive-image" src="'+imagen.Foto_Url+'" alt="img"></a></div>'
            cont++;
        }
    })
    $("#ResultadoBusqueda").html(texto);
    $("#ResultadoBusqueda").css('display','block');
    idsFotos=[];
    ( function( $ ) {
        $( '.swipebox' ).swipebox();
    })( jQuery )
}
