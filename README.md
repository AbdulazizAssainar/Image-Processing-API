# Image-Processing-API

Udacity Project - Image Processing API

    "test": "npx tsc && npm run jasmine",
    "build": "npx tsc && npm run start",
    "start": "node build/index.js",

    main endpoint return status 302 for redirecting '/' to '/api'
    api endpoint return status 200

I used the training videos that you provided me, and when I was facing a problem, I was searching for solutions via Google and YouTube.

try image route:
    URL + /api/image?filename=encenadaport&width=200&height=100
        file names:
            - encenadaport
            - fjord
            - icelandwaterfall
            - palmtunnel
            - santamonica
    Do not add file extention to file name
    You can use 'filename' or just 'name' in your url
