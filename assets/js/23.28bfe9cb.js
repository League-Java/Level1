(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{294:function(e,t,a){e.exports=a.p+"assets/img/spinningRecord.a396c877.png"},315:function(e,t,a){"use strict";a.r(t);var i=a(14),r=Object(i.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"_01-methods"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_01-methods"}},[e._v("#")]),e._v(" 01 Methods")]),e._v(" "),t("h2",{attrs:{id:"houses"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#houses"}},[e._v("#")]),e._v(" Houses")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/League-Java/Level1-Module0/tree/master/src/_01_methods/_1_houses/",target:"_blank"}},[t("img",{staticStyle:{width:"20px","vertical-align":"middle"},attrs:{src:e.$withBase("/assets/github-mark.png"),alt:"View Source"}}),e._v(" View Source")])]),e._v(" "),t("ol",[t("li",[t("p",[e._v("Have a robot start on the left side of the window near the bottom.")])]),e._v(" "),t("li",[t("p",[e._v("Draw a flat-topped house of height 100 with grass after it (see picture).")])]),e._v(" "),t("li",[t("p",[e._v("Extract the piece of code that draws the house into a method. Draw 10 houses.")])]),e._v(" "),t("li",[t("p",[e._v("Change the method to take (int height) as a parameter. Draw 9 houses of different heights")])]),e._v(" "),t("li",[t("p",[e._v("Make the method take a String instead of an int.")])]),e._v(" "),t("li",[t("p",[e._v("Make the method take a color as well as a height. The houses are drawn in that color.")])])]),e._v(" "),t("p",[e._v("[optional] Set the scene to night by setting the background to black")]),e._v(" "),t("ol",{attrs:{start:"7"}},[t("li",[t("p",[e._v("Give the houses peaked roofs")])]),e._v(" "),t("li",[t("p",[e._v("Extract that roof code into a method “drawPointyRoof” and create a new method: “drawFlatRoof”.")])]),e._v(" "),t("li",[t("p",[e._v("Make large houses have flat roofs")])])]),e._v(" "),t("h2",{attrs:{id:"spinning-record"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#spinning-record"}},[e._v("#")]),e._v(" Spinning Record")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/League-Java/Level1-Module0/tree/master/src/_01_methods/_2_spinning_record/",target:"_blank"}},[t("img",{staticStyle:{width:"20px","vertical-align":"middle"},attrs:{src:e.$withBase("/assets/github-mark.png"),alt:"View Source"}}),e._v(" View Source")])]),e._v(" "),t("img",{staticStyle:{width:"200.00px",height:"207.00px",margin:"0px 20px"},attrs:{align:"left",alt:"",src:a(294),title:""}}),e._v("\nWe are going to make a virtual record player that spins and plays your song when you click on it.\n1. Use the given record.png image or find your own image of a record.\n"),t("p",[e._v("i) If using your own image, copy the file onto the /images folder.\nii) Load the image into your code using the code below:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('\tPImage pictureOfRecord;                        //as member variable\n        size(600,600);                                 //in setup method\n        pictureOfRecord= loadImage("record.png");      //in setup method\n        image(pictureOfRecord, xPosition, yPosition);  //in draw method\n')])])]),t("ol",{attrs:{start:"2"}},[t("li",[e._v("Set the size of your image to match the size of your canvas (after you have loaded it).")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("        pictureOfRecord.resize(height,width);     //in setup method\n")])])]),t("ol",{attrs:{start:"3"}},[t("li",[e._v("Use this method to rotate your image. Make sure you use the image() command after you call rotateImage().")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("   void rotateImage(PImage image, int amountToRotate) {\n        translate(width/2, height/2);\n        rotate(amountToRotate*TWO_PI/360);\n        translate(-image.width/2, -image.height/2);\n    }\n")])])]),t("ol",{attrs:{start:"5"}},[t("li",[e._v("Adjust the speed of the record player. Make the record spin.\ni) Make a variable to keep track of the image angle.\nii) Increase this variable in the draw method.\niii) Use this variable when you call the rotateImage() method.")]),e._v(" "),t("li",[e._v("Only spin the record when the user clicks the mouse button. Hint: use mousePressed")]),e._v(" "),t("li",[e._v("Add a song.  Use the sound file already in the project, awesomeTrack.mp3, or add a different one.")]),e._v(" "),t("li",[e._v("Only play the song when the mouse is pressed. Hint: use the method below.")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("\n    song.play()\n")])])]),t("ol",{attrs:{start:"9"}},[t("li",[e._v("Make the record spin as fast as possible")])]),e._v(" "),t("h2",{attrs:{id:"rain-game"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rain-game"}},[e._v("#")]),e._v(" Rain Game")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/League-Java/Level1-Module0/tree/master/src/_01_methods/_3_rain_game/",target:"_blank"}},[t("img",{staticStyle:{width:"20px","vertical-align":"middle"},attrs:{src:e.$withBase("/assets/github-mark.png"),alt:"View Source"}}),e._v(" View Source")])]),e._v(" "),t("ol",[t("li",[t("p",[e._v("Start a new sketch with draw, setup, and settings methods.")])]),e._v(" "),t("li",[t("p",[e._v("Set your canvas size in the settings() method")])])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("    size(width, height)\n")])])]),t("p",[e._v("and your background color in the draw method")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("    background(red, green, blue)\n")])])]),t("ol",{attrs:{start:"3"}},[t("li",[e._v("Draw a raindrop at the top of the screen in the draw() method.")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("\n    fill(red, green, blue);\n    stroke(red, green, blue);\n    ellipse(x, y, width, height);\n")])])]),t("ol",{attrs:{start:"4"}},[t("li",[e._v("Make the rain fall down the screen.\nHint: make a variable for the raindrop's Y position and change it in the draw method.")]),e._v(" "),t("li",[e._v("When the rain falls off the bottom of the canvas, start a new rain drop falling from the top.")]),e._v(" "),t("li",[e._v("Make the rain start at a random position (X position) at the top. This code will give you a random number between 0 and the width of your sketch.")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("      int randomNumber = (int) random(width);\n")])])]),t("ol",{attrs:{start:"7"}},[t("li",[e._v("Draw a bucket at the bottom of the screen.")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("        rect(int x, int y, int width, int height);\n")])])]),t("ol",{attrs:{start:"8"}},[t("li",[e._v("Make the bucket move over and back with the mouse. Hint: mouseX")]),e._v(" "),t("li",[e._v("Add an int variable to hold the score (above the setup method). If the rain falls in the bucket increase the score by 1. If it doesn’t, decrease the score by 1, but don’t let the score go negative. Figure it out by yourself or use this method…")])]),e._v(" "),t("p",[e._v('void checkCatch(int x){\nif (x > mouseX && x < mouseX+100)\nscore++;\nelse if (score > 0)\nscore--;\nprintln("Your score is now: " + score);\n}')]),e._v(" "),t("ol",{attrs:{start:"10"}},[t("li",[e._v("Print the score on the screen.")])]),e._v(" "),t("p",[e._v('fill(0, 0, 0);\ntextSize(16);\ntext("Score: " + score, 20, 20);')]),e._v(" "),t("h2",{attrs:{id:"magic-worms"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#magic-worms"}},[e._v("#")]),e._v(" Magic Worms")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/League-Java/Level1-Module0/tree/master/src/_01_methods/_4_magic_worms/",target:"_blank"}},[t("img",{staticStyle:{width:"20px","vertical-align":"middle"},attrs:{src:e.$withBase("/assets/github-mark.png"),alt:"View Source"}}),e._v(" View Source")])]),e._v(" "),t("ol",[t("li",[t("p",[e._v("Start a new sketch with draw, setup, and settings methods.")])]),e._v(" "),t("li",[t("p",[e._v("Set your canvas size and background color in the settings() method")])])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("    size(width, height\n    background(red, green, blue)\n")])])]),t("ol",{attrs:{start:"3"}},[t("li",[e._v("In your draw method, use a for loop to draw 300 ellipses in a diagonal line across the canvas.\nRUN THE PROGRAM TO CHECK IT.")]),e._v(" "),t("li",[e._v('Now change the x and y location of each ellipse to "different" random numbers that are inside the canvas. Note: random() returns values that are type float so your x and y variable types should also be float.\nRUN THE PROGRAM TO CHECK IT.')])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("   random(int maxValue)\n")])])]),t("ol",{attrs:{start:"5"}},[t("li",[e._v("Set the color of each ellipse.\nRUN THE PROGRAM TO CHECK IT.")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("    fill(red, green, blue)\n")])])]),t("ol",{attrs:{start:"6"}},[t("li",[e._v("If this code isn't already in your file, paste this code at the bottom.")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("    float frequency = .001;\n    float noiseInterval = PI;\n\n    void makeMagical() {\n        fill( 0, 0, 0, 10 );\n        rect(0, 0, width, height);\n        noStroke();\n    }\n\n    float getWormX(int i) {\n        return map(noise(i*noiseInterval + frameCount * frequency), 0, 1, 0, width);\n    }\n\n    float getWormY(int i) {\n        return map(noise(i*noiseInterval+1 + frameCount * frequency), 0, 1, 0, height);\n    }\n")])])]),t("ol",{attrs:{start:"7"}},[t("li",[e._v("Now change the x and y location of each ellipse to the value returned by the getWormX() and getWormY() methods (use the for loop variable as the parameter to these methods).\nRUN THE PROGRAM TO CHECK IT.")]),e._v(" "),t("li",[e._v('Call makeMagical() in your draw method before the for loop.  OPTIONS: Pass in frameCount or another variable for the ellipse "red value", and i as the "green value" for some extra color coolness.\nRUN THE PROGRAM TO CHECK IT.')]),e._v(" "),t("li",[e._v("You can adjust the frequency and noiseInterval variables to your liking. Also play with the number and size of particles (ellipses) until it looks amazing.")]),e._v(" "),t("li",[e._v("[Optional] Add another worm every time the user clicks the mouse.")])]),e._v(" "),t("h2",{attrs:{id:"flappy-bird"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#flappy-bird"}},[e._v("#")]),e._v(" Flappy Bird")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/League-Java/Level1-Module0/tree/master/src/_01_methods/_5_FlappyBird/",target:"_blank"}},[t("img",{staticStyle:{width:"20px","vertical-align":"middle"},attrs:{src:e.$withBase("/assets/github-mark.png"),alt:"View Source"}}),e._v(" View Source")])]),e._v(" "),t("ol",[t("li",[t("p",[e._v("Start a new sketch with draw and setup methods.")])]),e._v(" "),t("li",[t("p",[e._v("Set your canvas size in the setup method\nsize(width, height)")])]),e._v(" "),t("li",[t("p",[e._v("In your draw method, set a background, and draw a ball (bird) on the screen.")])])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("background(red, green, blue);\nfill(red, green, blue);\nstroke(red, green, blue);\nellipse(x, y, width, height);\n")])])]),t("ol",{attrs:{start:"4"}},[t("li",[e._v("Make the bird fall down\nHint: make variables for the bird's X and Y position and use them for the ellipse in the draw method.")]),e._v(" "),t("li",[e._v("Add velocity to the bird.\nHint: make a variable for the velocity of the bird in the Y direction (up). Changing its value should change the velocity of your bird.\nint birdYVelocity = -10;")]),e._v(" "),t("li",[e._v("Give the bird gravity.\nHint: make a variable for the gravity pulling the bird down. Gravity should continually increase the value of birdYVelocity.\nint gravity = 1;")]),e._v(" "),t("li",[e._v("Make the bird jump (flap) when the mouse is clicked.\nHint: construct a mousePressed() method the same way setup() and draw() were made.\nIn this method, reset the bird’s velocity to make the bird rise.")]),e._v(" "),t("li",[e._v("Draw a pipe coming down from the top of the sketch.")])]),e._v(" "),t("p",[e._v("In the draw() method:\nfill(red, green, blue);\nrect(x, y, width, height);\n9. Make the pipe move from right to left.")]),e._v(" "),t("p",[e._v("Hint: make a variable for the pipe X position and change it in the draw method.\n10. Make the pipe teleport back to the right side of the screen once it has passed through the left. This will simulate the repeating pipes coming from the right of the screen.\nTip: Put this code into a teleportPipes() method and you can also call it from the setup() method to create the first pipes.\n11. Set the upper pipe's height to a new random number each time it teleports\nint upperPipeHeight = (int) random(100, 400);\n12. Create a variable, pipeGap, to represent the gap between the pipes. Make sure the gap is big enough for the ball to go through. The gap between the pipes will not change.\n13. Make a second pipe that will go down to the bottom of the sketch, leaving a space between the two pipes that is the size of the gap (see step 12). Make sure both pipes use the same value for their x position. Set the lower pipe y value by adding the upper pipe height and pipe gap. Ex:\nlowerY = upperPipeHeight + pipeGap;\n14. Make the game end when the bird hits the pipe. Figure it out by yourself, or use this method:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("boolean intersectsPipes() { \n         if (birdY < upperPipeHeight && birdX > pipeX && birdX < (pipeX+pipeWidth)){\n            return true; }\n        else if (birdY>lowerPipeTop && birdX > pipeX && birdX < (pipeX+pipeWidth)) {\n            return true; }\n        else { return false; }\n}\n")])])]),t("ol",{attrs:{start:"15"}},[t("li",[e._v("End the game when the bird hits the ground.\nMake a rectangle for the ground.\nUse a boolean variable at the top of the sketch to indicate if game has ended.")]),e._v(" "),t("li",[e._v("Create a score and make it increase each time the bird passes through a pipe.\ntext(text, xPosition, yPosition);")]),e._v(" "),t("li",[e._v("OPTIONAL.   Use images for the background, pipes and bird (see image at top). You can find your own images, or those provided in the Module 3 Java project. See below for code snippets to load and draw images.")])]),e._v(" "),t("p",[e._v('PImage back;\nPImage pipeBottom;\nPImage pipeTop;\nPImage bird;\nvoid setup() {\nback = loadImage("flappyBackground.jpg");\npipeBottom = loadImage("bottomPipe.png");\npipeTop = loadImage("topPipe.png");\nbird = loadImage("bird.png");\nbird.resize(50,50);\n}\nvoid draw() {\nbackground(back);\nimage (pipeBottom,250,375);\nimage (pipeTop,250,-130);\nimage (bird, 250, 300);\n}')])])}),[],!1,null,null,null);t.default=r.exports}}]);