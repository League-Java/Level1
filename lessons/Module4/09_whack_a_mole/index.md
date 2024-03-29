---
assignment: 09_whack_a_mole
dir: levels/Level1/Module4/src/_09_whack_a_mole
lesson: 09_whack_a_mole
level: Level1
module: Module4
oassignment: 09_whack_a_mole
opath: levels/Level1/Module4/src/_09_whack_a_mole
title: 09 Whack A Mole
---


# Whack-a-Mole

{{ forkrepo(fm_level, fm_module) }}

{{ reporef(fm_level, fm_module) }}




{{ javaref(fm_level, fm_module,fm_lesson,fm_assignment, fm_dir) }}


We are going to make a game where the user has to click on a "mole". The game is timed so the user can get their "whack rate".
1. Start building a basic Swing GUI to hold the game shown below (JFrame, JPanel, etc.)
2. Make a drawButtons method that takes a random number as a parameter. It should make a GUI like the one in the picture below, but the “mole!” location will be random each time the frame is drawn.

[Hint: set the size of the frame rather than packing it.]

3. If they click on a button other than “mole!”, use this speak() method to tell them they missed.
```

    static void speak(String words) {
        if( System.getProperty( "os.name" ).contains( "Windows" ) ) {
            String cmd = "PowerShell -Command \"Add-Type -AssemblyName System.Speech; (New-Object System.Speech.Synthesis.SpeechSynthesizer).Speak('"
                    + words + "');\"";
            try {
                Runtime.getRuntime().exec( cmd ).waitFor();
            } catch( Exception e ) {
                e.printStackTrace();
            }
        } else {
            try {
                Runtime.getRuntime().exec( "say " + words ).waitFor();
            } catch( Exception e ) {
                e.printStackTrace();
            }
        }
    }
```
4. Dispose of the frame and draw the buttons anew.

5. After they’ve whacked 10 moles, call this endGame() method.
```
private void endGame(Date timeAtStart, int molesWhacked) { 
    Date timeAtEnd = new Date();
    JOptionPane.showMessageDialog(null, "Your whack rate is "
            + ((timeAtEnd.getTime() - timeAtStart.getTime()) / 1000.00 / molesWhacked)
                  + " moles per second.");
}
```
6. Count how many times they hit something other than the mole! button and change the "missed" comments each time (be nice). When they have missed five times, tell them they have lost, and end the game.
Option: find out how you can use the switch statement to code this.
7. Find a sound file (.wav) and place it in your Java package. Call this playSound() method when they hit a mole.
```
private void playSound(String fileName) { 
    AudioClip sound = JApplet.newAudioClip(getClass().getResource(fileName));
    sound.play();
}
```

