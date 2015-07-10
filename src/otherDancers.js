var EksDancer = function(top, left, timeBetweenSteps){
  Dancer.apply(this, arguments);
  this.$node.addClass('Eks');
  this.timeBetweenSteps = 200;
  this.size = 10
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
    this.size += 10;
    if (this.size > 50) {
      this.isGrowing = false;
    };
  } else {
    this.size -= 10;
    if (this.size <= 10) {
      this.isGrowing = true;
    };
  }
  var styleSettings = {
    backgroundColor: this.color,
    borderRadius: this.size,
    //top: this.top - (0.5 * this.size),
    //left: this.left - (0.5 * this.size),
    width: this.size,
    height: this.size
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

  if (!this.lineUpMode) {
    this.top += (Math.random() - 0.5) * 100;
    this.left += (Math.random() - 0.5) * 100;
    this.setPosition(this.top, this.left);
  }

};