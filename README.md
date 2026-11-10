## React Dynamic Blog

**Project Description**

A React blog application with dynamic routes, mock authentication, and a protected Admin page.

Technologies

React ,JavaScript (JSX), React Router DOM, React Context API,CSS, Vite

**Installation**

* npm install
* npm run dev

1. Main Setup – main.jsx

Import the required libraries and wrap the application with the providers:

* import React from 'react';
* import ReactDOM from 'react-dom/client';
* import { BrowserRouter } from 'react-router-dom';
* import { AuthProvider } from './context/AuthContext';
* import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <AuthProvider>
            <App />
        </AuthProvider>
    </BrowserRouter>
);

* BrowserRouter: Enables navigation between pages without reloading the application.
* AuthProvider: Makes authentication information available to child components.

2. Authentication Context – AuthContext.jsx

The Context API shares information between components without passing props manually.
* createContext(): Creates the context.
* AuthProvider: Provides shared values to child components.

* useContext(): Accesses the shared values.
The authentication context provides:

* isAuthenticated: Checks if the user is logged in.
login(): Sets authentication to true.
logout(): Sets authentication to false.

3. Navigation – Link

* import { Link } from 'react-router-dom';

<Link to="/blog">Blog</Link>


* For each blog post, the link uses its dynamic slug:

<Link to={`/blog/${postItem.slug}`}>
    {postItem.title}
</Link>

4. Dynamic URL Parameters – useParams

* Import useParams from react-router-dom.
* import { useParams } from 'react-router-dom';
* const { slug } = useParams();
* useParams() reads dynamic values from the URL.

5. Application Routes – Routes and Route

Import the routing components:
* import { Routes, Route, Navigate } from 'react-router-dom';
* Routes: Groups the application routes.
* Route: Connects a URL path to a component.
* Navigate: Redirects users to another route.

Example:

```jsx
<Routes>
    <Route path="/blog" element={<Blog />} />
    <Route path="/blog/:slug" element={<BlogPost />} />
    <Route path="/login" element={<Login />} />
</Routes>
```

6. Protected Admin Route

The Admin page is accessible only to authenticated users.

```jsx
<Route
    path="/admin"
    element={
        isAuthenticated
            ? <Admin />
            : <Navigate to="/login" replace />
    }
/>
```
If authenticated, the user sees the Admin Dashboard.
If not authenticated, the user is redirected to the Login page.
