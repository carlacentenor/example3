import React, {Component} from 'react';
import './Artista.css';
import PropTypes from 'prop-types';

class Artista extends Component {
  static propTypes = {
    data :PropTypes.array.isRequired
  }
    render(){
   const data = this.props.data;
     
        return (
            <div className="row">
           
              {data.map((artist,index)=>{
                return  ( 
                <div className="card col-3 mt-1" key={index}>
                <div className ="pt-2">
                   <img className="card-img-top" src={artist.img} alt={artist.name} />
                </div>
                <div className="card-body">   
                  <h3 className = "card-title">{artist.name}</h3> 
                  <p className ="card-text text-justify">{artist.bio}</p>
                </div>
                <div>
                  <h5>Canciones Populares :</h5>
                  <ul>
                  {
                    artist.songs.map((song, index) =>{
                      return (<li key={index}>{song}</li> )
                    })                
                  }  
                  </ul>
                </div>

                </div> )
              }) }
            
            </div>
        )
    }
}
export default Artista;
