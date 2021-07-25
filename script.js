//What we do section 

$(document).ready(function() {
    $('#design-icon').click(function() {
        $('.hidden1').show();
        $('#design-icon').hide();
    });
    $('.hidden1').click(function() {
        $('#design-icon').show();
        $('.hidden1').hide();

    });
});
$(document).ready(function() {
    $('#dev-icon').click(function() {
        $('.hidden2').show();
        $('#dev-icon').hide();
    });
    $('.hidden2').click(function() {
        $('#dev-icon').show();
        $('.hidden2').hide();

    });
});
$(document).ready(function() {
    $('#product-icon').click(function() {
        $('.hidden3').show();
        $('#product-icon').hide();
    });
    $('.hidden3').click(function() {
        $('#product-icon').show();
        $('.hidden3').hide();

    });
});

// portfolio section
$(document).ready(function() {
    $('#work1').hover(function() {
        $('.centered1').slideToggle();

    });
});
$(document).ready(function() {
    $('#work2').hover(function() {
        $('.centered2').slideToggle();

    });
});
$(document).ready(function() {
    $('#work3').hover(function() {
        $('.centered3').slideToggle();

    });
});
$(document).ready(function() {
    $('#work4').hover(function() {
        $('.centered4').slideToggle();

    });
});
$(document).ready(function() {
    $('#work5').hover(function() {
        $('.centered5').slideToggle();

    });
});
$(document).ready(function() {
    $('#work6').hover(function() {
        $('.centered6').slideToggle();

    });
});
$(document).ready(function() {
    $('#work7').hover(function() {
        $('.centered7').slideToggle();

    });
});
$(document).ready(function() {
    $('#work8').hover(function() {
        $('.centered8').slideToggle();

    });
});

// contact us section
$(document).ready(function(){
    $('#myModal').modal('hide');
    

})
$(document).ready(function(){
    $('#takeMe').click(function(){
        $('form').submit();
        $('#name').val('')
        $('#email').val('')
        $('#message').val('')

    });
    

})


function validate() {
    var myName = document.getElementById('name').value;
    var myEmail = document.getElementById('email').value;
    var myMessage = document.getElementById('message').value;


    if (myName != '' && myEmail != '' && (myMessage != '' && myMessage.length > 10)) {
       document.getElementById('show').innerHTML =  myName +" we have received your message.<br> Thank you for reaching out to us." 
        $("#myModal").modal('show');
          $(document).on('click', '#submit-btn', function(e){
             e.preventDefault();
         });
       
  
    }
    else{ 
         return false;
    
        }
       

}


// scroll up button

$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 800) {
            $('.up-btn').fadeIn();
        } else {
            $('.up-btn').fadeOut();
        }
    });

    $('.up-btn').click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, 50);
        return false;
    });

});