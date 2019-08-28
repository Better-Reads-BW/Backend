# **Better Reads Server**
Back-end build week project for Better Reads 

###   **Maintainer**
[@GregJordanSr](https://github.com/GregJordanSr)

# **Deployed Backend**
Base url: https://betterbackend.herokuapp.com




# **SUMMARY TABLE OF API ENDPOINTS**

| Table | Method | Endpoint           | Description                                                                                                                                                                                    |
| ----- | ------ | ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| users | POST   | /auth/register | Creates a new `user` profile using the information sent inside the the `body` of the request and returns a id.    |
| users | POST   | /auth/login    | On successful login, creates a JSON Web Token &returns a welcome message with the user profile in the body of the response. |

# AUTH ROUTES
## **REGISTER/ LOGIN**
### **Registers a user & Login user**

_Method Url:_ `/api/auth/register`

_Method Url:_ `/api/auth/login`

_HTTP method:_ **[POST]**

## **Register/Login**
 Method | Endpoint | Description 
 ------ | -------- | -----------
 POST | `/api/auth/register` | accepts `username`, `password`, and creates a  `user`, and returns an id number
 POST | `/api/auth/login` | accepts `username` and `password` and returns a message welcoming user, and a token if username and passwords match

 #### Example of Accepted Register/Login Schema

{
 “username”: test2"
 “password”: test",
}
```
```
{
 “message”: “Welcome admin1",
 “token”: “eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0Ijo1LCJ1c2VybmFtZSI6ImFkbWluMSIsImlhdCI6MTU2Njg4ODQzNCwiZXhwIjoxNTY2OTc0ODM0fQ.zS_W0Gy_vaapk_9kiH3r9znaXrtTLO_zzs16tSB8DHc”
}
### Response Codes
#### 201 - Created
#### 400/404 - Bad Request
#### 500 - Internal Server Error


## **Books**
Method | Endpoint | Headers | Description
------ | -------- | ------- | -----------
GET | `/api/Books` | Authorization(token) | Returns Books with name and id
POST | `/api/Books/save` | Authorization(token) | Adds new book to the users account
DELETE | `/api/Books/:id/delete` | Authorization(token) | Removes list from users account

### Accepted book schema for saving a book
{
    "isbn": "6479745",
    "book_title": "FFT Squad Success",
    "book_authors": "Greg Jordan, Melanie Harris",
    "book_desc": "Tales of learning JavaScript while taking over the world.  The getaway from it all"
}

## **Users**
Method | Endpoint | Headers | Description
------ | -------- | ------- | -----------
GET | `/api/users/all` | Authorization(token) | Returns a list of usernames and id
GET | `/api/users/:id` | Authorization(token) | Returns a user with First and Last name.
PUT | `/api/users/:id/edit` | Authorization(token) | Returns updated User
DELETE | `/api/users/:id` | Authorization(token)| Removes User from users account, successful message will show


### Accepted Response to Get all Users Schema [GET]
`[
  {
    "id": 8,
    "username": "Bill"
  },
  {
    "id": 9,
    "username": "DollarBill"
  },
  {
    "id": 1,
    "username": "Jason"
  },
  
]`

### Accepted Response for Get users by Id Schema [GET]
{
  "firstName": "Bill",
  "lastName": "Paid"
}

###Example of successful User [DELETE] message 

{
 “message”: “User deleted successfully.”
}

### Accepted User Schema [PUT]
{
    "
}
```
```

