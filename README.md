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

## Test system using this routes

> /  ... root for notification test
> /auth ... for auth page which will lead to login and register
> /contact ... for contacus form


## Components Structure

> Auth/Login Components :zap:
> ContacusEmail Component :mailbox:
> Notification Component :bell:

- app
  - models
    - user.js  --# our user model #--  :zap:

  - Controllers
    - user.js  --# will register and login user // action methods #--  :zap:
    - contact.js  --# will send mail // action method #--  :mailbox:

  - config
    - index.js  --# will hold our database connection settings #--
    - passport.js  --# configuring the strategies for passport #-- :zap:
  - libs
    - auth.js  --# will hold middlewares for guest and authenctaed #-- :zap:
    - db-connection.js  --# configuring db connection #--
  - routes
    - index.js      --# will hold all the routes with some login for notification#--  :mailbox: :bell:
    - user.js      --# will hold user routes #--  :zap:
  - public
    - css      --# css#--
    - client      --# will hold notification controll #--
      - client.js      --# will  Register serviceWorker, Register Push browser api, send push notification #-- :bell:
      - worker.js      --# waitinig for event push to assign values on the fly #-- :bell:
      - html.html      --# show notification simple text #-- :bell:
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
