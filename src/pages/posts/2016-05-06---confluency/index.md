---
title: "Confluency - Cerner Hackfest 2016"
date: 2016-05-06
tags:
- speech
- mobile application
draft: false
author: Evan Nichols
type: 'post'
---

Created as part of Cerner's 2016 Hackfest, Confluency is an Ionic application that tracks children's vocabulary development over time. I had the idea for this application after watching Deb Roy's TED Talk, which I reviewed in an earlier post. The original idea was to use a speech-to-text API to record conversations with children, create a wordbank, and provide insights into language development. Our target audience would be parents and caretakers working with patients suffering recovering from strokes or head trauma.

I teamed up with three other KU undergrads to tackle the project. We used the [Ionic Framework](http://ionicframework.com/) to create the app, in part because of the kick-ass [Ionic Creator](http://ionic.io/products/creator) product they offer, which allows for drag and drop prototyping.

![](teampic.png)

The initial goal was to use IBM's [Speech to Text API](http://www.ibm.com/watson/developercloud/speech-to-text.html) to handle translating audio clips into our "wordbank" JSONs. If you [take their demo out for a spin](https://speech-to-text-demo.mybluemix.net/), you'll see just how perfect the JSONs produced match our needs. Each JSON contains a transcript containing the translation of the highest ranked translations, and also includes a list of word alternatives and their confidence ratings when it fails to find a 100 percent match. The JSON below illustrates:

```javascript
{
  "results": [
    {
      "word_alternatives": [
        {
          "start_time": 0.95,
          "alternatives": [
            {
              "confidence": 0.7399,
              "word": "what"
            },
            {
              "confidence": 0.26,
              "word": "what's"
            }
          ],
          "end_time": 1.39
        },
        {
          "start_time": 1.43,
          "alternatives": [
            {
              "confidence": 1,
              "word": "a"
            }
          ],
          "end_time": 1.59
        },
        {
          "start_time": 1.59,
          "alternatives": [
            {
              "confidence": 1,
              "word": "beautiful"
            }
          ],
          "end_time": 2.54
        },
        {
          "start_time": 2.57,
          "alternatives": [
            {
              "confidence": 0.9998,
              "word": "day"
            }
          ],
          "end_time": 3.09
        },
        {
          "start_time": 3.17,
          "alternatives": [
            {
              "confidence": 0.9816,
              "word": "outside"
            },
            {
              "confidence": 0.0184,
              "word": "side"
            }
          ],
          "end_time": 4.1
        }
      ],
          "confidence": 0.842,
          "transcript": "what a beautiful day outside ",
          "timestamps": [
            [
              "what",
              0.95,
              1.39
            ],
            [
              "a",
              1.43,
              1.59
            ],
            [
              "beautiful",
              1.59,
              2.54
            ],
            [
              "day",
              2.57,
              3.09
            ],
            [
              "outside",
              3.17,
              4.1
            ]
          ]
        },
        {
          "transcript": "what's a beautiful day outside "
        },
        {
          "transcript": "what a beautiful day out side "
        }
      ],
      "final": true
    }
  ],
  "result_index": 0
}
```

Confession: I failed to get the API working for the app. I could not figure out how to properly format the XMLHttpRequests. Since our application did not have a built-out backend, I had to make the API calls client-side which is a much bigger hassle than using [the service with nodejs](https://github.com/watson-developer-cloud/speech-to-text-nodejs). I first ran into CORS (Cross-Origin-Resource-Sharing) issues trying to make the call from localhost. Thankfully, [Ionic has a page dedicated to these issues](http://blog.ionic.io/handling-cors-issues-in-ionic/), and I was able to get a proxy set up to make the calls. But even with the proxy, I still continued to run into authentication issues, evening using specific credentials from IBM Bluemix.

I plan migrating the app over to node after my internship finishes up, using [this awesome tutorial](https://www.raymondcamden.com/2015/08/05/a-real-world-app-with-ibm-bluemix-node-cordova-and-ionic/) as a jumping off point. I'm convinced my previous issues were due to my inability to read documentation. I think the app has some true potential and I look forward to developing it further.
