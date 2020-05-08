$(document).ready(function() {
  // executes when HTML-Document is loaded and DOM is ready
  console.log("document is ready");
  
  $(".technique-card").hover(
    function() {
      $(this).addClass('white-card').css('cursor', 'pointer'); 
      $(".technique-text", this).addClass('dark');
      $(".technique-text", this).removeClass('white');
    }, function() {
      $(this).removeClass('white-card');
      $(".technique-text", this).removeClass('dark');
      $(".technique-text", this).addClass('white');
    }
  );


  $(".box-card-1").click(
    function() {
      console.log("hello");
      $(".glass", this).removeClass('inactive');
      $(".glass", this).addClass('active');
    }
  );

  $(".box-card-2").click(
    function() {
      console.log("hello");
      $(".glass", this).addClass('inactive');
      $(".glass", this).removeClass('active');
    }
  );

// document ready  
});

