# svrless-deploy

Individual deployment test > Node.js, Heroku App, Heroku Postgresql

Endpoints:

| Path                       | Description                                |
| -------------------------- | ------------------------------------------ |
| /                          | Homepage - "Welcome to Library!"           |
| /public                    | Public page - "You called a public route." |
| /public/books              | Returns all books                          |
| /secure/                   | Secure page - "You called a secure route." |
| /secure/history/:historyId | Find history based on historyId            |
| /secure/adminsetup         | Setup tables and insert data               |
| /secure/adminreset         | Drops all tables                           |
