# **Better Reads Server**
Back-end build week project for Better Reads 

###   **Maintainer**
[@GregJordanSr](https://github.com/GregJordanSr)

## **Deployed Backend**
Base url: https://betterbackend.herokuapp.com




### **SUMMARY TABLE OF API ENDPOINTS**

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
-----------------------------------------------------------------------------------------------------------

### **Register/Login**
 Method | Endpoint | Description 
 ------ | -------- | -----------
 POST | `/api/auth/register` | accepts `username`, `password`, and creates a  `user`, and returns an id number.  Username must not match a existing name. 
 POST | `/api/auth/login` | accepts `username` and `password` and returns a message welcoming user, and a token if username and passwords match
----------
### Example of Accepted Register Schema

`{
	"username":"test2",
	"password":"test",
	"firstName":"Bill",
	"lastName":"Paid",
	"aboutMe":"I paid you already",
	"email":"test@email.com"
}`

 ### Example of Accepted Login Schema

``{
 “username”: test2"
 “password”: test",
}``


``{
 “message”: “Welcome test2",
 “token”: “eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0Ijo1LCJ1c2VybmFtZSI6ImFkbWluMSIsImlhdCI6MTU2Njg4ODQzNCwiZXhwIjoxNTY2OTc0ODM0fQ.zS_W0Gy_vaapk_9kiH3r9znaXrtTLO_zzs16tSB8DHc”
}``

### Response Codes
#### 201 - Created
#### 400/404 - Bad Request
#### 500 - Internal Server Error
-----------------------------------------------------

### **Books**
Method | Endpoint | Headers | Description
------ | -------- | ------- | -----------
GET | `/api/books/allbooks` | Authorization(token) | Returns Books with name and id
POST | `/api/books/save` | Authorization(token) | Adds new book to the users account
DELETE | `/api/books/:id/delete` | Authorization(token) | Removes list from users account

### Accepted book schema for saving a book
``{
    "isbn": "6479745",
    "book_title": "FFT Squad Success",
    "book_authors": "Greg Jordan, FFT Squad",
    "book_desc": "Tales of learning JavaScript while taking over the world.  The getaway from it all"
}``

 ### **Recommendation Endpoint**
Method | Endpoint | Headers | Description
------ | -------- | ------- | -----------
POST | `/api/books/recommend` | Authorization(token) | Returns a list of recommended books in response to the users input
---------------------------

### Example of expected schema input for for this endpoint [POST]  

`{
	"book_desc":"I want to learn about dogs"
}`

### Example of successful response from this endpoint [POST] 


`
  "14435": {
    "book_authors": "Raymond Sturgis",
    "book_desc": "PLEASE GO TO: WWW.AUDIBLE.COM/iTUNES_ for this book and others from RAYMOND STURGIS.----SOME BOOKS JUST SOUND BETTER IN AUDIO! Each day that is blessed to us, some black man, woman or child has been killed or mistreated by police or from another black person. Black people in America should have always organized against injustices from police and other misguided blacks who are a threat to their survival. I cannot understand that after hundreds of years and comprehensive progress in civil and human rights, that black people's lives are still not valued or respected. Black Lives Matter is a book that expounds on the realities and hardships of black people living in America. The clouds of hate and distrust must end. So black people can avoid the senseless violence and disrespect they endure from other black people, police and government. If BLACK LIVES TRULY MATTER, then swift justice must be enforced for those that violated the freedoms and peace of blacks trying to live in America.",
    "book_title": "Black Lives Matter: Is It Open Season on Killing and Mistreating Blacks in America",
  }`
 

------------------------
## **Users**
Method | Endpoint | Headers | Description
------ | -------- | ------- | -----------
GET | `/api/users/all` | Authorization(token) | Returns a list of usernames and id
GET | `/api/users/:id` | Authorization(token) | Returns a user with First and Last name.
PUT | `/api/users/:id/edit` | Authorization(token) | Returns updated User
DELETE | `/api/users/:id` | Authorization(token)| Removes User from users account, successful message will show


### Accepted Response to Get all Users Schema [GET]
`{
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
  },`
  


### Accepted Response for Get users by Id Schema [GET]
`
{
  "firstName": "Bill",
  "lastName": "Paid"
}`

###Example of successful User [DELETE] message 

`{
 “message”: “User deleted successfully.”
}`

### Accepted User Schema [PUT]
`{
    "id": 9,
    "username": "DollarBill",
	"password":"test"
  }`

 
```
```

