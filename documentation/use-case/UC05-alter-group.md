# UC05: ALTER a group of links
Purpose: This use case allows the user to change data from the groups of links he has access to: name, description and tags
Actor: General user
Preconditions: Have completed #UC01 and have permission to change link group
  
Main flow:
1. System displays groups of links already inserted [A1]
2. User selects the desired link group options
3. System checks if the user has access to the selected link group [A2]
4. System displays link group options
5. User selects the option to change the group
6. System displays a form window (name, description and tags) with data filled in to be changed
7. User submits desired information [A3]
8. System changes the link group and returns to the inserted groups page
9. closed use case
  
Exception Flow:
A1 - No link group was inserted
1. The screen appears with a message stating that there are no link groups inserted
2. closed use case
  
A2 - The selected group is private and the user does not have access
1. System informs that the user does not have access to change the group
2. Back to link groups page (step 1)
  
A3 - Empty group name
1. System prevents submission, informing that the group name is empty
2. System displays the form again (step 7)
  
---------------------------------------------
