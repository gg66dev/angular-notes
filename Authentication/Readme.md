Description
===========

* Demo from [Codeevolution](https://www.youtube.com/watch?v=ozXGkqpzo_A&list=PLC3y8-rFHvwg2RBz6UplKTGIXREj9dV0G&index=1) implements Angular Authentication.
* Instead of Express is used Spring Boot (JDK11) and instead of MongoDB is used PostgreSQL10.
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

* POST -- `api/register`  -- `users`
    * receive the userData (email and password) and save it in the database.
    * return (200) registedUser


