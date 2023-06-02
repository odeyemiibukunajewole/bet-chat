# bet-chat

BetChat is a social platform for users with keen interest in betting and lotto to  
interact, get credible predictions, see lotto results and get livescores and so you have been  
contacted.

- When a user register an account , there is an option to add his or her interest at the point of creation
- After creation , if the user has the same interest with another user , such user will be able to see all the post of other user with the same interest.
- Only sign in user can post

# Clone Repo

- copy the link and run it in the terminal to download the repo

```bash
git clone https://github.com/odeyemiibukunajewole/bet-chat.git

```

- create a data base 'BetChat' in any MySQL Workbench

## Install dependency

```bash
 npm install

```

## Add .env to the root folder , copy and paste Environment variables on local machine

## and provide the variables values base on your configuration where necessary.

```bash
MAILGUN_API_KEY=*****e908901122001*****0caba357331f53****ff5ac-156db0f1-693b2c6f****
MAILGUN_DOMAIN=betChat.com
DB_HOST=localhost
DB_PASSWORD=*******I9052@12*******
DB_PORT=3**306**
DB_DATABASE=bet_chat
DB_DIALECT=mysql
DB_USERNAME=******
DB_URL=********
SECRET_KEY=*******
DB_HOST_PROD=******
DB_PASSWORD_PROD=*****
DB_PORT_PROD=3****
DB_DATABASE_PROD=******
DB_DIALECT_PROD=mysql
DB_USERNAME_PROD=*******

```

## Start Application development.

```bash
   npm run dev

```

## Start Application production.

```
  npm start

```

## To Register on the platform.

- to register on the platform , copy the sign up API and post the user info to the endpoints.

- for the interests, there are list of interest that have been created. to get the user interest call the enpoint below

```
https://bet-chat.herokuapp.com/api/v1/interest/ALL

```

-  call the sign up end point to register and post to the to the body

```
https://bet-chat.herokuapp.com//api/v1/auth/signup

```

```
{
    "firstName":"wole",
    "lastName":"Ibk",
    "phoneNumber":"81******2342",
    "email":"ode**********@gmail.com",
    "password":"od************a@gmail.com",
    "countryCode":"+234",
    "confirmPassword":"od************a@gmail.com"",
    "interests":[{"id":34,"value":"CHESS"},{"id":24,"value":"HOCKEY"},{"id":4,"value":"FOOTBALL"}]
}

```


## User create post.

- For a user to post ,call the post endpoint and post
- pass the authorization token in the header

```
https://bet-chat.herokuapp.com/api/v1/post/create

```

```
{

    "postContent":"post  is beautifule"
}

```

## To get post of other users.
- pass the authorization token in the header and call the profile endpoint

```
https://bet-chat.herokuapp.com/api/v1/post/get-user-interest-post

```

## To get user profile.
- pass the authorization token in the header and call the profile endpoint
```
https://bet-chat.herokuapp.com/api/v1/post/get-user-interest-post

```

