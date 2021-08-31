'use strict'

function DomElement(text, selector, height, width, bg, fontSize) {
  let element;
  this.text = text;
  this.selector = selector;
  this.height = height; 
  this.width = width;
  this.bg = bg; 
  this.fontSize = fontSize;
}

DomElement.prototype.createElement = function(){
  if (this.selector.slice(0,1) === '.') {
    this.element = document.createElement('div');
    this.element.classList.add(this.selector.slice(1));
  } else if (this.selector.slice(0,1) === '#') {
    this.element = document.createElement('p');
    this.element.setAttribute('id', this.selector.slice(1));
  }
  this.setHeight(this.height);
  this.setWidth(this.width);
  this.setBg(this.bg);
  this.setFontSize(this.fontSize);
  this.element.innerHTML = this.text;
  document.body.append(this.element);
};

DomElement.prototype.setHeight = function(height){
  this.element.style.height = height;
};

DomElement.prototype.setWidth = function(width){
  this.element.style.width = width;
};

DomElement.prototype.setBg = function(bg){
  this.element.style.background = bg;
};

DomElement.prototype.setFontSize = function(fontSize){
  this.element.style.fontSize = fontSize;
};

const fogottenVillage = new DomElement('У бурмистра Власа бабушка Ненила <br> Починить избенку лесу попросила.<br> Отвечал: «Нет лесу, и не жди — не будет!»<br> — «Вот приедет барин — барин нас рассудит,<br> Барин сам увидит, что плоха избушка,<br> И велит дать лесу», — думает старушка.', '#poem', 'fit-content', 'fit-content', 'green', '18px');

fogottenVillage.createElement();

fogottenVillage.setBg('red');