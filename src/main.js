// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
import data from './data.json';
import CardComp from './card';

//data[0]."title"
function Main(){
    return (
        <>
        <div style={{display:"flex", flexWrap:"wrap" , justifyContent:"space-between", gap:"20px", marginTop:"3%"}}>
       {data.map(function(item)       {
        return(

        <CardComp image={item.image_url} title={item.title} description={item.description}/>
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