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
    //block submission

    //gather form values

    //form validate (bind?)
      //add has-error and messaging to divs missing a value
      //create error at top of page saying to fill out all questions
      //remove has-error/messaging from each question filled out after submit is clicked again

    //call business logic

    //display results
      //hide form
      //show appropriate track w/ description
  });
});
