(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{301:function(e,t,a){e.exports=a.p+"assets/img/typing.4e9d8f47.jpg"},346:function(e,t,a){"use strict";a.r(t);var r=a(14),n=Object(r.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"typing-tutor"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#typing-tutor"}},[e._v("#")]),e._v(" Typing Tutor")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/League-Java/Level1-Module4/tree/master/src/_03_typing_tutor/",target:"_blank"}},[t("img",{staticStyle:{width:"20px","vertical-align":"middle"},attrs:{src:e.$withBase("/assets/github-mark.png"),alt:"View Source"}}),e._v(" View Source")])]),e._v(" "),t("p",[e._v("We are going to make a Typing Tutor.\n"),t("img",{staticStyle:{width:"444.00px",height:"163.00px","margin-left":"100.00px","margin-top":"0.00px",transform:"rotate(0.00rad) translateZ(0px)","-webkit-transform":"rotate(0.00rad) translateZ(0px)"},attrs:{alt:"",src:a(301),title:""}})]),e._v(" "),t("ol",[t("li",[e._v("Make a TypingTutor class with a setup() method and a Runner class with a main method. Create a JFrame, JPanel, and currentLetter as member variables\nMake sure the JFrame is visible and set the default close operation.")])]),e._v(" "),t("p",[e._v("JFrame frame = new JFrame();\nJPanel panel = new JPanel();\nchar currentLetter;")]),e._v(" "),t("p",[e._v("void setup(){\nframe.setVisible(true);\nframe.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);\n}\n2. Paste the following method after the main method.\nchar generateRandomLetter() {\nRandom r = new Random();\nreturn (char) (r.nextInt(26) + 'a');\n}\n3. Initialize currentLetter in the setup method as shown below:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("currentLetter = generateRandomLetter();\n")])])]),t("p",[e._v("4.Create a JLabel and set the text of the label to the currentLetter in the setup method.\n5. Format the letter so that it is nice and big. Here are some hints….")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("\nlabel.setFont(label.getFont().deriveFont(28.0f));\nlabel.setHorizontalAlignment(JLabel.CENTER);\n")])])]),t("ol",{attrs:{start:"6"}},[t("li",[t("p",[e._v("Add a key listener to the frame in setup method. Add label to the panel and panel to the frame. Then pack the frame.")])]),e._v(" "),t("li",[t("p",[e._v("Create object/instance of typingTutor class in main method. Using the object/instance call the setup method as shown below.\npublic static void main(String[] args){\ntypingTutor tutor = new typingTutor();\ntutor.setup();\n}")])]),e._v(" "),t("li",[t("p",[e._v("Make the letter change every time a key is pressed.  To do that, in the keyReleased method:\ni) Reset currentLetter with generateRandomLetter().\nii) Set the text of your JLabel to the new currentLetter.")])]),e._v(" "),t("li",[t("p",[e._v("In the keyPressed method, print out the character that the user typed.")])]),e._v(" "),t("li",[t("p",[e._v("If they typed the currentLetter, print “correct”.")])]),e._v(" "),t("li",[t("p",[e._v("If they typed the correct letter, set the panel background to green. Otherwise set it to red.")])])]),e._v(" "),t("p",[e._v("panel.setBackground(Color.GREEN);")]),e._v(" "),t("ol",{attrs:{start:"12"}},[t("li",[e._v("[optional] After a certain number of characters, show the users’ typing speed.")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('Date timeAtStart = new Date();\n     \nprivate void showTypingSpeed(int numberOfCorrectCharactersTyped) {\n    Date timeAtEnd = new Date();\n    long gameDuration = timeAtEnd.getTime() - timeAtStart.getTime();\n    long gameInSeconds = (gameDuration / 1000) % 60;\n    double charactersPerSecond = ((double) numberOfCorrectCharactersTyped / (double) gameInSeconds);\n    int charactersPerMinute = (int) (charactersPerSecond * 60);\n    JOptionPane.showMessageDialog(null, "Your typing speed is " + charactersPerMinute + " characters per minute.");\n} \n')])])])])}),[],!1,null,null,null);t.default=n.exports}}]);