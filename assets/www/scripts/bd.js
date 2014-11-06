var producto_id = 0;
var descripcion = "";

var listaImagenes = [];
var listaProductos = [];

function configurar_db() {

    function execute(tx) {
        tx.executeSql('CREATE TABLE IF NOT EXISTS versiones (version_id, numero)');
        tx.executeSql('CREATE TABLE IF NOT EXISTS productos (producto_id, descripcion)');
    }

    function IngresarVersion(tx) {
        tx.executeSql('INSERT INTO versiones (version_id, numero) VALUES (1, 0)');
    }

    function error(error) {
        console.log("Error al configurar base de datos", error)
    }

    function exito() {
        console.log("Configuración exitosa")
    }

    var db = window.openDatabase("bd_doctoragro", "1.0", "Listado Productos", 200000);
    db.transaction(execute, error, exito);
    db.transaction(IngresarVersion, error, exito);

}

function guardarListaProductos() {

    var networkState = navigator.connection.type;

    if(networkState === "wifi" || networkState === "2g" || networkState === "3g" || networkState === "4g" || networkState === "unknown") {

        $("#loader").text("Descargando...");
        $("#status").fadeIn();
        $("#preloader").fadeIn();

        var db = window.openDatabase("bd_doctoragro", "1.0", "Guardar Producto", 100000);
        db.transaction(GuardarProducto, ErrorOperacion, OperacionEfectuada);

    }
    else {
        abrirAlert("Debe tener conexión a internet");
    }
}

function GuardarProducto(tx) {
    
    $("input:checkbox[name=producto]:checked").each(function () {

        var temp = $(this).val();
        producto_id = temp.substring(0, temp.lastIndexOf('_'));
        descripcion = temp.substring(temp.lastIndexOf('_') + 1);
        
        tx.executeSql('INSERT INTO productos (producto_id, descripcion) VALUES ("' + producto_id + '", "' + descripcion + '")');
        
        listaProductos.push(producto_id);

        if(listaProductos.length == $("input:checkbox[name=producto]:checked").length)
        {
            BuscarImagenes();
        }

    });
}

function BuscarImagenes() 
{
    var ruta = window.localStorage.getItem("ruta");
    var path = ruta + "TATB_ProductoOrganismoFoto.json";

    $.getJSON("" + path + "", function(data) {   
        $.each(data, function (i, field) {
            for (var j = 0; j < listaProductos.length; j++) {
                if(field.Prod_Id == listaProductos[j])
                {
                    listaImagenes.push(field.Organismo_Foto);
                }
            };
        });
        downloadImages();
    });
}

function downloadImages() {

    if (listaImagenes.length == 0) {
        $("#status").fadeOut();
        $("#preloader").fadeOut();
        
        listaProductos = [];
        
        abrirConfirm("Descarga de informacíon exitosa!!");

        return;
    }
    
    var remoteFile = listaImagenes.pop();

    var localFileName = remoteFile.substring(remoteFile.lastIndexOf('/') + 1);

    window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function(fileSystem) {
        var dirReader = fileSystem.root.createReader();
        dirReader.readEntries(function(entries) {
            for (var i = 0; i < entries.length; i++) {
                if(entries[i].name === "DrAgro")
                {
                    entries[i].getFile(localFileName, {create: true, exclusive: false}, function(fileEntry) {
                        var localPath = fileSystem.root.toURL() + "/DrAgro/" + localFileName;
                        if (device.platform === "Android" && localPath.indexOf("file://") === 0) {
                            localPath = localPath.substring(7);
                        }
                        var ft = new FileTransfer();
                        ft.download(remoteFile,
                        localPath, function(entry) {
                            downloadImages();
                        }, fail);
                    }, fail);
                }
            };
        }, fail);
    }, fail);
}

function ErrorOperacion(err) {
    console.log(err);
    alert("Error procesando la operación: " + err);
}

function OperacionEfectuada() {
    console.log("Operación efectuada!");
}

function fail(error) {
    console.log(error.code);
}

function abrirAlert(contenido){

    var windowWidth = $(window).width();
    var windowHeight = $(window).height();
    var ancho=windowWidth-(windowWidth/10);
    $('#content-alert').html('<p>'+contenido+'</p>');
    $("#div-confirm").dialog({
        modal: true,
        draggable: false,
        resizable: false,
        minWidth:ancho,
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
}

function abrirConfirm(contenido){

    var windowWidth = $(window).width();
    var windowHeight = $(window).height();
    var ancho=windowWidth-(windowWidth/10);
    $('#content-alert').html('<p>'+contenido+'</p>');
    $("#div-confirm").dialog({
        modal: true,
        draggable: false,
        resizable: false,
        title: 'Advertencia',
        minWidth:ancho,
        my: "center",
        at: "center",
        of: window,
        show: 'blind',
        hide: 'blind',
        dialogClass: 'prueba',
        buttons: {
            "Aceptar": function() {
                $(this).dialog("close");
                document.location.href="adminCultivo.html";
            }
        }
    });

}