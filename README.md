# Vicinity Frontend Coding Challenge

Welcome to the Vicinity Frontend coding challenge.

&nbsp;

# Initial project specifications

- Create an app that has the following pages
  - Home
  - Feed
- Provide theme changing functionality
- Dark and Light mode
- Standard and Large layout for the visually impaired

&nbsp;

# What's Already Been Done

- Basic React app setup with 2 pages
- Basic app UI
- 2 theme changing buttons - inactive and incomplete

&nbsp;

# Goals/Outcomes

- Project architecture and component restructuring
- Using state and global state - don't install any new packages for this
- DOM manipulation
- Consuming APIs and handling responses
- Loading state and knowing where and how to make multiple API calls efficiently

&nbsp;

# Requirements

- Add dark mode switching functionality to the _existing_ #mode button
  - Utilise the _existing_ css file by adding a `dark` class to the root `html` element
- Add large mode switching functionality to the _existing_ #layout button
  - Utilise the _existing_ css file by adding a `large` class to the root `html` element
- Fetch and display _posts_ and _todos_ of user _1_
  - API docs https://jsonplaceholder.typicode.com/guide/
- Feel free to make any additional improvements that showcase your strengths.

&nbsp;

# Think about

- How we would use Dark mode on other potential routes/components in a bigger application. Would your solution work for this?
- How we can apply a class to the `html` DOM element
- Do you resolve each API request one after the other or in parallel?
- Where do you make the API requests?
- How much logic do you offload out of the UI components?
