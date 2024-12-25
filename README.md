# Venmo Project

It is a payment application very similar to Venmo (at least the landing page 😅) or Paytm. 

- Users can receive money to their wallet from their bank account.
- Users can send/receive money from their friends and family.
- Merchant App is still pending (not complete)

<img width="1470" alt="Screenshot 2024-12-23 at 12 16 16 PM" src="https://github.com/user-attachments/assets/576b289a-d390-4ee4-9aaa-b356ff62fc29" />


## Tech Stack

- Turborepo as the monorepo
- NextJs as both for FE and BE for the User App
- NextAuth for authentication
- Postgres as the DB and Prisma as the ORM
- Express for the banking webhook (fake bank webhook)
- ShadCN for ui components


## Steps to run it locally

- Clone the repo (a star would be appreciated)
- Run the command "npm install" globally
- Start a postrges instance locally or get an online URL and copy paste the database url to apps/packages/db/.env
- Run the command "npm run dev" in the root folder 
