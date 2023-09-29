import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer, Header } from "./components/Partials";
import { Dashboard } from "./components/Dashboard";
import { About } from "./components/About";
function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/about" exact Component={About} />
          <Route path="/dashboard" exact Component={Dashboard} />
          <Route path="/auth" exact Component={Home} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
