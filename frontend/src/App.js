import Router from "./router";
import Header from './component/Layout/Header';
import Footer from './component/Layout/Footer';
import EditProvider from "./context/editContext";
import { SellerProfile, Register } from "./pages";
function App() {
  return (
    <div className="App">
      <EditProvider>
        <Header />
        {/* <Router /> */}
        {/* <Login/> */}
        <SellerProfile />
        {/* <Register/> */}
        <Footer />
      </EditProvider>
    </div>
  );
}

export default App;
