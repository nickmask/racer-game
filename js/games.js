// From EDA


//Update player position function:


$('document').ready(function() {    //code will only run after the page has fully loaded with this script
 
  function player1Move() { 
    $(".racer_table #player1_strip .active").next().addClass("active");
    if($("#p1Finish").hasClass("active") ) {
      alert("Player 1 WINS!!!");
    }
  }

  function player2Move() { 
    $(".racer_table #player2_strip .active").next().addClass("active");   //change the class of p2
    if($("#p2Finish").hasClass("active") ) {
    alert("Player 2 WINS!!!");
    }
  }

//Key press script
  $(document).keyup(function() {
    if(event.which == 81) {
      player1Move();
    }
  });

  $(document).keyup(function() {
    if(event.which == 80) {
      player2Move();
    }
  });  

  $("button#resetButton").click(function() {
      alert("OK, I'm resetting");
      location.reload();
    });

});


  //run the code



// $(document).on('keyup', someFunction)






// $(document).ready(function() {
//   function p1Move() {
//     $("racer_table" #player1_strip .active).html("Q");
//   }
// }





//Howards JS

// $(document).ready(function() {
//   function doStuff() {
//  // $(".racer_table #player1_strip .active").html("X");
//     $(".racer_table #player1_strip .active").next().addClass("active").html("X");
//     if($("#finish_line_x").hasClass("active") ) {
//       alert("X wins!");
//     }
//   }

//   function doOtherStuff() {
//    // $(".racer_table #player2_strip .active").html("O");
//     $(".racer_table #player2_strip .active").next().addClass("active").html("O");
//     if($("#finish_line_o").hasClass("active") ) {
//       alert("O wins!");
//     }
//   }

//   $(document).keyup(function(e){
//     if(event.which == 88) {
//       doStuff();
//     } else
//     if(event.which == 79) {
//       doOtherStuff();
//     }
//   });
// });


  // $("button#resetButton").click(function() {
  //     alert("OK, I'm resetting");
  //     location.reload();
  //   });
  // //$("button#otherGoButton").click(doOtherStuff);