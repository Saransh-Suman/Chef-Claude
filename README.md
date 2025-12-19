# 🍳 Chef Claude

Chef Claude is an AI-powered recipe assistant that generates creative
and practical recipes based on user input. Built with React and modern
tooling, it provides a clean user experience while securely handling API
keys.

------------------------------------------------------------------------

## 🚀 Features

-   AI-generated recipes using Hugging Face (Mistral AI)
-   Clean and intuitive user interface
-   Fast development setup using Vite
-   Secure API key handling with environment variables
-   Easy to extend and scale

------------------------------------------------------------------------

## 🛠️ Tech Stack

-   **Frontend:** React\
-   **Build Tool:** Vite\
-   **Language:** JavaScript\
-   **AI API:** Hugging Face (Mistral AI)\
-   **Version Control:** Git & GitHub

------------------------------------------------------------------------

## 📁 Project Structure

    chef-claude/
    ├── public/
    │   ├── images/
    ├── src/
    │   ├── components/
    │   ├── App.jsx
    │   └── main.jsx
    │
    ├── .gitignore
    ├── index.html
    ├── package.json
    └── README.md

------------------------------------------------------------------------

## 🔐 Environment Variables

Create a `.env` file in the root directory:

    VITE_CLAUDE_API_KEY=your_api_key_here

⚠️ Do not commit the `.env` file to GitHub.\
It is already ignored via `.gitignore`.

Access the variable in code:

    const apiKey = import.meta.env.VITE_CLAUDE_API_KEY

------------------------------------------------------------------------

## 📦 Installation & Setup

    git clone https://github.com/YOUR_USERNAME/chef-claude.git
    cd chef-claude
    npm install
    npm run dev

The app runs at:

    http://localhost:5173

------------------------------------------------------------------------

## 🧪 Available Scripts

  Command           Description
  ----------------- --------------------------
  npm run dev       Start development server
  npm run build     Build for production
  npm run preview   Preview production build

------------------------------------------------------------------------

## 🔒 Security Notes

-   API keys are stored using environment variables
-   `.env` files are excluded from version control
-   For production use, API calls should be routed through a backend

------------------------------------------------------------------------

## 📌 Future Improvements

-   User authentication
-   Save favorite recipes
-   Recipe filtering and categories
-   Backend proxy for AI requests
-   Deployment to Netlify or Vercel
-   Add a loader when the user request a recipe

------------------------------------------------------------------------

## 🤝 Contributing

1.  Fork the repository\
2.  Create a new branch\
3.  Commit your changes\
4.  Open a pull request

------------------------------------------------------------------------

## 📄 License

This project is intended for educational and personal use.

------------------------------------------------------------------------

## 🙌 Acknowledgements

-   Mistral AI by HuggingFace\
-   React and Vite communities\
-   Open-source contributors

⭐ If you like this project, consider giving it a star on GitHub.
