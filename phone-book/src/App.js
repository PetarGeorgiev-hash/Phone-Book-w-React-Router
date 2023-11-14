import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PhoneBook from "./contacts-navbar/PhoneBook";
import ContactDetail from "./components/ContactDetail";
import ContextProvider from "./context-store/context";
import AddContact from "./components/AddContact";

const route = createBrowserRouter([
  {
    path: "/",
    element: <PhoneBook />,
    children: [
      {
        index: true,
        element: (
          <div
            style={{
              width: "50%",
              textAlign: "center",
              color: "white",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "2rem",
            }}
          >
            <div>Please select a contact from your phone book</div>
            <AddContact />
          </div>
        ),
      },
      { path: ":contactId", element: <ContactDetail /> },
      { path: "/newContact", element: <ContactDetail /> },
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
