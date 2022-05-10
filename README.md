# svrless-deploy

individual deployment test > Node.js, Heroku App, Heroku Postgresql

Endpoints:

| Task # | Path                       | Description                                |
| ------ | -------------------------- | ------------------------------------------ |
| 1      | /                          | Homepage - "Welcome to Library!"           |
| 2      | /public                    | Public page - "You called a public route." |
| 3      | /public/books              | Returns all books                          |
| 4      | /secure/                   | Secure page - "You called a secure route." |
| 5      | /secure/history/:historyId | Find history based on historyId            |
| 6      | /secure/adminsetup         | Setup tables and insert data               |
| 7      | /secure/adminreset/        | Drops all tables                           |
