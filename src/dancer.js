var Dancer = function(top, left, timeBetweenSteps){
  this.$node = $('<span class="dancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps
  this.top = top;
  this.left = left;
  this.lineUpMode = false;
  this.index = window.dancerCount;
  this.setPosition(top, left);
  this.step();
};

Dancer.prototype.step = function(){
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left){
  var styleSettings = { top: top, left: left };
  this.$node.css(styleSettings);
};

Dancer.prototype.lineUp = function () {
  for (var key in window.dancers) {
    window.dancers[key].top = 0.5 * window.innerHeight;
    window.dancers[key].left = key * (window.innerWidth / window.dancerCount);
    window.dancers[key].setPosition(window.dancers[key].top, window.dancers[key].left);
    window.dancers[key].lineUpMode = true;
  }
}

Dancer.prototype.dismiss = function () {
  for (var key in window.dancers) {
    window.dancers[key].lineUpMode = false;
  }
}