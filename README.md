# ShareCast
ShareCast, a social way to share podcasts between friends, stimulating conversation on topics you care about. Track podcasts, share episodes and (later) get notifications on when your friends have listened to podcasts you’ve shared so that you can have a deeper discussion and build intellectual bridges with your friends and family.

Changing lives, one podcast at a time.

## Getting started

1. Fork and clone this repository
2. ```npm install```
3. Set up a .env file: ```JWT_KEY=xxxxx```
4. ```createdb sharecast_dev```
5. *optional* ```createdb sharecast_test```
6. ```knex migrate:latest```
7. ```knex seed:run```
8. Review apiDoc documentation:
    a. Navigate to the root folder of ShareCast
    b. ```cd apidoc/```
    c. ```open index.html``` to open apiDoc in browser
