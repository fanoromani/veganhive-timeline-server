# VeganHive Timeline Server


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

##### 1. Create Buzz

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
    "userId": "value1",
    "body": "value2"
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
    "body": "value1"
}
```
