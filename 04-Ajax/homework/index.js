var URL = 'http://localhost:5000/amigos';
let showFriends = function(){
$('#boton').click(function(){// selecciono boton de obtener de amigos mediante la clase
    $('#lista').empty// vacio la lista si hay algo
    $.get(`${URL}`,function(friends){//pido a travez de la url
        friends.forEach(e=>{ // para cada uno de los objetos dentro del objeto mayor
            $('#lista').append (`<li id ='${e.id}'>${e.name}< button id='${e.id}' onclick='deleteFriend(${e.id})'>X</button></li>`)// al la lista de de clase lista le appdendeo lo que tengo en cada uno de los objetos haciendo el id = a la prop id del objeto y el valor de las lista igual a la prop name de la lista +X // le agrego un button a la x con id = a el id que le toque en cada caso porque estamos en un forEach 
        })
    })
})
}
$('#boton').click(showFriends)



$('#search').click(function(){// al tocar el boton de clase search 
    let id = $('#input').val()// a una var le pongo el valor de lo que haya escrito en el input de clase input
    if(id){ //si existe dicho id
        $.get(`${URL}/${id}`,function(friend){// me traigo de la url y del amigo que haya puesto en el input (friend es |                                                                   el objeto que corresponde al amigo que busque)
            $(`#amigo`).text(`el nombre de mi amigo es ${friend.name}, su edad es ${friend.age}, su mail es ${friend.email}`)// en el span de clase amigo le agrego un texto con el nombre la edad y el mail que esta en el obj
        $('#input'),val('')//vacio el input
        })  
    }else{
        $('#amigo').text ('Ingresa id')// si no hay nada en el input
    }
})

let deleteFriend=function(idCruz){
    let id
    if(typeof idCruz ==='number'){// si id viene del boton
        id=idCruz// id es el del boton

    }else{
        id = $('#inputDelete').val() // si no viene del boton id = el valor que hay escrito en el inputdelete
    }
    
    let friend

    if(id){// si exite id en el input
        $.get(`${URL}/${'id'}`,function(f){//pido de la url con id que es lo que esta esctito
            friend=f // guardo ese valor (que es un obj) en la var friend
    })
        $.ajax({// asi porque no existe$.delete
            url: `${URL}/${'id'}`,//de la url
            type: 'DELETE',//accion a realizae
            success:function(){//que hago cuando lo borro
                $('#success').text(`${friend.name} eliminado correctamente`)// al span success le pongo que lo elimine correctamente
                $('#inputDelete').val('') //vacio el input
                showFriends()//muestro los amigos
            }
        })
    }else {
        $('#success').text('Ingresar Id')//si no hay nada en el imput y aprieto el boton en el span pongo lo anterior
    }
}

$('#delete').click(deleteFriend)// cuando de click en el boton de clase delete efectuo la function deleteFriend