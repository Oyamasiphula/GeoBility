# Xstars

## Database details:

Run this script to create your database and user

```sql

create database geo_get;

CREATE USER geo@localhost IDENTIFIED BY 'password';
GRANT ALL PRIVILEGES ON geo_get.* TO geo@localhost;
flush privileges;
```
