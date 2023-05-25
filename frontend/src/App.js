import Router from "./router";
import Header from "./component/Layout/Header";
import Footer from "./component/Layout/Footer";
import EditProvider from "./context/editContext";
function App() {
  return (
    <div className="App">
      <EditProvider>
        <Header />
        <Router/>
        <Footer />
      </EditProvider>
    </div>
  );
}

export default App;
