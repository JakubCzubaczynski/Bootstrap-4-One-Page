$( document ).ready(function() {
    $('.fa-bars').click(function(){
        $('.nav-ul').toggleClass('show');
        
    })
    
    $("form").submit(function(e){
        e.preventDefault();
    });
});