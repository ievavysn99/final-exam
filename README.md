# final-exam
An application meant for event organizers to to manage the list of participants.

The application consists of Back-End (server) and Front-End (client)

in the folder server please create a .env file and write:
PORT = {your desired port}
MONGODB_URI = {your personal mongo db URI}

To run this application, please split the terminal and perform these commands:
1. Terminal one
- cd client
- npm ci
- npm run dev
2. Terminal two
- cd server
- npm ci
- npm run dev

The first terminal will give you a link to open in your browser.

The features include:
1. Adding users
2. Editing users
3. Deleting users
4. Filtering the users based on the search term
