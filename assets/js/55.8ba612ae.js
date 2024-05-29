(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{342:function(e,t,a){"use strict";a.r(t);var o=a(14),r=Object(o.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"frogger"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#frogger"}},[e._v("#")]),e._v(" Frogger")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/League-Java/Level1-Module3/tree/master/src/_06_frogger/",target:"_blank"}},[t("img",{staticStyle:{width:"20px","vertical-align":"middle"},attrs:{src:e.$withBase("/assets/github-mark.png"),alt:"View Source"}}),e._v(" View Source")])]),e._v(" "),t("ol",[t("li",[t("p",[e._v("Start a new sketch with draw, setup, and settings methods. Ask your teacher if you do not know how to do this.")])]),e._v(" "),t("li",[t("p",[e._v("In the settings method, set your canvas of size 800x600 for your game\nsize(width, height);\nIn the draw method, set the background color of your sketch\nbackground(red,green,blue);")])]),e._v(" "),t("li",[t("p",[e._v("In the draw method, draw a frog on the bottom of the canvas. (It can be a ball for now)\nfill(red, green, blue);\nellipse(x, y, width, height);")])]),e._v(" "),t("li",[t("p",[e._v("Make member variables to keep track of your frog’s hop distance, x and y position")])]),e._v(" "),t("li",[t("p",[e._v("Add code to the method below (match the code to the comments) to give our frog movement.")])])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("void keyPressed()\n{\n    if(key == CODED){\n        if(keyCode == UP)\n        {\n            //Frog Y position goes up\n        }\n        else if(keyCode == DOWN)\n        {\n            //Frog Y position goes down \n        }\n        else if(keyCode == RIGHT)\n        {\n            //Frog X position goes right\n        }\n        else if(keyCode == LEFT)\n        {\n            //Frog X position goes left\n        }\n    }\n}\n")])])]),t("ol",{attrs:{start:"6"}},[t("li",[e._v("Write a method to keep our frog from going outside of the canvas")]),e._v(" "),t("li",[e._v("Create a new Car class in Eclipse. Your Car class will include the car’s x position, y position, the size of the car, and the speed of the car.")]),e._v(" "),t("li",[e._v("Create a constructor for your Car class that initializes each member variable with parameters.")]),e._v(" "),t("li",[e._v("Copy this functionality into your Car class to display your car")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("void display()\n  {\n    fill(0,255,0);\n    rect(x , y,  size, 50);\n  }\n")])])]),t("ol",{attrs:{start:"10"}},[t("li",[e._v("Declare several Car member variables inside your class and initialize them in the setup method.")]),e._v(" "),t("li",[e._v("Call the display() method from your draw method for each car. You should see your cars appear.")]),e._v(" "),t("li",[e._v("Inside your Car class write a method for the car to move to the left with its speed.")]),e._v(" "),t("li",[e._v("Inside your Car class write a method for the car to move to the left with its speed. In the same method, if the car goes off the canvas, have it return to the rightmost position of your canvas.  (hint: use Processing's width variable)")]),e._v(" "),t("li",[e._v("Write another method for the car to move to the right with its speed. In the same method,  if the car goes off the canvas, have it return to the leftmost position of your canvas")]),e._v(" "),t("li",[e._v("In the draw() method, alternate the driving direction of each of your cars to either go left or right. Use the display() method after every drive method.")]),e._v(" "),t("li",[e._v("Create getX(), getY(), and getSize() methods in your Car class.")]),e._v(" "),t("li",[e._v("Check when a car hits your frog. You can use the following intersection method to help.")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("boolean intersects(Car car) {\n if ((frogY > car.getY() && frogY < car.getY()+50) &&\n                (frogX > car.getX() && frogX < car.getX()+car.getSize())) {\n   return true;\n  }\n else  {\n  return false;\n }\n")])])]),t("ol",{attrs:{start:"18"}},[t("li",[e._v("Call the intersects method for one of your cars in your draw method.  If the intersects method returns true, return your frog to the starting point.")]),e._v(" "),t("li",[e._v("Repeat step 18 for all of your cars.")]),e._v(" "),t("li",[e._v("OPTIONAL.   Use images for the background, cars and frog (see image at top). You can find your own images, or those provided in the Module 3 Java project. See below for code snippets to load and draw images.")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('\n PImage back;\n PImage carLeft;\n PImage carRight;\n PImage frog;\n    void settings(){\n        size(844,600);\n    }\n    void setup() {\n        back = loadImage("froggerBackground.png");\n        carLeft = loadImage("carLeft.png");\n        carLeft.resize(160,100);\n        carRight = loadImage("carRight.png");\n        carRight.resize(160,100);\n        frog = loadImage("frog.png");\n        frog.resize(75,75);\n    }\n    void draw() {\n        background(back);\n        image (carLeft,250,360);\n        image (carRight,250, 210);\n        image (frog, 300, 530);\n    }\n')])])])])}),[],!1,null,null,null);t.default=r.exports}}]);