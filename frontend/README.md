# Remote_engine_assignment

## Introduction

- This project is an example of web application that allows the registration of both clients (companies) and developers. Also, it allows the onboarding processes of developers. In this application security is implemented by securing API endpoints, using JWT for authentication, bcrypt for hasing passwords and using MongoDB with Mongoose for secure storage of data.

## Deplolyed App

- https://dancing-speculoos-3a0319.netlify.app/

## Features

- Client's signup, login and logout.
- Developer's signup, login and logout.
- Developer's onboarding.

## Installation & Getting started

- Cloning- git clone https://github.com/JeevanJyotiChoudhury/Remote_engine_assignment.git
  -> cd Remote_engine_assignment

- .env setup
  -> mongoURL - your mongodb databse url
  -> port - any port of your choice

- BACKEND
  -> cd backend
  -> npm install (to install dependencies)
  -> npm run server (to start the backend server locally)
  -> Note : to get skills while onboarding developers add some skills using either postman or thunderclient on the api endpoint : https://odd-rose-crocodile-toga.cyclic.app/skills/add with body as
  {
  "name":"skill to be added"
  }

-FRONTEND
-> cd frontend
-> npm install (to install dependencies)
-> npm run start (to start frontend application locally)

## APIs Used

- BE :- https://odd-rose-crocodile-toga.cyclic.app

## API Endpoints

- /skills
  -> POST - /add
  -> GET - /
- /clients
  -> POST - /register
  -> POST - /login
  -> GET - /logout
- /developer
  -> POST - /register
  -> POST - /login
  -> POST - /onboarding
  -> GET - /logout

## Technology Stack

- React.js
- Node.js
- Express.js
- MongoDB
- Chakra UI
