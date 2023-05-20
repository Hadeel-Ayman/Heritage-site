import Router from "./router";
import Header from './component/Layout/Header';
import Footer from './component/Layout/Footer';
import Profile from "./pages/Profile";
import EditProvider from "./context/editContext";
function App() {
  return (
    <div className="App">
      <EditProvider>
      <Header/>
      <Router/>
      <Profile/>
      <Footer/>
      </EditProvider>
    </div>
  );
}

export default App;
