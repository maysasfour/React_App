
import './App.css';

import Header from './header';

import Main from './main';

import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Products from './products';


function App() {
  return (
    <>
     
      <Header />

<BrowserRouter>
  <Routes>
  <Route path="/" Component={Main} ></Route>
  <Route path="/products" Component={Products} ></Route>
  </Routes>
</BrowserRouter>
    </>

  );

}
export default App;

{/* // import logo from './logo.svg';
// import './App.css';
// import Header from './header';
// import Main from './main';
// 
// function App() { */}
{/* //   return ( */}
//     // <div className="App">
//     //   <header className="App-header">
//     //     <img src={logo} className="App-logo" alt="logo" />
//     //     <p>
//     //       Edit <code>src/App.js</code> and save to reload.
//     //     </p>
//     //     <a
//     //       className="App-link"
//     //       href="https://reactjs.org"
//     //       target="_blank"
//     //       rel="noopener noreferrer"
//     //     >
//     //       Learn React
//     //     </a>
//     //   </header>
//     // </div>
//     <>
//     {/* <h1>Hello World</h1>
//     <p>This is a paragraph</p> */}
//     <Header />
//     <Main/>
//     </>
//   );
// }

// export default App;