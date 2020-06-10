(function() {
    'use strict';
    window.addEventListener('load', function() {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms   = document.getElementsByClassName('needs-validation');
        var success = document.querySelector('.success');
        
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function(form) {
            form.addEventListener('submit', function(event) {
                form.classList.add('was-validated');            

                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                    success.style.display = 'none';

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
                              }, 2000);
                              success.style.display = 'inline';
                            }
                          });
                          //event.preventDefault();
                }
                //return false;
            }, false);
        });
    }, false);

    $('.button').on('click', function () {
        $(this).blur()
    })
})();

