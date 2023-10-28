---
title: "Greedy Algorithm Practice in Javascript"
date: "2016-08-03T00:12:03.000Z"
tags:
- algorithms
- javascript
draft: false
author: Evan Nichols
type: 'tutorial'
---

This is a short post reviewing [Interview Cake's](https://www.interviewcake.com) programming question: "Given an integer array, find the highest product of three integers."

I naively jumped right in and coded a solution that, as I quickly realized, works only for positives. Blerg. It's not good practice to leave out half the number spectrum so I went back to the drawing board, considering all possible cases we could have with an input array.

1. Three elements only. Just return their product.
2. Three or more elements, all positives: Use a version of my naive initial algorithm.
3. Three or more elements, all negatives: Same as above, but we will want to use the smallest negative values.
4. Three or more elements, mix of postive and negatives:
    1. One negative. Return product of the three maximum positive numbers; there is no benefit given a single negative.
    2. Two or more negatives. Consider the array [-10,-10,4,3,2]. The max product should be 400. In this case, I decided it would be to return the max of: max positive and two greatest negatives, or 3 max positives.

That covers it. We don't care if there are more than 3 negatives, we're still only ever going to use the two largest.

My second solution goes something like this, using O(n) time and space.

- Iterate over arr, sorting values into a negative and positive arr.
- Sort the negative and positive arrays.
- Code the conditions 1-3 above.

However, it seems the Greedy approach still prevails overall, providing a solution in O(n) time and O(1) space.

I was on the right track though, in the sense of keeping track of the two highest and two lowest values. A combination of these will yield the biggest answer. They went with the keep track of the highest product of two and lowest product of two. I coded up their answer as well just for understanding:

```javascript
function optimalHighestProduct(arr){
    //we need to keep track of the highest, lowest, maxProductOfThree, maxProd2, minProd2.

    //initialize the variables.
    var current;
    var max = Math.max(arr[0],arr[1]);
    var min = Math.max(arr[0],arr[1]);

    var maxProd3 = arr[0]*arr[1]*arr[2];
    var maxProd2 = arr[0]*arr[1];
    var minProd2 = arr[0]*arr[1];

    for(var i=2; i<arr.length; i++){
        current = arr[i];
        //do we have new max prod?
        maxProd3 = Math.max(maxProd3,maxProd2*current,minProd2*current);

        //do we have a new max prod 2, or min prod 2?
        maxProd2 = Math.max(maxProd2, max*current);
        minProd2 = Math.min(minProd2, min*current);

        //do we have a new max or min?
        max = Math.max(max,current);
        min = Math.min(min,current);
    }

    return maxProd3;
}
```

The greedy approach is simple and powerful. Don't waste time and space if you need to! Here are some keywords to look for, where a greedy algorithm may work well: find the greatest, find the highest return, what is the optimal solution... stuff like that.

And questions to ask: what values do I need to keep track of as I iterate over the data in order to return the optimal solution? In which order do I need to perform these updates to keep things in order?

The Greedy approach almost always provides the best time and space complexity.

On an unrelated note: I learned the difference between slice and splice in Javascript.

```javascript
var foo = ['E','V','A','N'];
var bar = foo.slice(0,2);
console.log( foo ); // will output ['E','V','A','N']
console.log( bar ); // will output ['E','V']

var x = [1,2,3,4,5];
var y = x.splice(2,2);
console.log(x); // will output [1,2,5];
console.log(y); // will output [3,4]
```

```Slice``` "cuts out" a certain number of values from the array and returns them, leaving the original array unchanged. ```Splice``` "cuts out" a certain number of values from the array and returns them, *mutating the original array in the process*. That's the little gotcha between the two. Slice doesn't mess with the original but splice does.
