# log in to mysql as root

without root password

```shell
mysql -u root

```

with root password

```shell
mysql -u root -p
```

# create DB user and grant access

```sql
create database databaseName;
create user userName identified by 'mypass';
use databaseName;
grant all privileges on databaseName.* to userName;
flush privileges;
exit;

```

# login with new user

```shell
mysql -u userName -p;
Enter Password:(enter 'mypass' here ) as set in line 20
```
