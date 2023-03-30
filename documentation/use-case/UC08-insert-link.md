# UC08: INSERT a link into the link group
Purpose: This use case allows the user to insert links into groups of links for better organization.
Actor: General user
Preconditions: Have completed #UC01 and have permission to change link group
  
Main flow:
1. System displays link group list that user has permission
2. User performs the UC03
3. System displays menu with link group options
4. User selects the option to insert links (RN02) [A1]
5. System displays form to enter information (short name, URL and tags) of the link
6. User submits requested information
7. System adds the link in the group and returns the link group page
8. closed use case
  
  
Exception Flow:  
A1 - User has already reached the maximum limit links added in a group
1. System displays a message stating that the user cannot add more links because the maximum limit has already been reached.
2. System returns link group page (step 1)
3. closed use case
  
  
---------------------------------------------
