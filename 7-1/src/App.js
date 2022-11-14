import './App.css';
import React, {useState} from 'react'
import name from './Box1/name'




const data = [ {
  name: "John",
  birthday: "1-1-1995",
  favoriteFoods: {
      meats: ["hamburgers", "sausages"],
      fish: ["salmon", "pike"],
  },
}, {
  name: "Mark",
  birthday: "10-5-1980",
  favoriteFoods: {
  meats: ["hamburgers", "steak", "lamb"],
  fish: ["tuna", "salmon", "barracuda"],
  },
}, {
  name: "Mary",
  birthday: "1-10-1977",
  favoriteFoods: {
    meats: ["ham", "chicken"],
    fish: ["pike"],
  },
}, {
  name: "Thomas",
  birthday: "1-10-1990",
  favoriteFoods: {
  meats: ["bird", "rooster"],
  fish: ["salmon"],
}, },
{
 name: "Mary",
 birthday: "1-10-1977",
 favoriteFoods: {
 meats: ["hamburgers", "lamb"],
 fish: ["anchovies", "tuna"],
}, },
];

function getElProperties (arr) {
  return arr.filter((obj) => {
 const year = obj.birthday.split('-')[2];
 return year<1990? obj : null
  })
}


function CardsArr (obj){
  const [first, setfirst] = useState((data))
    return(
 <Card items={first} setfirstFunc={setfirst}></Card>
    )
}
function Card (obj) {
  obj.setfirstFunc((prev)=>{
    return getElProperties(prev)
  })

return obj.items.map((obj)=>{
   return (
     <div>
       <h1>{obj.name}</h1>
       <span>food:{obj.favoriteFoods.meats[0]}</span>
     </div>
   )
  })
}
function App() {


  return (
    <div className='App'>
      <CardsArr></CardsArr>
    </div>
  )
}


export default App;
