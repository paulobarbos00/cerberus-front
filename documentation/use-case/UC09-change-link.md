# UC09: CHANGE a link
Purpose: This use case allows the user to change data from a link he has access to: name, URL and tags
Actor: General user
Preconditions: Have completed UC01 and have permission to change link group
  
Main flow:
1. System displays links within groups of links already inserted [A1]
2. User selects the desired link options
3. System checks if the user has access to the selected link group [A2]
4. System displays link options
5. User selects the option to change the link
6. System displays a form window (name, URL and tags) with data filled in to be changed
7. User submits desired information [A3]
8. System changes the link and returns the link groups page
9. closed use case
  
Exception Flow:
A1 - No link was inserted
1. The screen appears with a message stating that there are no links entered in the group
2. closed use case
  
A2 - The selected link is private and the user does not have access
1. System informs that the user does not have access to change the selected link
2. Back to link groups page (step 1)
  
A3 - Link URL is empty or invalid format
1. System prevents submission, informing that the URL address is invalid
2. System redisplays link change form (step 6)
  
---------------------------------------------
