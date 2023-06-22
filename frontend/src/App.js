import Router from "./router";
import Header from "./component/Layout/Header";
import Footer from "./component/Layout/Footer";
import EditProvider from "./context/editContext";
import AuthProvider from "./context/authContext";
// import { ChatContextProvider } from "./context/chatContext";
// import { useContext } from "react";

function App() {
  // const { user } = useContext(ChatContextProvider)
  return (
    <div className="App">
      {/* <ChatContextProvider> */}
      <AuthProvider>
        <EditProvider>
          <Header />
          <Router />
          <Footer />
        </EditProvider>
      </AuthProvider>
      {/* </ChatContextProvider> */}
    </div>
  );
}

export default App;
