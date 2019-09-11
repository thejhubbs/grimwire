import React from 'react'
import {Link} from 'react-router-dom';


function SmallPantheonCard(props) {
    const item = props.pantheon
    const style = {
      display: 'flex',
      alignItems: 'center'
    }
    return <div style={style}>
            <h2>{ item.thumbnail ? <img src={item.thumbnail} height="50px" alt={item.pantheon_name} /> : item.pantheon_name[0]}</h2>
            <Link to={`/pantheon/${item.pantheon_id}`}>{ item.pantheon_name }</Link><br />
            <span style={{padding:'5px'}}>{item.start_year < 0 ? item.start_year*-1 + "BC" : item.start_year + "AD" }</span>
            <span style={{padding:'5px'}}>{item.pantheon_description}</span>
    </div>
}

export default SmallPantheonCard
