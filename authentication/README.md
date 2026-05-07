# Auth Project

Step 1 :- Register a User 

Api Endpoint :- POST https://api.freeapi.app/api/v1/users/register // Use this endpoint to allow a new user to create an account.

Data Accept :- {
  "email": "user.email@domain.com",
  "password": "test@123",
  "role": "ADMIN",
  "username": "doejohn"
}

Step 2 :- Login User 

Api Endpoint :- POST https://api.freeapi.app/api/v1/users/login 

// Use this endpoint to allow registered users to log in and receive an authenticated session.

Data Except :- {
  "password": "test@123",
  "username": "doejohn"
}

Step 3 :- Logout User 

Api Endpoint :- POST https://api.freeapi.app/api/v1/users/logout // Use this endpoint to log the user out and clear the active session.

Step 4 :- Get Current Logged in User.

Api Endpoint :- GET https://api.freeapi.app/api/v1/users/current-user
