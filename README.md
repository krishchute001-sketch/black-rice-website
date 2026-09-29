# 🌾 Black Rice D2C E-Commerce Platform

A production-grade, full-stack Direct-to-Consumer (D2C) e-commerce web platform engineered for selling premium organic black rice (Chak-hao) directly to customers.

---

## 🛠️ Tech Stack

### Frontend
- **Framework**: React 18
- **Build Tool**: Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React

### Backend
- **Framework**: Python 3.10+ & FastAPI
- **ORM**: SQLAlchemy
- **Database**: PostgreSQL (with SQLite support for local dev/testing)
- **Migrations**: Alembic
- **Validation**: Pydantic v2
- **Testing**: Pytest

### Version Control
- Git & GitHub

---

## 📁 Project Structure

```text
black-rice-store/
├── PRD.md                   # Source of truth specification
├── README.md                # Project documentation and developer guides
├── .gitignore               # Ignored artifacts, virtual environments, secrets
├── .env.example             # Project environment template
├── backend/
│   ├── app/
│   │   ├── __init__.py
│   │   ├── main.py          # FastAPI application & /health endpoint
│   │   ├── core/
│   │   │   ├── __init__.py
│   │   │   └── config.py    # Environment settings & validation
│   │   ├── db/
│   │   │   ├── __init__.py
│   │   │   └── database.py  # SQLAlchemy engine & session factory
│   │   ├── api/
│   │   │   └── __init__.py
│   │   └── models/
│   │       └── __init__.py
│   ├── alembic/             # Alembic database migration environment
│   ├── tests/
│   │   └── test_health.py   # Health endpoint integration test
│   ├── requirements.txt     # Backend dependencies
│   ├── alembic.ini          # Alembic configuration file
│   └── .env.example         # Backend environment template
└── frontend/
    ├── public/
    ├── src/
    │   ├── components/      # UI components
    │   ├── layouts/         # Layout wrappers
    │   ├── pages/           # Page views (Home, etc.)
    │   ├── services/        # API client and health service
    │   ├── hooks/           # Custom React hooks
    │   ├── types/           # TypeScript type definitions
    │   ├── utils/           # Utility functions
    │   ├── App.tsx          # Main application component
    │   ├── main.tsx         # React mount point
    │   └── index.css        # Tailwind directives and styles
    ├── package.json         # Frontend dependencies and scripts
    ├── vite.config.ts       # Vite configuration
    ├── tsconfig.json        # TypeScript configuration
    ├── tailwind.config.js   # Tailwind theme settings
    ├── postcss.config.js    # PostCSS plugins
    └── .env.example         # Frontend environment template
```

---

## ⚙️ Backend Setup

1. **Navigate to the backend directory:**
   ```bash
   cd backend
   ```

2. **Create and activate a Python virtual environment:**
   ```bash
   python3 -m venv .venv
   source .venv/bin/activate
   ```

3. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

4. **Configure environment variables:**
   ```bash
   cp .env.example .env
   ```

5. **Start the backend server:**
   ```bash
   uvicorn app.main:app --reload --port 8000
   ```
   - Health Check: `http://localhost:8000/health`
   - Swagger Docs: `http://localhost:8000/docs`

---

## 💻 Frontend Setup

1. **Navigate to the frontend directory:**
   ```bash
   cd frontend
   ```

2. **Install Node.js dependencies:**
   ```bash
   npm install
   ```

3. **Configure environment variables:**
   ```bash
   cp .env.example .env
   ```

4. **Start the Vite development server:**
   ```bash
   npm run dev
   ```
   The frontend runs at `http://localhost:5173`.

---

## 🐘 PostgreSQL Setup

1. Ensure PostgreSQL is installed and running:
   ```bash
   brew services start postgresql@16
   ```

2. Create database and user:
   ```sql
   CREATE USER postgres WITH PASSWORD 'postgres';
   CREATE DATABASE blackrice_db OWNER postgres;
   GRANT ALL PRIVILEGES ON DATABASE blackrice_db TO postgres;
   ```

3. Configure `DATABASE_URL` in `backend/.env`:
   ```env
   DATABASE_URL=postgresql://postgres:postgres@localhost:5432/blackrice_db
   ```
   *(Note: `DATABASE_URL=sqlite:///./blackrice.db` is supported for local zero-dependency testing).*

---

## 🧪 Verification & Testing

### Backend Health Check Test
```bash
cd backend
source .venv/bin/activate
pytest tests/ -v
```

### Integration Check
- Backend: `curl http://localhost:8000/health` returns `{"status": "ok"}`
- Frontend: `http://localhost:5173` displays `Backend Status: Connected`
# black-rice-website
