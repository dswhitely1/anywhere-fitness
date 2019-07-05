# azra-be

steps:
1) Yarn init
2) Fill out the package.json file with the info required
2) Yarn install
3) yarn add nodemon express helmet knex sqlite3 cors bcryptjs express-session connect-session-knex jsonwebtoken jest


//Refactoring needed:
Things to refactor:

- Add middleware to check instructor/client ID is there 
- Make the classes name not unique [primary key pairing]
- Get Category name instead of id returned by doing another join for when you get classes by instructor id
- make the default text for the date field in Classes table be “YYY-MM-DD”
- Check if the instructor ID exists in the system before GET instructor/:id/classes
- Make it such that instructor 1 can’t delete instructor 2’s shit
- Combine client + instructor Login and do roles

