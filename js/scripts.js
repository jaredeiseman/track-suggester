////////////////////////////////////////////////////////////////////////////////
//                              BUSINESS LOGIC                                //
////////////////////////////////////////////////////////////////////////////////
//determination logic

////////////////////////////////////////////////////////////////////////////////
//                           USER INTERFACE LOGIC                             //
////////////////////////////////////////////////////////////////////////////////
$(document).ready(function() {
  //next button to hide current '.question-content' div and show next
  $('button[name="next"]').click(function() {
    $(this).parent().slideUp();
    $(this).parent().next().slideDown();
  });

  //previous button to hide current '.question-content' div and show previous
  $('button[name="previous"]').click(function() {
    $(this).parent().slideUp();
    $(this).parent().prev().slideDown();
  });

  //submit button handler
  $('form').submit(function(e) {
    //block submission
    e.preventDefault();

    //gather form checked inputs
    var questionOne = $('input[name="question-one"]:checked');
    var questionTwo = $('input[name="question-two"]:checked');
    var questionThree = $('input[name="question-three"]:checked');
    var questionFour = $('input[name="question-four"]:checked');
    var questionFive = $('input[name="question-five"]:checked');
    var questionSix = $('input[name="question-six"]:checked');

    //form validate (bind?)
    if (questionOne.val() === undefined) {
      //add has-error and messaging to divs missing a value
      $('input[name="question-one"]').parents('.form-group').addClass('has-error');
    } else if (questionTwo.val() === undefined) {
      $('input[name="question-two"]').parents('.form-group').addClass('has-error');
    } else if (questionThree.val() === undefined) {
      $('input[name="question-three"]').parents('.form-group').addClass('has-error');
    } else if (questionFour.val() === undefined) {
      $('input[name="question-four"]').parents('.form-group').addClass('has-error');
    } else if (questionFive.val() === undefined) {
      $('input[name="question-five"]').parents('.form-group').addClass('has-error');
    } else if (questionSix.val() === undefined) {
      $('input[name="question-six"]').parents('.form-group').addClass('has-error');
    } else {
      $('.has-error').removeClass('has-error');
    }

      //create error at top of page saying to fill out all questions
      //remove has-error/messaging from each question filled out after submit is clicked again

    //call business logic

    //display results
      //hide form
      //show appropriate track w/ description
  });
});
