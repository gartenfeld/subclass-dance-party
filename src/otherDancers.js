var EksDancer = function(top, left, timeBetweenSteps){
  Dancer.apply(this, arguments);
  this.$node.addClass('Eks');
  this.timeBetweenSteps = 200;
  this.borderSize = 10;
  this.isGrowing = true;
  this.color = 'hsl(' + (Math.random()*360) + ', 100%, 50%)';
};
  
EksDancer.prototype = Object.create(Dancer.prototype);
EksDancer.prototype.constructor = EksDancer;

EksDancer.prototype.step = function(){
  Dancer.prototype.step.apply(this, arguments);
  this.morph();
};

EksDancer.prototype.morph = function() {
  
  if (this.isGrowing) {
    this.borderSize += 10;
    if (this.borderSize > 50) {
      this.isGrowing = false;
    };
  } else {
    this.borderSize -= 10;
    if (this.borderSize <= 10) {
      this.isGrowing = true;
    };
  }
  var styleSettings = {
    border: (this.borderSize) +'px solid ' + this.color,
    borderRadius: this.borderSize,
    paddingTop: '-' + this.borderSize,
    paddingLeft: '-' + this.borderSize
  };
  this.$node.css(styleSettings);
}







var WhyDancer = function(top, left, timeBetweenSteps){
  Dancer.apply(this, arguments);
  this.$node.addClass('Why');
  this.timeBetweenSteps = 1000;

};
  
WhyDancer.prototype = Object.create(Dancer.prototype);
WhyDancer.prototype.constructor = WhyDancer;

WhyDancer.prototype.step = function(){
  var allDancers = Dancer.dancers;
  Dancer.prototype.step.apply(this, arguments);
  var a;
  var b;
  var c;
  for (var key in allDancers) {
    a = allDancers[key].top - this.top;
    b = allDancers[key].left - this.left;
    c = (a * a) + (b * b);
    if (c < 4000 && c > 10) {
      allDancers[key].$node.remove();
      this.$node.remove();
      delete allDancers[key];
      delete allDancers[this.index];
      Dancer.visibles -= 2;
    }
  };
  if (!this.lineUpMode) {
    this.top += (Math.random() - 0.5) * 100;
    this.left += (Math.random() - 0.5) * 100;
    this.setPosition(this.top, this.left);
  }
  //this.$node.toggle();
};