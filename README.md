# Let's Go! React with Go Complete Fullstack App - TypeScript, React Query, MongoDB, ChakraUI

![Demo App](https://i.ibb.co/JvRTWmW/Group-93.png)

A full-stack **Go + React + MongoDB** tutorial app featuring **CRUD operations**, **real-time updates**, and a **responsive UI** built with **ChakraUI** and **TanStack Query**.

---

## 📌 Key Features  
- ⚙️ **Tech Stack**: Go (Fiber), React + TypeScript, MongoDB, TanStack Query, ChakraUI  
- ✅ **CRUD Functionality**: Create, Read, Update, and Delete todos seamlessly  
- 🌗 **Light/Dark Mode**: Toggle between themes with a single click  
- 📱 **Responsive Design**: Works flawlessly on all screen sizes  
- 🧵 **Real-Time Updates**: Built-in caching and refetching with TanStack Query  
- 🔒 **Type Safety**: Fixed `Todo._id` type from `number` to `string` to match MongoDB's `ObjectID` format  
- 🧹 **Improved Setup**: Added `.env.sample` for easy environment configuration  

---

## 🛠️ Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/mehedibu2013/react-go-tutorial.git
cd react-go-tutorial
```

### 2. Backend Setup
Create a `.env` file in the root directory:
```env
MONGO_URI=<your_mongodb_connection_string>
PORT=5000
ENV=development
```

Run the Go backend:
```bash
go run main.go
```

### 3. Frontend Setup
Navigate to the `client` folder:
```bash
cd client
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🌐 Deployment Options

| Service       | Backend                          | Frontend                     |
|---------------|----------------------------------|------------------------------|
| **Heroku**    | [Deploy to Heroku](https://heroku.com/) | N/A (Frontend via CDN)      |
| **Render**    | [Deploy to Render](https://render.com/) | N/A (Frontend via CDN)      |
| **Vercel**    | N/A (Backend via Docker)         | [Deploy to Vercel](https://vercel.com/) |
| **Netlify**   | N/A (Backend via Docker)         | [Deploy to Netlify](https://netlify.com/) |

---

## 🧪 Technologies Used
- **Backend**: Go (Fiber framework), MongoDB  
- **Frontend**: React + TypeScript, ChakraUI, TanStack Query  
- **Build Tool**: Vite (for React)  

---

## 🤝 Contributing
Contributions are welcome! Here's how to contribute:
1. Fork the project
2. Create a new branch (`git checkout -b feature-name`)
3. Commit changes (`git commit -m "Add feature"`)
4. Push to your fork (`git push origin feature-name`)
5. Submit a Pull Request

---

## 📝 License
MIT License – see [LICENSE](LICENSE) for details.

---

## 📌 Original Source
This fork is based on [burakorkmez/react-go-tutorial](https://github.com/burakorkmez/react-go-tutorial). Key improvements in this fork include:
- 🛠️ Fixed MongoDB ID mismatch (`number` → `string`) for proper CRUD functionality  
- 🐞 Other error fixes to ensure smooth local development  

---
