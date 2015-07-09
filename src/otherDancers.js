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

};
  
WhyDancer.prototype = Object.create(Dancer.prototype);
WhyDancer.prototype.constructor = WhyDancer;

WhyDancer.prototype.step = function(){
  Dancer.prototype.step.apply(this, arguments);
  if (!this.lineUpMode) {
    this.top += 20;
    this.left += 20;
    this.setPosition(this.top, this.left);
  }
  //this.$node.toggle();
};