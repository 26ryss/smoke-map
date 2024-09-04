// // this file is used to seed the database with placeholder data

// import bcrypt from 'bcrypt';
// import { db } from '@vercel/postgres';
// import { users, areas, stores } from '@/app/lib/placeholder-data';

// const client = await db.connect();

// async function dropTables() {
//   await client.sql`
//     DROP TABLE IF EXISTS reviews;
//     DROP TABLE IF EXISTS images;
//     DROP TABLE IF EXISTS votes;
//     DROP TABLE IF EXISTS likes;
//     DROP TABLE IF EXISTS stores;
//     DROP TABLE IF EXISTS areas;
//     DROP TABLE IF EXISTS users;
//   `;
// }

// async function seedUsers() {
//   await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
//   await client.sql`
//     CREATE TABLE IF NOT EXISTS users (
//       id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
//       display_name VARCHAR(255) NOT NULL,
//       name VARCHAR(255) NOT NULL,
//       email TEXT NOT NULL UNIQUE,
//       password TEXT NOT NULL,
//       created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
//     );
//   `;

//   const insertedUsers = await Promise.all(
//     users.map(async (user) => {
//       const hashedPassword = await bcrypt.hash(user.password, 10);
//       return client.sql`
//         INSERT INTO users (display_name, name, email, password)
//         VALUES (${user.display_name}, ${user.name}, ${user.email}, ${hashedPassword})
//         ON CONFLICT (id) DO NOTHING;
//       `
//     })
//   );

//   return insertedUsers;
// }

// async function seedAreas() {
//   await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

//   await client.sql`
//     CREATE TABLE IF NOT EXISTS areas (
//       id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
//       name VARCHAR(255) NOT NULL,
//       latitude DECIMAL NOT NULL,
//       longitude DECIMAL NOT NULL
//     );
//   `;

//   const insertedAreas = await Promise.all(
//     areas.map(
//       (area) => client.sql`
//         INSERT INTO areas (id, name, latitude, longitude)
//         VALUES (${area.id}, ${area.name}, ${area.latitude}, ${area.longitude})
//         ON CONFLICT (id) DO NOTHING;
//       `,
//     ),
//   );

//   return insertedAreas;
// }

// async function seedStores() {
//   await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

//   await client.sql`
//     CREATE TABLE IF NOT EXISTS stores (
//       id SERIAL PRIMARY KEY,
//       name VARCHAR(255) NOT NULL,
//       address TEXT NOT NULL,
//       area_id UUID NOT NULL,
//       description TEXT,
//       url TEXT,
//       eye_catch_url TEXT,
//       latitude DECIMAL NOT NULL,
//       longitude DECIMAL NOT NULL
//       );
//     `;
  
//   const insertedStores = await Promise.all(
//     stores.map(
//       (store) => client.sql`
//         INSERT INTO stores (name, address, area_id, description, url, eye_catch_url, latitude, longitude)
//         VALUES(${store.name}, ${store.address}, ${store.area_id}, ${store.description}, ${store.url}, ${store.eye_catch_url}, ${store.latitude}, ${store.longitude})
//         ON CONFLICT (id) DO NOTHING;
//       `,
//     ),
//   );

//   return insertedStores;
// }

// async function seedLikes() {
//   await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

//   await client.sql`
//     CREATE TABLE IF NOT EXISTS likes (
//       id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
//       user_id UUID NOT NULL,
//       store_id INT NOT NULL
//       );
//     `;
// }

// async function seedVotes() {
//   await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

//   await client.sql`
//     CREATE TABLE IF NOT EXISTS votes (
//       id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
//       user_id UUID NOT NULL,
//       store_id INT NOT NULL,
//       is_able_to_smoke BOOLEAN NOT NULL
//       );
//     `;
// }

// async function seedImages() {
//   await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

//   await client.sql`
//     CREATE TABLE IF NOT EXISTS images (
//       id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
//       store_id INT NOT NULL,
//       image_url TEXT NOT NULL
//       );
//     `;
// }

// async function seedReviews() {
//   await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

//   await client.sql`
//     CREATE TABLE IF NOT EXISTS reviews (
//       id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
//       user_id UUID NOT NULL,
//       store_id INT NOT NULL,
//       rating INT NOT NULL CHECK (rating IN (1, 2, 3, 4, 5)),
//       comment TEXT
//       );
//     `;
// }

// export async function GET() {
//   return Response.json({
//     message:
//       'Uncomment this file and remove this line. You can delete this file when you are finished.',
//   });
//   try {
//     await client.sql`BEGIN`;

//     await dropTables();
//     await seedUsers();
//     await seedAreas();
//     await seedStores();
//     await seedLikes();
//     await seedVotes();
//     await seedImages();
//     await seedReviews();
//     await client.sql`COMMIT`;

//     return Response.json({ message: 'Database seeded successfully' });
//   } catch (error) {
//     await client.sql`ROLLBACK`;
//     return Response.json({ error }, { status: 500 });
//   }
// }