Description
===========

* Demo from [Codeevolution](https://www.youtube.com/watch?v=ozXGkqpzo_A&list=PLC3y8-rFHvwg2RBz6UplKTGIXREj9dV0G&index=1) implements Angular Authentication.
* changes in the stack
    * Instead of Express is used Spring Boot (JDK11) with Spring Data REST 
        * Is use Spring Security to generate and validate the JWT.
    * Instead of MongoDB is used PostgreSQL10.
* Endpoint RESTful APIs
    * Register new user
    * Login user
    * Fetch regular events
    * Fetch special events


Database
===========

* the tables are made automatically with Spring Data, just require the Postgres Container running.
* table appuser

```
id    : serial
email : varchar
password: varchar
```

Endpoint
===========

* endpoints are made with Spring Data REST.


* Save new user 
    * POST -- `api/register` (tutorial)  -- `api/users` (demo)
    * receive json in body with the userData (email and password) and save it in the database.
    * return (200) registedUser

* Do login
    * POST -- `api/login` (tutorial, demo)
    * receive json in body with the userData (email and password) and check if user exist and password is correct.
    * return (200) and logged user.

* list of events
    * GET -- `api/events` (tutorial, demo)
    * return (200) and list of events

* list of specials
    * GET --  `api/special` (tutorial) -- `api/specials` (demo)
    * return (200) and list of specials

Angular
=========

## Commands angular-cli

```
ng new ng-app -o        # create application. -o is to open browser
ng g c register         # generate register component
ng g c login            # generate login component
ng g c events           # generate events component
ng g c special-events   # generate special events component
ng g s auth             # generate auth service
ng g s event            # generate event service
```

Authentication
=================

* use of Token base authentication
    * when user do a Register or Login is generate a token.
    * the token is send to the client and is stored in the client side.
    * client request the list of special events and send the token.
    * server verify the token. if the token is valid return list of special events.  
    * client display events

* JWT [Json Web Token](https://jwt.io)
    * safe way to represent a set of information between two parties.
    * token composition: header.payload.signature - xxxx.yyyy.zzzz

