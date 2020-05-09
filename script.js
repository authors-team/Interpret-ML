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

  $(".tc-2").hover(
    function() {
      $(".global").css("display", "none");
      $(".group").css("display", "none");
      $(".feature").css("display", "none");
      $(".local").css("display", "block");
    }, function() {
      $(".global").css("display", "block");
      $(".local").css("display", "none");
    }
  );

  $(".tc-3").hover(
    function() {
      $(".global").css("display", "none");
      $(".local").css("display", "none");
      $(".feature").css("display", "none");
      $(".group").css("display", "block");
    }, function() {
      $(".global").css("display", "block");
      $(".group").css("display", "none");
    }
  );

  $(".tc-4").hover(
    function() {
      $(".global").css("display", "none");
      $(".local").css("display", "none");
      $(".group").css("display", "none");
      $(".feature").css("display", "block");
    }, function() {
      $(".global").css("display", "block");
      $(".feature").css("display", "none");
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

