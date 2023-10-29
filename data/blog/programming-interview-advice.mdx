---
author: Evan Nichols
title: 'Preparing for the programming interview'
date: '2018-12-03'
tags:
  - programming
draft: false
type: 'tutorial'
---

## Goal

Get a job as a software engineer.

## How to Prepare

Find an interview prep website and make an effort to use it a few times a week. I recommend [InterviewCake][1] because they offer a nice variety of questions with solutions in 7+ different languages. There are a ton of other free options out there, too.

When using any of these sites, try to write your own solution to the question before looking at any hints or the provided solution.

Consider using the a slightly modified version of the [STAR approach][2], adapted to programming questions:

### Situation

Before writing any code, try to answer the following questions:

- What is the problem asking me to do?
- Do I need to make any assumptions about the problem for my solution to work?
- Is there a type of algorithm (greedy, recursive, dynamic programming, etc.) or data structure (stacks, queues, trees, hashtables, etc.) that is best fit for this problem?

Additionally, brainstorm some potential clarifying questions you could ask an interviewer. **Asking questions is a good thing.** It demonstrates you are thinking critically about the problem. The interviewer wants to understand how you break down a question. Some examples:

- Can I assume the input data will be sorted?
- Do I have to account for potentially null or invalid input values?
- Are there any space or time constraints on my solution?

### Task

Stub out the function(s) you plan on implementing and then **vocalize your plan of action to the interviewer.** Yes, I mean like actually practice saying out loud how you plan on solving the problem.

_"But... I don't have an interviewer around to practice with"_

In that case, recruit a classmate or friend (imaginary or real), or the coffee mug sitting on your desk, it doesn't matter. In an interview situation, verbalizing your plan of action is a doubly useful activity because it:

1. Forces you to think holistically about your solution.
2. Gives the interviewer a chance to hear your ideas and potentially further clarify the problem if you state an incorrect assumption or approach.

In other words, don't [Leroy Jenkins][4] your interview and immediately dive right into coding after hearing the question. Take some time to think the question through.

### Action

You've asked clarifying questions, talked through your potential solution and stubbed out the functions you need. It's finally time to write some code!

At this point in the interview, your main focus should be on writing clean and syntactically correct code. You'll likely be writing your solution on a whiteboard or in a plaintext editor (read: no auto-formatting), so be prepared to manually indent the code. It's OK to be less vocal while actually coding, but try to avoid going radio silent. Ask questions if you get stuck, and talk through certain pieces of your solution whose purpose may not be obvious from the code alone.

A note on languages: Python, C++, Java are the traditional “programming interview” languages, but feel free to branch out if you prefer to use another language. I used Javascript the first time I did programming interviews because it was the language I was most comfortable with at the time.

### Resolution

You've finished coding your solution, but the interview isn't over! It's time to evaluate your solution:

- Does it work?
- Did I answer the question as it was originally stated?
- What is the time and space complexity of my solution?
- Are there any ways I can make my solution more efficient?
- How would I test this program?

Similar to the "task" section, be prepared to talk through the answers to these questions out loud.

## An Example Interview

A fictitious example interview to illustrate some of the points above, based on this [r/dailyprogrammer][3] question.

---

**Interviewer:** One common way for software specifications such as HTML to specify colors is with a hexadecimal string. For instance the color aquamarine is represented by the string "#7FFFD4". Here's how the string breaks down:

- The first character is always "#".

- The second and third character are the red channel value, represented as a hexadecimal value between 00 and FF. In this example, the red channel value is 127, which in hexadecimal is 7F.

- The fourth and fifth character are the green channel value, represented the same way. In this example, the green channel value is 255, which in hexadecimal is FF.

- The sixth and seventh character are the blue channel value, represented the same way. In this example, the blue channel value is 212, which in hexadecimal is D4.

All three channel values must be an integer between 0 (minimum brightness) and 255 (maximum brightness). In all cases the hex values are two digits each, including a leading 0 if necessary.

So, my question for you is: given three integers between 0 and 255, corresponding to the red, green, and blue channel values of a color, create a function that finds the hex string for that color.

**Candidate:** OK. I think I understand the question -- so I'm making a function that accepts three integers corresponding to the R, G and B channel values of a color and outputting the hex string for it? Can I assume the input will be valid, or do I need to account for potentially null or invalid input?

**Interviewer:** That's correct, and no -- let's assume that the input will always be between 0 and 255, no need for validation logic. Here's a quick example, let's call the function 'hexcolor':

```
hexcolor(255, 99, 71) => "#FF6347"
```

<br/>

**Candidate:** OK. So, in order to convert the integers to hex, can I use Javascript's built-in conversion functions to do this, or do I need to perform the conversion manually?

**Interviewer:** Good question -- it's OK to use the built-in functions for the conversions. If we have time at the end we can discuss how you would implement the conversion functions from scratch.

**Candidate:** Sounds good. I'll go ahead and get started. So I'm going to find each integer's hex representation and then concatenate those together and return the string. To actually convert them, I think I can use the toString method on the numbers and specify the base as 16, since hex is base 16. So, if I did something like:

```javascript
let k = 255
k.toString(16)
```

<br/>

That second line should output 'FF' since that's the hex string representation of 255.

**Interviewer:** Ok, I see.

**Candidate:** Ok here's my function.

```javascript
const hexcolor = (r, g, b) => {
  let rVal = r.toString(16)
  let gVal = r.toString(16)
  let bVal = r.toString(16)
  return '#' + rVal + gVal + bVal
}
```

<br/>

**Interviewer:** Could you walk through a quick example?

**Candidate:** Sure. So using your previous example, if we called my function with 255, 99, 71 it should output "#FF6347" since 255 is 'FF', 99 is '63' and 71 is '47'.

**Interviewer:** What about if you called hexcolor(0,0,0)? What would your function output?

**Candidate:** It should output '#000000', I think.

**Interviewer:** I'm not so sure.

**Candidate:** Oh... I think I see the problem. Calling toString on a integer below 15 isn't going to append a '0' before it. So if I called my function with all zeroes it would output '#000' instead of '#000000'. I need to check for this explicitly and append the leading zero if necessary.

**Interviewer:** Good catch. How would you implement that?

**Candidate:** I'll update my function like this:

```javascript
const hexcolor = (r, g, b) => {
  let rVal = r.toString(16)
  let gVal = r.toString(16)
  let bVal = r.toString(16)
  if (rVal.length === 1) {
    rVal = '0' + rVal
  }
  if (gVal.length === 1) {
    gVal = '0' + gVal
  }
  if (bVal.length === 1) {
    bVal = '0' + bVal
  }
  return '#' + rVal + gVal + bVal
}
```

<br/>

So this checks if the converted strings are only a single character and pads it with a zero if so.

**Interviewer:** That should work. It looks like you're repeating a lot of logic here, though. Any thoughts on how you could simplify this function?

**Candidate:** You're right, I'm basically just calling the same functions and doing the same if check three times. Oh, I have an idea. I can put the arguments in an array and then map a function to it.

```javascript
const hexcolor = (r, g, b) => {
  let converted = [r, g, b].map((color) => {
    let val = color.toString(16)
    if (val.length === 1) {
      val = '0' + val
    }
    return val
  })
  return '#' + converted.join('')
}
```

<br/>

**Interviewer:** Nice! That makes it a little more readable, too. Anything else you could do? What about a ternary operator maybe?

**Candidate:** Ah, I see. The if statement can be removed and a ternary operator can be used in the return statement instead, like this:

```javascript
const hexcolor = (r, g, b) => {
  let converted = [r, g, b].map((color) => {
    let val = color.toString(16)
    return val.length === 1 ? '0' + val : val
  })
  return '#' + converted.join('')
}
```

<br/>

**Interviewer:** Nice work. Now, let's talk about how you could implement that hex conversion from scratch instead of using toString...

---

## Closing

Despite their name, "programming interviews" are really only about 50% programming (or less). The majority of your time is spent communicating with your interviewer, so be sure to make that an integral part of your preparation.

Good luck!

[1]: https://www.interviewcake.com/
[2]: https://www.thebalancecareers.com/what-is-the-star-interview-response-technique-2061629
[3]: https://www.reddit.com/r/dailyprogrammer/comments/a0lhxx/20181126_challenge_369_easy_hex_colors/
[4]: https://www.youtube.com/watch?v=mLyOj_QD4a4
