# The Gathering

- [Overview](#overview)

- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Hierarchy](#component-hierarchy)
    - [Component Breakdown](#component-breakdown)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

_**The Gathering** is a full stack application that allows users to browse a collection of competitive Magic The Gathering articles.
Authorized users have the ability to create, update and delete posts which are associated with their individual accounts. This app utilizies Ruby on Rails and PostgreSQL on the backend, and React.js on the frontend._

<br>

## MVP

<br>

### Goals

- _Create a NoSQL database with PostegreSQL to host all user information_
- _Create full CRUD functionality for creating, updating, reading, and deleting post information_
- _User authentication and association to limit user interaction with the app's content_
- _Non-authorized routes for landing page and article browsing, and authorized routes for creating and editing articles_

<br>

### Libraries and Dependencies

|   Library    | Description                                                                              |
| :----------: | :--------------------------------------------------------------------------------------- |
|    React     | _Front-end user interaction and state management through manipulation of a virtual DOM._ |
| React Router | _Site navigation and routing for single page applications_                               |
|    Rails     | _Backend model-view-controller framework for Ruby_                                       |
|    Axios     | _Promise-based HTTP client for the browser and node.js_                                  |

<br>

### Client (Front End)

#### Wireframes

![landing](/assets/home.png)

- Desktop Landing

![articles](/assets/articles.png)

- Desktop Landing

![detail](/assets/detail.png)

- Desktop Detail

![edit](/assets/edit.png)

- Desktop Edit

![create](/assets/create.png)

- Desktop Create

![Sign In](/assets/sign-in.png)

- Desktop Sign In

![Sign Up](/assets/sign-up.png)

- Desktop Sign Up

#### React Component Tree

![Component Tree](/assets/component-tree.png)

#### React Component Hierarchy

```structure

src
|__ App.jsx
|__ index.js
|__ assets/
|__ components/
      |__ Layout/
          |__ Layout.jsx
          |__ Layout.css
      |__ Nav/
          |__ Nav.jsx
          |__ Nav.css
      |__ Footer/
          |__ Footer.jsx
          |__ Footer.css
      |__ Search/
          |__ Search.jsx
          |__ Search.css
      |__ Sort/
          |__ Sort.jsx
          |__ Sort.css
|__ screens/
      |__ Home/
          |__ Home.jsx
          |__ Home.css
      |__ Articles/
          |__ Articles.jsx
          |__ Articles.css
      |__ ArticleDetail/
          |__ ArticleDetail.jsx
          |__ ArticleDetail.css
      |__ ArticleEdit/
          |__ ArticleEdit.jsx
          |__ ArticleEdit.css
      |__ ArticleCreate/
          |__ ArticleCreate.jsx
          |__ ArticleCreate.css
      |__ SignIn/
          |__ SignIn.jsx
          |__ SignIn.css
      |__ SignUp/
          |__ SignUp.jsx
          |__ SignUp.css
|__ services/
      |__ apiConfig.js
      |__ users.js
      |__ articles.js
      |__ categories.js
|__ utilities/
      |__ utilities.js

```

#### Time Estimates

| Task                      | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------------- | :------: | :------------: | :-----------: | :---------: |
| Basic BE Models           |    H     |     1 hrs      |               |     TBD     |
| BE CRUD                   |    H     |     2 hrs      |               |     TBD     |
| BE Auth                   |    L     |     1 hrs      |               |     TBD     |
| Seed Data                 |    L     |     2 hrs      |               |     TBD     |
| FE Component Hierarchy    |    H     |     1 hrs      |               |     TBD     |
| FE CRUD                   |    H     |     2 hrs      |               |     TBD     |
| FE Routing                |    H     |     1 hrs      |               |     TBD     |
| FE State Management       |    H     |     2 hrs      |               |     TBD     |
| Landing Page Layout       |    M     |     2 hrs      |               |     TBD     |
| Detail Page Layout        |    M     |     2 hrs      |               |     TBD     |
| Edit Page Layout          |    M     |     2 hrs      |               |     TBD     |
| Create Page Layout        |    M     |     1 hrs      |               |     TBD     |
| Sign In / Up Layout       |    M     |     1 hrs      |               |     TBD     |
| Basic CSS                 |    M     |     3 hrs      |               |     TBD     |
| Advanced Navbar CSS       |    M     |     3 hrs      |               |     TBD     |
| Advanced Landing Page CSS |    M     |     3 hrs      |               |     TBD     |
| Advanced Detail Page CSS  |    L     |     3 hrs      |               |     TBD     |
| Advanced Edit Page CSS    |    L     |     3 hrs      |               |     TBD     |
| Advanced Create Page CSS  |    L     |     3 hrs      |               |     TBD     |
| TOTAL                     |          |     39 hrs     |               |     TBD     |

<br>

### Server (Back End)

#### ERD Model

![ERD](/assets/ERD.png)

<br>

---

## Post-MVP

- _Functionality for non-users to only be able to read a section of an article_
- _Experiment with ways to display card information on hover / press_
- _Logic for recommended sections_
- _Experiment with different media types_
- _Separate table for decklists, and possible use of a third party API for card database_
- _Likes / favorites_

---

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.
