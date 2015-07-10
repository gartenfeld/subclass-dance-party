// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps){

  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps
  this.top = top;
  this.left = left;
  this.setPosition(top, left);
  this.step();
  this.lineUpMode = false;
  this.index = Dancer.dancerCount;
  Dancer.dancerCount++;
  Dancer.visibles++;
};

Dancer.prototype.step = function(){
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

Dancer.dancers = {};
Dancer.dancerCount = 0;
Dancer.visibles = 0;

Dancer.prototype.setPosition = function(top, left){
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};


Dancer.prototype.lineUp = function () {
  for (var key in Dancer.dancers) {
    Dancer.dancers[key].top = 400;
    //Dancer.dancers[key].left = key * (window.innerWidth / Dancer.visibles);
    Dancer.dancers[key].setPosition(Dancer.dancers[key].top, Dancer.dancers[key].left);
    Dancer.dancers[key].lineUpMode = true;
  };
}

Dancer.prototype.dismiss = function () {
  for (var key in Dancer.dancers) {
    Dancer.dancers[key].lineUpMode = false;
  };
}