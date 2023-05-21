import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

class App extends React.Component {
  constructor(props){
      super(props)
      this.state = {
        items:[
          {
            id: 1,
            name: 'Квартира-студія',
            pict: '1-к квартира.jpg',
            descr: 'Квартира однокімнатна. Дизайн студія - відкритий творчий простір.',
            category: '1-кімнатні квартири',
            price: '40000 $'

          },
          
          {
            id: 2,
            name: 'Сімейна квартира',
            pict: '2-к квартира.jpg',
            descr: 'Квартира двокімнатна. Затишна сімейна квартира з дитячою кімнатою і великим балконом.',
            category: '2-кімнатні квартири',
            price: '50000 $'
          },
          {
            id: 3,
            name: 'Апартаменти',
            pict: 'дворівнева квартира.jpg',
            descr: 'Просторі апартаменти для самого вибагливого власника',
            category: '2-кімнатні квартири',
            price: '60000 $'
          }
        ]
      }
      
    }
  render(){
  return (
    <div className="wrapper">
      Нерухомість
      <Header/>
      <Footer/>
    </div>
  );
}
}

export default App;
