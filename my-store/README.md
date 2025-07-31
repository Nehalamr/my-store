# 🛍️ MyStore Project

## 📋 Description
MyStore is a simple e-commerce web app built with React.  
It uses [FakeStoreAPI](https://fakestoreapi.com/) to fetch and display products in a user-friendly, responsive interface.

---

## 🧰 Technologies Used
- React
- React Router DOM
- Bootstrap
- Axios
- Vite

---

## 📂 Project Structure

my-store/
├── public/
├── screenshots/
│ ├── home.png
│ ├── products.png
│ ├── details.png
│ └── 404.png
├── src/
│ ├── components/
│ │ ├── Navbar.jsx
│ │ └── Footer.jsx
│ ├── pages/
│ │ ├── Home.jsx
│ │ ├── ProductList.jsx
│ │ ├── ProductDetails.jsx
│ │ └── NotFound.jsx
│ ├── App.jsx
│ ├── main.jsx
│ └── index.css
├── README.md
└── package.json

yaml
Copy
Edit

---

## 📄 Pages

| Path            | Description             |
|-----------------|-------------------------|
| `/`             | Home page               |
| `/products`     | Product list page       |
| `/products/:id` | Product details page    |
| `*`             | 404 Not Found page      |

---

## 📷 Screenshots

> Screenshots are located in the `/screenshots` folder.

- ![Home](./screenshots/home.png)
- ![Products](./screenshots/products.png)
- ![Details](./screenshots/details.png)
- ![404](./screenshots/404.png)

---

## ▶️ How to Run the Project

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPO.git
cd my-store
npm install
npm run dev