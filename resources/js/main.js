    'use strict';
    window.addEventListener('load', function() {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms   = document.getElementsByClassName('needs-validation');
        var success = document.querySelector('.success');
        
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function(form) {
            form.addEventListener('submit', function(event) {

                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                    success.style.display = 'none';
                    
                    form.classList.add('was-validated');            

                    let inputs = document.querySelectorAll('input')
                    inputs.forEach(function(input){
                        input.style.paddingRight = '10px'
                    });
                } else {
                        $.ajax({
                            url: '/submit',
                            type: 'POST',
                            data : $('form').serialize(),
                            success: function(){
                              console.log('form submitted');
                              $('form').css('display', 'none');
                              $('.circle-loader').css('display', 'flex');
                              window.setTimeout(function(){
                                $('.circle-loader').toggleClass('load-complete');
                                $('.checkmark').toggle();
                                $('#success').css('display', 'inline')
                              }, 1200);
                              success.style.display = 'inline';
                            }
                          });
                }
            }, false);
        });
    }, false);

    $('.button').on('click', function () {
        $(this).blur()
    });

    function myFunction(x) {
        if (x.matches) { // If media query matches
            $('.description').html('Rexia is a product-based Pakistani self grown IT company aiming to produce future leaders of the world!');
        } else {
            $('.description').html('Rexia is a product-based Pakistani self grown IT company aiming </br> to produce future leaders of the world!');
        }
      }
      
      var x = window.matchMedia("(max-width: 1328px)")
      myFunction(x) // Call listener function at run time
      x.addListener(myFunction) // Attach listener function on state changes

