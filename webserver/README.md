# Whale Server   


[Must Read]   
To use RDBMS,   
1. Fill up the '.env.example' file and change its name to '.env'
2. You have to install the mysql.
3. Create 'nfts' database in the mysql program CLI.   
```
CREATE DATABASE nfts;
```
4. Create the tables using schema.sql
```
mysql -u root -p < /PATH/TO/YOUR/schema.sql -D nfts;
```
   
* You can delete the database and make it again
```
drop database if exists [database];
create database [database];
```
* You can check the tables using mysql
```
use nfts;
show tables;
describe [table];
```
---
[How to start]   
* npm run start : running the server   
* npm run auto : running the server with nodemon   