$(document).ready(function(){

  $("#searchbox").keyup(function(){
    $('#predictions').html('');
    var avengers = ['Iron Man',
                    'Star-Lord',
                    'Doctor Strange',
                    'Captain America',
                    'Black Widow',
                    'Thor',
                    'Spider-man',
                    'Thanos',
                    'Scarlet witch',
                    'Winter Soldier',
                    'Loki',
                    'Hulk',
                    'Black Panther',
                    'Gamora',
                    'Vision',
                    'War Machine',
                    'Drax the Destroyer',
                    'Nebula',
                    'Mantis',
                    'Falcon',
                    'Groot',
                    'Rocket Raccoon',
                    'Heimdall',
                    'Okoye',
                    'Wong'
                  ].sort();
    var textinput = $('#searchbox').val();
    var expression = new RegExp(textinput, "i");

    $.each(avengers, function(key,value){
      if(value.search(expression) !== -1 && textinput !== ''){
        $('#predictions').append('<li class = "dropdown"><a href="avengers/'+value+'.html">'+value+'</a></li>');
      }
    });

  });

});
