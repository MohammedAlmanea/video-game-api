# Introduction

- Simple video game API

- Final project for TypeScript and Express course from tuwaiq academy

# Technologies used 

- Nodejs
- Expressjs
- Typescript
- PostgreSQL
- Prisma ORM
- Zod
- argon2


## API routes


|            EndPoints          | Method |          Description                   |                  
| :---------------------------: | :----: | :-------------------------------------:|     
|      /api/register            |  POST  |        Register A user                 |   
|      /api/login               |  POST  |         Login A user                   |
|      /api/users               |  GET   |         Gets all users                 |  
|      /api/games	              |  POST  |         Add A game  	                  |
|      /api/games		            |  GET   |         Gets all games                 | 
|      /api/games/name/:name    |  GET   |    Gets A game by its name             |
|      /api/games/:genre        |  GET   |   	 Gets A game by its genre           |
|      /api/games/time/asc      |  GET   | Gets All games by ascending story playtime|
|      /api/games/time/des      |  GET   |Gets All games by descending story playtime| 
|      /api/games/price/asc     |  GET   |    Gets All games by ascending price      |
|      /api/games/price/des		  |  GET   |    Gets All games by ascending price      |  
|      /api/games/sort/rating   |  GET   |   Gets All games by rating	              |
|  /api/games/sort/rating/:genre|  GET   |  Gets All games by rating and genre       | 
|       /api/games/:id          |  DELETE|         Delete A game                  |
|      /api/games/:id           |  PUT   |   	   Update A game                    |
|     /api/games/save			      |  POST  |     Saves A game for A user            |
|      /api/games/save/:id      |  GET   |    Gets all user's saved games         | 
|     /api/games/save/:id		    |  DELETE|      Delete A saved game               |


