import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { RickAndMorty } from "./components/RickAndMorty";
import { HomePage } from "./pages/home";
import { AboutPage } from "./pages/about";
import { Counter } from "./components/ReducerDemo";
import { RefDemo } from "./components/RefDemo";
import { ForwRefDemo } from "./components/ForwardRefDemo";
import { ThemeSwitcher } from "./components/ThemeSwitcher";
import { ThemeContext } from "./context/ThemeContext";
import { Toolbar } from "./components/Toolbar";
import "./App.css";
import { AppLayout } from "./layout";
import { UsersPage } from "./pages/users";

const { Provider } = ThemeContext;

function App() {
  const router = createBrowserRouter([
    {
      path: "",
      element: <AppLayout />,
      children: [
        {
          index: true,
          element: <HomePage />,
          exact: true,
        },
        {
          path: "about",
          children: [
            {
              index: true,
              element: <AboutPage />,
              exact: true,
            },
            { path: "team", element: <h1>Team page</h1> },
          ],
        },

        { path: "users/:id", element: <UsersPage /> },
        { path: "*", element: <h1>404 Not found</h1> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;

  // const [count, setCount] = useState(0);
  // const [input, setInput] = useState("dsaasd");

  // const handleUserInput = (event) => {
  //   console.log(event.target.value);
  //   setInput(event.target.value);
  // };

  // return (
  //   <Provider value="dark">
  //     <Toolbar />
  //   </Provider>
  // );
  // <ThemeSwitcher />
  //<ForwRefDemo />
  // <RefDemo />
  // <Counter />
  // <RickAndMortyCharacters/>
  /* <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={(event) => console.log(event)}>
          count is {count}
        </button>
        <p style={{ backgroundColor: "limegreen" }}>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <input name='test' value={input} placeholder='Enter text' onChange={handleUserInput} />
    </> */
}

export default App;
