# UC03: VIEW link group contents
Purpose: This use case allows the user to view the links inserted within the link group.
Actor: General user
Preconditions: Have completed #UC01 and have permission to view the link group
  
Main flow:
1. System displays groups of links already inserted [A1]
2. User selects the group of desired links
3. System checks if the user has access to the selected link group [A2]
4. System displays the content of the link group
5. closed use case
  
Exception Flow:
A1 - No link group was inserted
1. The screen appears with a message stating that there are no link groups inserted
2. closed use case
  
A2 - The selected group is private and the user does not have access
1. System informs that the user does not have access to the group
2. Back to link groups page (step 1)
  
---------------------------------------------
