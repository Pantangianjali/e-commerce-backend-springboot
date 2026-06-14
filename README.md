# E-Commerce Full Stack App
React + Spring Boot | Full Stack Project

## What I Built
A full-stack product management app where users can add, view, and delete products. Frontend and backend are fully connected.

## Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | React, JavaScript, CSS |
| Backend | Java 17, Spring Boot 3.2 |
| API | REST (Spring Web) |
| Database | H2 In-Memory |
| ORM | Spring Data JPA |
| Build Tool | Maven |
| Other | Lombok |

## Features
- Add product (name, price, description)
- View all products
- Delete product
- React frontend connected to Spring Boot REST API

## Project Structure

```
e-commerce-backend-springboot/
├── ecommerce-backend/         # Spring Boot REST API
│   └── src/main/java/
│       ├── controller/        # API endpoints
│       ├── service/           # Business logic
│       ├── repository/        # Database layer
│       └── entity/            # Product model
├── src/                       # React frontend
├── public/
└── package.json
```

## How to Run

**Backend**
```
cd ecommerce-backend
mvnw.cmd spring-boot:run
```
Runs on http://localhost:8080

**Frontend**
```
npm install
npm start
```
Runs on http://localhost:3000

## API Endpoints

| Method | URL | Description |
|--------|-----|-------------|
| GET | /api/products | Get all products |
| POST | /api/products | Add new product |
| DELETE | /api/products/{id} | Delete product |

## Author
Anjali Pantangi


