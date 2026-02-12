#!/bin/bash

echo "🚀 Starting M.M.M. Ndawana CMS System..."
echo ""
echo "📝 Test Credentials:"
echo "   Admin: admin@mmm-ndawana.ao / admin123"
echo "   Editor: editor@mmm-ndawana.ao / editor123"
echo ""
echo "🌐 URLs:"
echo "   Frontend: http://localhost:5173"
echo "   Backend API: http://localhost:3001"
echo ""
echo "Starting servers..."
echo ""

# Start backend in background
echo "🔧 Starting Backend API..."
npm run server:dev &
BACKEND_PID=$!

# Wait a bit for backend to start
sleep 3

# Start frontend
echo "🎨 Starting Frontend..."
npm run dev

# When frontend is stopped, also stop backend
kill $BACKEND_PID
