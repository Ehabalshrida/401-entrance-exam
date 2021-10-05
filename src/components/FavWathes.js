import axios from 'axios'
import React, { Component } from 'react'
import {Col,Row,Button,Card} from 'react-bootstrap';
import FormModels from './FormModels';
 class FavWathes extends Component {
constructor(props){
    super()
    this.state={
favData:[],
showData:false,
id:'',
 title:'',
  description:'',
    toUSD:'',
   image_url:'',
   showModal:false,


    }
}

componentDidMount=()=>{
axios.get(`${process.env.REACT_APP_BACKEND_URL}/getFav`).then(res=>{
let resdata=res.data;
this.setState({
    favData:resdata,
    showData:true,
})

})

}
handleDelete=(item)=>{
    let id=item._id;
let config={
method:'DELETE',
baseURL:process.env.REACT_APP_BACKEND_URL,
url:`/deleteFav/${id}`,

}
axios(config).then(res=>{
    let resdata=res.data;

this.setState({
dataFav:resdata,
showData:true,

})

})
}

handleUpdate=(item)=>{

this.setState({
    id:item._id,
    title:item.title,
    description:item.description,
    toUSD:item.toUSD,
   image_url:item.image_url,
   showModal:true,


})


}
handleUpdatform=(e)=>{
    e.preventDefault();
    let newobj={
        title:this.state.title,
        description:this.state.description,
        toUSD:this.stae.toUSD,
       image_url:this.state.image_url,
    

    }

    let config={
        method:'PUT',
        baseURL:process.env.REACT_APP_BACKEND_URL,
        url:`/updateFav/${this.state.id}`,
        data:newobj,
    }
axios(config).then(res=>{
let resdata=data.res;
this.setState({
dataFav:resdata,
showData:true,
showModal:false,

})

})




}

handleClose=()=>{
this.setState({
showModal:false,

})

}
handletitle=(e)=>{
this.setState({
title:e.target.value,


})
}
handleImage=(e)=>{
this.setState({
    image_url:e.target.value,

})

}
handleDes=(e)=>{

    this.setState({
        description:e.target.value,
    
    })

}
handletoUSD=(e)=>{

    this.setState({
        toUSD:e.target.value,
    
    })


}





    render() {
        return (
            <div>
                <Row>
                {this.state.showData&&this.state.favData.map(item=>{

              return(
                <Col>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={item.image_url} />
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>
                        <p>{item.toUSD}USD</p><br/>
                
                        {item.description}
                    </Card.Text>
                    <Button variant="primary"onClick={()=>{this.handleDelete(item)}}>Delet</Button>
                    <Button variant="primary"onClick={()=>{this.handleUpdate(item)}}>Update</Button>

                  </Card.Body>
                </Card>
                
                </Col>






              )




                })



                } 
                </Row>    



                {this.state.showModal&&this.state.dataFav.map(item=>{

            return(<FormModels title={item.title} description={item.description}toUSD={item.toUSD}
                image_url={item.image_url}showModal={this.state.showModal}handleClose={this.handleClose}
                handleUpdatform={this.handleUpdatform}/>




            )


                })

                }           
            </div>
        )
    }
}

export default FavWathes
