# Interesting Tech (Blog)


## Description

This is content management system (CMS) style blog where users can make blog posts and comment on other user's posts as well.

This project was used to demonstrate the concept of the model-view-controller [MVC] paradigm, which is a pattern used to develop user interfaces. This is done by by splitting the logic by the Model, the View, and the Controller. The model refers to the how the data is managed and handled, the view is the layout and display shown to the user, while the controller routes commands to the model and view parts.

This project was made with [Sequelize (version 6)](https://sequelize.org/docs/v6/), a promise-based Node.js ORM tool, in order to communicate with the site's MySQL database. The development of this project also utilized [Insomnia version 2022.7.5](https://insomnia.rest/) to test the Express APIs which connect the webpages and their requests. [MySQL WorkBench version 8.0.32](https://dev.mysql.com/doc/workbench/en/) was used to create the database as well as visualize the contents of the models along with the changes that occurred.

This project's functionality depends the following [Node.js version 16.18.0](https://nodejs.org/en/) packages:
* [Node Express.JS version 4.18.2](https://www.npmjs.com/package/express) package from [npm, Inc.](https://www.npmjs.com/) to establish routes between pages. 
* [Node Express Handlebars version 6.0.7](https://www.npmjs.com/package/express-handlebars) package from [npm, Inc.](https://www.npmjs.com/) to implement Handlebars.js for templates. 
* [Node express-session version 1.17.3](https://www.npmjs.com/package/express-session) package from [npm, Inc.](https://www.npmjs.com/) to store the session id on the client in a cookie and to handle authentication.
* [Node bcrypt.js version 5.1.0](https://www.npmjs.com/package/bcrypt) package from [npm, Inc.](https://www.npmjs.com/) to hash passwords.
* [Node Connect Session Store using Sequelize version 7.1.5 (Must be used with express version 4)](https://www.npmjs.com/package/connect-session-sequelize) package from [npm, Inc.](https://www.npmjs.com/) to handle authentication, it is a SQL session store (stores SQL session which lasts for a certain amount of time) to houses all the connections to SQL and the time frame so you can see who is connected.
* [Node dotenv version 16.0.3](https://www.npmjs.com/package/dotenv) package from [npm, Inc.](https://www.npmjs.com/) to load the environment variables that stored the MySQL username, password, and database name used in development.
* [Node MySQL 2 version 3.1.2](https://www.npmjs.com/package/mysql2) package from [npm, Inc.](https://www.npmjs.com/) to server as the MySQL connector library used by Sequelize to connect to the MySQL db server.
* [Node nodemon version 2.0.20 (for development usage only)](https://www.npmjs.com/package/nodemon) package from [npm, Inc.](https://www.npmjs.com/) to automatically restart the node application when file changes in the directory are detected. 

## Table of Contents
- [Installation](#installation-for-further-development-only)
    - [Git/GitBash](#gitgitbash---strongly-recommended)
    - [Visual Studio Code](#visual-studio-code-vsc---strongly-recommended)
    - [Insomnia](#insomnia-version-202275---strongly-recommended-as-a-develop-tool-for-testing-connections-and-express-based-routes-to-database)
    - [MySQL Server/Workbench](#mysql-serverworkbench-version-8032---required-for-further-development-to-create-database-locally-as-well-as-viewing-the-database-tables-and-testing-queries)
    - [Node (Required)](#node-version-16---required-for-further-development-to-download-node-based-dependencies-ie-my-sql-2-express)
        - [express (dependency)](#express-version-4182---required-for-further-development-to-establish-routes-between-pages)
        - [express-handlebars (dependency)](#express-handlebars-version-607---required-for-further-development-for-implementing-handlebarsjs-to-utilize-templates)
        - [express-session (dependency)](#express-session-version-1173---required-for-further-development-for-storing-the-session-id-in-a-cookie-and-for-handling-authentication)
        - [bcrypt (dependency)](#nodebcryptjs-version-510---required-for-further-development-for-hashing-passwords)
        - [connect-session-sequelize (dependency)](#connect-session-store-using-sequelize-version-715-must-be-used-with-express-version-4---required-for-further-development-for-handling-authentication)
        - [dotenv (dependency)](#dotenv-version-1603---required-for-further-development-for-loading-environment-variables-mysql-username-password-and-database-name-stored-in-env)
        - [mysql2 (dependency)](#mysql2-version-312---required-for-further-development-for-accessing-database)
        - [nodemon (development dependency)](#nodemon-version-2020---recommended-as-a-devdependency-for-updating-server-without-needing-to-close-and-reopen-after-each-change-to-api-route-files)
    - [Sequelize (Required)](#sequelize-version-6---required-for-further-development-can-only-be-used-after-installing-node-to-connect-to-database)
- [Usage](#usage---for-the-purposes-of-this-demonstration-git-bash-will-be-used-as-my-preferred-terminal-and-mysql-workbench-will-be-used)
- [Credits](#credits)
- [Questions](#questions)


## Installation (for further development only)

To work on changes to your cloned or forked version of this repository, make sure the following are downloaded:

### `Git/GitBash` - *Strongly Recommended*
* While this application can be run using with the default **command prompt**, it is easier to clone and make further developments to this repository by using Git/GitBash, which can be downloaded [here](https://git-scm.com/downloads).

### `Visual Studio Code [VSC]` - *Strongly Recommended*

* If you'd like to make changes to these files, Visual Studio Code is recommended and can be downloaded for free [here](https://code.visualstudio.com/download).

### `Insomnia version 2022.7.5` - *Strongly Recommended* as a develop tool for testing connections and express-based routes to database

* Go to [Insomnia's homepage, https://insomnia.rest/](https://insomnia.rest/), then [Pricing](https://insomnia.rest/pricing) and click on the [Download Now](https://insomnia.rest/download) button from the free tier.

* You **do not** need an account to use this application.  

### `MySQL Server/WorkBench version 8.0.32` - **REQUIRED for further development** to create database locally, as well as viewing the database tables and testing queries

* Follow the Full-Stack Blog's [MySQL Installation Guide](https://coding-boot-camp.github.io/full-stack/mysql/mysql-installation-guide) to download **both** the MySQL Server and the MySQL Workbench for development purposes.

* It is recommended that you make your password 'password' for learning purposes and **ONLY** for MySQL *learning* purposes. **Do not use this for professional usage of MySQL.**

### `Node version 16` - **REQUIRED for further development** to download node-based dependencies (i.e. My SQL 2, express, )
* Go to [Node's homepage, https://nodejs.org/en/](https://nodejs.org/en/), then [Downloads](https://nodejs.org/en/download/) and scroll down to the [Previous Releases](https://nodejs.org/en/download/releases/) bullet point. 

* Toggle between the results until the desired version 16 package and click Download. This application was developed with [Node.js version 16.18.0](https://nodejs.org/dist/v16.18.0/), click on [node-v16.18.0-x64.msi](https://nodejs.org/download/release/v16.18.0/node-v16.18.0-x64.msi) to download.

* The Full-Stack Blog also has [instructions on how to download Node](https://coding-boot-camp.github.io/full-stack/nodejs/how-to-install-nodejs).

#### `express version 4.18.2` - **REQUIRED for further development** to establish routes between pages

* This **MUST** be installed into this repository, start by opening the command line interface.

* If you have Visual Code Studio, add this repository to the workspace. Then, go to 'Settings' either through the cog icon in the lower left corner and clicking Settings, go to File -> Preferences -> Settings in the menu bar, or the key combo of Ctrl+,

Method 1 - Cog:
![Finding settings through the "settings cog" icon in the lower left corner](./assets/screenshots/Finding-Settings-1.PNG)

Method 2 - File > Preferences > Setting:
![Finding settings through File > Preferences > Settings in the navbar of Visual Studio Code](./assets/screenshots/Finding-Settings-2.PNG)

* Then, change the settings in "Terminal: Explorer Kind" to "external" in the drop down menu.

![Changing "Terminal: Explorer Kind" Settings](./assets/screenshots/External-Terminal-Settings-1.PNG)
        
* Change the filepath of the "Terminal > External: [respective operating system]" settings to the preferred command line interface program (either your system's Command Prompts's file path or Git/Git Bash's file path)

![Changing "Terminal > External" Settings](./assets/screenshots/External-Terminal-Settings-2.PNG)

* After that, right-click the repository and select "Open in External Terminal"

![User uses Visual Studio Code to access repository through external terminal](./assets/screenshots/External-Terminal-Method-1-1.PNG)

![Note the match from Visual Studio Code to the opened external terminal](./assets/screenshots/External-Terminal-Method-1-2.PNG)


* If you do not have VSC, open the preferred terminal.

* Use "cd Desktop" to first reach the Desktop, cd stands for change directory.

* Continue using "cd" to navigate through the file path to reach the location of this repository on your computer.

![User uses Change Directory (cd) to access repository through external terminal](./assets/screenshots/External-Terminal-Method-2.PNG)

* Once this repository has been reached, type in `npm i express` into the terminal and hit `Enter`.

#### `Express Handlebars version 6.0.7` - **REQUIRED for further development** for implementing Handlebars.js to utilize templates

* Follow the same methods from [Express v4.17.1 Installation Section](#express-version-4171---required-to-establish-routes-to-database-to-use-my-sql-queries) to reach this repository if you've already exited out of the command-line, then type in `npm i express-handlebars` and hit `Enter`.

#### `express-session version 1.17.3` - **REQUIRED for further development** for storing the session id in a cookie and for handling authentication 

* Follow the same methods from [Express v4.17.1 Installation Section](#express-version-4171---required-to-establish-routes-to-database-to-use-my-sql-queries) to reach this repository if you've already exited out of the command-line, then type in `npm i express-session` and hit `Enter`.

#### `node.bcrypt.js version 5.1.0` -  **REQUIRED for further development** for hashing passwords

* Follow the same methods from [Express v4.17.1 Installation Section](#express-version-4171---required-to-establish-routes-to-database-to-use-my-sql-queries) to reach this repository if you've already exited out of the command-line, then type in `npm i bcrypt` and hit `Enter`.

#### `Connect Session Store using Sequelize version 7.1.5 (Must be used with express version 4)` - **REQUIRED for further development** for handling authentication

* Follow the same methods from [Express v4.17.1 Installation Section](#express-version-4171---required-to-establish-routes-to-database-to-use-my-sql-queries) to reach this repository if you've already exited out of the command-line, then type in `npm i connect-session-sequelize` and hit `Enter`.

#### `dotenv version 16.0.3` - **REQUIRED for further development** for loading environment variables (MySQL username, password, and database name) stored in .env

* Follow the same methods from [Express v4.17.1 Installation Section](#express-version-4171---required-to-establish-routes-to-database-to-use-my-sql-queries) to reach this repository if you've already exited out of the command-line, then type in `npm i dotenv` and hit `Enter`.

#### `mysql2 version 3.1.2` - **REQUIRED for further development** for accessing database

* Follow the same methods from [Express v4.17.1 Installation Section](#express-version-4171---required-to-establish-routes-to-database-to-use-my-sql-queries) to reach this repository if you've already exited out of the command-line, then type in `npm i mysql2` and hit `Enter`.

#### `nodemon version 2.0.20` - *Recommended* as a devDependency for updating server without needing to close and reopen after each change to api route files

* Follow the same methods from [Express v4.17.1 Installation Section](#express-version-4171---required-to-establish-routes-to-database-to-use-my-sql-queries) to reach this repository if you've already exited out of the command-line, then type in `npm install -g nodemon` and hit `Enter`.

### `Sequelize version 6` - **REQUIRED for further development [Can only be used *after* installing Node]** to connect to database

* Follow the same methods from [Express v4.17.1 Installation Section](#express-version-4171---required-to-establish-routes-to-database-to-use-my-sql-queries) to reach this repository if you've already exited out of the command-line, then type in `npm install --save sequelize` and hit `Enter`. 

* If you are using another database other than mysql2, follow Sequelize's [Getting Started](https://sequelize.org/docs/v6/getting-started/) instructions for manually installing the respective driver for your database of choice. Otherwise, if you are using mysql2 which was used during the development of this back end server, type in `npm install --save mysql2`.


## Usage - for the purposes of this demonstration, Git Bash will be used as my preferred terminal and MySQL Workbench will be used

* Please click on the following link of the deployed website, [#blank]()

* To work on changes to this application, start by creating the database in MySQL either through the MySQL environment using MySQL Workbench to use the `CREATE DATABASE interesting_tech_db;` script in [db/schema.sql](./db/schema.sql), OR through a command line.
    
    * Regardless of whether you use the command line or workbench, you will have to provide the database's password first. **Do not save your password to the value.**

    ![Workbench Homepage](./assets/screenshots/Workbench-Home.PNG)

    * If you are creating a database through the Workbench application, type `CREATE DATABASE interesting_tech_db;` into the SQL file and click on the lightning bolt icon (#1 in image below) to execute the script. Then, click on the refresh icon (#2 in image below) under SCHEMAS in the Navigation side bar to the left. The database will display (#3 in the image below).

    ![Workbench Creating Database](./assets/screenshots/Workbench-Create-Database.PNG)

* Create a `.env` file with the following information (with the database password [DB_PW] being changed to your password that was established in the MySQL Server installation):
    ```
    DB_NAME='interesting_tech_db'
    DB_PW='password'
    DB_USER='root'
    ```
    
    * If you plan on uploading changes to this repo to a forked version or a cloned version, use a `.gitignore` with the `.env` to avoid security breaches.

* After the database is created and the environment file is created, use either of the two methods described in the [Express v4.17.1 Installation Section](#express-version-4171---required-to-establish-routes-to-database-to-use-my-sql-queries) to reach this repository through the preferred terminal.

Method 1:

![User uses Visual Studio Code to access repository through external terminal](./assets/screenshots/External-Terminal-Method-1-1.PNG)

![Note the match from Visual Studio Code to the opened external terminal](./assets/screenshots/External-Terminal-Method-1-2.PNG)

Method 2:

![User uses Change Directory (cd) to access repository through external terminal](./assets/screenshots/External-Terminal-Method-2.PNG)

* Once this repository has been reached, type in `node seeds` into the terminal and hit `Enter` to seed the database with the given information in the [seeds](./seeds/) folder.
![Seeding the database](./assets/screenshots/Seeding.PNG)

* Afterwards, you may start the server connection with `node server.js`. If you plan to make changes to the route files, start the server connection with `nodemon server.js` to ease development, as you will not need to open and close the server connection after each change.

* To test the Express.js API routes, open insomnia and click on the Home icon to the left. Create a new Document or Collection with the Create button on the right. Optional: You can first create a new Project to house the Document/Collection.
![Insomnia Home](./assets/screenshots/Insomnia-Home.PNG)
    
    * If you're in a Document, select the **Debug** tab, then **New HTTP Request** 

        ![Insomnia New HTTP Request in Document](./assets/screenshots/Insomnia-New_Document-HTTP.PNG)

    * If you're in a Collection, select **New HTTP Request**.

        ![Insomnia New HTTP Request in Collection](./assets/screenshots/Insomnia-New_Collection-HTTP.PNG)

* You may create as many HTTP Requests as you would like and can organize the requests in folders using the plus symbol next to the filter input bar on the left side of the application. You can also create more HTTP requests through this.

![Creating more HTTP Requests in Insomnia](./assets/screenshots/Insomnia-More_HTTP.PNG)

* Enter the endpoints (e.g. http://localhost:3001/) in the console and press Send to make the requests.
    
![Entering endpoint for HTTP Requests in Insomnia](./assets/screenshots/Insomnia-Endpoint.PNG)


## Credits

* Definition and information of MVC credit goes to [Mozilla](https://developer.mozilla.org/en-us/):<br></br> https://developer.mozilla.org/en-US/docs/Glossary/MVC

* Word Blog Favicon belongs to [Irfansusanto20](https://www.flaticon.com/authors/irfansusanto20) on [flaticon](https://www.flaticon.com/):<br></br> https://www.flaticon.com/free-icon/content_8841511?term=blog&page=3&position=17&origin=search&related_id=8841511

* Halant SemiBold 600 belongs to [Google Fonts](https://fonts.google.com/):<br></br> https://fonts.google.com/specimen/Halant?preview.text=Plugins&preview.text_type=custom

* Navbar, Text, Sizing, Flex, Input group information, and margin/padding provided by [Bootstrap Docs](https://getbootstrap.com/docs/5.3/getting-started/introduction/):<br></br> https://getbootstrap.com/docs/5.3/components/navbar/<br></br>
https://getbootstrap.com/docs/5.3/utilities/text/<br></br>
https://getbootstrap.com/docs/5.3/utilities/sizing/<br></br>
https://getbootstrap.com/docs/5.3/utilities/flex/<br></br>
https://getbootstrap.com/docs/5.3/forms/input-group/<br></br>
https://getbootstrap.com/docs/5.3/utilities/spacing/#margin-and-padding<br></br>

* Aligning bootstrap nav items to the right credit goes to [Zim](https://stackoverflow.com/users/171456/zim):<br></br> https://stackoverflow.com/questions/41513463/bootstrap-align-navbar-items-to-the-right

* Overriding bootstrap color stylings using CSS `!important` rule credit goes to [CODING HABIT (@codinghabit782)](https://www.youtube.com/@codinghabit782):<br></br> https://www.youtube.com/watch?v=kSkmnsS6nw4

* CSS `!important` rule supplemental lesson provided by [W3Schools](https://www.w3schools.com/):<br></br> https://www.w3schools.com/css/css_important.asp

* Styling CSS Links supplemental lesson provided by [W3Schools](https://www.w3schools.com/):<br></br> https://www.w3schools.com/css/css_link.asp

* Showing password function credit goes to [W3Schools](https://www.w3schools.com/):<br></br> https://www.w3schools.com/howto/howto_js_toggle_password.asp

* belongsToMany vs hasMany supplemental lesson provided by [psrz](https://laracasts.com/@psrz) on [DavidBuchukuri's Laracasts forum](https://laracasts.com/discuss/channels/eloquent/belongstomany-vs-hasmany):<br></br> https://hackernoon.com/eloquent-relationships-cheat-sheet-5155498c209

* CSS Box Shadow information provided by [W3Schools](https://www.w3schools.com/):<br></br> https://www.w3schools.com/css/css3_shadows_box.asp

* []():<br></br> 

* []():<br></br>

* []():<br></br>

* []():<br></br>


## Questions
If you have any questions, my GitHub profile is [www.github.com/leeclaire156](www.github.com/leeclaire156), and my email is [lee.claire156@gmail.com](mailto:lee.claire156@gmail.com).