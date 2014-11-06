function init(){
    document.addEventListener("deviceready", download, true);
}

function download() {

    actualizarVersion();

    var networkState = navigator.connection.type;

    if(networkState === "wifi" || networkState === "2g" || networkState === "3g" || networkState === "4g" || networkState === "unknown")
    {
        
        var remoteFile = "https://dl.dropboxusercontent.com/u/105758706/json-Dr.Agro/TATB_Productos2.json";
            var remoteFile1 = "https://dl.dropboxusercontent.com/u/105758706/json-Dr.Agro/TATB_EtapasCicloFenologico2.json";
            var remoteFile2 = "https://dl.dropboxusercontent.com/u/105758706/json-Dr.Agro/TATB_PartesPlanta2.json";
            var remoteFile3 = "https://dl.dropboxusercontent.com/s/jkx6w5xslzf9y4y/TATB_OrganismosProdEtaPla.json";
            var remoteFile4 = "https://dl.dropboxusercontent.com/s/ie1l7f1u7onma9h/TATB_Organismos.json";
            var remoteFile5 = "https://dl.dropboxusercontent.com/s/j23hllzu1fqwsos/TATB_OrganismosSubSec.json";
            var remoteFile6 = "https://dl.dropboxusercontent.com/s/7ywy8hjq6hrd78e/TATB_TipsDrAgro.json";
            var remoteFile7 = "https://dl.dropboxusercontent.com/s/m3v9dgv4u9tk3hz/TATB_ProductosEtapaPlanta.json";
            var remoteFile8 = "https://dl.dropboxusercontent.com/s/ieenjtoopot4vhj/TATB_ProductosEtapa.json";
            var remoteFile9 = "https://dl.dropboxusercontent.com/s/hukv30jx4p0nyxh/TATB_Fotos.json";

        for(var i=0 ; i<10; i++)
        {
            if(i == 0)
            {
                var localFileName = remoteFile.substring(remoteFile.lastIndexOf('/') + 1);
                //var localFileName = remoteFile.substring(remoteFile.lastIndexOf('/') + 1, remoteFile.lastIndexOf('?')) + ".json";
                window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function(fileSystem) {

                    var dirReader = fileSystem.root.createReader();
                    dirReader.readEntries(function(entries) {
                        for (var i = 0; i < entries.length; i++) {
                            if(entries[i].name === "DrAgro")
                            {
                                //entries[i].getFile("TATB_Productos2.json", null, gotFileEntry, fail);
                                entries[i].getFile(localFileName, {create: true, exclusive: false}, function(fileEntry) {
                                    
                                    var localPath = fileSystem.root.toURL() + "/DrAgro/" + localFileName;
                                    if (device.platform === "Android" && localPath.indexOf("file://") === 0) {
                                        localPath = localPath.substring(7);
                                    }
                                    var ft = new FileTransfer();
                                    ft.download(remoteFile,
                                    localPath, function(entry) {

                                    }, fail);
                                    
                                }, fail);

                            }
                        };
                    }, fail);

                }, fail);
            }
            else if(i == 1)
            {
                var localFileName = remoteFile1.substring(remoteFile1.lastIndexOf('/') + 1);
                //var localFileName = remoteFile1.substring(remoteFile1.lastIndexOf('/') + 1, remoteFile1.lastIndexOf('?')) + ".json";
                window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function(fileSystem) {

                    var dirReader = fileSystem.root.createReader();
                    dirReader.readEntries(function(entries) {
                        for (var i = 0; i < entries.length; i++) {
                            if(entries[i].name === "DrAgro")
                            {
                                //entries[i].getFile("TATB_Productos2.json", null, gotFileEntry, fail);
                                entries[i].getFile(localFileName, {create: true, exclusive: false}, function(fileEntry) {
                                    
                                    var localPath = fileSystem.root.toURL() + "/DrAgro/" + localFileName;
                                    if (device.platform === "Android" && localPath.indexOf("file://") === 0) {
                                        localPath = localPath.substring(7);
                                    }
                                    var ft = new FileTransfer();
                                    ft.download(remoteFile1,
                                    localPath, function(entry) {

                                    }, fail);
                                    
                                }, fail);

                            }
                        };
                    }, fail);

                }, fail);
            }
            else if(i == 2)
            {
                var localFileName = remoteFile2.substring(remoteFile2.lastIndexOf('/') + 1);
                //var localFileName = remoteFile1.substring(remoteFile1.lastIndexOf('/') + 1, remoteFile1.lastIndexOf('?')) + ".json";
                //alert(localFileName);
                window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function(fileSystem) {

                    var dirReader = fileSystem.root.createReader();
                    dirReader.readEntries(function(entries) {
                        for (var i = 0; i < entries.length; i++) {
                            if(entries[i].name === "DrAgro")
                            {
                                //entries[i].getFile("TATB_Productos2.json", null, gotFileEntry, fail);
                                entries[i].getFile(localFileName, {create: true, exclusive: false}, function(fileEntry) {
                                    
                                    var localPath = fileSystem.root.toURL() + "/DrAgro/" + localFileName;
                                    if (device.platform === "Android" && localPath.indexOf("file://") === 0) {
                                        localPath = localPath.substring(7);
                                    }
                                    var ft = new FileTransfer();
                                    ft.download(remoteFile2,
                                    localPath, function(entry) {

                                    }, fail);
                                    
                                }, fail);

                            }
                        };
                    }, fail);

                }, fail);
            }
            else if(i == 3)
            {
                var localFileName = remoteFile3.substring(remoteFile3.lastIndexOf('/') + 1);
                //var localFileName = remoteFile1.substring(remoteFile1.lastIndexOf('/') + 1, remoteFile1.lastIndexOf('?')) + ".json";
                window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function(fileSystem) {

                    var dirReader = fileSystem.root.createReader();
                    dirReader.readEntries(function(entries) {
                        for (var i = 0; i < entries.length; i++) {
                            if(entries[i].name === "DrAgro")
                            {
                                //entries[i].getFile("TATB_Productos2.json", null, gotFileEntry, fail);
                                entries[i].getFile(localFileName, {create: true, exclusive: false}, function(fileEntry) {
                                    
                                    var localPath = fileSystem.root.toURL() + "/DrAgro/" + localFileName;
                                    if (device.platform === "Android" && localPath.indexOf("file://") === 0) {
                                        localPath = localPath.substring(7);
                                    }
                                    var ft = new FileTransfer();
                                    ft.download(remoteFile3,
                                    localPath, function(entry) {

                                    }, fail);
                                    
                                }, fail);

                            }
                        };
                    }, fail);

                }, fail);
            }
            else if(i == 4)
            {
                var localFileName = remoteFile4.substring(remoteFile4.lastIndexOf('/') + 1);
                //var localFileName = remoteFile1.substring(remoteFile1.lastIndexOf('/') + 1, remoteFile1.lastIndexOf('?')) + ".json";
                window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function(fileSystem) {

                    var dirReader = fileSystem.root.createReader();
                    dirReader.readEntries(function(entries) {
                        for (var i = 0; i < entries.length; i++) {
                            if(entries[i].name === "DrAgro")
                            {
                                //entries[i].getFile("TATB_Productos2.json", null, gotFileEntry, fail);
                                entries[i].getFile(localFileName, {create: true, exclusive: false}, function(fileEntry) {
                                    
                                    var localPath = fileSystem.root.toURL() + "/DrAgro/" + localFileName;
                                    if (device.platform === "Android" && localPath.indexOf("file://") === 0) {
                                        localPath = localPath.substring(7);
                                    }
                                    var ft = new FileTransfer();
                                    ft.download(remoteFile4,
                                    localPath, function(entry) {

                                    }, fail);
                                    
                                }, fail);

                            }
                        };
                    }, fail);

                }, fail);
            }
            else if(i == 5)
            {
                var localFileName = remoteFile5.substring(remoteFile5.lastIndexOf('/') + 1);
                //var localFileName = remoteFile1.substring(remoteFile1.lastIndexOf('/') + 1, remoteFile1.lastIndexOf('?')) + ".json";
                window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function(fileSystem) {

                    var dirReader = fileSystem.root.createReader();
                    dirReader.readEntries(function(entries) {
                        for (var i = 0; i < entries.length; i++) {
                            if(entries[i].name === "DrAgro")
                            {
                                //entries[i].getFile("TATB_Productos2.json", null, gotFileEntry, fail);
                                entries[i].getFile(localFileName, {create: true, exclusive: false}, function(fileEntry) {
                                    
                                    var localPath = fileSystem.root.toURL() + "/DrAgro/" + localFileName;
                                    if (device.platform === "Android" && localPath.indexOf("file://") === 0) {
                                        localPath = localPath.substring(7);
                                    }
                                    var ft = new FileTransfer();
                                    ft.download(remoteFile5,
                                    localPath, function(entry) {

                                    }, fail);
                                    
                                }, fail);

                            }
                        };
                    }, fail);

                }, fail);
            }
            else if(i == 6)
            {
                var localFileName = remoteFile6.substring(remoteFile6.lastIndexOf('/') + 1);
                //var localFileName = remoteFile1.substring(remoteFile1.lastIndexOf('/') + 1, remoteFile1.lastIndexOf('?')) + ".json";
                window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function(fileSystem) {

                    var dirReader = fileSystem.root.createReader();
                    dirReader.readEntries(function(entries) {
                        for (var i = 0; i < entries.length; i++) {
                            if(entries[i].name === "DrAgro")
                            {
                                //entries[i].getFile("TATB_Productos2.json", null, gotFileEntry, fail);
                                entries[i].getFile(localFileName, {create: true, exclusive: false}, function(fileEntry) {
                                    
                                    var localPath = fileSystem.root.toURL() + "/DrAgro/" + localFileName;
                                    if (device.platform === "Android" && localPath.indexOf("file://") === 0) {
                                        localPath = localPath.substring(7);
                                    }
                                    var ft = new FileTransfer();
                                    ft.download(remoteFile6,
                                    localPath, function(entry) {

                                    }, fail);
                                    
                                }, fail);

                            }
                        };
                    }, fail);

                }, fail);
            }
            else if(i == 7)
            {
                var localFileName = remoteFile7.substring(remoteFile7.lastIndexOf('/') + 1);
                //var localFileName = remoteFile1.substring(remoteFile1.lastIndexOf('/') + 1, remoteFile1.lastIndexOf('?')) + ".json";
                window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function(fileSystem) {

                    var dirReader = fileSystem.root.createReader();
                    dirReader.readEntries(function(entries) {
                        for (var i = 0; i < entries.length; i++) {
                            if(entries[i].name === "DrAgro")
                            {
                                //entries[i].getFile("TATB_Productos2.json", null, gotFileEntry, fail);
                                entries[i].getFile(localFileName, {create: true, exclusive: false}, function(fileEntry) {
                                    
                                    var localPath = fileSystem.root.toURL() + "/DrAgro/" + localFileName;
                                    if (device.platform === "Android" && localPath.indexOf("file://") === 0) {
                                        localPath = localPath.substring(7);
                                    }
                                    var ft = new FileTransfer();
                                    ft.download(remoteFile7,
                                    localPath, function(entry) {

                                    }, fail);
                                    
                                }, fail);

                            }
                        };
                    }, fail);

                }, fail);
            }
            else if(i == 8)
            {
                var localFileName = remoteFile8.substring(remoteFile8.lastIndexOf('/') + 1);
                //var localFileName = remoteFile1.substring(remoteFile1.lastIndexOf('/') + 1, remoteFile1.lastIndexOf('?')) + ".json";
                window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function(fileSystem) {

                    var dirReader = fileSystem.root.createReader();
                    dirReader.readEntries(function(entries) {
                        for (var i = 0; i < entries.length; i++) {
                            if(entries[i].name === "DrAgro")
                            {
                                //entries[i].getFile("TATB_Productos2.json", null, gotFileEntry, fail);
                                entries[i].getFile(localFileName, {create: true, exclusive: false}, function(fileEntry) {
                                    
                                    var localPath = fileSystem.root.toURL() + "/DrAgro/" + localFileName;
                                    if (device.platform === "Android" && localPath.indexOf("file://") === 0) {
                                        localPath = localPath.substring(7);
                                    }
                                    var ft = new FileTransfer();
                                    ft.download(remoteFile8,
                                    localPath, function(entry) {

                                    }, fail);
                                    
                                }, fail);

                            }
                        };
                    }, fail);

                }, fail);
            }
            else
            {
                var localFileName = remoteFile9.substring(remoteFile9.lastIndexOf('/') + 1);
                //var localFileName = remoteFile1.substring(remoteFile1.lastIndexOf('/') + 1, remoteFile1.lastIndexOf('?')) + ".json";
                window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function(fileSystem) {

                    var dirReader = fileSystem.root.createReader();
                    dirReader.readEntries(function(entries) {
                        for (var i = 0; i < entries.length; i++) {
                            if(entries[i].name === "DrAgro")
                            {
                                //entries[i].getFile("TATB_Productos2.json", null, gotFileEntry, fail);
                                entries[i].getFile(localFileName, {create: true, exclusive: false}, function(fileEntry) {
                                    
                                    var localPath = fileSystem.root.toURL() + "/DrAgro/" + localFileName;
                                    if (device.platform === "Android" && localPath.indexOf("file://") === 0) {
                                        localPath = localPath.substring(7);
                                    }
                                    var ft = new FileTransfer();
                                    ft.download(remoteFile9,
                                    localPath, function(entry) {

                                    }, fail);
                                    
                                }, fail);

                            }
                        };
                    }, fail);

                }, fail);
            }

        }

        window.localStorage.setItem('launchCount', 1);
        document.location.href="adminCultivo.html";

    }
    else
    {
        abrirAlert("Debe tener conexión a internet")
        //alert("Debe tener conexión a internet");
    }
}

function actualizarVersion() {
    var db = window.openDatabase("bd_doctoragro", "1.0", "Guardar Producto", 100000);
    db.transaction(VersionActualizada, ErrorOperacion, OperacionEfectuada);
}

function VersionActualizada(tx) {
    tx.executeSql('UPDATE versiones SET numero = 1 WHERE version_id = 1');
}

function fail(error) {
    console.log(error.code);
}

// Transaction error callback
function ErrorOperacion(err) {
    console.log(err);
    abrirAlert("Error procesando la operación: " + err)
    //alert("Error procesando la operación: " + err);
}

function OperacionEfectuada() {
    console.log("Operación efectuada!");
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
    title: 'Advertencia',
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

}