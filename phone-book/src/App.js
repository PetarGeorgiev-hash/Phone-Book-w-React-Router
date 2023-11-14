import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PhoneBook from "./contacts-navbar/PhoneBook";
import ContactDetail from "./components/ContactDetail";
import ContextProvider from "./context-store/context";

const route = createBrowserRouter([
  {
    path: "/",
    element: <PhoneBook />,
    children: [
      {
        index: true,
        element: (
          <div style={{ width: "50%", textAlign: "center", color: "white" }}>
            Please select a contact from your phone book
          </div>
        ),
      },
      { path: ":contactId", element: <ContactDetail /> },
    ],
  },
]);

function App() {
  return (
    <div className="app">
      <ContextProvider>
        <RouterProvider router={route} />
      </ContextProvider>
    </div>
  );
}

export default App;
