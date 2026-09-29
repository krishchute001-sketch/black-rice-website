# Black Rice E-Commerce Platform — PRD

## 1. Project Overview

### Product
A production-ready, full-stack e-commerce website for selling premium black rice directly to customers.

### Objective
Build a professional, clean, fast and scalable online store with:

- Modern React frontend
- FastAPI backend
- PostgreSQL database
- Optional Redis integration
- Secure authentication
- Product/catalog management
- Cart and wishlist
- Checkout and payments
- Order management and tracking
- Customer reviews
- Coupon/discount management
- Admin dashboard
- Responsive mobile-first UI

The application must be fully functional. No fake/mock-only flows should be used for core functionality.

---

# 2. Goals

## Primary Goals

1. Sell black rice online.
2. Provide a premium and trustworthy shopping experience.
3. Build a reusable e-commerce architecture.
4. Support real orders and payments.
5. Provide a complete admin dashboard.
6. Keep the architecture scalable for future products.

## Secondary Goals

- SEO-friendly product pages
- Fast performance
- Strong security
- Analytics-ready architecture
- Easy deployment
- Easy future expansion into other healthy-food products

---

# 3. Target Users

### Customers

- Health-conscious consumers
- Fitness customers
- Families
- Premium food buyers
- Customers looking for specialty rice

### Admin

Business owner/store administrator who manages:

- Products
- Inventory
- Orders
- Customers
- Coupons
- Reviews
- Payments
- Website content

---

# 4. Tech Stack

## Backend

### FastAPI
Primary backend framework.

Responsibilities:

- REST APIs
- Authentication
- Authorization
- Business logic
- Validation
- Payment integration
- Order processing
- Admin APIs

### PostgreSQL

Primary relational database.

Stores:

- Users
- Products
- Categories
- Product variants
- Cart
- Wishlist
- Orders
- Order items
- Payments
- Addresses
- Reviews
- Coupons
- Inventory
- Notifications

### Redis — Optional

Use Redis only where useful:

- Caching
- Rate limiting
- Session/cache support
- Background job support
- Temporary data

Redis must not be required for the initial local-development setup.

### SQLAlchemy

ORM/database layer.

### Pydantic

Request and response validation.

### Alembic

Database migrations.

### Authentication

JWT-based authentication with secure password hashing.

---

# 5. Frontend

## React + Vite

Responsibilities:

- Customer-facing website
- Admin dashboard
- API integration
- Client-side state management
- Routing

## Tailwind CSS

Used for:

- Responsive design
- Component styling
- Layout
- Typography
- Responsive breakpoints
- UI states

## Frontend Supporting Libraries

Recommended:

- React Router
- TanStack Query
- Axios or Fetch
- React Hook Form
- Zod where appropriate
- Lucide React for icons

Avoid unnecessary libraries.

---

# 6. Version Control

## Git

Use Git for:

- Version control
- Feature branches
- Commit history
- Rollbacks

## GitHub

Repository should contain:

```text
README.md
PRD.md
.env.example
.gitignore
backend/
frontend/
```

Never commit:

- `.env`
- Passwords
- API keys
- JWT secrets
- Payment secrets
- Database credentials

---

# 7. High-Level Architecture

```text
                    BLACK RICE E-COMMERCE
                            |
              +-------------+-------------+
              |                           |
        React + Vite                  FastAPI
        Tailwind CSS                     |
              |                          /|\
              |                         / | \
              |                        /  |  \
              |                       /   |   \
              |                 PostgreSQL Redis
              |                       |
              +-----------------------+
                            |
                   External Services
                            |
                +-----------+-----------+
                |                       |
             Razorpay                Cloudinary
             Payments               Product Images
```

---

# 8. User Roles

## Customer

Can:

- Register
- Login
- Browse products
- Search
- Filter
- View products
- Add to cart
- Manage wishlist
- Checkout
- Pay
- View orders
- Track orders
- Manage addresses
- Write reviews
- Manage profile

## Admin

Can:

- Login to admin dashboard
- Manage products
- Manage categories
- Manage inventory
- Manage orders
- Manage customers
- Manage reviews
- Manage coupons
- View payments
- View analytics
- Update order status

---

# 9. Frontend Pages

## Public Pages

### Home

Sections:

1. Announcement bar
2. Navbar
3. Hero
4. Featured product
5. Why black rice
6. Benefits
7. Best sellers
8. How to cook
9. Recipes
10. Customer reviews
11. Brand story
12. FAQ
13. Newsletter
14. Footer

### Shop

Features:

- Product grid
- Search
- Category filter
- Price filter
- Weight filter
- Rating filter
- Sort
- Pagination/infinite loading

### Product Details

Display:

- Product images
- Product name
- Rating
- Reviews count
- Price
- MRP
- Discount
- Variants
- Stock
- Description
- Nutritional information
- Cooking instructions
- Reviews
- Related products

Actions:

- Add to Cart
- Buy Now
- Add to Wishlist

### About

Include:

- Brand story
- Mission
- Values
- Sourcing
- Quality process

### Recipes

Recipe listing and individual recipe pages.

### FAQ

Frequently asked customer questions.

### Contact

Include:

- Contact form
- Email
- Phone
- WhatsApp
- Business information

---

# 10. Customer Account

## Authentication Pages

- Login
- Register
- Forgot Password
- Reset Password

## Account Dashboard

Sections:

- Overview
- Profile
- Orders
- Order details
- Addresses
- Wishlist
- Reviews
- Logout

---

# 11. Cart

Cart must be fully functional.

Features:

- Add item
- Remove item
- Increase quantity
- Decrease quantity
- Variant selection
- Stock validation
- Coupon application
- Subtotal calculation
- Shipping calculation
- Tax calculation
- Final total

Cart data should be associated with the authenticated user.

For guest users, local cart storage may be used and merged into the account after login.

---

# 12. Checkout

Checkout should be simple and clean.

## Step 1 — Address

Fields:

- Full name
- Phone
- Email
- Address
- Apartment/house
- City
- State
- PIN code

## Step 2 — Order Summary

Display:

- Products
- Quantity
- Subtotal
- Discount
- Shipping
- Tax
- Total

## Step 3 — Payment

Support:

- UPI
- Cards
- Net banking
- Wallets
- COD if enabled

Payment provider:

Razorpay or another suitable Indian payment gateway.

---

# 13. Payment Flow

```text
Customer
   |
Checkout
   |
Create Order
   |
Create Payment
   |
Payment Gateway
   |
Payment Success
   |
Verify Payment Server-Side
   |
Update Payment
   |
Confirm Order
   |
Show Success Page
```

The frontend must never be trusted to confirm successful payment.

Payment must be verified on the backend.

Implement payment webhooks where supported.

---

# 14. Order Management

Order statuses:

```text
PLACED
PAYMENT_CONFIRMED
PROCESSING
PACKED
SHIPPED
OUT_FOR_DELIVERY
DELIVERED
CANCELLED
REFUNDED
```

Customers can:

- View order
- View items
- View amount
- View payment status
- View shipping address
- Track status
- View tracking number

Admin can update order status.

---

# 15. Product Management

Product fields:

```text
id
name
slug
description
short_description
category_id
images
sku
brand
ingredients
nutritional_information
is_active
is_featured
created_at
updated_at
```

Product variants:

```text
id
product_id
weight
price
mrp
stock
sku
is_active
```

Example:

```text
Black Rice
├── 500g
├── 1kg
├── 2kg
└── 5kg
```

---

# 16. Inventory

Inventory must be database-driven.

Features:

- Stock quantity
- Low-stock threshold
- Out-of-stock state
- Stock updates
- Stock validation during checkout
- Prevent purchase when insufficient stock

Admin dashboard should show low-stock products.

---

# 17. Wishlist

Customer can:

- Add product
- Remove product
- View wishlist
- Move product to cart

Wishlist requires authentication.

---

# 18. Reviews

Customers can review purchased products.

Review fields:

```text
rating
title
comment
images
user_id
product_id
verified_purchase
created_at
```

Admin can:

- Approve
- Reject
- Delete reviews

Only genuine customer reviews should be displayed as verified purchases.

---

# 19. Coupons

Coupon types:

- Percentage discount
- Fixed amount discount
- Minimum order amount
- Maximum discount
- Expiry date
- Usage limit
- Per-user usage limit
- Product-specific coupon

Example:

```text
Code: BLACK10
Discount: 10%
Minimum order: ₹499
Expiry: configurable
```

Coupon validation must happen on the backend.

---

# 20. Search

Search should support:

- Product name
- Category
- Description
- SKU

Example searches:

```text
black rice
1kg rice
premium rice
```

Search should return relevant products quickly.

---

# 21. UI/UX Requirements

The website must look like a premium D2C food brand, not a basic college project.

## Design Principles

- Clean
- Minimal
- Premium
- Modern
- Trustworthy
- Mobile-first
- Accessible
- Fast

## Visual Direction

Suggested palette:

```text
Charcoal: #171717
Cream:    #FAF7F0
Gold:     #C9A227
Green:    #4F6F52
White:    #FFFFFF
```

Use the palette consistently.

## Typography

Recommended:

- Headings: Playfair Display / similar premium serif
- Body: Inter / similar sans-serif

---

# 22. Responsive Design

Must support:

- Mobile
- Tablet
- Laptop
- Desktop

Mobile navigation should include:

```text
Home
Shop
Search
Wishlist
Cart
```

---

# 23. UI Components

Create reusable components:

```text
Navbar
Footer
Button
Input
Select
Modal
Toast
ProductCard
ProductGrid
ProductGallery
PriceDisplay
RatingStars
QuantitySelector
CartItem
OrderCard
ReviewCard
Badge
Skeleton
Pagination
SearchBar
FilterPanel
Breadcrumb
```

Avoid duplicating UI code.

---

# 24. Loading & Error States

Every asynchronous operation must have proper states.

Examples:

- Loading skeleton
- Empty state
- Error state
- Success toast
- Validation error
- Network error

Example:

```text
Your cart is empty.

[Start Shopping]
```

---

# 25. Backend API Structure

Base URL:

```text
/api/v1
```

## Authentication

```text
POST /auth/register
POST /auth/login
POST /auth/refresh
POST /auth/logout
POST /auth/forgot-password
POST /auth/reset-password
GET  /auth/me
```

## Products

```text
GET    /products
GET    /products/{slug}
POST   /products
PATCH  /products/{id}
DELETE /products/{id}
```

## Categories

```text
GET    /categories
POST   /categories
PATCH  /categories/{id}
DELETE /categories/{id}
```

## Cart

```text
GET    /cart
POST   /cart/items
PATCH  /cart/items/{id}
DELETE /cart/items/{id}
DELETE /cart
```

## Wishlist

```text
GET    /wishlist
POST   /wishlist/{product_id}
DELETE /wishlist/{product_id}
```

## Orders

```text
POST /orders
GET  /orders
GET  /orders/{id}
POST /orders/{id}/cancel
```

## Payments

```text
POST /payments/create
POST /payments/verify
POST /payments/webhook
```

## Reviews

```text
GET  /products/{id}/reviews
POST /products/{id}/reviews
PATCH /reviews/{id}
DELETE /reviews/{id}
```

## Coupons

```text
POST /coupons/validate
POST /admin/coupons
PATCH /admin/coupons/{id}
DELETE /admin/coupons/{id}
```

---

# 26. Admin Dashboard

Admin route:

```text
/admin
```

## Dashboard

Display:

- Revenue
- Orders
- Customers
- Products
- Low stock
- Pending orders
- Recent orders
- Recent reviews

## Admin Pages

```text
/admin
/admin/products
/admin/products/new
/admin/products/:id
/admin/categories
/admin/orders
/admin/orders/:id
/admin/customers
/admin/reviews
/admin/coupons
/admin/payments
/admin/settings
```

---

# 27. Database Design

## users

```text
id
name
email
phone
password_hash
role
is_active
created_at
updated_at
```

## addresses

```text
id
user_id
full_name
phone
address_line
city
state
postal_code
country
is_default
created_at
updated_at
```

## categories

```text
id
name
slug
description
image
is_active
created_at
updated_at
```

## products

```text
id
category_id
name
slug
description
short_description
brand
ingredients
nutrition_data
is_active
is_featured
created_at
updated_at
```

## product_variants

```text
id
product_id
name
weight
sku
price
mrp
stock
low_stock_threshold
is_active
created_at
updated_at
```

## carts

```text
id
user_id
created_at
updated_at
```

## cart_items

```text
id
cart_id
variant_id
quantity
created_at
updated_at
```

## wishlists

```text
id
user_id
created_at
```

## wishlist_items

```text
id
wishlist_id
product_id
created_at
```

## orders

```text
id
order_number
user_id
subtotal
discount
shipping
tax
total
payment_status
order_status
shipping_address_snapshot
created_at
updated_at
```

## order_items

```text
id
order_id
variant_id
product_name_snapshot
variant_name_snapshot
quantity
unit_price
total_price
```

Use snapshots so historical orders remain correct even if product details change later.

## payments

```text
id
order_id
provider
provider_payment_id
amount
currency
status
method
created_at
updated_at
```

## reviews

```text
id
user_id
product_id
rating
title
comment
verified_purchase
status
created_at
updated_at
```

## coupons

```text
id
code
type
value
minimum_order_value
maximum_discount
usage_limit
per_user_limit
expires_at
is_active
created_at
updated_at
```

---

# 28. Backend Project Structure

Recommended:

```text
backend/
├── app/
│   ├── main.py
│   │
│   ├── api/
│   │   └── v1/
│   │       ├── auth.py
│   │       ├── products.py
│   │       ├── categories.py
│   │       ├── cart.py
│   │       ├── wishlist.py
│   │       ├── orders.py
│   │       ├── payments.py
│   │       ├── reviews.py
│   │       └── admin.py
│   │
│   ├── core/
│   │   ├── config.py
│   │   ├── security.py
│   │   └── dependencies.py
│   │
│   ├── db/
│   │   ├── database.py
│   │   └── models/
│   │
│   ├── schemas/
│   │
│   ├── services/
│   │   ├── auth_service.py
│   │   ├── order_service.py
│   │   ├── payment_service.py
│   │   └── inventory_service.py
│   │
│   └── utils/
│
├── alembic/
├── tests/
├── requirements.txt
├── .env.example
└── README.md
```

---

# 29. Frontend Project Structure

```text
frontend/
├── src/
│   ├── assets/
│   │
│   ├── components/
│   │   ├── common/
│   │   ├── layout/
│   │   ├── product/
│   │   ├── cart/
│   │   ├── checkout/
│   │   └── admin/
│   │
│   ├── pages/
│   │   ├── Home/
│   │   ├── Shop/
│   │   ├── Product/
│   │   ├── Cart/
│   │   ├── Checkout/
│   │   ├── Account/
│   │   ├── Orders/
│   │   ├── Auth/
│   │   └── Admin/
│   │
│   ├── hooks/
│   ├── services/
│   ├── api/
│   ├── context/
│   ├── types/
│   ├── utils/
│   ├── routes/
│   ├── App.tsx
│   └── main.tsx
│
├── public/
├── .env.example
├── package.json
└── README.md
```

---

# 30. Authentication Architecture

Use:

- Password hashing
- JWT access token
- Refresh token
- Role-based authorization
- Protected routes

Roles:

```text
CUSTOMER
ADMIN
```

Admin endpoints must reject customer accounts.

Passwords must never be stored as plaintext.

---

# 31. Security Requirements

Backend must implement:

- CORS configuration
- Input validation
- SQL injection protection through ORM/parameterized queries
- Secure password hashing
- JWT validation
- Rate limiting where appropriate
- Secure HTTP headers
- Request size limits
- Authentication on protected endpoints
- Authorization on admin endpoints
- Payment signature verification
- Environment-based secrets

Never expose secrets to the React frontend.

---

# 32. Product Images

Use Cloudinary or another object-storage/CDN solution.

Images should be:

- Compressed
- Responsive
- Web-optimized
- Lazy-loaded

Do not store large binary images directly inside PostgreSQL.

---

# 33. SEO

React pages should have appropriate metadata.

Include:

- Title
- Description
- Canonical URL
- Open Graph metadata
- Product structured data
- Sitemap
- Robots.txt

Important product URL:

```text
/products/black-rice-1kg
```

---

# 34. Performance

Target:

- Fast initial page load
- Optimized images
- Lazy loading
- Code splitting
- API pagination
- Database indexes
- Efficient queries

Use Redis later for high-value caching rather than prematurely caching everything.

---

# 35. Accessibility

Follow accessible UI practices:

- Semantic HTML
- Keyboard navigation
- Visible focus states
- Accessible forms
- Proper labels
- Alt text
- Sufficient contrast
- Screen-reader-friendly controls

---

# 36. Notifications

Support future integration for:

- Email
- WhatsApp
- SMS

Important notifications:

- Registration
- Order placed
- Payment confirmed
- Order shipped
- Out for delivery
- Delivered
- Cancellation
- Refund

---

# 37. Business Rules

### Stock

A customer cannot purchase more units than available stock.

### Payment

An order must not become paid solely because the frontend says payment succeeded.

### Coupon

Coupon validity must be checked server-side.

### Reviews

Only customers who purchased a product should receive a verified-purchase status.

### Orders

Historical order information must remain accurate even if product prices or names change.

---

# 38. Food/Product Information

Product pages may include:

- Origin
- Ingredients
- Weight
- Nutrition
- Cooking instructions
- Storage instructions
- Shelf life
- Packaging information
- Manufacturer/marketer information
- Applicable certifications

Only use claims that can be verified.

Do not make unsupported medical claims such as claiming that the product cures or treats a disease.

---

# 39. Legal Pages

Include:

- Privacy Policy
- Terms & Conditions
- Shipping Policy
- Cancellation Policy
- Refund Policy

Food/e-commerce compliance requirements in India should be verified before launch, including applicable FSSAI, labeling, GST, packaging and other requirements.

---

# 40. Analytics

Prepare integration for:

- Google Analytics
- Google Search Console
- Meta Pixel if advertising is used

Track:

- Product views
- Add to cart
- Checkout started
- Payment completed
- Purchase
- Search
- Coupon usage

---

# 41. Testing

## Backend

Test:

- Authentication
- Authorization
- Product APIs
- Cart
- Checkout
- Orders
- Payment verification
- Coupon validation
- Inventory

Recommended:

- Pytest
- FastAPI TestClient

## Frontend

Test:

- Components
- Forms
- Cart behavior
- Checkout behavior
- Protected routes
- API error states

## End-to-End

Test complete flow:

```text
Register
↓
Login
↓
Browse product
↓
Add to cart
↓
Checkout
↓
Payment
↓
Order confirmation
↓
Order tracking
```

---

# 42. Environment Variables

Backend:

```env
DATABASE_URL=
JWT_SECRET_KEY=
JWT_ALGORITHM=
ACCESS_TOKEN_EXPIRE_MINUTES=

REDIS_URL=

RAZORPAY_KEY_ID=
RAZORPAY_KEY_SECRET=

CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=

FRONTEND_URL=
```

Frontend:

```env
VITE_API_BASE_URL=
VITE_RAZORPAY_KEY_ID=
```

Only public frontend configuration should use `VITE_` variables.

Never put secret keys in frontend environment variables.

---

# 43. Local Development

## Backend

```bash
cd backend

python -m venv .venv

source .venv/bin/activate

pip install -r requirements.txt

uvicorn app.main:app --reload
```

API:

```text
http://localhost:8000
```

Swagger:

```text
http://localhost:8000/docs
```

## Frontend

```bash
cd frontend

npm install

npm run dev
```

Frontend:

```text
http://localhost:5173
```

---

# 44. Git Workflow

Recommended branches:

```text
main
develop
feature/*
fix/*
```

Example:

```bash
git checkout -b feature/product-page

git add .

git commit -m "feat: add product details page"

git push origin feature/product-page
```

Use meaningful commit messages.

---

# 45. MVP Scope

## Customer

- [ ] Home
- [ ] Shop
- [ ] Product details
- [ ] Search
- [ ] Product filtering
- [ ] Register/login
- [ ] Cart
- [ ] Wishlist
- [ ] Address management
- [ ] Checkout
- [ ] Payment
- [ ] Order confirmation
- [ ] Order history
- [ ] Order tracking
- [ ] Reviews

## Admin

- [ ] Dashboard
- [ ] Product management
- [ ] Category management
- [ ] Inventory
- [ ] Order management
- [ ] Customer management
- [ ] Review management
- [ ] Coupon management
- [ ] Payment visibility

## Infrastructure

- [ ] PostgreSQL
- [ ] FastAPI
- [ ] React + Vite
- [ ] Tailwind CSS
- [ ] Authentication
- [ ] Payment gateway
- [ ] Image storage
- [ ] API documentation
- [ ] GitHub repository
- [ ] Deployment

---

# 46. Phase 2

After MVP:

- [ ] Recipes
- [ ] Blog
- [ ] Newsletter
- [ ] WhatsApp integration
- [ ] Abandoned cart
- [ ] Product recommendations
- [ ] Advanced analytics
- [ ] Loyalty points
- [ ] Referral program

---

# 47. Phase 3

Future:

- [ ] Multiple healthy-food products
- [ ] Subscription orders
- [ ] Recurring payments
- [ ] Affiliate program
- [ ] Advanced CRM
- [ ] Personalized recommendations
- [ ] Mobile app

---

# 48. Acceptance Criteria

The project is complete only when:

- [ ] Frontend and backend communicate through real APIs
- [ ] PostgreSQL stores production data
- [ ] Authentication works
- [ ] Customer authorization works
- [ ] Admin authorization works
- [ ] Products are database-driven
- [ ] Cart is functional
- [ ] Wishlist is functional
- [ ] Checkout is functional
- [ ] Payment integration works
- [ ] Payment is verified server-side
- [ ] Orders are stored correctly
- [ ] Inventory updates correctly
- [ ] Admin can manage products
- [ ] Admin can manage orders
- [ ] Reviews work
- [ ] Coupons work
- [ ] Responsive UI works on mobile/tablet/desktop
- [ ] Loading and error states exist
- [ ] API validation exists
- [ ] Security requirements are implemented
- [ ] Tests cover critical functionality
- [ ] No secrets are committed
- [ ] README contains setup instructions
- [ ] Application can be deployed

---

# 49. Final Product Vision

The final application should feel like a real premium D2C food company.

It should NOT look like:

- A basic college project
- A static HTML website
- A frontend template
- A fake e-commerce demo
- An application using hardcoded product data

It should feel like a real online store with:

```text
Premium UI
+
Real Backend
+
Real Database
+
Real Authentication
+
Real Cart
+
Real Checkout
+
Real Payment
+
Real Orders
+
Real Admin Dashboard
```

The architecture must remain clean enough that additional products can be added later without rebuilding the application.

---

# 50. Definition of Success

A customer should be able to:

```text
Visit website
    ↓
Discover black rice
    ↓
View product
    ↓
Choose quantity
    ↓
Add to cart
    ↓
Login/Register
    ↓
Enter address
    ↓
Pay
    ↓
Receive confirmation
    ↓
Track order
    ↓
Receive product
    ↓
Submit review
```

At the same time, the business owner should be able to:

```text
Login to Admin
    ↓
Add/Edit Products
    ↓
Manage Stock
    ↓
View Orders
    ↓
Update Shipping Status
    ↓
Manage Customers
    ↓
Manage Coupons
    ↓
Manage Reviews
    ↓
View Sales
```

The complete system should be maintainable, secure, responsive, scalable and ready for real-world deployment.
