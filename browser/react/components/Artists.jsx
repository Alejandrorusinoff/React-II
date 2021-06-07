import React from "react";
import {Link} from "react-router-dom";

export default ({artists}) => (
<div>
  <h3>Artists</h3>
    <div className="list-group">
    {
      artists.map(artist => {
        return (
          <div className="list-group-item" key={artist.id}>
            {/* Determinaremos donde linkear luego */}
            <Link to="">{ artist.name }</Link>   
          </div>
        )    
      })
    }
  </div>
</div>
)