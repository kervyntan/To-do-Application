# To-do-Application
To-do Application built using React


To-do Application Release Notes:
V0.1.0 (12/05/22)

Added TodoForm.jsx, Button.jsx
Created input for text (on what task the user wants to accomplish today)
Styling for buttons and overall font-family, color scheme of the site (added default css like box-sizing, font-family)
Created button component that can be used across different components of the app (takes in props to allow for different conditions to affect usability of the button and the handling upon clicking of button)	

V0.2.0 (13/05/22)
Added TodoItem.jsx, Card.jsx, TodoNumber.jsx
Created a visual representation of what each TodoItem should look like upon user submitting their input; Here, users can have a glance at what they need to do for the day, as well as click on the button “I’m Done!” when they have finished the task, and that task will be removed from the list.
Card component created that can be used across different components to wrap around the divs, and provide an overall consistent look 
TodoNumber added to provide a realtime count of the number of tasks that the person has to do today

V0.3.0 (13/05/22)
Added Todo.jsx, TodoData.js
Created Todo.jsx, which serves as a realtime updating list of all the Todos that the user has; 
TodoData.js stores an array of objects, with each object containing information about the user’s input on the task they have added to their list. As users key in their input and hit submit using the TodoForm, that information is pushed into the array TodoData, which is then passed as a prop/variable to other components in App.js such as Todo.jsx, TodoItem.jsx for further rendering and updating of state to reflect the new list of items.

V0.3.1 (14/05/22)
Added styling for mobile responsiveness
fixed card padding to 40px 20px from 40px 80px to increase readbility
Adding todo-heading text-align : center to make the text in the middle
included max-width 100% for input space for smaller screens

V0.3.2 (14/05/22)
Added compare function in App.js, sorting for the Todo list by rating of each task
Compare function returns -1 if the first item’s rating is greater than the second (means if the first item rating is 9, second rating is 8, the first item will be the first in the array, and hence show up first in the list)
Returns 1 if the first item’s rating is lesser than the second

V0.3.3 (15/05/22)
Added localStorage to persist state of items that users keyed in (will remove to enable testing)
Allows the list of items that users add to remain there, until they manually clear it.


V0.4.0 (15/05/22)
Start looking into the different colour for sections that are overdue (date comparison), different rating tasks should have different colours, 
maybe can display the legend at the side too, maybe can even let the user pick the color for different severities!! (eg. blue is 1 day away, red is the day itself!)

V0.4.1 (16/05/22)
Added credentials and integration for Google Calendar API 
Need to add event insert / object for Google Calendar
Change specific values in the request to send to Google Calendar
(Add new values for the TodoForm)

Add a prompt that pops up saying a task has been added (user feedback)
Prompt text changed, added responsiveness and styling, attached the prompt to form submission/onClick of button
(Designed the prompt)
(Pop-up animation)

V0.4.2 (17/05/2022)
Added radio buttons for rating and styling
(Need to understand logic of code that you took down; see if you can implement it using the code that you wrote previously)

V0.5.0 (20/05/2022)
Changed layout of list of tasks, now it is a row of 2 tasks each, with 1 task filling the entire row if it is alone.
Added conditional check if an item is overdue, add “Task is overdue” on the card
Task will arrange themselves around each time a new task is added to ensure that task with the most importance is always shown first.
Changed color scheme for the overall page, added custom properties for colors

V0.5.1 (22/05/2022)
Added modal upon completion of task

V0.6.0 (23/05/2022)
Added autofill text buttons for the task, as well as option to change the autofill text to whatever the user wishes to input
(Need to work on the styling for those, can consider using react router, put on a different page, then can include a hamburger menu like CMS to allow user to select into there to change the different values)
Altered logic for submission of form , changed flow to check everytime there’s a change in the form’s inputs, instead of relying solely on text input (since user can just autofill the task now)
Changed styling classes, added a general class for btn, and added other different specific button stylings eg. btn-modal, btn-submit, btn-autofill

V0.6.1 (24/05/2022)
Changed styling for site (Using white, black, punch color - turquoise now instead of 5 color page)
Fixed layout in App.js so there is no more side scrolling on mobile, header and footer don’t overflow
