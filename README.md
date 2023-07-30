# 13-E-Commerce-Back-End-ORM

[![License: MIT](https://img.shields.io/badge/License-MIT-lightblue.svg)](https://opensource.org/licenses/MIT)

## Description
In this week's Challenge I created a backend application using sequelize and Node.js in order to 
create, seed, and maintain a backend relational database to track products and associated categories and tags.

## Table of Contents
- [User-Story](#user-story)
- [Acceptance-Criteria](#acceptance-criteria)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Test](#test)
- [Questions](#questions)

## User-Story

```
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```


## Acceptance-Criteria

```
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete data in my database
```

## Installation
To get the app running, first you must `npm i`, then run the `schema.sql` and go to seeds folder and run `index.js` to get the database started and populated.

After this you can fire up the server and go to insomnia to check different CRUD operations on the backend.


## Usage
This app allows the user to create new Categories, products, and tags for each product. Additionally, it allows the user to 
perform CRUD operation on the backend.

## License
This app is covered under MIT license. For details and limitations of this license please visit:
[License Link for MIT](https://opensource.org/licenses/MIT)


## Contributing
If you would like to share your feedback and/or contribute your best practices to make our code better, feel free to get in touch with us via:
  GitHub: [13-E-Commerce-Back-End-ORM - link](https://github.com/dinozio-design/13-E-Commerce-Back-End-ORM)<br>

## Test
We are using jest for testing the development of the functions. No test have been written for this application yet.
<br>

## Questions
If you have any questions, you can email them to me.
  email: <sam@dinozio.design><br>

### Deployed Links

1. You can find the video walkthrough of a typical user flow of the application **here:** <br>
[13-E-Commerce-Back-End-ORM - vid 1 -  starting and seeding db + Category CRUDs](https://drive.google.com/file/d/1e2YqTp9xwSMpd87m7aM-Vn1WWebHmbXy/view)<br>
[13-E-Commerce-Back-End-ORM - vid 2 balance of CRUDs for products and tags](https://drive.google.com/file/d/1sNlSMLtALR2E1cHLw3cr7YZUAiKvK0Jh/view)<br>


2. You can find the URL of my GitHub repository that contains this code **here:** <br>[GitHub Repo - link](https://github.com/dinozio-design/13-E-Commerce-Back-End-ORM)

### Authors Notes: 
  _This README and accompanying repo have been brought to you by:_<br>© Sam Azimi - 2023 CodeCamp Studen.<br>Confidential and Proprietary. All Rights Reserved.
