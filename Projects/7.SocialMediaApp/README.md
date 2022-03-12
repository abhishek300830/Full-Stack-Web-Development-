# Social Media Project

## database Setup

```shell
mysql -r root
```

```mysql
create database socialmediadb;
```

```mysql
create user socialmediauser identified with mysql_native_password by 'socialmediapass';
```

```mysql
grant all privileges on socialmediadb.* to socialmediauser;
```

```mysql
flush privileges;
```

## Project Structure(Backend)

```
SRC
   ├───controllers         # functions to connect routes to db operations
   ├───db                  # db Connection and model defination
   ├───public              # html css js for static part of site
   └───routes              # express middlewares(route wise)
```

## Project Structure(Front end)

```
\SRC\PUBLIC
   ├───app           # our frondtend js
   ├───components    # html Components
   ├───css
   └───js
```

## business Logic

### Users

1. **create users**
   this will create a new user with random username

### Posts

1. **create posts**
   this will create a new post required fields are:
   - username (auther of the post)
   - title
   - body
2. **Show all posts**
   list all existing posts,we should have filtering support
   - filter by username
   - filter by query contained in title ( search by Title)
3. **edit posts** `TBH`
4. **delete posts** `TBD`

### Comments

1. **show all Comments(of a Users)**
2. **show all comments(Under a post)**
3. **add a Comment**

## Api Documentation

### users

1. `GET /users `:
   create a new user name with random username and an user id
2. `GET /users/{userId}` :
   get a user with given user id
3. `GET /users/{username} `:
   get a user with given username

### posts

1. `GET /posts` :
   get all post present in database
2. `POST /posts`
   create new posts.
   Required Fields in Body -
   ```
   userId,
   title,
   body
   ```
