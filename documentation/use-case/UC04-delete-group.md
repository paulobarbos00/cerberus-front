# UC04: DELETE a group of links
Objective: This use case allows the user to delete the groups of links that he has access to
Actor: General user
Preconditions: Have completed #UC01 and have permission to change link group
  
Main flow:
1. System displays groups of links already inserted [A1]
2. User selects the desired link group options
3. System checks if the user has access to the selected link group [A2]
4. System displays link group options
5. User selects the option to delete the group
6. System issues a confirmation of the action
7. User confirms [B1]
8. System delete link group and return to inserted groups page
9. closed use case
  
Exception Flow:
A1 - No link group was inserted
1. The screen appears with a message stating that there are no link groups inserted
2. closed use case
  
A2 - The selected group is private and the user does not have access
1. System informs that the user does not have access to the selected group
2. Back to link groups page (step 1)

Alternative Flow:
B1 - User cancels action
1. System returns to link groups page
2. closed use case
  
  
---------------------------------------------
