import Categories from "./components/Categories";
//import Delivery from "./components/Delivery";
import Featured from "./components/Featured";
import Footer from "./components/Footer";
import Meal from "./components/Meal";
import NewsLetter from "./components/NewsLetter";
import TopNav from "./components/TopNav";
import TopPicks from "./components/TopPicks";
import {  Routes, Route } from 'react-router-dom';
// import Switch from "react-router-dom"

function App() {
  return (
    <div className="App">
      <TopNav />
      <Routes>
        <Route exact path="/" Component={<Featured/>} />
        {/* <Route path="/delivery" component={Delivery} /> */}
        <Route path="/toppicks" Component={<TopPicks/>}/>
        
        <Route path="/meal" Component={<Meal/>}/>
          
        <Route path="/categories" Component={<Categories/>}/>
         
        <Route path="/newsletter" Component={<NewsLetter/>}/>
        
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
