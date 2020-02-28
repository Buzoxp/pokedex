

$('#pokesearch').click(function () { 
  var nombrePokemon = $('#form--pokemon').val()
  
  $.ajax({
    url: `https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`,
    type: 'GET',
    datatype: 'json',
    success: function(data) {
      //console.log(data);
      var pakimonImg = data.sprites.front_default;
      var stats = data.stats;
      $('#header__img').html('<div id="carta--pokemon" class="card pikachu" style="width: 17.5rem;"><img id="imagen--pokemon" class="card-img-top" src="'+pakimonImg+'" alt="Card image cap"></div>');


      
    }})
  
  
   
});


