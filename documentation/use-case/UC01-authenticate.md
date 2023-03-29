USE CASE
  
# UC01: Authentication and/or Registration in the System
Purpose: This use case allows the user to authenticate to the system
Actor: General user
Preconditions: User has Google account.
    
Main flow:
1. System displays login page
2. User selects the option to authenticate by Google account
3. System displays window for user to enter Google email and password
4. User submits Google login information.
5. System receives information from Google and authenticates user [A1][B1]
6. System requires homepage
7. closed use case
    
Exception Flow:
A1 - Invalid email and/or password
1. System receives invalid access information and returns to login page
2. closed use case

Alternative Flow:
B1 - First access
1. System receives access information and creates user for the system
2. System requires home page
3. closed use case
    
---------------------------------------------
