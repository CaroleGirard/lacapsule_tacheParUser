// /* var ctx = document.getElementById("myChart");

// paysListe = [
//     {
//         nom: "France",
//         capitale : "Paris",
//         superficie : 643801,
//         population : 66990000
//     },
//     {
//         nom: "Espagne",
//         capitale : "Madrid",
//         superficie : 505990,
//         population : 46940000 
//     },
//     {
//         nom: "Italie",
//         capitale : "Rome",
//         superficie : 301338,
//         population : 60360000 
//     },
//     {
//       nom: "Royaume Unis",
//       capitale : "Londres",
//       superficie : 242495,
//       population : 66650000 
//     },
//     {
//       nom: "Allemagne",
//       capitale : "Berlin",
//       superficie : 357386,
//       population : 83020000 
//     }
// ];
// var pays= [];
// var pop= [];
// for (var i=0; i<paysListe.length; i++) {
//     pays.push(paysListe[i].nom)
//     pop.push(paysListe[i].population)
// }

// new Chart(ctx, {
// /*var datalabels = [ "fr", "uk", "es", "it" ];*/
// /*var dataValues = [ 12 ,  19 ,  3  ,  5 ];*/
//     type: 'doughnut',
//     data: {
//        labels: pays,
//        datasets: [{

//            data: pop,
//            backgroundColor : [
//                "#1abc9c",
//                "#3498db",
//                "#9b59b6",
//                "#34495e"
//             ],
//             borderColor : [
//                 "#16a085",
//                 "#2980b9",
//                 "#8e44ad",
//                 "#2c3e50"
//             ],
//             borderWidth : 2
       
//        }]
//     }
// });
// /* To do list*/
// var taches = document.getElementById("todolist");
// ( 
//     async () => {
    
//       var rawResponse = await fetch('https://jsonplaceholder.typicode.com/todos');
//       var response = await rawResponse.json();
    
//       var done= 0;
//       var todo= 0;
//         for (var i=0; i<response.length; i++) {
//           if (response[i].completed == true)  {
//               done++ 
//           }
//           else {
//               todo++
//           }       
//       }
//       var tasks = [done, todo];
//       new Chart(taches, {
      
//               type: 'doughnut',
//               data: {
//                  labels: ['Done', 'To do'],
//                  datasets: [{
          
//                      data: tasks,
//                      backgroundColor : [
//                          "#3498db",
//                          "#e74c3c"
//                       ],
//                       borderColor : [
//                           "#2980b9",
//                           "#c0392b"
//                       ],
//                       borderWidth : 2
                 
//                  }]
//               }
//           });
//     }
//   )()
/* To do list par User*/ 
var users = document.getElementById("users");
( 
    async () => {
    
      var rawResponseUsers = await fetch('https://jsonplaceholder.typicode.com/users');
      var responseUsers = await rawResponseUsers.json();
      var rawResponseTodo = await fetch('https://jsonplaceholder.typicode.com/todos');
      var responseTodo = await rawResponseTodo.json();
      var recupIdUser = [];
      
      
      
        for (var i=0; i<responseUsers.length; i++) {
        
          var p = document.createElement("p")
            document.body.appendChild( p )
            var newUser = document.createTextNode(responseUsers[i].name);
            p.appendChild( newUser )
            p.id = responseUsers[i].id
        }  
        for (var i= 0; i<document.getElementsByTagName('p').length; i++) {
            document.getElementsByTagName('p')[i].addEventListener("click",
                function(){
                    var recupIdUser = this.id;
                    var done = 0;
                    var uncomplete = 0;
                    console.log(recupIdUser);
                    for(var i=0; i<responseTodo.length; i++) {
                        if (responseTodo[i].userId == recupIdUser) {
                            if (responseTodo[i].completed == true) {
                                done++;
                                console.log(done);
                            } else {

                                uncomplete++;
                            }
                        }
                        var list= [done,  uncomplete]
                        new Chart(users, {
        
                            type: 'doughnut',
                            data: {
                            labels: ['Done', 'To do'],
                            datasets: [{
                        
                                data: list,
                                backgroundColor : [
                                    "#3498db",
                                    "#e74c3c"
                                    ],
                                    borderColor : [
                                        "#2980b9",
                                        "#c0392b"
                                    ],
                                    borderWidth : 2
                            
                            }]
                            }
                        });
                    }    
                }   
            )
        }   
  
    })()  
      