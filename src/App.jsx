import { Routes, Route, Navigate } from "react-router-dom";

import { Layout } from "./components/Layout";
import { Home } from "./pages/Homepage";
import { About } from "./pages/Aboutpage";
import { Blog } from "./pages/Blogpage";
import { Createpost } from "./pages/Createpost";
import { Editpost } from "./pages/Editpost";
import { Singlepage } from "./pages/Singlepage";
import { Notfoundpage } from "./pages/Notfoundpage";
import { Loginpage } from "./pages/Loginpage";

import { RequireAuth } from "./hoc/RequireAuth";
import { AuthProvider } from "./hoc/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} >
            <Route path="contacts" element={<p>Our contacts</p>} />
            <Route path="team" element={<p>Our team</p>} />
          </Route>
          <Route path="about-us" element={<Navigate to="/about" replace />} />
          <Route path="posts" element={<Blog />} />
          <Route path="posts/:id" element={<Singlepage />} />
          <Route path="posts/:id/edit" element={<Editpost />} />
          <Route
            path="posts/new"
            element={
              <RequireAuth>
                <Createpost />
              </RequireAuth>
            }
          />
          <Route path="login" element={<Loginpage />} />
          <Route path="*" element={<Notfoundpage />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
