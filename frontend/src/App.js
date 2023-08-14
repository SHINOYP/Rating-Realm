import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Homepage from "./pages/Homepage";
import Category from "./pages/Category";
import ReviewDetails from "./pages/ReviewDetails";
import SiteHeader from "./components/SiteHeader";

//apolo client
const client = new ApolloClient({
  uri: "http://localhost:1337/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <Router>
      <ApolloProvider client={client}>
        <div className="App">
          <SiteHeader />
          <Routes>
            <Route exct path="/" element={<Homepage />} />
            <Route path="/details/:id" element={<ReviewDetails />} />
            <Route path="/category/:id" element={<Homepage />} />
          </Routes>
        </div>
      </ApolloProvider>
    </Router>
  );
}

export default App;
