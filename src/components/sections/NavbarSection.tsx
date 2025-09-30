import React from 'react'
import CardNav from "@/components/CardNav";
import Header from "@/data/header"; ;



const App = () => {

  return (
    <div >
    <CardNav
      items={Header}
      baseColor="#FFC93C"
      menuColor="#fff"
      buttonBgColor="#fff"
      buttonTextColor="#8D6E63"
      ease="power3.out"
    />
    </div>
  );
};


export default App;


