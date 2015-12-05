var timer, stopTimer,
    result = document.getElementById('result'),
    sec    = document.getElementById('sec'),
    start  = document.getElementById('start'),
    stop   = document.getElementById('stop'),
    plus   = document.getElementById('plus'),
    minus  = document.getElementById('minus'),
    speedElement= document.getElementById('speed'),
    n      = +result.innerHTML;


function getLocation(id, cb) {

        var location = document.getElementById(id);

        if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function(position){

                cb({
                  latitude : position.coords.latitude,
                  longitude : position.coords.longitude,
                  time : Date.now()
                });

                });
        } 
        else { 
                location.innerHTML = "Geolocation is not supported by this browser.";
        }
    };
  
// events
start.addEventListener('click', function() {

  getLocation("demo1", function(coords){
    startLocation = coords;
    startTimer(n);
  });

  
}, false);

stop.addEventListener('click', function() {
  

  getLocation("demo2", function(coords){
          var endLocation = coords;
          
          var speed = geolib.getSpeed(startLocation, endLocation);
          var demo1 = document.getElementById("demo1");
          demo1.innerHTML = speed + "km/h";
          
          speedElement.value = speed;

          stopTimer();        

        });

}, false);

plus.addEventListener('click', function() {
  result.innerHTML = ++n;
}, false);

minus.addEventListener('click', function() {
  result.innerHTML = --n;
}, false);

// functions
function startTimer(n) {
  var i = n-1; // fix 1 sec start delay
  document.getElementById('pm').style.display = 'none'; // hide arrows

  timer = setInterval( function() {
    result.innerHTML = i--;
     
     stopTimer = function() {
       clearInterval(timer);
       result.innerHTML = i + 1;
     }
    
     if (i < 5) {
      result.style.color = '#ED3E42';
      sec.style.color = '#ED3E42';
    } // hurry up!
    
    if (i < 0) { stopTimer(); } // finish
    
    function updateProgress() {
      var canvas = document.getElementById('progress');
      var context = canvas.getContext('2d');
      var centerX = canvas.width / 2;
      var centerY = canvas.height / 2;
      var radius = 80;
      var circ = Math.PI * 2; // 360deg
      var percent = i / n; // i%
      context.beginPath();
      context.arc(centerX, centerY, radius, ((circ) * percent), circ, false);
      context.lineWidth = 10;
      if (i < 5) {
        context.strokeStyle = '#ED3E42';
      } else {
        context.strokeStyle = '#00CE9B';
      }
      context.stroke();
    } // progress
    
    updateProgress();
    
  }, 1000); // every sec

}




var location1 = document.getElementById("demo1");
    
                

    var startButton = document.getElementById("start");
    var stopButton = document.getElementById("stop");
    
    var startLocation;

    startButton.addEventListener('click', function(){
        
    });

    stopButton.addEventListener('click', function(){
        
    });