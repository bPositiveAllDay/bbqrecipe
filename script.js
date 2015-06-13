$(document).ready(function() {

	/* Letting user hide pics by clicking them. */

	var $img = $("img");
    $img.click(function() {
    	$(this).hide("slow");
    });

    /* Checking off ingredients. */
  var $ingredient = $(".ingredient");
    $ingredient.click(function() {
      $(this).addClass("selected");
    });   

    /* Highlighting completed steps */

    $( ".step1" ).on( "click", function() {
  $( this ).css( "color", "green" );
});
    $( ".step2" ).on( "click", function() {
  $( this ).css( "color", "green" );
});
    $( ".step3" ).on( "click", function() {
  $( this ).css( "color", "green" );
});
    $( ".step4" ).on( "click", function() {
  $( this ).css( "color", "green" );
});
});

