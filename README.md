# web-blogfolio
# 🌤️ Blogfolio – Full-Stack Personal Website

A clean, sky-themed personal portfolio and blog built with **Django (backend)** and **React + Vite (frontend)**.  
The goal: a modern, creative “blogfolio” where you can showcase projects, write posts, and manage content easily.

---

## 🧱 Tech Stack

### Frontend
- ⚛ **React 18 + Vite 5** – fast dev server, instant HMR, simple build setup
- 🎨 **SCSS / CSS Modules** – custom styling with a chill, glass-like aesthetic  
- 🌈 **Custom Icons & Assets** – pastel-themed flower, planet, and sky icons
- 📦 **NPM / Node v24+** – package management and local tooling
- 🌍 **React Router DOM** *(optional)* – navigation between Home, About, Blog, Projects, Contact

### Backend
- 🐍 **Django 5 / Python 3.12** – REST-ready backend with ORM and admin panel
- 🗃 **SQLite 3** – lightweight local database for development
- ⚙️ **Django REST Framework (optional)** – for serving JSON API endpoints to React
- 🌐 **ASGI / WSGI** – configured in `config/asgi.py` and `config/wsgi.py`

### Dev Ops / Deployment (Planned)
- ☁ **Vite Build → Django Static Files** for production integration
- 🚀 **Heroku / Render / Vercel** – possible deployment targets
- 🔒 **Virtual Env (.venv)** – Python environment isolation
- 🧰 **Procfile + requirements.txt** – for easy deployment setup

---


---

## ⚙️ Getting Started

### 1️⃣ Backend (Django)
```
cd backend
python -m venv .venv
.\.venv\Scripts\activate   # or source .venv/bin/activate on Mac/Linux
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
````
###2️⃣ Frontend (React + Vite)
```
cd frontend
npm install
npm run dev
```

#Vite proxy to Django (set in vite.config.js)
server: { proxy: { '/api': 'http://127.0.0.1:8000' } }

🖼️ Design Highlights

Pastel sky background (sky-bg.jpg)

Minimalist glass-effect containers

Soft icons for header, footer, and pages:

🏡 Home – blue flower

👤 About Me – personal portrait icon

🪐 Blog – pink planet

🌞 Projects – golden sun

💬 Contact – purple bubble group


