# Credit Approval API 

Credit Approval API is Restful API that I created to demonstrate my ability to create backend using NodeJS and database using PostgreSQL It has features to handle request like login, register user, master table (occupations, province, city, district), add new client, approve client credit, send email when approved, and swagger for documentation. This API has 3 role users. There are admin, customer service, and supervisor. You can try this project live with this [link](https://credit-approval.vercel.app) on postman as base_url. This project has documentation with swagger, but on vercell (Live) it has trouble, so to see it right now you can just running swagger on local. This API is deployed using vercel and superbase for database.

## Status [Done]

## Future Improvement 
- Handle Logout using reddis 
- Create scheduler to handle block user 

### Method Used 
- Express (Router)
- Middleware 
- Authentication 
- Sending Email 
- Handle Request (PUT, POST, GET) 
- Validation request 
- Documentation

### Technologies 
- Javascript 
- NodeJS 
- PostgreSQL 
- Swagger
- NodeMailer
- SMTP 
- JWT 
- Swagger
- Vercel
- Superbase

## Getting Started / SetUp Basic 

- Clone this repo by using git clone or download it with zip 
- Try creating file .env with these properties, this project using PostgreSQL so try adding your local or development ip and port postgres on this .env. 
```
ENV=

PG_HOST_DEV=
PG_PORT_DEV=
PG_USER_DEV=
PG_PASSWORD_DEV=
PG_DATABASE_DEV=

PG_HOST_LOCAL=
PG_PORT_LOCAL=
PG_USER_LOCAL=
PG_PASSWORD_LOCAL=
PG_DATABASE_LOCAL=  

JWT_SECRET_KEY=
```
- run "npm install" on terminal
- run "npm run server" on terminal 
- to see the documentation you can go to "localhost:3000/api-docs"