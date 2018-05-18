# Indielabs Components

The idea is that you can download this project to use and adapt it for any project in node.js with:-
* Auth(Login and Register) Component.
* Mail Component.
* Notification Component.

## Instalation


```
npm install
```
Run app
```
npm start /
npm run dev
```
> node and mongodb should be installed

## Dependencies

### Following packages are used

- body-parser (for parsing incoming requests)
- express (to make the application run)
- nodemon (restarting server when changes occur)
- mongoose (object data modeling to simplify interactions with MongoDB)
- bcrypt (for hashing and salting passwords)
- express session (to handle sessions)
- connect-mongo (for storing sessions in MongoDB)
- passport (for token generation)
- web-push (for notification)
- express-session (for session middleware )

## Components Structure

- app
  - models
    - user.js  --# our user model #--
  - config
    - index.js  --# will hold our database connection settings #--
    - passport.js  --# configuring the strategies for passport #--
  - libs
    - auth.js  --# will hold middlewares for guest and authenctaed #--
    - db-connection.js  --# configuring db connection #--
  - routes
    - index.js      --# will hold all the routes with some login for notification#--
    - user.js      --# will hold user routes #--
  - public
    - css      --# css#--
    - client      --# will hold notification controll #--
      - client.js      --# will  Register serviceWorker, Register Push browser api, send push notification #--
      - worker.js      --# waitinig for event push to assign values on the fly #--
      - html.html      --# show notification simple text #--
  - views
    - index.ejs    --# show our home page with login links #--
    - contact.ejs    --# show our login form #--
    - auth   --# auth vieews folder #--
      - login.ejs   --# show our login form #--
      - register.ejs   --# show our signup form #--
      - secret.ejs   --# show after login page #--
    - partials  --# layout partials #--
      - footer.ejs   --# footer section #--
      - header.ejs   --# header section #--
  - package.json      --# handle our npm packages #--
  - app.js         --# Do the magic -- setup our application #--


## Components Resulets

![Image of notification1](https://imgur.com/AIaEUe1.png)
![Image of mail](https://imgur.com/SMqHgvj.png)
![Image of mail2](https://imgur.com/kdLDRHc.png)


## Author

**Abdelrhman**

## Why

* Creating Components so that it be easy to integrate it with an App
* For .. Indielabs
