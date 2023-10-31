# SocialNetworkAPI
Social Media app utilizing NoSQL and Mongo DB. 

## Table of Contents

- [Overview](#overview)
- [How to Run Locally](#how-to-run-locally)
- [API Routes](#api-routes)
  

## Overview

This repository contains my solution for the Social Network API Challenge in the Bootcamp: UofW-VIRT-FSF-PT-05-2023-U-LOLC-MTTH course. The challenge involved building a RESTful API for a social network web application, allowing users to share thoughts, react to friends' thoughts, and manage their friend list. The application uses Express.js for routing, MongoDB as the database, and the Mongoose ODM.

## How to Run Locally

To run this application locally, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the project's root directory in your terminal.
3. Install the required dependencies using the following command:

   ```shell
   npm install

    npm start

## API Routes 
API Routes
Users
GET /api/users: Get all users.
GET /api/users/:id: Get a user by their _id with populated thought and friend data.
POST /api/users: Create a new user.
PUT /api/users/:id: Update a user by their _id.
DELETE /api/users/:id: Remove a user by their _id (bonus: also removes associated thoughts).
Friends
POST /api/users/:userId/friends/:friendId: Add a new friend to a user's friend list.
DELETE /api/users/:userId/friends/:friendId: Remove a friend from a user's friend list.
Thoughts
GET /api/thoughts: Get all thoughts.
GET /api/thoughts/:id: Get a thought by its _id.
POST /api/thoughts: Create a new thought (pushes the created thought's _id to the associated user's thoughts array).
PUT /api/thoughts/:id: Update a thought by its _id.
DELETE /api/thoughts/:id: Remove a thought by its _id.
Reactions
POST /api/thoughts/:thoughtId/reactions: Create a reaction stored in a single thought's reactions array field.
DELETE /api/thoughts/:thoughtId/reactions/:reactionId: Remove a reaction by its reactionId value.