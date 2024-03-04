---
assignment: 04_gui_from_scratch_1_fortune_cookie
dir: levels/Level1/Module0/src/_04_gui_from_scratch/_1_fortune_cookie
lesson: 04_gui_from_scratch
level: Level1
module: Module0
oassignment: 1_fortune_cookie
opath: levels/Level1/Module0/src/_04_gui_from_scratch/_1_fortune_cookie
title: 04 Gui From Scratch 1 Fortune Cookie
---
# 04 Gui From Scratch

{{ forkrepo(fm_level, fm_module) }}

{{ reporef(fm_level, fm_module) }}






## Fortune Cookie

{{ javaref(fm_level, fm_module,fm_lesson,fm_assignment, fm_dir) }}


Goal: Make a Swing program from scratch.
The program will have a window (frame) with a button that gives one of five random fortunes when clicked.
1. Make a FortuneCookie class, with a showButton() method like the one below:

public class FortuneCookie {
public void showButton() {
System.out.println("Button clicked");
}
}

2. Now make a runner class to run the code above, like the one below:

public class FortuneCookieRunner {
public static void main(String[] args) {
new FortuneCookie().showButton();
}
}

3. Now change the showButton() method in Step 1, to make a JFrame and get it to show up when you run the program. Hint:
frame.setVisible(true);

4. Make a JButton and add it to the JFrame.
JButton button = new JButton();
frame.add(button);
frame.pack();

5. The next 4 steps make a pop-up appear that says, “Woohoo” when the button is clicked

a. Add an action listener to the button:
button.addActionListener(this);

b. Have your class implement ActionListener [use Eclipse quick fix]

c. Add the unimplemented methods [use Eclipse quick fix]

d. Put a JOptionPane pop-up inside the actionPerformed() method that says "Woohoo".

6. Generate a random number between 0 and 4:
int rand = new Random().nextInt(5);
7. Depending on which random number, show one of the five fortunes.

[optional] 8. Run other student's programs to receive fortunes from them.



## Jack-in-the-Box

{{ javaref(fm_level, fm_module,fm_lesson,fm_assignment, fm_dir) }}


1. Create a user interface (GUI) that has a single button labeled "Surprise".
If you need help, take a look at the instructions for the Fortune Cookie recipe.
2. When the user presses the button 5 times, show them a jack-in-the-box using the methods below.
(A sample jackInTheBox.png file is provided in the default package)
private void showPicture(String fileName) {
try {

JLabel imageLabel = createLabelImage(fileName);
JFrame frame = new JFrame();
frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
frame.add(imageLabel);
frame.setVisible(true);
frame.pack();
} catch (Exception e) {
e.printStackTrace();
}
}
private JLabel createLabelImage(String fileName) {
try {
URL imageURL = getClass().getResource(fileName);
if (imageURL == null) {
System.err.println("Could not find image " + fileName);
return new JLabel();
} else {
Icon icon = new ImageIcon(imageURL);
JLabel imageLabel = new JLabel(icon);
return imageLabel;
}
} catch (Exception e) {
System.err.println("Could not find image " + fileName);
return new JLabel();
}
}
3. Also play a sound when the jack-in-the-box pops up using this method.
(A sample sound homer-woohoo.wav is provided in the default package)

private void playSound(String soundFile) {
try {
AudioClip sound = JApplet.newAudioClip(getClass().getResource(soundFile));
sound.play();
} catch (Exception e) {
e.printStackTrace();
}
}



## Sound Effects Machine

{{ javaref(fm_level, fm_module,fm_lesson,fm_assignment, fm_dir) }}


1.  Create a GUI for a sound effects machine that will play different sounds when the buttons are pressed.
If you need help, take a look at the instructions for the Fortune Cookie recipe.

NOTE: because this GUI has more than one button, you must add a JPanel to your JFrame and put the buttons on the panel!

2. Gather sound bites. They must be .wav files. Free sound effects can be found here. The League also has an account at freesound. Ask your teacher for our login.
The .wav files must be placed into your recipe package(_3_sound_effects_machine) (drag and drop).

3. Call this playSound() method when they click on a button. You will need to import java.applet.AudioClip
```

	private void playSound(String soundFile) {
		String path = "src/_03_gui_from_scratch/_3_sound_effects_machine/";
			File sound = new File(path+soundFile);
			if (sound.exists()) {
				new Thread(() -> {
				try {
					Clip clip = AudioSystem.getClip();
					clip.open(AudioSystem.getAudioInputStream(sound));
					clip.start();
					Thread.sleep(clip.getMicrosecondLength()/1000);
				}
				catch (Exception e) {
					System.out.println("Could not play this sound");
				}}).start();
	 		}
			else {
				System.out.println("File does not exist");
			}
		
	}
```



## Cuteness TV

{{ javaref(fm_level, fm_module,fm_lesson,fm_assignment, fm_dir) }}


1. Make a user interface with 3 buttons that will play different videos depending on which button is clicked.

If you need help, take a look at the instructions for the Fortune Cookie recipe.

2.  Use the methods below to play the cutest videos ever.
void showDucks() {
playVideo("https://www.youtube.com/watch?v=MtN1YnoL46Q");
}

void showFrog() {
playVideo("https://www.youtube.com/watch?v=cBkWhkAZ9ds");
}

void showFluffyUnicorns() {
playVideo("https://www.youtube.com/watch?v=a-xWhG4UU_Y");
}

void playVideo(String videoID) {

// Workaround for Linux because "Desktop.getDesktop().browse()" doesn't
//work on some Linux implementations
try {
if (System.getProperty("os.name").toLowerCase().contains("linux")) {
if (Runtime.getRuntime().exec(new String[] {
"which", "xdg- open" }).getInputStream().read() != -1) {
Runtime.getRuntime().exec(new String[] { "xdg-open", videoID });

}
} else {

URI uri = new URI(videoID);
java.awt.Desktop.getDesktop().browse(uri);
}
} catch (Exception e) {
e.printStackTrace();

}
}
Note: If any of these video links no longer work, go to youtube and get replacements. Use the method names to give you a hint about what the videos should contain :)

