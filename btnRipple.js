document.addEventListener('DOMContentLoaded', function(){
  let rippleClick = document.querySelectorAll('.ripple');
  let rippleMousemove = document.querySelectorAll('.ripple-mousemove');
  var hover = true;

  function createRipple(btn, e, color) {
    let maskDiv = document.createElement('div');
    let x = e.clientX  - btn.offsetLeft;
    let y = e.clientY - btn.offsetTop;
    maskDiv.classList.add('mask');
    maskDiv.style.top = y + 'px';
    maskDiv.style.left = x + 'px';
    if(color) maskDiv.style.background = color;
    btn.appendChild(maskDiv);
    setTimeout(() => {maskDiv.remove();}, 1000);
  }

  if (rippleClick) {
    for(x of rippleClick) {
      x.addEventListener('click', function(event){
        createRipple(this, event, this.getAttribute('ripple-color'));
      });
    }
  }

  if (rippleMousemove) {
    for(x of rippleMousemove) {
      x.addEventListener("mousemove",function(event){
        if(hover){
          hover = false;
          createRipple(this, event,  this.getAttribute('ripple-color'));
          setTimeout(() => {hover=true},100);
        }
      });
    }
  }                         
});