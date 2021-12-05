//Ajax con JSON estático - reflejado en página BLOG

$.get('../piedras.json', (response) => {

    console.log(response);
    response.forEach((rock) => {
    $(".contenedorBlog").append(`<li class="piedras list-group-item">
                     <img src=${rock.image} width="250" height=""></img>
                     <h4> ${rock.nombre}</h4>
                     <p> Rareza: ${rock.rareza}</p>
                     <p> <strong>Descripción:</strong><br> ${rock.descripción}</p>
                     </li>`);
 
    })
 })

 $(function () {
    $(".piedrasjson").css({
            "display": "flex",
             "background-color": "rosybrown",
             "aling-items": "center",
          });
                            
       });
    
 $(function () {
    $(".contenedorBlog").css({
                "font-size": "16px", 
                "justify-content": "center", 
                "text-align": "center", 
                "flex-flow": "row wrap",
                });
                            
    });

    $(function () {
        $(".piedras").css({
                    "margin": "20px 30px", 
                    "border": "solid lavender 8px!important",
                    });
                                
        });