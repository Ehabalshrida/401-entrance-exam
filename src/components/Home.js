import axios from 'axios';
import React, { Component } from 'react';
import {Col,Row,Button,Card} from 'react-bootstrap';
 class Home extends Component {
constructor(props){

    super(props)
    this.state={
    dataCard:[],
    showData:false,
    favData:[],
    }
}
componentDidMount=()=>{

axios.get(`${process.env.REACT_APP_BACKEND_URL}/getApi`).then(res=>{

let resdata=res.data;

this.setState({
    dataCard:resdata,
    showData:true,



})

})



}
 addFaV=(item)=>{
     let newobj={
        title:item.title,
        description:item.description,
        toUSD:item.toUSD,
        image_url:item.image_url,


     }

     let config={
method:'POST',
baseURL:process.env.REACT_APP_BACKEND_URL,
url:`/createFav`,
data:newobj,

     }

     axios(config).then(res=>{

let resdata=res.data;
this.setState({
favData:resdata,



})

     })

}




    render() {
        return (
            <div>
                <Row>

{this.state.showData&&this.state.dataCard.map(item=>{

return(
<Col>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={item.image_url} />
  <Card.Body>
    <Card.Title>{item.title}</Card.Title>
    <Card.Text>
       <p> {item.toUSD}USD</p><br/>

        {item.description}
    </Card.Text>
    <Button variant="primary"onClick={()=>{this.addFaV(item)}}>Add-To-watch-list</Button>
  </Card.Body>
</Card>

</Col>




)




})





}







              </Row>  
            </div>
        )
    }
}

export default Home
