# VeganHive Timeline Server

![VeganHive Logo](https://veganhive.com/f8523bec88396b62446c5ed9610169e7.svg)
<img src="https://veganhive.com/f8523bec88396b62446c5ed9610169e7.svg" style="width: 200px; height: 200px; border-radius: 100%" />

## Table of Contents

- [Introduction](#introduction)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)
- [License](#license)

## Introduction

VeganHive Timeline Server is the backend component of the VeganHive Timeline application. It provides the necessary APIs and services to manage and retrieve timeline data related to vegan events, news, and updates.

## Tech Stack

### Devlopment

- Framework: [Fastify](https://reactjs.org/)
- Authentication: [fastify-jwt](https://github.com/pmndrs/zustand).
- Validation: [Zod](https://tailwindcss.com/).
- Database: [Mongodb](https://github.com/axios/axios)
- ORM: [Prisma](https://lucide.dev/guide/packages/lucide-react)
- Password Encryption: [bcryptjs](https://react-hook-form.com/)
- [Typescript](https://www.typescriptlang.org/)

## Features

- **Event Management**: Easily create, like, and comment vegan posts.
- **Timeline Generation**: Automatically generate a timeline of vegan-related posts made by users.
- **User Authentication**: Secure user authentication system to manage user-specific data.
- **RESTful API**: Provides a RESTful API for easy integration with the frontend or other applications.
- **Database Storage**: Stores data efficiently in a database for quick retrieval.

## Getting Started

### Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed on your local machine.
- A compatible database (e.g., PostgreSQL, MySQL) installed and running.

### Installation

1. Clone this repository:

   ```bash
    git clone https://github.com/fanoromani/veganhive-timeline-server.git
   ```

2. Navigate to the project directory:

   ```bash
       cd veganhive-timeline-server
   ```

3. Install dependencies:

   ```bash
        npm install
   ```

   Configure the application by creating a .env file and setting the required environment variables (e.g., database connection details, API keys).

4. Run the server:

   ```bash
       npm run dev
   ```

### Usage

To start using the VeganHive Timeline Server, follow these steps:

1.  Ensure the server is running as described in the installation section.

2.  Make API requests to interact with the server's endpoints, as documented in the API Documentation section.

### API Documentation

#### Overview

This section provides an overview of the available API endpoints and their purpose. Detailed information on each endpoint, including request and response formats, is available in subsequent sections.

#### Base URL

- The base URL for all API endpoints is: `https://veganhive-server.onrender.com`

#### Authentication

- Some routes require user authentication through registering an username and password.

#### Endpoints

##### 1. Create Post

- **Description:** Endpoint for user to make a post on the timeline.
- **HTTP Method:** POST
- **Endpoint:** `/api/buzz`
- **Request Parameters:**
- userId: for retrieving the user id from the user making the post.
- body: the actual post body.
- **Request Example:**

```http
POST /api/buzz
Content-Type: application/json

{
    "userId": "string",
    "body": "string"
}
```

##### 2. Create Comment

- **Description:** Endpoint for user to comment on a post from the timeline.
- **HTTP Method:** POST
- **Endpoint:** `/api/comment/:buzzId`
- **Request Parameters:**
- buzzId: for retrieving the id from the buzz in which you are creating the comment.
- Body: the actual post body.
- **Request Example:**

```http
POST /api/comment/:buzzId
Content-Type: application/json

{
    "body": "string"
}
```

##### 3. Get all Posts

- **Description:** Endpoint for retrieving all posts.
- **HTTP Method:** GET
- **Endpoint:** `/api/buzzes`
- **Request Example:**

```http
POST /api/buzzes
Content-Type: application/json
```

##### 4. Get a Post's information

- **Description:** Endpoint for retrieving information about one especific post.
- **HTTP Method:** GET
- **Endpoint:** `/api/buzz/:id`
- **Request Parameters:**
- id: for retrieving the id from the buzz in which you are fetching information for.
- **Request Example:**

```http
GET /api/buzz/:id
Content-Type: application/json

{
    "id": "string"
}
```

##### 5. Get all Comments from a post

- **Description:** Endpoint for retrieving all comments from a specific post.
- **HTTP Method:** GET
- **Endpoint:** `/api/comments/:buzzId`
- **Request Parameters:**
- buzzId: for retrieving the id from the buzz for which you are fetching the comments of.
- **Request Example:**

```http
GET /api/comments/:buzzId
Content-Type: application/json

{
    "buzzId": "string"
}
```

##### 6. Get User's information

- **Description:** Endpoint for retrieving the logged user's information.
- **HTTP Method:** GET
- **Endpoint:** `/api/me`
- **Request Parameters:**
- id: for retrieving the id from the user that is currently logged in.
- **Request Example:**

```http
GET /api/me
Content-Type: application/json

{
    "id": "string"
}
```

##### 7. Like a Post

- **Description:** Endpoint for user to like a post from the timeline.
- **HTTP Method:** POST
- **Endpoint:** `/api/buzz/:buzzId/like`
- **Request Parameters:**
- buzzId: for retrieving the id from the buzz you are liking/unliking.
- **Request Example:**

```http
POST /api/buzz/:buzzId/like
Content-Type: application/json

{
    "buzzId": "string"
}
```

##### 8. Like a Comment

- **Description:** Endpoint for user to like a comment from a post.
- **HTTP Method:** POST
- **Endpoint:** `/api/comment/:buzzId/like`
- **Request Parameters:**
- buzzId: for retrieving the id from the comment you are liking/unliking.
- **Request Example:**

```http
POST /api/comment/:buzzId/like
Content-Type: application/json

{
    "buzzId": "string"
}
```

##### 9. Login User

- **Description:** Endpoint for user to login in case they already have an account.
- **HTTP Method:** POST
- **Endpoint:** `/api/login`
- **Request Parameters:**
- username: the user's username.
- password: the user's password.
- **Request Example:**

```http
POST /api/login
Content-Type: application/json

{
    "username": "string"
    "passaword": "string"
}
```

##### 10. Register User

- **Description:** Endpoint for the user to register in case they don't have an account.
- **HTTP Method:** POST
- **Endpoint:** `/api/register`
- **Request Parameters:**
- username: the user's username.
- password: the user's password.
- **Request Example:**

```http
POST /api/comment/:buzzId
Content-Type: application/json

{
    "username": "string"
    "passaword": "string"
}
```
