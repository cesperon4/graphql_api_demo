# graphql_api_demo
Simple graphql api to be used with azure functions, and runs on Node version 14. 

<h3>Description</h3>
Simple graphql api with two models [user, post]. User -> Post = 1 -> Many.
Simple fetch and post endpoints structured around User Post relationship.

<h3>Apply Migrations</h3>
<ul>
  <li>adjust the db connection string in .env to point to your local db.</li>
  <li>apply migrations and seeding with command "npx prisma migrate reset".</li>
</ul>


<h3>Start API</h3>
<ul>
  <li>npm i</li>
  <li>npm run build</li>
  <li>npm run start</li>
</ul>


