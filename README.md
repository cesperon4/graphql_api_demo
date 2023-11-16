# graphql_api_demo
Simple graphql api to be used with azure functions, and runs on Node version 14. 

Description -
Simple graphql api with two models [user, post]. User -> Post = 1 -> Many.
Simple fetch and post endpoints structured around User Post relationship.

Apply Migrations -
1) adjust the db connection string in .env to point to your local db
2) apply migrations and seeding with command "npx prisma migrate reset" 

Start API -
1)  npm i               ** make sure node environment is correct version
2)  npm run build
3)  npm run start

