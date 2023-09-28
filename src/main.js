// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
import data from './data.json';
import CardComp from './card';
import './main.css';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
//data[0]."title"
function Main(){
    let [items,setItems] = useState(data)
    function handleSubmit(event){
        event.preventDefault()
        let searchedValue= event.target.search.value;
        let filteredItems = data.filter(function(item){return  item.title.toLowerCase().includes(searchedValue.toLowerCase())})
        setItems(filteredItems);
    }
    return (
        <>
            <Form className="d-flex" onSubmit={handleSubmit} id="myform">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              name="search"
            />

              <Button variant="outline-success" type="submit">Search</Button>
              </Form>
        {/* <form onSubmit={handleSubmit}>
            <input type ="text" name="search"/>
            <button type="submit">Search</button>
           
        </form> */}
        <div id="container">
        {/* <div style={{display:"flex", flexWrap:"wrap" , justifyContent:"space-between", gap:"20px", marginTop:"3%"}}> */}
       {items.map(function(item)       {
        return(

        <CardComp image={item.image_url} title={item.title} description={item.description} price={item.price}/>
       )
       }
       )
        }
        </div>
      
        </>

      );
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