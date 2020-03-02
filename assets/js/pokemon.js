
window.onload = function (){
  //console.log("holas");
  $('#boton--pokemon').click(function () { 
    //console.log("holas2");
    var nombrePokemon = $('#form--pokemon').val()
    
    $.ajax({
      url: `https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`,
      type: 'GET',
      datatype: 'json',
      success: function(data) {
        console.log(data);
        var pakimonImg = data.sprites.front_default;
        var stats = data.stats;
        var hp = data.stats[5].base_stat;
        var atk = data.stats[4].base_stat;
        var def = data.stats[3].base_stat;
        var sat = data.stats[2].base_stat;
        var sdf = data.stats[1].base_stat;
        var spd = data.stats[0].base_stat;
        //console.log(spd);
        $('#header__img').html('<div id="carta--pokemon" class="card pikachu" style="width: 17.5rem;"><img id="imagen--pokemon" class="card-img-top" src="'+pakimonImg+'" alt="Card image cap"></div>');
        var pokeStats = [];
        pokeStats.push(hp, atk, def, sat, sdf, spd);
        console.log(pokeStats);
      
        
        
      }})
    
    
     
  });
  



}


