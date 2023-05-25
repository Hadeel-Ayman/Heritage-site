import Router from "./router";
import Header from "./component/Layout/Header";
import Footer from "./component/Layout/Footer";
import EditProvider from "./context/editContext";
import { Order } from "./pages";
import Service from "./pages/Services";
function App() {
  return (
    <div className="App">
      <EditProvider>
        <Header />
        <Service/>
        
        {/* <Router /> */}
        {/* <Order /> */}
        <Footer />
      </EditProvider>
    </div>
  );
}

export default App;
