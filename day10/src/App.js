import React from 'react';
import NavigationBar from "./Components/Navbar/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./Components/Footer/Footer";
import Card from "./Components/Cards/Card";
import './App.css';
function App() {
  return (
      <div className='app-container'>
        <NavigationBar/>
        <div style={{marginTop: '80px',  display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <Card cardImage={'https://previews.123rf.com/images/wavebreakmediamicro/wavebreakmediamicro1701/wavebreakmediamicro170104866/69338069-various-food-items-and-chopping-board-on-wooden-background.jpg'} cardLink={'#'} cardTitle={'Food Court'}/>
        </div>

        <Footer/>
      </div>

  );
}

export default App;
