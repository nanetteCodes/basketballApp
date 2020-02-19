# Quick Start

#### create default.json file in config folder

- add your env keys. Ex:

  - "mongoURI": "mongodb://localhost/mongo-uri",
    -"jwtSecret": "000000",

#### Install server dependencies

- in root
  - `npm install`

#### Install client dependencies

- cd client
  - `npm install`

#### Run both Express & React from root

- `npm run dev`
- view client at: http://localhost:3000
  -view server at: http://localhost:5000

#### Build for production

- cd client
- npm run build

## Deploying To Production

#### Deploy backend to Heroku and code to github

- `git push heroku master && git push origin master`
- `heroku open`

#### Deploy client to with netlify

- Build assets for prod: `npm build`
- `netlify open`
