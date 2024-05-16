import Categories from "./components/Categories";
//import Delivery from "./components/Delivery";
import Featured from "./components/Featured";
import Footer from "./components/Footer";
import Meal from "./components/Meal";
import NewsLetter from "./components/NewsLetter";
import TopNav from "./components/TopNav";
import TopPicks from "./components/TopPicks";
import { Route } from 'react-router-dom';
// import Switch from "react-router-dom"

function App() {
  return (
    <div className="App">
      <TopNav />
        <Route exact path="/">
          <Featured />
        </Route>
        {/* <Route path="/delivery" component={Delivery} /> */}
        <Route path="/toppicks">
          <TopPicks />
        </Route>
        <Route path="/meal">
          <Meal />
        </Route>
        <Route path="/categories">
          <Categories />
        </Route>
        <Route path="/newsletter">
          <NewsLetter />
        </Route>
      <Footer />
    </div>
  );
}

export default App;
