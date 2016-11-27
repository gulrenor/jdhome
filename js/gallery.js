$(document).ready(function() {
  // Default category is the first one
  var category = $('.tag:first-child').attr('id');

  function shuffle() {
    // Shuffle array to mix up display
    var arrImages = ['001', '002', '003', '004', '005', '006', '007', '008', '009'];

    /*
    // Randomize array
    .arrImages.sort(function() {
      return 0.5 - Math.random();
    })
    */
    return arrImages;
  };
  activeCategory(category);

  function activeCategory(category) {
    // Clear previous display
    //$('#gallery').empty();

    // Hide all gallery-section
    //$('.gallery-section').css('display', 'none');


    // Current tag selection highlighting
    $('.tag').removeClass('active');
    $('#' + category).addClass('active');
    //displayImages(category);

    /*
    var arrImages = shuffle(category);
        $.each(arrImages, function(i, image) {
          var imagePath = '<img src="images/' + category + '/' + category + '_' + image + '.jpg" />';
          $('#gallery').append('<li class="gallery-item">' + imagePath + '</li>');
        });
    */
    $('#' + category + ' .gallery-section ul').css('display', 'block');
  };

  $('.tag').click(function() {
    var category = this.id;
    console.log('clicked ' + category);
    activeCategory(category);
  });

  // ### The Modal ###

  // Has to use event delegation to handle click events from
  // future DOM elements
  $('.gallery').on('click', '.gallery-item img', function() {
    $('body').addClass('modal-open');
    $('.modal-overlay').css('display', 'table');

    var thisImage = $(this).attr('src');
    $('.modal-overlay').html('<div><img src="' + thisImage + '" /></div>');

    // Optional button
    //$('.modal-overlay').append('<button id="modal-close">Close</button>');
  });

  // Close the modal by clicking on it
  $('.modal-overlay').click(function() {
    $('.modal-overlay').empty();
    $('body').removeClass('modal-open');
    $('.modal-overlay').css('display', 'none');
  });

});
