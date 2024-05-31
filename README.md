<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

 Backend for A board
 ## Project Overview

This backend serves as the core for the "A board" frontend, providing a robust RESTful API. It is designed to handle CRUD operations for users, comments, and posts, facilitating dynamic interactions within the application.
## Technology Stack

- **Prisma**: Handles ORM functionalities, interfacing seamlessly with the database.
- **Neon serverless PostgreSQL**: Provides a scalable and serverless database solution, ensuring efficient data management.
- **NestJS**: Utilized for structuring the backend with a focus on modularity, scalability, and maintainability.

## API Endpoints

### Users
- **Create User**: `POST /users` — Adds a new user to the system.
- **Retrieve Users**: `GET /users` — Retrieves a list of all users.
- **Update User**: `PUT /users/{userId}` — Updates user information.
- **Delete User**: `DELETE /users/{userId}` — Removes a user from the system.

### Comments
- **Create Comment**: `POST /comments` — Adds a new comment to a post.
- **Retrieve Comments**: `GET /comments` — Retrieves all comments.
- **Update Comment**: `PUT /comments/{commentId}` — Updates the text of a comment.
- **Delete Comment**: `DELETE /comments/{commentId}` — Deletes a comment.

### Posts
- **Create Post**: `POST /posts` — Creates a new post.
- **Retrieve Posts**: `GET /posts` — Lists all posts.
- **Update Post**: `PUT /posts/{postId}` — Edits an existing post.
- **Delete Post**: `DELETE /posts/{postId}` — Removes a post.

## Installation

```bash
$ npm install

```

## Running the app

```bash
# development
$ npm run start
If env not found, try npx prisma generate,

# watch mode
$ npm run start:dev


# production mode
$ npm run start:prod
```
## License
Nest is [MIT licensed](LICENSE).