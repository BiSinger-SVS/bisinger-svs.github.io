window.HELP_IMPROVE_VIDEOJS = false;

var INTERP_BASE = "./static/interpolation/stacked";
var NUM_INTERP_FRAMES = 240;

var interp_images = [];
function preloadInterpolationImages() {
  for (var i = 0; i < NUM_INTERP_FRAMES; i++) {
    var path = INTERP_BASE + '/' + String(i).padStart(6, '0') + '.jpg';
    interp_images[i] = new Image();
    interp_images[i].src = path;
  }
}

function setInterpolationImage(i) {
  var image = interp_images[i];
  image.ondragstart = function() { return false; };
  image.oncontextmenu = function() { return false; };
  $('#interpolation-image-wrapper').empty().append(image);
}


$(document).ready(function() {
    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function() {
      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");

    });

    var options = {
			slidesToScroll: 1,
			slidesToShow: 3,
			loop: true,
			infinite: true,
			autoplay: false,
			autoplaySpeed: 3000,
    }

		// Initialize all div with carousel class
    var carousels = bulmaCarousel.attach('.carousel', options);

    // Loop on each carousel initialized
    for(var i = 0; i < carousels.length; i++) {
    	// Add listener to  event
    	carousels[i].on('before:show', state => {
    		console.log(state);
    	});
    }

    // Access to bulmaCarousel instance of an element
    var element = document.querySelector('#my-element');
    if (element && element.bulmaCarousel) {
    	// bulmaCarousel instance is available as element.bulmaCarousel
    	element.bulmaCarousel.on('before-show', function(state) {
    		console.log(state);
    	});
    }

    /*var player = document.getElementById('interpolation-video');
    player.addEventListener('loadedmetadata', function() {
      $('#interpolation-slider').on('input', function(event) {
        console.log(this.value, player.duration);
        player.currentTime = player.duration / 100 * this.value;
      })
    }, false);*/
    preloadInterpolationImages();

    $('#interpolation-slider').on('input', function(event) {
      setInterpolationImage(this.value);
    });
    setInterpolationImage(0);
    $('#interpolation-slider').prop('max', NUM_INTERP_FRAMES - 1);

    bulmaSlider.attach();

})

var isCNSamplesVisible = false; // Tracks if samples are currently visible

function toggleSamples() {
    // Get all elements with class 'more-samples'
    var samples = document.getElementsByClassName('more-samples');
    
    // If samples are currently visible, hide them
    if (isCNSamplesVisible) {
        for (var i = 0; i < samples.length; i++) {
            samples[i].style.display = 'none';
        }
        document.getElementsByClassName('toggle-samples-button')[0].innerHTML = '<i class="fas fa-plus fa-fw"></i>More Samples';
        isCNSamplesVisible = false;
    } 
    // If samples are currently hidden, show them
    else {
        for (var i = 0; i < samples.length; i++) {
            samples[i].style.display = 'block';
        }
        document.getElementsByClassName('toggle-samples-button')[0].innerHTML = '<i class="fas fa-chevron-up fa-fw"></i>Hide Samples';
        isCNSamplesVisible = true;
    }
}

var isENSamplesVisible = false; // Tracks if samples are currently visible

function toggleENSamples() {
    // Get all elements with class 'more-ensamples'
    var samples = document.getElementsByClassName('more-ensamples');
    
    // If samples are currently visible, hide them
    if (isENSamplesVisible) {
        for (var i = 0; i < samples.length; i++) {
            samples[i].style.display = 'none';
        }
        document.getElementsByClassName('toggle-ensamples-button')[0].innerHTML = '<i class="fas fa-plus fa-fw"></i>More Samples';
        isENSamplesVisible = false;
    } 
    // If samples are currently hidden, show them
    else {
        for (var i = 0; i < samples.length; i++) {
            samples[i].style.display = 'block';
        }
        document.getElementsByClassName('toggle-ensamples-button')[0].innerHTML = '<i class="fas fa-chevron-up fa-fw"></i>Hide Samples';
        isENSamplesVisible = true;
    }
}
var isENSamplesVisible = false; // Tracks if samples are currently visible

function toggleMIXSamples() {
  // Get all elements with class 'more-mixsamples'
  var samples = document.getElementsByClassName('more-ensamples');

  // If samples are currently visible, hide them
  if (isMIXSamplesVisible) {
    for (var i = 0; i < samples.length; i++) {
        samples[i].style.display = 'none';
    }
    document.getElementsByClassName('toggle-ensamples-button')[0].innerHTML = '<i class="fas fa-plus fa-fw"></i>More Samples';
    isMIXSamplesVisible = false;
} 
// If samples are currently hidden, show them
else {
    for (var i = 0; i < samples.length; i++) {
        samples[i].style.display = 'block';
    }
    document.getElementsByClassName('toggle-ensamples-button')[0].innerHTML = '<i class="fas fa-chevron-up fa-fw"></i>Hide Samples';
    isMIXSamplesVisible = true;
}
}

var isMIXSamplesVisible = false; // Tracks if samples are currently visible

function toggleMIXSamples() {
  // Get all elements with class 'more-mixsamples'
  var samples = document.getElementsByClassName('more-mixsamples');

  // If samples are currently visible, hide them
  if (isMIXSamplesVisible) {
    for (var i = 0; i < samples.length; i++) {
        samples[i].style.display = 'none';
    }
    document.getElementsByClassName('toggle-mixsamples-button')[0].innerHTML = '<i class="fas fa-plus fa-fw"></i>More Samples';
    isMIXSamplesVisible = false;
} 
// If samples are currently hidden, show them
else {
    for (var i = 0; i < samples.length; i++) {
        samples[i].style.display = 'block';
    }
    document.getElementsByClassName('toggle-mixsamples-button')[0].innerHTML = '<i class="fas fa-chevron-up fa-fw"></i>Hide Samples';
    isMIXSamplesVisible = true;
}
}