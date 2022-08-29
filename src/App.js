import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/layout/Header";
import Navigation from "./components/layout/Navigation";
import Footer from "./components/layout/Footer";

import ContactoPage from "./pages/ContactoPage";
import HomePage from "./pages/HomePage";
import NosotrosPage from "./pages/NosotrosPage";
import NoticiasPage from "./pages/NoticiasPage";

import "./App.css"
import Login from "./pages/Login";
import AuthProvider from "./context/AuthProvider";
import AuthContext from "./context/AuthContext";
import AgregarNoticia from "./pages/AgregarNoticia";
import ModificarNoticia from "./pages/ModificarNoticia";
import MensajesPage from "./pages/MensajesPage";
import ErrorSesion from "./pages/ErrorSesion";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
      <AuthProvider>
        <Navigation />
        <AuthContext.Consumer>
          {
            context => (
              <Routes>
                {
                  !context.userLogin &&
                  <>
                    <Route path="/" element={<HomePage />} />
                    <Route path="nosotros" element={<NosotrosPage />} />
                    <Route path="noticias" element={<NoticiasPage />} />
                    <Route path="contacto" element={<ContactoPage />} />
                    <Route path="login" element={<Login />} />

                    <Route path="alta" element={<ErrorSesion error={"sesionnoiniciada"}/>}/>
                    <Route path="noticias/modificar/:id" element={<ErrorSesion error={"sesionnoiniciada"}/>}/>
                    <Route path="mensajes" element={<ErrorSesion error={"sesionnoiniciada"}/>}/>
                  </>
                }
                {
                  context.userLogin &&
                  <>
                    <Route path="/" element={<HomePage />} />
                    <Route path="nosotros" element={<NosotrosPage />} />
                    <Route path="noticias" element={<NoticiasPage />} />
                    <Route path="contacto" element={<ContactoPage />} />
                    <Route path="alta" element={<AgregarNoticia/>}/>
                    <Route path="noticias/modificar/:id" element={<ModificarNoticia/>}/>
                    <Route path="mensajes" element={<MensajesPage />} />
                  </>
                }
              </Routes>
            )
          }
        </AuthContext.Consumer>
        </AuthProvider>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
