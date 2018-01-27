Feature: Todo

Scenario: Add todo

  Given There are no existing todos 
  When I add a new todo
  Then A new, incomplete todo should be added to my list