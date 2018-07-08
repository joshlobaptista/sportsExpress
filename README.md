# sportsExpress
The object of this project was to get users to debate over various trending topics going on in the sports world. Users can leave their name, Team name and a message, talking about anything thats viral in the sports world today.

# How It's Made:
Tech used: HTML, CSS, JavaScript, Node-JS, MongoDB, Express

Using a global var at the top to find all find different sports icons on the DOM and adding an event listener for when the each sport icon is clicked. When the the sports icon is clicked, we set 3 const variables, name, msg and the the icon being clicked so that we can pass the JSON object to our server.js and find in our collections that name and msg corresponding to the same sports icon being clicked and updating the database to add a +1 count to it and then rendering it back to the DOM to display the update.

# Lessons Learned:
I learn how to use mongo db and how to pretty much create a message board !

Installation
Clone repo
run npm install
Usage
run node server.js
Navigate to localhost:8000
