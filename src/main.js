import CardComp from './card';
import './main.css';
import { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Main (){
    let [items, setItems] = useState([]);

   async function getData(){

    const url = 'https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list?country=us&lang=en&currentpage=0&pagesize=30&categories=men_all&concepts=H%26M%20MAN';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '0f2abd4395msh6ce1c28ccac1aacp178ddbjsn9cd63c10ba80',
        'X-RapidAPI-Host': 'apidojo-hm-hennes-mauritz-v1.p.rapidapi.com'
      }
    };
    
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setItems(result.results)
    } catch (error) {
      console.error(error);
    }
}

useEffect(function (){getData()}, [])

    // function handleSubmit(event){
    //     event.preventDefault()
    //     let searchedValue= event.target.search.value;
    //     let filteredItems = data.filter(function(item){return  item.title.toLowerCase().includes(searchedValue.toLowerCase())})
    //     setItems(filteredItems);
    // }
    // onSubmit={handleSubmit} 
return(
    <>
      <Form className="d-flex"  id="myform">
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          name="search"
          />
        <Button variant="outline-success" type='submit'>Search</Button>
      </Form>
              {/* <form onSubmit={handleSubmit}>
            <input type ="text" name="search"/>
            <button type="submit">Search</button>
           
        </form> */}
    <div id="container">
         {/* <div style={{display:"flex", flexWrap:"wrap" , justifyContent:"space-between", gap:"20px", marginTop:"3%"}}> */}
    {items.map(function(item){
        return(
          <>
            <CardComp image={item.images[0].baseUrl} title={item.name} price={item.price.value}/>
            </>
        )
    }
)
    }
    </div>
    </>
)
}

export default Main;


// let people = [{name:"mays", job:"developer"},{name:"sarah", job:"engineer"}]

// people [0].name => sarah


//  <Card style={{ width: '18rem' }}>
//           <Card.Img variant="top" src= {item.image_url} />
//           <Card.Body>
//             <Card.Title>{item.title}</Card.Title>
//             <Card.Text>
//              {item.description}
//             </Card.Text>
//             <Button variant="primary">Go somewhere</Button>
//           </Card.Body>
//         </Card> 

