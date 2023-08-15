var elem = document.getElementsByTagName("BODY")[0];
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}

//openFullscreen();

class Drink{
    constructor(name, glass, rim, liquor = [], liqueur = [], mixers = [], garnish = [], photo, batch, instructions= []){
     this.name = name;
     this.glass = glass;
     this.rim = rim;
     this.liquor = liquor;
     this.liqueur = liqueur;
     this.mixers = mixers;
     this.garnish = garnish;
     this.photo = photo;
     this.batch = batch;
     this.instructions = instructions;
    };
   };
   
   // Margaritas................................................................................................
   let houseMargarita = new Drink("House Margarita", "Margarita Glass", "Guest Choice", ["Jose Cuervo Tradicional Silver 2 oz"], ["Triple Sec 1 oz"], ["Sour Mix 3 oz", "( Flavored Margarita: Sour Mix 2 oz,", "Strawberry, Mango, Prickly Pear, Passion Fruit or Pomegranate 1 oz )"], ["Lime Wedge"],"./images/houseMargarita.png", null);
   let roccoRita = new Drink("Rocco Rita","Margarita Glass", "Guest Choice", ["Teremana Blanco"], ["J. F. Haydens Orange Liqueur"], ["Sour Mix 3 oz"], ["Lime Wedge"],"./images/roccoRita.png", null);
   let cadillac = new Drink("Cadillac", "Margarita Glass", "Guest Choice", ["1800 Anejo 2 oz"], ["Grand Marnier 1 oz"], ["Sour Mix 3 oz"], ["Lime Wedge"],"./images/cadillac.png", null);
   let blackDiamond = new Drink("Black Diamond", "Rocks Glass", "Black Sea Salt", ["Santo Blanco 2 oz"], ["Real Black Cherry Syrup 1 oz"], ["Rocco's Lime Mix 2 oz"], ["Dehydrated Lime Wheel"],"./images/blackDiamond.png", null);
   let strawberryBasil = new Drink("Strawberry Basil", "Margarita Glass", "Guest Choice", ["Flecha Azul Blanco 2 oz"], ["Triple Sec 1 oz"], ["Agave .5 oz,", "Basil & Strawberry ( Muddled )", "Rocco's Lime Mix 3 oz"], ["Basil ( 2 Leaves )", "Strawberry"],"./images/strawberryBasil.png", null);
   let jalapeno = new Drink("Jalapeno", "Margarita Glass", "Guest Choice", ["Tanteo Jalapeno 2 oz", "( sub Habanero or Chipotle )"], ["Triple Sec 1 oz"], ["Sour Mix 3 oz"], ["Jalapeno Slice,", "Lime Wedge"],"./images/jalapeno.png", null);
   let twoTango = new Drink("Two Tango", "Old Fashioned Rocks Glass", "Jalapeno Salt", ["El Jimador Blanco 1 oz,", "Dos Hombres Mezcal 1 oz"],null, ["Jalapeno ( 1 Slice Muddled ),", "Rocco's Lime Mix"], ["Dehydrated Chile De Arbol,", "Dehydrated Lime Wheel"],"./images/twoTango.png", null);
   let skinnySenorita = new Drink("Skinny Senorita", "Coupe Glass",null, ["Herradura Silver 2 oz"],null,["Rocco's Lime Mix 2 oz"], ["Dehydrated Edible Flowers,", "Dehydrated Lime Wheel"],"./images/skinnySenorita.png", null);
   let roccoMango = new Drink("Rocco Mango", "Highball", "Hibiscus Salt",null,null,["Batch Mix 3 oz,", "Rocco's Lime Mix 2 oz"], ["Dehydrated Lime Wheel"],"./images/roccoMango.png", null);
   let watermelonKiss = new Drink("Watermelon Kiss", "Margarita Glass",null, ["El Jimador Blanco 2 oz"], ["Triple Sec 1 oz"], ["Finest Call Watermelon 1 oz,", "Rocco's Lime Mix 2 oz"], ["Watermelon Slice"],"./images/watermelonKiss.png", null);
   let spicyMango = new Drink("Spicy Mango", "Highball Glass", "Tajin Chile Lime Salt", ["Ghost Tequila 2 oz"],null, ["Real Mango Puree 1 oz,", "Sour Mix 1 oz"], ["Dehydrated Chile De Arbol,", "Dehydrated Lime Wheel"],"./images/spicyMango.png", null);
   //let  = new Drink("",null,null,null,null,null,null,"./images/.png", null);
   
   // Frozen Margaritas
   let houseMargaritaFrozen = new Drink("House Margarita (Frozen)", "Margarita Glass", "Guest Choice", ["Jose Cuervo Tradicional Silver 2 oz"], ["Triple Sec 1 oz"], ["Rocco's Lime Mix 3 oz", "( Flavored Margarita: Rocco's Lime Mix 3 oz,", "Strawberry, Mango, Prickly Pear, Passion Fruit or Pomegranate 2 oz )"], ["Lime Wedge"],"./images/houseMargaritaFrozen.png", null);
   let roccoRitaFrozen = new Drink("Rocco Rita (Frozen)","Margarita Glass", "Guest Choice", ["Teremana Blanco"], ["J. F. Haydens Orange Liqueur"], ["Rocco's Lime Mix 3 oz"], ["Lime Wedge"],"./images/roccoRitaFrozen.png", null);
   let cadillacFrozen = new Drink("Cadillac (Frozen)", "Margarita Glass", "Guest Choice", ["1800 Anejo 2 oz"], ["Grand Marnier 1 oz"], ["Rocco's Lime Mix 3 oz"], ["Lime Wedge"],"./images/cadillacFrozen.png", null);
   let jalapenoFrozen = new Drink("Jalapeno (Frozen)", "Margarita Glass", "Guest Choice", ["Tanteo Jalapeno 2 oz", "( sub Habanero or Chipotle )"], ["Triple Sec 1 oz"], ["Rocco's Lime Mix 3 oz"], ["Jalapeno Slice,", "Lime Wedge"],"./images/jalapenoFrozen.png", null);
   let watermelonKissFrozen = new Drink("Watermelon Kiss (Frozen)", "Margarita Glass",null, ["El Jimador Blanco 2 oz"], ["Triple Sec 1 oz"], ["Finest Call Watermelon 1 oz,", "Rocco's Lime Mix 2 oz"], ["Watermelon Slice"],"./images/watermelonKissFrozen.png", null);
   //let  = new Drink("",null,null,null,null,null,null,"./images/.png", null);
   

   // Specialty Drinks
   let mojito = new Drink("Mojito", "Highball",null, ["Bacardi", "Limon, Pineapple, Mango, Grapefruit, Raspberry, DragonBerry, Coconut or Banana"],null, ["Club Soda ( Topped ),", "Lime Wedges ( 4-6 Muddled ),", "Mint Leaves ( 4-6 Muddled ),", "Simple Syrup 1 oz"], ["Lime Wedge,", "Mint Leaves"],"./images/mojito.png", null);
   let cocoCabana = new Drink("Coco Cabana", "Highball",null, ["Jose Cuervo Tradicional Silver 2 oz"],null, ["Club Soda ( Splash ),", "Mint Sprig,", "Real Coco 1 oz,", "Rocco's Lime Mix 2 oz"], ["Dehydrated Lime Wheel,", "Mint Leaves & Shaved Coconut"],"./images/cocoCabana.png", null);
   let pricklyPineappleExpress = new Drink("Prickly Pineapple Express", "Highball", "Tajin Chile Lime Salt", ["Jose Cuervo Tradicional Silver 2 oz"],null,["Pineapple Juice 1 oz,", "Prickly Pear Puree 1 oz,", "Sour Mix 1 oz"], ["Dehydrated Lime Wheel,", "Dehydrated Pineapple"],"./images/pricklyPineappleExpress.png", null);
   let dosHombrise = new Drink("Dos Homb-Rise", "Highball", "Tajin Chile Lime Salt", ["Dos Hombres Espadin 2 oz"],null,["Grenadine .5 oz,", "Pineapple Juice 2 oz,", "Rocco's Lime Mix 1.5 oz"], ["Dehydrated Pineapple"],"./images/dosHombrise.png", null);
   let rosaRita = new Drink("Rosa Rita", "Old Fashioned Rocks Glass", "Hibiscus Salt", ["Hampton Water Rose wine 3 oz,", "Hornitos Plata 1 oz"],null, ["Club Soda ( Splash ),", "Real Stawberry Puree 1 oz,", "Rocco's Lime Mix 2 oz"], ["Dehydrated Edible Flowers ( 3 Flowers ),", "Dehydrated Lime Wheel"],"./images/rosaRita.png", null);
   let mexitini = new Drink("Mexitini", "Martini Glass",null,["Cazadores Reposado 1.5 oz"], ["J. F. Haydens Coffe Liqueuer 1.5 oz"], ["Agave .25 oz"], ["3 Coffee Beans"],"./images/mexitini.png", null);
   let oldFashioned = new Drink("Old Fashioned", "Old Fashioned Rocks Glass", "Bittersweet Chocolate Pinned", ["Hornitos Anejo 2 oz"],null, ["Agave .5 oz,", "Chocolate Bitters ( 4 Dashes ),", "Fee Brothers Orange Bitters ( 4 Dashes )"], ["Orange Peel"],"./images/oldFashioned.png", null);
   let casamigosLemonade = new Drink("Casamigos Lemonade", "Rocco's Logo Pint",null, ["Casamigos Silver 2 oz"],null, ["Agave 1 oz,", "Club Soda ( Topped ),", "Lemons ( 6 Muddled )"],null,"./images/casamigosLemonade.png", null);
   let theMules = new Drink("The Mules", "Copper Mug",null, ["Mexican: 1800 Anejo 2 oz", "Smokey: Dos Hombres Mezcal 2 oz / Moscow: Titos 2 oz"],null, ["Ginger Beer ( Topped ),", "Lime Juice 1 oz"], [" Dehydrated Lime Wheel"],"./images/theMules.png", null);
   //let  = new Drink("",null,null,null,null,null,null,"./images/.png", null);

   // Mocktails
   let mockarita = new Drink("Mockarita", "Rocco's Logo Pint", "Guest Choice",null,null, ["Orange Juice 1 oz,", "Rocco's Lime Mix 2 oz,", "Zero Ritual Tequila Alt. 2 oz"], ["Dehydrated Lime Wedge"],"./images/mockarita.png", null);
   let pinita = new Drink("Pinita (Nut Allergy)", "Rocco's Logo Pint",null,null,null, ["Club Soda ( Topped ),", "Dugan & Dane Tiki Tonic Syrup 1 oz,", "Mint Sprig,", "Pineapple Juice 1.5 oz,", "Rocco's Lime Mix 1 oz"], ["Dehydrated Lime Wheel & Pineapple Slice,", "Mint Sprig"],"./images/pinita.png", null);
   let mulecumber = new Drink("Mulecumber", "Rocco's Logo Pint",null,null,null, ["Basil ( 2 Leaves Muddled ),", "Cucumber ( 2 Slices Muddled ),", "Dugan & Dane Classic Tonic 1 oz,", "Q Ginger Beer ( Topped ),","Sour Mix 1 oz"], ["Basil Leaf & Dehydrated Lime Wheel,", "Peeled Cucumber in Glass"],"./images/mulecumber.png", null);
   let roseberry = new Drink("Roseberry", "Rocco's Logo Pint",null,null,null, ["Agave .25 oz,", "Blueberries ( 8 Muddled ),", "Club Soda ( Topped ),","Dugan & Dane Classic Tonic 1 oz,", "Rosemary Sprig"], ["Blueberries ( 4-6 Skewered ),", "Dehydrated Lime Wheel & Rosemary Sprig"],"./images/roseberry.png", null);

   // Happy Hour
   let houseHH = new Drink("House","Rocks Glass", "Guest Choice", ["Jose Cuervo Tradicional Silver 1.5 oz"], ["Triple Sec .5 oz"], ["Sour Mix 1.5 oz"], ["Lime Wedge"],"./images/happyHour.png", null);
   let skinnyHH = new Drink("Skinny","Rocks Glass", "Guest Choice", ["Jose Cuervo Tradicional Silver 1.5 oz"], ["Triple Sec .5 oz"], ["Club Soda ( Topped ),","Rocco's Lime Mix 1.5 oz"], ["Lime Wedge"],"./images/happyHour.png", null);
   let jalapenoHH = new Drink("Jalapeno","Rocks Glass", "Guest Choice", ["Tanteo Jalapeno 1.5 oz", "( sub Habanero or Chipotle )"], ["Triple Sec .5 oz"], ["Sour Mix 1.5 oz"], ["Lime Wedge"],"./images/happyHour.png", null);
   let volcanicHH = new Drink("Volcanic","Rocks Glass", "Black Sea Salt", ["Jose Cuervo Tradicional Silver 1.5 oz"], ["Triple Sec .5 oz"], ["Black Cherry Puree .75 oz,","Sour Mix 1.5 oz"], ["Lime Wedge"],"./images/happyHour.png", null);
   let watermelonHH = new Drink("Watermelon","Rocks Glass", "Guest Choice", ["Jose Cuervo Tradicional Silver 1.5 oz"], ["Triple Sec .5 oz"], ["Sour Mix 1.5 oz,", "Watermelon Puree 1 oz"], ["Lime Wedge"],"./images/happyHour.png", null);

   // Sangria
   let whiteSangria = new Drink("White Sangria", "Wine Glass",null, ["Lindeman's Chardonnay 2 oz"], ["E & J Brandy / Amaretto Batch 1 oz", "sub: Grand Marnier"], ["Ginger Ale ( Topped ),", "Lime, Lemon & Orange Wedge ( 1 ea. Muddled ),", "Orange Juice .25 oz,", "Simple Syrup .25 oz"], ["Fruits"],"./images/whiteSangria.png", "Batch");
   let redSangria = new Drink("Red Sangria", "Wine Glass",null, ["Lindeman's Merlot 2 oz"], ["E & J Brandy / Blackberry Brandy Batch 1 oz", "sub: Grand Marnier"], ["Ginger Ale ( Topped ),", "Lime, Lemon & Orange Wedge ( 1 ea. Muddled ),", "Orange Juice .25 oz,", "Simple Syrup .25 oz"], ["Fruits"],"./images/redSangria.png", "Batch");
   let roseSangria = new Drink("Rose Sangria", "Wine Glass",null, ["Hampton Water Rose 2 oz"], ["E & J Brandy / Triple Sec Batch 1 oz", "sub: Grand Marnier"], ["Ginger Ale ( Topped ),", "Lime, Lemon & Orange Wedge ( 1 ea. Muddled ),", "Orange Juice .25 oz,", "Simple Syrup .25 oz"], ["Fruits"],"./images/roseSangria.png", "Batch");


   // Batch Recipes
   let roccoMangoBatch = new Drink("Rocco Mango (Batch)",null,null, ["Jose Cuervo Tradicional Silver 750ml,", "Rock & Roll Mango Tequila 750ml"], ["J. F. Hayden Mango Liqueur 750ml"],null,null,"./images/logo.png", "Batch");
   //let  = new Drink(null,null,null, null,null,null,null,"./images/logo.png", "Batch");

   // Searchable Drinks
   
   let drinks = [
       // Menu Drinks ************************
       houseMargarita,
       houseMargaritaFrozen,
       roccoRita,
       roccoRitaFrozen,
       cadillac,
       cadillacFrozen,
       blackDiamond,
       strawberryBasil,
       jalapeno,
       jalapenoFrozen,
       twoTango,
       skinnySenorita,
       roccoMango,
       watermelonKiss,
       watermelonKissFrozen,
       spicyMango,
       

       // Specialty Drinks *******************
       mojito,
       cocoCabana,
       pricklyPineappleExpress,
       dosHombrise,
       rosaRita,
       mexitini,
       oldFashioned,
       casamigosLemonade,
       theMules,

       // Mocktails
       mockarita,
       pinita,
       mulecumber,
       roseberry,

       // Happy Hour
       houseHH,
       skinnyHH,
       jalapenoHH,
       volcanicHH,
       watermelonHH,

       // Sangria
       whiteSangria,
       redSangria,
       roseSangria,

       // Batch recipes **********************
       roccoMangoBatch,


       // Searchable Drinks ******************

      ];
      

      const searchInput = document.querySelector('.input');
      const clearButton = document.getElementById('clear');
      



      
      /* Search Button */
      searchInput.addEventListener("input", (e) => {
          let value = e.target.value;
          console.log(value)

          if(value && value.trim().length > 0){
              value = value.trim().toLowerCase();
          } else {
              clearList();
          }
      })

      

      /* Clear Button */
      clearButton.addEventListener("click", () => {
          clearList();
      })

      /* Result */
      function setList(results){
        
          for(const drink of results){
            $(".all-buttons").hide();
            $("#navDessert").hide();
            const resultItem = document.createElement('button');
            resultItem.classList.add('result-item');
            resultItem.classList.add('all-buttons');
            resultItem.id = drink.name.toLowerCase();
            resultItem.value = drink.name;
            const text = document.createTextNode(drink.name); 
            resultItem.appendChild(text);
            list.appendChild(resultItem);
            $(".results-list").show();

            $(".result-item").show()//.fadeIn(200);
            console.log(drink.name)  
          }

          if (results.length === 0 ){
            noResults()
        }

        console.log(results)
      }

      /* Search Narrow */
      searchInput.addEventListener("input", (e) => {
          clearList();
          let value = e.target.value;

          if(value && value.trim().length > 0){
              value = value.trim().charAt(0).toUpperCase() + value.slice(1);


              setList(drinks.filter(drink => {
                  return drink.name.includes(value);
              }))
          }
      })

      /* Clear List */
      function clearList(){
          while(list.firstChild){
              list.removeChild(list.firstChild);
          }
      }

      /* No Result */
      function noResults(){
        const error = document.createElement('li')
        error.classList.add('error-message')
        const text = document.createTextNode('No results found.')
        error.appendChild(text)
        list.appendChild(error)
      }


$(document).ready(function(){

    $('body').on('click','.all-buttons', '.result-item', function(){
        $(".item4").remove('.recipe-container');
        $(".all-buttons").hide();
        $(".form-container").hide();
        $(".results-list").hide();
        $(".button-container").hide();
        $(".item3").show()//.fadeIn(200);
        $(".item4").show()//.fadeIn(200);
        $(".initialRecipe").show();
        $("#liqueurRecipe2").hide();
        $(".recipe-container").remove('#liquor');
        openFullscreen();



        drinks.map(x => {

            if(x["name"] === this.value){
                console.log(this.value);
                $(".drink-title").show();
                $("#drinkTitle").text(this.value);
                $("#drinkPhoto").attr("src", x["photo"]);
                $(".item4").html('<div class="recipe-container"></div>');

                if(x["batch"] === "Batch"){
                    if(x["glass"] === "Wine Glass"){
                        $("#liquor").text("Wine :");
                    }
                } 
             
                if(x["glass"] !== null){
                 $(".recipe-container").append('<p class="batch-class initialRecipe" id="glass"><span style="text-decoration: underline;">Glass</span> :</p>');
                 $(".recipe-container").append('<p class="batch-class initialRecipe" id="glassRecipe"></p>');
                 $("#glassRecipe").text(x["glass"]);
                 $("#glass, #glassRecipe").css( "padding-bottom", "2vh" ); 
                }

             
                if(x["rim"] !== null){                   
                 $(".recipe-container").append('<p class="batch-class initialRecipe" id="rim"><span style="text-decoration: underline;">Rim</span> :</p>');
                 $(".recipe-container").append('<p class="batch-class initialRecipe" id="rimRecipe"></p>');
                 $("#rimRecipe").text(x["rim"]);
                 $("#rim, #rimRecipe").css( "padding-bottom", "2vh" ); 
                }
             
             
                if(x["liquor"] !== null){                   
                 $(".recipe-container").append('<p id="liquor"><span style="text-decoration: underline;">Liquor</span> :</p>');
                 $(".recipe-container").append('<p id="liquorRecipe"></p>');
                 $("#liquorRecipe").text(x["liquor"][0]);
                 $("#liquor, #liquorRecipe").css( "padding-bottom", "2vh" ); 
                 
                    if(x["liquor"].length === 2){
                     $(".recipe-container").append('<p id="liquorRecipe2"></p>');
                     $("#liquorRecipe2").show();
                     $("#liquorRecipe2").text(x["liquor"][1]);
                     $("#liquor, #liquorRecipe").css( "padding-bottom", "0" );
                     $("#liquorRecipe2").css( "padding-bottom", "2vh" );
                    } else if(x["liquor"].length === 3){
                        $(".recipe-container").append('<p id="liquorRecipe2"></p>');
                        $("#liquorRecipe2").show();
                        $("#liquorRecipe2").text(x["mixers"][1]);
                        $(".recipe-container").append('<p id="liquorRecipe3"></p>');
                        $("#liquorRecipe3").show();
                        $("#liquorRecipe3").text(x["mixers"][2]);
                        $("#liquor, #liquorRecipe, #liquorRecipe2").css( "padding-bottom", "0" );
                        $("#liquorRecipe3").css( "padding-bottom", "2vh" );
                       } else if(x["liquor"].length === 4){
                        $(".recipe-container").append('<p id="liquorRecipe2"></p>');
                        $("#liquorRecipe2").show();
                        $("#liquorRecipe2").text(x["liquor"][1]);
                        $(".recipe-container").append('<p id="liquorRecipe3"></p>');
                        $("#liquorRecipe3").show();
                        $("#liquorRecipe3").text(x["liquor"][2]);
                        $(".recipe-container").append('<p id="liquorRecipe4"></p>');
                        $("#liquorRecipe4").show();
                        $("#liquorRecipe4").text(x["liquor"][3]);
                        $("#liquor, #liquorRecipe, #liquorRecipe2, #liquorRecipe3").css( "padding-bottom", "0" );
                        $("#liquorRecipe4").css( "padding-bottom", "2vh" );
                       } else if(x["liquor"].length === 5){
                        $(".recipe-container").append('<p id="liquorRecipe2"></p>');
                        $("#liquorRecipe2").show();
                        $("#liquorRecipe2").text(x["liquor"][1]);
                        $(".recipe-container").append('<p id="liquorRecipe3"></p>');
                        $("#liquorRecipe3").show();
                        $("#liquorRecipe3").text(x["liquor"][2]);
                        $(".recipe-container").append('<p id="liquorRecipe4"></p>');
                        $("#liquorRecipe4").show();
                        $("#liquorRecipe4").text(x["liquor"][3]);
                        $(".recipe-container").append('<p id="liquorRecipe5"></p>');
                        $("#liquorRecipe5").show();
                        $("#liquorRecipe5").text(x["liquor"][4]);
                        $("#liquor, #liquorRecipe, #liquorRecipe2, #liquorRecipe3, #liquorRecipe4").css( "padding-bottom", "0" );
                        $("#liquorRecipe5").css( "padding-bottom", "2vh" );
                       }
                }
             
             
               if(x["liqueur"] !== null){                   
                 $(".recipe-container").append('<p id="liqueur"><span style="text-decoration: underline;">Liqueur</span> :</p>');
                 $(".recipe-container").append('<p id="liqueurRecipe"></p>');
                 $("#liqueurRecipe").text(x["liqueur"][0]);
                 $("#liqueur, #liqueurRecipe").css( "padding-bottom", "2vh" );
                 
                    if(x["liqueur"].length === 2){
                     $(".recipe-container").append('<p id="liqueurRecipe2"></p>');
                     $("#liqueurRecipe2").show();
                     $("#liqueurRecipe2").text(x["liqueur"][1]);
                     $("#liqueur, #liqueurRecipe").css( "padding-bottom", "0" );
                     $("#liqueurRecipe2").css( "padding-bottom", "2vh" );
                    } 
                }


                if(x["mixers"] !== null){                   
                    $(".recipe-container").append('<p id="mixers"><span style="text-decoration: underline;">Mixers</span> :</p>');
                    $(".recipe-container").append('<p id="mixersRecipe"></p>');
                    $("#mixersRecipe").text(x["mixers"][0]);
                    $("#mixers, #mixersRecipe").css( "padding-bottom", "2vh" );
                    
                       if(x["mixers"].length === 2){
                        $(".recipe-container").append('<p id="mixersRecipe2"></p>');
                        $("#mixersRecipe2").show();
                        $("#mixersRecipe2").text(x["mixers"][1]);
                        $("#mixers, #mixersRecipe").css( "padding-bottom", "0" );
                        $("#mixersRecipe2").css( "padding-bottom", "2vh" );
                       } else if(x["mixers"].length === 3){
                        $(".recipe-container").append('<p id="mixersRecipe2"></p>');
                        $("#mixersRecipe2").show();
                        $("#mixersRecipe2").text(x["mixers"][1]);
                        $(".recipe-container").append('<p id="mixersRecipe3"></p>');
                        $("#mixersRecipe3").show();
                        $("#mixersRecipe3").text(x["mixers"][2]);
                        $("#mixers, #mixersRecipe, #mixersRecipe2").css( "padding-bottom", "0" );
                        $("#mixersRecipe3").css( "padding-bottom", "2vh" );
                       } else if(x["mixers"].length === 4){
                        $(".recipe-container").append('<p id="mixersRecipe2"></p>');
                        $("#mixersRecipe2").show();
                        $("#mixersRecipe2").text(x["mixers"][1]);
                        $(".recipe-container").append('<p id="mixersRecipe3"></p>');
                        $("#mixersRecipe3").show();
                        $("#mixersRecipe3").text(x["mixers"][2]);
                        $(".recipe-container").append('<p id="mixersRecipe4"></p>');
                        $("#mixersRecipe4").show();
                        $("#mixersRecipe4").text(x["mixers"][3]);
                        $("#mixers, #mixersRecipe, #mixersRecipe2, #mixersRecipe3").css( "padding-bottom", "0" );
                        $("#mixersRecipe4").css( "padding-bottom", "2vh" );
                       } else if(x["mixers"].length === 5){
                        $(".recipe-container").append('<p id="mixersRecipe2"></p>');
                        $("#mixersRecipe2").show();
                        $("#mixersRecipe2").text(x["mixers"][1]);
                        $(".recipe-container").append('<p id="mixersRecipe3"></p>');
                        $("#mixersRecipe3").show();
                        $("#mixersRecipe3").text(x["mixers"][2]);
                        $(".recipe-container").append('<p id="mixersRecipe4"></p>');
                        $("#mixersRecipe4").show();
                        $("#mixersRecipe4").text(x["mixers"][3]);
                        $(".recipe-container").append('<p id="mixersRecipe5"></p>');
                        $("#mixersRecipe5").show();
                        $("#mixersRecipe5").text(x["mixers"][4]);
                        $("#mixers, #mixersRecipe, #mixersRecipe2, #mixersRecipe3, #mixersRecipe4").css( "padding-bottom", "0" );
                        $("#mixersRecipe5").css( "padding-bottom", "2vh" );
                       }
                   }


                   if(x["garnish"] !== null){                   
                    $(".recipe-container").append('<p id="garnish"><span style="text-decoration: underline;">Garnish</span> :</p>');
                    $(".recipe-container").append('<p id="garnishRecipe"></p>');
                    $("#garnishRecipe").text(x["garnish"][0]);
                    $("#garnish, #garnishRecipe").css( "padding-bottom", "2vh" );
                    
                       if(x["garnish"].length === 2){
                        $(".recipe-container").append('<p id="garnishRecipe2"></p>');
                        $("#garnishRecipe2").show();
                        $("#garnishRecipe2").text(x["garnish"][1]);
                        $("#garnish, #garnishRecipe").css( "padding-bottom", "0" );
                        $("#garnishRecipe2").css( "padding-bottom", "2vh" );
                       } else if(x["mixers"].length === 3){
                        $(".recipe-container").append('<p id="garnishRecipe2"></p>');
                        $("#garnishRecipe2").show();
                        $("#garnishRecipe2").text(x["garnish"][1]);
                        $(".recipe-container").append('<p id="garnishRecipe3"></p>');
                        $("#garnishRecipe3").show();
                        $("#garnishRecipe3").text(x["garnish"][2]);
                        $("#garnish, #garnishRecipe, #garnishRecipe2").css( "padding-bottom", "0" );
                        $("#garnishRecipe3").css( "padding-bottom", "2vh" );
                       } else if(x["mixers"].length === 4){
                        $(".recipe-container").append('<p id="garnishRecipe2"></p>');
                        $("#garnishRecipe2").show();
                        $("#garnishRecipe2").text(x["garnish"][1]);
                        $(".recipe-container").append('<p id="garnishRecipe3"></p>');
                        $("#garnishRecipe3").show();
                        $("#garnishRecipe3").text(x["garnish"][2]);
                        $(".recipe-container").append('<p id="garnishRecipe4"></p>');
                        $("#garnishRecipe4").show();
                        $("#garnishRecipe4").text(x["garnish"][3]);
                        $("#garnish, #garnishRecipe, #garnishRecipe2, #garnishRecipe3").css( "padding-bottom", "0" );
                        $("#garnishRecipe4").css( "padding-bottom", "2vh" );
                       }
                       else if(x["garnish"].length === 5){
                        $(".recipe-container").append('<p id="garnishRecipe2"></p>');
                        $("#garnishRecipe2").show();
                        $("#garnishRecipe2").text(x["garnish"][1]);
                        $(".recipe-container").append('<p id="garnishRecipe3"></p>');
                        $("#garnishRecipe3").show();
                        $("#garnishRecipe3").text(x["garnish"][2]);
                        $(".recipe-container").append('<p id="garnishRecipe4"></p>');
                        $("#garnishRecipe4").show();
                        $("#garnishRecipe4").text(x["garnish"][3]);
                        $(".recipe-container").append('<p id="garnishRecipe5"></p>');
                        $("#garnishRecipe5").show();
                        $("#garnishRecipe5").text(x["garnish"][4]);
                        $("#garnish, #garnishRecipe, #garnishRecipe2, #garnishRecipe3, #garnishRecipe4").css( "padding-bottom", "0" );
                        $("#garnishRecipe5").css( "padding-bottom", "2vh" );
                       }
                   }

                   if(x["batch"] === "Batch"){
                    if(x["glass"] === "Wine Glass"){
                        $("#liquor").text("Wine :");
                    }
                } 

                
            }

        });
    })


    /* All Buttons */
    

    var extraRecipeSlots =
    $("#liquorRecipe2").hide();
    $("#liqueurRecipe2").hide();
    $("#mixersRecipe2").hide();
    $("#mixersRecipe3").hide();
    $("#mixersRecipe4").hide();
    $("#mixersRecipe5").hide();
    $("#garnishRecipe2").hide();
    $("#garnishRecipe3").hide();
    $("#garnishRecipe4").hide();
    $(".results-list").hide();
    

    /* Navigation Buttons */
    $("#navMargarita").click(function(){
        $(".item3").hide();
        $(".item4").hide();
        $(".drink-title").hide();
        $("#liquorRecipe2").hide();
        $("#mixersRecipe2").hide();
        $("#mixersRecipe3").hide();
        $("#mixersRecipe4").hide();
        $("#mixersRecipe5").hide();
        $("#garnishRecipe2").hide();
        $("#garnishRecipe3").hide();
        $("#garnishRecipe4").hide();
        $(".all-buttons").hide();
        $(".form-container").hide();
        $(".results-list").hide();
        $("#navDessert").hide();
        $(".margarita-buttons").show()//.fadeIn(200);
        $(".button-container").show();
        openFullscreen();
    });

    $("#navFrozen").click(function(){
        $(".item3").hide();
        $(".item4").hide();
        $(".drink-title").hide();
        $("#liquorRecipe2").hide();
        $("#mixersRecipe2").hide();
        $("#mixersRecipe3").hide();
        $("#mixersRecipe4").hide();
        $("#mixersRecipe5").hide();
        $("#garnishRecipe2").hide();
        $("#garnishRecipe3").hide();
        $("#garnishRecipe4").hide();
        $(".all-buttons").hide();
        $(".form-container").hide();
        $(".results-list").hide();
        $("#navDessert").hide();
        $(".frozen-buttons").show()//.fadeIn(200);
        $(".button-container").show();
        openFullscreen();
    });

    $("#navSpecialty").click(function(){
        $(".item3").hide();
        $(".item4").hide();
        $(".drink-title").hide();
        $("#liquorRecipe2").hide();
        $("#mixersRecipe2").hide();
        $("#mixersRecipe3").hide();
        $("#mixersRecipe4").hide();
        $("#mixersRecipe5").hide();
        $("#garnishRecipe2").hide();
        $("#garnishRecipe3").hide();
        $("#garnishRecipe4").hide();
        $(".all-buttons").hide();
        $(".form-container").hide();
        $(".results-list").hide();
        $("#navDessert").hide();
        $(".specialty-buttons").show()//.fadeIn(200);
        $(".button-container").show();
        openFullscreen();
    });

    $("#navMocktails").click(function(){
        $(".item3").hide();
        $(".item4").hide();
        $(".drink-title").hide();
        $("#liquorRecipe2").hide();
        $("#mixersRecipe2").hide();
        $("#mixersRecipe3").hide();
        $("#mixersRecipe4").hide();
        $("#mixersRecipe5").hide();
        $("#garnishRecipe2").hide();
        $("#garnishRecipe3").hide();
        $("#garnishRecipe4").hide();
        $(".all-buttons").hide();        
        $(".form-container").hide();
        $(".results-list").hide();
        $("#navDessert").hide();
        $(".mocktail-buttons").show()//.fadeIn(200);
        $(".button-container").show();
        openFullscreen();
    });

    $("#navHappyHour").click(function(){
        $(".item3").hide();
        $(".item4").hide();
        $(".drink-title").hide();
        $("#liquorRecipe2").hide();
        $("#mixersRecipe2").hide();
        $("#mixersRecipe3").hide();
        $("#mixersRecipe4").hide();
        $("#mixersRecipe5").hide();
        $("#garnishRecipe2").hide();
        $("#garnishRecipe3").hide();
        $("#garnishRecipe4").hide();
        $(".all-buttons").hide();        
        $(".form-container").hide();
        $(".results-list").hide();
        $(".happyhour-buttons").show()//.fadeIn(200);
        $(".button-container").show();
        openFullscreen();
    });

    $("#navOther, #clear").click(function(){
        $(".item3").hide();
        $(".item4").hide();
        $(".drink-title").hide();
        $("#liquorRecipe2").hide();
        $("#mixersRecipe2").hide();
        $("#mixersRecipe3").hide();
        $("#mixersRecipe4").hide();
        $("#mixersRecipe5").hide();
        $("#garnishRecipe2").hide();
        $("#garnishRecipe3").hide();
        $("#garnishRecipe4").hide();
        $(".all-buttons").hide();
        $(".results-list").hide();
        $(".other-buttons").show()//.fadeIn(200);
        $(".form-container").show();
        $(".button-container").show();
        searchInput.value = '';
        openFullscreen();
    });

    $("#navBatch").click(function(){
        $(".item3").hide();
        $(".item4").hide();
        $(".drink-title").hide();
        $("#liquorRecipe2").hide();
        $("#mixersRecipe2").hide();
        $("#mixersRecipe3").hide();
        $("#mixersRecipe4").hide();
        $("#mixersRecipe5").hide();
        $("#garnishRecipe2").hide();
        $("#garnishRecipe3").hide();
        $("#garnishRecipe4").hide();
        $(".all-buttons").hide();
        $(".form-container").hide();
        $(".batch-buttons").show()//.fadeIn(200);
        $(".results-list").hide();
        $(".button-container").show();
        openFullscreen();
    });
}); // jQuery end tag 