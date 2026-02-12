# M.M.M. Ndawana Showcase - CMS & RBAC System

A modern institutional website with a powerful admin dashboard featuring content management and role-based access control.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or bun package manager

### Installation

1. **Install dependencies**:
```bash
npm install
```

2. **Set up the database**:
```bash
# Run migrations
npm run db:migrate

# Seed initial data
npm run db:seed
```

3. **Start the development servers**:

Open two terminal windows:

**Terminal 1 - Backend Server**:
```bash
npm run server:dev
```
Server runs on: http://localhost:3001

**Terminal 2 - Frontend**:
```bash
npm run dev
```
Frontend runs on: http://localhost:5173

## 🔐 Test Credentials

After seeding the database, you can log in with:

- **Admin Account**:
  - Email: `admin@mmm-ndawana.ao`
  - Password: `admin123`
  - Full access to all features

- **Editor Account**:
  - Email: `editor@mmm-ndawana.ao`
  - Password: `editor123`
  - Limited to content management

## 📋 Features

### ✅ Implemented
- JWT-based authentication
- Role-Based Access Control (RBAC)
- User management (Admin only)
- Contact form with message inbox
- Dynamic content management
- SQLite database with Prisma ORM
- RESTful API with Express
- Protected routes
- Password hashing (bcryptjs)

### 🚧 To Be Completed
- Dashboard content management UI
- Messages inbox UI
- Permissions management UI
- Dynamic content loading on landing page
- Contact form integration

## 🛠️ Available Scripts

### Development
- `npm run dev` - Start frontend development server
- `npm run server:dev` - Start backend API server
- `npm run build` - Build for production

### Database
- `npm run db:migrate` - Run database migrations
- `npm run db:seed` - Seed database with initial data
- `npm run db:studio` - Open Prisma Studio (database GUI)

## 📚 API Endpoints

### Authentication (`/api/auth`)
- `POST /register` - Register new user
- `POST /login` - Login user

### Users (`/api/users`)
- `GET /` - Get all users (Admin)
- `GET /me` - Get current user
- `PATCH /:id/role` - Update user role (Admin)
- `DELETE /:id` - Delete user (Admin)
- `PATCH /me` - Update profile

### Content (`/api/content`)
- `GET /` - Get all content
- `GET /section/:section` - Get by section
- `PUT /` - Update content
- `PUT /batch` - Batch update
- `DELETE /:key` - Delete content

### Contact (`/api/contact`)
- `POST /` - Submit message
- `GET /` - Get all messages
- `GET /unread/count` - Get unread count
- `PATCH /:id/read` - Mark as read
- `DELETE /:id` - Delete message

## 📁 Project Structure

```
mmm-ndawana-showcase/
├── prisma/                 # Database schema and migrations
│   ├── schema.prisma
│   ├── seed.ts
│   └── dev.db
├── server/                 # Backend API
│   ├── index.ts           # Express app
│   ├── db.ts              # Prisma client
│   ├── types.ts           # TypeScript types
│   ├── middleware/
│   │   └── auth.ts        # JWT & RBAC middleware
│   └── routes/
│       ├── auth.ts
│       ├── users.ts
│       ├── content.ts
│       └── contact.ts
└── src/                    # Frontend React app
    ├── components/        # UI components
    ├── contexts/          # React contexts
    ├── lib/
    │   └── api.ts        # API service layer
    └── pages/            # Application pages
```

## 🔒 Security

- Passwords are hashed using bcryptjs
- JWT tokens with 7-day expiration
- Protected API routes
- Role-based authorization
- Environment variables for secrets

## 📖 Documentation

See [IMPLEMENTATION_GUIDE.md](./IMPLEMENTATION_GUIDE.md) for detailed implementation information and next steps.

## 🤝 Contributing

This is a private project for M.M.M. Ndawana, LDA.

## 📄 License

Private and Proprietary
