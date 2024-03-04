---
assignment: 99_extra
dir: levels/Level1/Module4/src/_99_extra
lesson: 99_extra
level: Level1
module: Module4
oassignment: 99_extra
opath: levels/Level1/Module4/src/_99_extra
title: 99 Extra
---
# 99 Extra

{{ forkrepo(fm_level, fm_module) }}

{{ reporef(fm_level, fm_module) }}




## 99 Extra

{{ javaref(fm_level, fm_module,fm_lesson,fm_assignment, fm_dir) }}



## Nasty Surprise

{{ javaref(fm_level, fm_module,fm_lesson,fm_assignment, fm_dir) }}


1. Make a user interface that has 2 buttons. One says “Trick” the other says “Treat”.

2. When the user clicks on the Trick button, show them a picture of a cute puppy.

3. When they click Treat, show them a scary image.

To show the pictures, use the showPictureFromTheInternet() method below.
```
private void showPictureFromTheInternet(String imageUrl) {
    try {
        URL url = new URL(imageUrl);
        Icon icon = new ImageIcon(url);
        JLabel imageLabel = new JLabel(icon);
        JFrame frame = new JFrame();
        frame.add(imageLabel);
        frame.setVisible(true);
        frame.pack();
    } catch (MalformedURLException e) {
        e.printStackTrace();
    }
}
```

## 99 Extra 02 Simon Says

{{ javaref(fm_level, fm_module,fm_lesson,fm_assignment, fm_dir) }}

