# UC06: SEARCH link groups
Purpose: This use case allows the user to search the groups of available links according to what he is looking for
Actor: General user
Preconditions: Have completed # UC01
  
Main flow:
1. System displays the search field on the home page
2. User types what he wants to search for and submits [A1]
3. System checks the text and displays a list of groups of links with reference to the typed text [A2]
4. User browses a list with multiple groups of links
5. closed use case
  
Exception Flow:
A1 - Empty group name
1. System prevents submission, informing that the group name is empty
2. Go back to step 2
  
---------------------------------------------
