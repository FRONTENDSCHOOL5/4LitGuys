// import Main_ss from './main_ss'
// import Main_ss from './Header'
// import Main_ss from './Footer'

// function App() {
//   return (
//     // <h1>Hello world</h1>
//     <Header />
//   )
// }
import Header from "./Header"
import Footer from "./Footer"
import Main_ss from "./main_ss";
import Collection from "./CollectionPart";
import Simon from "./Simon";

function App() {
  return (
    <>
      <Header />
      <Main_ss />
      <Collection />
      <Simon />
      <Footer />
    </>

  );
}

export default App;
