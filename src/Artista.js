import React, {Component} from 'react';
import './Artista.css';
import PropTypes from 'prop-types';

class Artista extends Component {
  static propTypes = {
    data :PropTypes.array.isRequired
  }
    render(){
   const data = this.props.data;
     /*  const songs = this.props.songs.map((song, index) =>{
        return <li key={index}>{song}</li>
      }) */
        return (
            <div className="card">
           
              { data && data.map((artist,index)=>{
                return  ( <div key={index}>
                <div >
                <img className="img-artist" src={artist.img} alt={artist.name} />
            </div>
            <div className="">   
                <h3 className = "">{artist.name}</h3> 
             
                <p>{artist.bio}</p>
            </div>
                
                </div> )
              }) }
            
            </div>
        )
    }
}
export default Artista;
