//on page onload get the cursor to go insid the username first.

$(document).ready(function(){

    var subbutton = document.getElementById("submitButton");

    var formValid = {
        username:false,
        email:false,
        password:false,
        lastname:false,
        gender:false,
        streetAddress:false,
        city:false,
        state:false,
        zip:false,
        phoneNumber:false
    };




    subbutton.addEventListener('click',function(e){
        var username = $("#user-name").val();
        var lastname = $("#last-name").val();
        var email = $("#email").val();
        var password = $("#create-password").val();
        var gender = $("#gender").val();
        var streetAddress = $("#street-address").val();
        var city = $("#City").val();
        var state = $("#State").val();
        var zip = $("#Zip").val();
        var cell = $("#Cell").val();
        var creditCardCvv = $("#cvv").val();
        if(username == '' || email == '' || password == ''|| lastname =='' || creditCardCvv == '' || gender == '' || streetAddress == '' || city == '' || state == '' || zip == '' || cell == ''){
            $("#user-name-error").text('User name is required before the form is submitted').show();
            $("#mail-error").text('Email is required before the form is submitted').show();
            $("#creditNum-error").text('The credit card number field is required before the form is submitted').show();
            $("#last-name-error").text('Lastname is required before the form is submitted').show();
            $("#cvv-error").text('The cvv number is required before the form is submitted').show();
            $("#activity-error").text('You must select an activity to submit the form').show();
            $("#createPassword").text('Password is required to completed this form').show();
            $("#gender-error").text('Gender is required to completed this form').show();
            $("#address-error").text(' Street address is required to completed this form').show();
            $("#city-error").text(' City is required to completed this form').show();
            $("#state-error").text(' State is required to completed this form').show();
            $("#zip-error").text(' Zip is required to completed this form').show();
            $("#cell-error").text('Cell is required to completed this form').show();

        }

        if(formValid.username && formValid.lastname && formValid.email && formValid.password && formValid.gender && formValid.streetAddress && formValid.city && formValid.state && formValid.zip && formValid.cell){
            //go ahead
        }else if(formValid.userusername && formValid.email && formValid.password && formValid.city){
            //go ahead
        }else if(formValid.userusername && formValid.email && formValid.password && formValid.state){
            //go ahead
        }else{
            e.preventDefault()
        }

    },false);




    $("#user-name").on("input",function(){
        var username = $(this).val();
        
        function msg(body){
            $("#user-name-error").text(body).show();
        };

        function hide(){
            $("#user-name-error").hide();
        };

        if(username.length>8){
            msg('Username cannot have more than 8 characters');
            formValid.userusername = false;
            
        }else{
            hide();
            
            
            var testExp = new RegExp (/^[a-zA-Z ]+$/);
            if(!testExp.test(username)){
            msg('This field cannot have special characters');
            formValid.userusername = false;
            
            }else{
                hide();
                formValid.userusername = true;
                
                
            }
        }

    });

    // checks the email to make sure that username field is filled out and if not it keeps button disabled
    $("#mail").on("input",function(){
        var email = $(this).val();
        
        function msg(body){
            $("#mail-error").text(body).show();
        };

        function hide(){
            $("#mail-error").hide();
        };

        if(email.length<1){
            msg('this field is required');
            formValid.email = false;
        }else{
            hide();
            
            var testExp = new RegExp (/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/);
            if(!testExp.test(email)){
            msg('must be a valid email');
            formValid.email = false;
            }else{
                hide();
                formValid.email= true;
                
            }
        }

    });

        $("#mail").on("input",function(){
        var email = $(this).val();
        
        function msg(body){
            $("#mail-error").text(body).show();
        };

        function hide(){
            $("#mail-error").hide();
        };

        if(email.length<1){
            msg('this field is required');
            formValid.email = false;
        }else{
            hide();
            
            var testExp = new RegExp (/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/);
            if(!testExp.test(email)){
            msg('must be a valid email');
            formValid.email = false;
            }else{
                hide();
                formValid.email= true;
                
            }
        }

    });

    $("#create-password").on("input",function(){
        var password = $(this).val();
        
        function msg(body){
            $("#createPassword-error").text(body).show();
        };

        function hide(){
            $("#createPassword-error").hide();
        };

        if(password.length>8){
            msg('password can be no greater than 8 characters');
            formValid.password = false;
        }else{
            hide();
            
            var testExp = new RegExp (/^.*(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(^[a-zA-Z0-9@\$=!:.#%]+$)/);
            if(!testExp.test(password)){
            msg('must be a valid password containing at least one digit and lowercase letter and a upper case letter and can be no more that 8 characters');
            formValid.password = false;
            }else{
                hide();
                formValid.password= true;
                
            }
        }

    });
    $("#btn_1").click(function () { //user clicks button
        if ("geolocation" in navigator){ //check geolocation available 
            //try to get user current location using getCurrentPosition() method
            navigator.geolocation.getCurrentPosition(function(position){ 
                    $("#result").html("Found your location <br />Lat : "+position.coords.latitude+" </br>Lang :"+ position.coords.longitude);
                });
        }else{
            console.log("Browser doesn't support geolocation!");
        }
    });

      
    
});
