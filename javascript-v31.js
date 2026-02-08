//  Javascript behorend bij dedoofpotgeneraal.nl

// voor het scrollen #####################################################################################################################################################
$(document).ready(function(){
  // Add smooth scrolling to all links
  $('a').on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== '') {
      // Prevent default anchor click behavior
      event.preventDefault();
      // Store hash
      var hash = this.hash;
      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1000, function(){
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

// voor menubar ##########################################################################################################################################################
$("#gloss1").mouseover(function(){
    $(document.getElementsByClassName("navigation")).css("stroke-width","4px");
    });
$("#gloss1").mouseout(function(){
    $(document.getElementsByClassName("navigation")).css("stroke-width","3.5px");
    });

// voor sociale media ####################################################################################################################################################
// Voor sociale media (verplaatst naar .socialmedia voor betere bubbling en robuustheid)
$(".container102 .socialmedia").hover(
    function() {
        $("#facebook1").css("stroke-width","2px");
        $("#facebook2").css("filter","opacity(100%)");
    },
    function() {
        $("#facebook1").css("stroke-width","0.5px");
        $("#facebook2").css("filter","opacity(60%)");
    }
);

$(".container103 .socialmedia").hover(
    function() {
        $("#twitter1").css("stroke-width","2px");
        $("#twitter2").css("filter","opacity(100%)");
    },
    function() {
        $("#twitter1").css("stroke-width","0.5px");
        $("#twitter2").css("filter","opacity(60%)");
    }
);

$(".container104 .socialmedia").hover(
    function() {
        $("#linkedin1").css("stroke-width","2px");
        $("#linkedin2").css("filter","opacity(100%)");
    },
    function() {
        $("#linkedin1").css("stroke-width","0.5px");
        $("#linkedin2").css("filter","opacity(60%)");
    }
);

$(".container105 .socialmedia").hover(
    function() {
        $("#whatsapp1").css("stroke-width","2px");
        $("#whatsapp2").css("filter","opacity(100%)");
    },
    function() {
        $("#whatsapp1").css("stroke-width","0.5px");
        $("#whatsapp2").css("filter","opacity(60%)");
    }
);

$(".container106 .socialmedia").hover(
    function() {
        $("#email1").css("stroke-width","2px");
        $("#email2").css("filter","opacity(100%)");
    },
    function() {
        $("#email1").css("stroke-width","0.5px");
        $("#email2").css("filter","opacity(60%)");
    }
);
    
// voor de recensies #####################################################################################################################################################
// Definieer de gradiënten
var hoverInGradient  = "linear-gradient(135deg, #CED3D7, #CED3D7 50%, #E0E1E2 100%)";
var mouseoutGradient = "linear-gradient(135deg, #E7E7E7, #E7E7E7 50%, #FAFAFA 100%)";

// Configuratie voor elk element
var configs = [
  { hrefId: "#r1-B",  tableId: "#r1-A",  useGradient: true  },
  { hrefId: "#r2-B",  tableId: "#r2-A",  useGradient: false },
  { hrefId: "#r3-B",  tableId: "#r3-A",  useGradient: false },
  { hrefId: "#r4-B",  tableId: "#r4-A",  useGradient: false },
  { hrefId: "#r5-B",  tableId: "#r5-A",  useGradient: false },
  { hrefId: "#r6-B",  tableId: "#r6-A",  useGradient: false },
  { hrefId: "#r7-B",  tableId: "#r7-A",  useGradient: false },
  { hrefId: "#r8-B",  tableId: "#r8-A",  useGradient: true  },
  { hrefId: "#r9-B",  tableId: "#r9-A",  useGradient: true  },
  { hrefId: "#r10-B", tableId: "#r10-A", useGradient: true  },
  { hrefId: "#r12-B", tableId: "#r12-A", useGradient: true  },
  { hrefId: "#r13-B", tableId: "#r13-A", useGradient: false },
  { hrefId: "#r14-B", tableId: "#r14-A", useGradient: true  },
  { hrefId: "#r15-B", tableId: "#r15-A", useGradient: false },
  { hrefId: "#r16-B", tableId: "#r16-A", useGradient: true  },
  { hrefId: "#r17-B", tableId: "#r17-A", useGradient: true  },
  { hrefId: "#r18-B", tableId: "#r18-A", useGradient: false },
  { hrefId: "#r19-B", tableId: "#r19-A", useGradient: true  },
  { hrefId: "#r20-B", tableId: "#r20-A", useGradient: true  },
  { hrefId: "#r21-B", tableId: "#r21-A", useGradient: true  },
  { hrefId: "#r22-B", tableId: "#r22-A", useGradient: false },
  { hrefId: "#r23-B", tableId: "#r23-A", useGradient: false },
  { hrefId: "#r24-B", tableId: "#r24-A", useGradient: true  },
  { hrefId: "#r25-B", tableId: "#r25-A", useGradient: true  },
  { hrefId: "#r26-B", tableId: "#r26-A", useGradient: true  },
  { hrefId: "#r27-B", tableId: "#r27-A", useGradient: false },
  { hrefId: "#r28-B", tableId: "#r28-A", useGradient: false },
  { hrefId: "#r29-B", tableId: "#r29-A", useGradient: true  },
  { hrefId: "#r30-B", tableId: "#r30-A", useGradient: false },
  { hrefId: "#r31-B", tableId: "#r31-A", useGradient: false },
  { hrefId: "#r33-B", tableId: "#r33-A", useGradient: true  },
  { hrefId: "#r35-B", tableId: "#r35-A", useGradient: false },
  { hrefId: "#r36-B", tableId: "#r36-A", useGradient: true  },
  { hrefId: "#r39-B", tableId: "#r39-A", useGradient: false },
  { hrefId: "#r40-B", tableId: "#r40-A", useGradient: false },
  { hrefId: "#r41-B", tableId: "#r41-A", useGradient: true  },
  { hrefId: "#r43-B", tableId: "#r43-A", useGradient: false },
  { hrefId: "#r44-B", tableId: "#r44-A", useGradient: false },
  { hrefId: "#r45-B", tableId: "#r45-A", useGradient: false },
  { hrefId: "#r46-B", tableId: "#r46-A", useGradient: true  },
  { hrefId: "#r47-B", tableId: "#r47-A", useGradient: false },
  { hrefId: "#r48-B", tableId: "#r48-A", useGradient: true  },
  { hrefId: "#r50-B", tableId: "#r50-A", useGradient: true  },
  { hrefId: "#r51-B", tableId: "#r51-A", useGradient: true  },
  { hrefId: "#r54-B", tableId: "#r54-A", useGradient: true  },
  { hrefId: "#r55-B", tableId: "#r55-A", useGradient: true  },
  { hrefId: "#r57-B", tableId: "#r57-A", useGradient: false },
  { hrefId: "#r58-B", tableId: "#r58-A", useGradient: false },
  { hrefId: "#r61-B", tableId: "#r61-A", useGradient: true  },
  { hrefId: "#r63-B", tableId: "#r63-A", useGradient: false },
  { hrefId: "#r65-B", tableId: "#r65-A", useGradient: true  },
  { hrefId: "#r66-B", tableId: "#r66-A", useGradient: true  },
  { hrefId: "#r69-B", tableId: "#r69-A", useGradient: true  },
  { hrefId: "#r70-B", tableId: "#r70-A", useGradient: false },
  { hrefId: "#r71-B", tableId: "#r71-A", useGradient: false },
  { hrefId: "#r73-B", tableId: "#r73-A", useGradient: true  },
  { hrefId: "#r74-B", tableId: "#r74-A", useGradient: false },
  { hrefId: "#r75-B", tableId: "#r75-A", useGradient: false },
  { hrefId: "#r76-B", tableId: "#r76-A", useGradient: false },
  { hrefId: "#r77-B", tableId: "#r77-A", useGradient: true  },
  { hrefId: "#r78-B", tableId: "#r78-A", useGradient: true  },
  { hrefId: "#r79-B", tableId: "#r79-A", useGradient: true  },
  { hrefId: "#r80-B", tableId: "#r80-A", useGradient: false },
  { hrefId: "#r81-B", tableId: "#r81-A", useGradient: true  },
  { hrefId: "#r83-B", tableId: "#r83-A", useGradient: false },
  { hrefId: "#r85-B", tableId: "#r85-A", useGradient: false },
  { hrefId: "#r86-B", tableId: "#r86-A", useGradient: true  },
  { hrefId: "#r87-B", tableId: "#r87-A", useGradient: true  },
  { hrefId: "#r88-B", tableId: "#r88-A", useGradient: false }
]
    
// Stel de hover-events in voor alle configuraties
    // Stel de hover-events in voor alle configuraties
    configs.forEach(function(config) {
        // Speciaal geval voor #r34-B
        var customMouseoutGradient = (config.hrefId === "#r152-B")
            ? "linear-gradient(to right, #CEEEF6, #E6F0F0)"
            : mouseoutGradient;   // de standaard mouseoutGradient voor alle anderen

        $(config.hrefId).hover(
            function() {
                // Bestaande gradient-logica bij hover-in
                $(config.tableId).css("background-image", hoverInGradient);

                // Plus-logica voor rode streepjes
                var $use = $(config.tableId + ' svg use');
                var originalHref = $use.attr('href');
                if (originalHref === '#red') {
                    $use.data('originalHref', originalHref).attr('href', '#plus-red');
                }
            },
            function() {
                // Gebruik de (eventueel aangepaste) mouseout-gradient
                if (config.useGradient) {
                    $(config.tableId).css("background-image", customMouseoutGradient);
                } else {
                    $(config.tableId).css("background", "#FFFFFF");
                }

                // Herstel het rode streepje
                var $use = $(config.tableId + ' svg use');
                var originalHref = $use.data('originalHref');
                if (originalHref) {
                    $use.attr('href', originalHref);
                    $use.removeData('originalHref');
                }
            }
        );
    });
    
// voor laatste button ###################################################################################################################################################
$("#ton3").mouseover(function(){
    $("#ton4").css("background-image","linear-gradient(110deg, #F00000, #F00000 100%)");});
$("#ton3").mouseout(function(){
    $("#ton4").css("background-image","linear-gradient(110deg, #C00000, #B00000 100%)");});
    
// voor boxen ###################################################################################################################################################
$("#box1").mouseover(function(){
    $(document.getElementsByClassName("kleur36")).css({"border-top":"solid 5px #B00000","border-bottom":"solid 5px #B00000"});
    $(document.getElementsByClassName("box1")).css("fill","#DD0000");});
$("#box1").mouseout(function(){
    $(document.getElementsByClassName("kleur36")).css({"border-top":"solid 5px #A00000","border-bottom":"solid 5px #A00000"});
    $(document.getElementsByClassName("box1")).css("fill","#900000");});
    
$("#box2").mouseover(function(){
    $(document.getElementsByClassName("kleur36")).css({"border-top":"solid 5px #B00000","border-bottom":"solid 5px #B00000"});
    $(document.getElementsByClassName("box2")).css("fill","#DD0000");});
$("#box2").mouseout(function(){
    $(document.getElementsByClassName("kleur36")).css({"border-top":"solid 5px #A00000","border-bottom":"solid 5px #A00000"});
    $(document.getElementsByClassName("box2")).css("fill","#900000");});
    
$("#box3").mouseover(function(){
    $(document.getElementsByClassName("box3")).css("color","#FFFFFF");});
$("#box3").mouseout(function(){
    $(document.getElementsByClassName("box3")).css("color","#B00000");});
    
$("#box4").mouseover(function(){
    $(document.getElementsByClassName("box4")).css("color","#FFFFFF");});
$("#box4").mouseout(function(){
    $(document.getElementsByClassName("box4")).css("color","#B00000");});

$("#box5").mouseover(function(){
    $(document.getElementsByClassName("kleur36")).css({"border-top":"solid 5px #B00000","border-bottom":"solid 5px #B00000"});
    $(document.getElementsByClassName("box5")).css("fill","#DD0000");});
$("#box5").mouseout(function(){
    $(document.getElementsByClassName("kleur36")).css({"border-top":"solid 5px #A00000","border-bottom":"solid 5px #A00000"});
    $(document.getElementsByClassName("box5")).css("fill","#900000");});
});
