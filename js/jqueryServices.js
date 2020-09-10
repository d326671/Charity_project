$(document).ready(function(){
    $('#moreContentHouseMaintenance').hide();
    $('#moreLocalCharityEvents').hide();
    $('#moreDonations').hide();

    $( "#hiderContentHouseMaintenance").click(function() {
        $( "#moreContentHouseMaintenance" ).hide( "fast", function() {
          // Use arguments.callee so we don't need a named function
          //$( this ).prev().hide( "fast", arguments.callee );
        });
      });
      $( "#showerContentHouseMaintenance" ).click(function() {
        $( "#moreContentHouseMaintenance" ).show();
      });


      $( "#hiderCharityEvents").click(function() {
        $( "#moreLocalCharityEvents" ).hide( "fast", function() {
          // Use arguments.callee so we don't need a named function
          //$( this ).prev().hide( "fast", arguments.callee );
        });
      });
      $( "#showerCharityEvents" ).click(function() {
        $( "#moreLocalCharityEvents" ).show();
      });


      $( "#hiderDonations").click(function() {
        $( "#moreDonations" ).hide( "fast", function() {
          // Use arguments.callee so we don't need a named function
          //$( this ).prev().hide( "fast", arguments.callee );
        });
      });
      $( "#showerDonations" ).click(function() {
        $( "#moreDonations" ).show();
      });


});