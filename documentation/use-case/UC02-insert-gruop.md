# UC02: INSERT a group of links
Purpose: This use case allows the user to insert groups of links
Actor: General user
Preconditions: Have completed # UC01
  
Main flow:
1. System displays menu with options
2. User selects the option to insert group of links (RN01) [A1]
3. System displays form to enter the information, name, description and tags of the link group
4. User submits requested information [A2]
5. System creates the group of links and returns to the main page
6. closed use case
  
Exception Flow:
A1 - User has already reached the maximum limit of created link groups
1. System displays a message informing that the user cannot create more link groups because the maximum limit has already been reached.
2. System returns to main page
3. closed use case
  
A2 - Empty group name
1. System prevents submission, informing that the group name is empty
2. returns step 3
  
---------------------------------------------
