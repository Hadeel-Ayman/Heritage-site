import Router from "./router";
import Header from "./component/Layout/Header";
import Footer from "./component/Layout/Footer";
import EditProvider from "./context/editContext";
import { Order } from "./pages";
import Home from "./pages/Home";
function App() {
  return (
    <div className="App">
      <EditProvider>
        <Header />
        {/* <Router /> */}
        {/* <Order /> */}
        <Home/>
        <Footer />
      </EditProvider>
    </div>
  );
}

export default App;
