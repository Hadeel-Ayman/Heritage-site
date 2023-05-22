import Router from "./router";
import Header from './component/Layout/Header';
import Footer from './component/Layout/Footer';
import EditProvider from "./context/editContext";
import {Chat } from "./pages";
function App() {
  return (
    <div className="App">
      <EditProvider>
        <Header />
        {/* <Router /> */}
        <Chat />
        <Footer />
      </EditProvider>
    </div>
  );
}

export default App;
