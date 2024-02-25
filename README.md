# To-Do App

Welcome to our To-Do App! This application is built with MongoDB, Angular, Node.js, and Express.js. It offers a range of features including user authentication, authorization, and basic to-do management.

*Currently underdevelopment so features are limited

## Flow for User Authentication and Authorization

![image](https://github.com/elfarsif/to-do-app/assets/136501798/92e508de-734c-4d01-a261-4b3b01929839)


## Features

- User Registration: Users can sign up for an account.
- User Login: Registered users can log in securely.
- User Authentication: Secure authentication mechanism to verify user identity.
- User Authorization: Role-based access control for different user privileges.
- Roles: There are 3 possibles roles : Admin, Moderator and User. Each have access to different content

## Installation

Follow these steps to install and run the application locally:

1. **Clone the repository:**
```
git clone https://github.com/elfarsif/to-do-app.git
cd api
```

2. **Install dependencies:**
```
cd api
npm install
cd ../ui
npm install
```
3. **Set up MongoDB:**
- Make sure you have MongoDB installed and running locally or provide connection details in the configuration file.

4. **Configure environment variables:**
- Create a `.env` file in the root directory.
- Define environment variables like database connection details, JWT secret, etc. Example:
  ```
  PORT=3000
  MONGODB_URI=mongodb://localhost:27017/todo_app
  JWT_SECRET=yoursecretkey
  ```

5. **Run the application:**

```
cd api
node server.js
cd ../ui
ng serve
```

6. **Access the application:**
Open your browser and navigate to `http://localhost:4200` (or the specified port if you changed it).

## Contributing

We welcome contributions from the community. Feel free to open issues or pull requests for bug fixes, improvements, or new features.

