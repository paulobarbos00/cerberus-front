# UC10: DELETE a link
Purpose: This use case allows the user to delete an unwanted link
Actor: General user
Preconditions: Have completed #UC01 and have permission to change link group
  
Main flow:
1. System displays links within groups of links already inserted [A1]
2. User selects the desired link options
3. System checks if the user has access to the selected link group [A2]
4. System displays link options
5. User selects the option to delete the link
6. System issues a confirmation of the action
7. User confirms [B1]
8. System deletes the link and returns to the inserted groups page
9. closed use case
  
Exception Flow:
A1 - No link was inserted
1. The screen appears with a message stating that there are no links entered in the group
2. closed use case
  
A2 - The selected link is private and the user does not have access
1. System informs that the user does not have access to delete the selected link
2. Back to link groups page (step 1)

Alternative Flow:
B1- User cancels action
1. User selects the cancel delete action option
2. System goes back to link groups page (step 1)

  
---------------------------------------------
