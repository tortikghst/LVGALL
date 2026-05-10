
---

## 📄 Файл `backend/README.md`

```markdown
# GhostEvent Backend

Бэкенд платформы для аренды оборудования.  
Реализован на **NestJS** с использованием **Prisma ORM**, поддерживает JWT-аутентификацию, валидацию, Swagger документацию.

## 📦 Используемые технологии

- NestJS 10
- Prisma 5 (SQLite по умолчанию, поддержка PostgreSQL)
- JWT (passport-jwt)
- bcrypt
- class-validator / class-transformer
- Swagger

## 🚀 Запуск локально (без Docker)

```bash
# 1. Клонирование
git clone https://github.com/tortikghst/GhostEvent.git
cd GhostEvent/backend

# 2. Установка зависимостей
npm install

# 3. Настройка окружения
cp .env.example .env   # или создайте .env вручную