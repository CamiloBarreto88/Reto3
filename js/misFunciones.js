// FUNCIONES PARA BASE DE DATOS DE LOS CARROS
function traerInformacion(){
    $.ajax({
        url:"https://gecc8731903f3dc-db202109262134.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/car/car",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuesta(respuesta.items)
        }
    });
}

function pintarRespuesta(items){

    let myTable ="<table>";
    for(i=0;i<items.length;i++){
        myTable+="<tr>"; 
        myTable+="<td>"+items[i].id+"</td>";
        myTable+="<td>"+items[i].brand+"</td>";
        myTable+="<td>"+items[i].model+"</td>";
        myTable+="<td>"+items[i].category_id+"</td>";
        myTable+="<td> <button onclick='borrarElemento("+items[i].id+")'>Borrar</button>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado").append(myTable);
}

function guardarInformacion(){
    let myData={
        id:$("#id").val(),
        brand:$("#brand").val(),
        model:$("#model").val(),
        category_id:$("#category_id").val(),
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://gecc8731903f3dc-db202109262134.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/car/car",
        type:"POST",
        data:myData,
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#id").val("");
            $("#brand").val("");
            $("model").val("");
            $("#category_id").val("");
            traerInformacion();
            alert("Se ha guardado el dato")
        }
    });
}

function editarInformacion(){
    let myData={
        id:$("#id").val(),
        brand:$("#brand").val(),
        model:$("#model").val(),
        category_id:$("#category_id").val(),
    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://gecc8731903f3dc-db202109262134.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/car/car",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#id").val("");
            $("#brand").val("");
            $("#model").val("");
            $("#category_id").val("");
            traerInformacion();
            alert("Se ha actualizado el dato")
        }
    });
}

function borrarElemento(idElemento){
    let myData={
        id:idElemento
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://gecc8731903f3dc-db202109262134.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/car/car",
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            traerInformacion();
            alert("Se ha eliminado")
        }
    });
}

// FUNCIONES PARA BASE DE DATOS DE CLIENTES

function traerInformacion2(){
    $.ajax({
        url:"https://gecc8731903f3dc-db202109262134.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta2){
            console.log(respuesta2);
            pintarRespuesta2(respuesta2.items)
        }
    });
}

function pintarRespuesta2(items){

    let myTable ="<table>";
    for(i=0;i<items.length;i++){
        myTable+="<tr>"; 
        myTable+="<td>"+items[i].id+"</td>";
        myTable+="<td>"+items[i].name+"</td>";
        myTable+="<td>"+items[i].email+"</td>";
        myTable+="<td>"+items[i].age+"</td>";
        myTable+="<td> <button onclick='borrarElemento2("+items[i].id+")'>Borrar</button>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado2").append(myTable);
}

function guardarInformacion2(){
    let myData={
        id:$("#id2").val(),
        name:$("#name").val(),
        email:$("#email").val(),
        age:$("#age").val(),
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://gecc8731903f3dc-db202109262134.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client",
        type:"POST",
        data:myData,
        datatype:"JSON",
        success:function(respuesta2){
            $("#resultado2").empty();
            $("#id2").val("");
            $("#name").val("");
            $("email").val("");
            $("#age").val("");
            traerInformacion2();
            alert("Se ha guardado el dato")
        }
    });
}

function editarInformacion2(){
    let myData={
        id:$("#id2").val(),
        name:$("#name").val(),
        email:$("#email").val(),
        age:$("#age").val(),
    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://gecc8731903f3dc-db202109262134.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta2){
            $("#resultado2").empty();
            $("#id2").val("");
            $("#name").val("");
            $("#email").val("");
            $("#age").val("");
            traerInformacion2();
            alert("Se ha actualizado el dato")
        }
    });
}

function borrarElemento2(idElemento){
    let myData={
        id:idElemento
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://gecc8731903f3dc-db202109262134.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client",
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta2){
            $("#resultado2").empty();
            traerInformacion2();
            alert("Se ha eliminado")
        }
    });
}

// FUNCIONES PARA BASE DE DATOS DE MENSAJES

function traerInformacion3(){
    $.ajax({
        url:"https://gecc8731903f3dc-db202109262134.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta3){
            console.log(respuesta3);
            pintarRespuesta3(respuesta3.items)
        }
    });
}

function pintarRespuesta3(items){

    let myTable ="<table>";
    for(i=0;i<items.length;i++){
        myTable+="<tr>"; 
        myTable+="<td>"+items[i].id+"</td>";
        myTable+="<td>"+items[i].messagetext+"</td>";
        myTable+="<td> <button onclick='borrarElemento3("+items[i].id+")'>Borrar</button>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado3").append(myTable);
}

function guardarInformacion3(){
    let myData={
        id:$("#id3").val(),
        messagetext:$("#messagetext").val(),
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://gecc8731903f3dc-db202109262134.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message",
        type:"POST",
        data:myData,
        datatype:"JSON",
        success:function(respuesta3){
            $("#resultado3").empty();
            $("#id3").val("");
            $("#messagetext").val("");
            traerInformacion3();
            alert("Se ha guardado el mensaje")
        }
    });
}

function editarInformacion3(){
    let myData={
        id:$("#id3").val(),
        messagetext:$("#messagetext").val(),
    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://gecc8731903f3dc-db202109262134.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta3){
            $("#resultado3").empty();
            $("#id3").val("");
            $("#messagetext").val("");
            traerInformacion3();
            alert("Se ha actualizado el mensaje")
        }
    });
}

function borrarElemento3(idElemento){
    let myData={
        id:idElemento
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://gecc8731903f3dc-db202109262134.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message",
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta3){
            $("#resultado3").empty();
            traerInformacion3();
            alert("Se ha eliminado el mensaje")
        }
    });
}