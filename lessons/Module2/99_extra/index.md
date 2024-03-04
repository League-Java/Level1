---
assignment: 99_extra
dir: levels/Level1/Module2/src/_99_extra
lesson: 99_extra
level: Level1
module: Module2
oassignment: 99_extra
opath: levels/Level1/Module2/src/_99_extra
title: 99 Extra
---
# 99 Extra

{{ forkrepo(fm_level, fm_module) }}

{{ reporef(fm_level, fm_module) }}




## 99 Extra

{{ javaref(fm_level, fm_module,fm_lesson,fm_assignment, fm_dir) }}



## Tea Party

{{ javaref(fm_level, fm_module,fm_lesson,fm_assignment, fm_dir) }}


You are hosting a formal Tea Party. Your task is to welcome your guests properly. Here are the rules
for welcoming guests:

If the guest has been knighted by the Queen and is male, use the title "Sir" before their name to
greet them, otherwise if the guest is a male, use the title "Mr." before their name.

If the guest has been knighted by the Queen and is female, use the title "Lady" before their name to
greet them, otherwise if the guest is a female, use the title "Ms." before their name.

Add code to the class below to support the greeting rules above.
```

public class TeaParty {
    public String welcome(String name, boolean isWoman, boolean isKnighted) {
        
    }
}
```
Here is some JUnit Test code to check your welcome method. Run the tests and check that the green
"pass" bar is displayed.
```

import static org.junit.Assert.assertEquals;
import org.junit.Test;

public class TeaPartyTest {
	/**
	 * Jane Austen is a woman, so say “Hello Ms. Austen”. 
	 * George Orwell is a man, so say “Hello Mr. Orwell”. 
	 * Isaac Newton was knighted, so say "Hello Sir Isaac Newton".
	 **/

	@Test
	public void testIsWomanNotKnighted() {
		TeaParty teaParty = new TeaParty();
		assertEquals("Hello Ms. Austen", teaParty.welcome("Austen", true, false));
	}

	@Test
	public void testIsManNotKnighted() {
		TeaParty teaParty = new TeaParty();
		assertEquals("Hello Mr. Orwell", teaParty.welcome("Orwell", false, false));
	}

	@Test
	public void testIsManKnighted() {
		TeaParty teaParty = new TeaParty();
		assertEquals("Hello Sir Isaac Newton", teaParty.welcome("Isaac Newton", false, true));
	}
	
	@Test
	public void testIsWomanKnighted() {
		TeaParty teaParty = new TeaParty();
		assertEquals("Hello Lady Laura", teaParty.welcome("Laura", true, true));
	}

}
```



## Intro to Unit Tests

{{ javaref(fm_level, fm_module,fm_lesson,fm_assignment, fm_dir) }}


An important part of coding is testing to see if your code is working correctly. Instead of asking a person to run the program each time it is changed to make sure it still runs properly, we can make much more reliable automated tests to check it out. These are known as unit tests.
Test-driven development (TDD) is a way of developing code where you write the tests before you even start writing the program.  It’s a way to think through what your code must be able to do before your write it.

#### JUnit Tests

JUnit is an open source framework designed for the purpose of writing and running tests for java programs.

Tests can be written that specify the expected return value from running some code.
The syntax for the tests looks like this:
assertEquals(expected, actual)
If the "expected" value matches the "actual" value, the results bar displayed after running the tests will be green. If they are different (or there are errors), the results bar will be red.

For example, in the context of the "real world"
assertEquals(true, Is water wet?)       results bar will be green

assertEquals(true, Are zombies  real?)       results bar will be red

assertEquals(false, Is coding lame?)       results bar will be green
Now for some real code. Will the results bar be green or red for these asserts?
assertEquals(4, add(2,2));

assertEquals(“brains”, getZombieFood());

assertEquals(2, getLargest(3,2));

## 99 Extra 05 Minion

{{ javaref(fm_level, fm_module,fm_lesson,fm_assignment, fm_dir) }}

