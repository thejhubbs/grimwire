import React from 'react'
import {Link} from 'react-router-dom';


function SmallKindCard(props) {
    const item = props.kind
    const style = {
        width: ''
    }
    return <div style={style}>
            <Link to={`/collection/${item.kind_id}`}>{ item.kind_name }</Link>
            {item.description}
                    <img src={item.thumbnail} height="50px"/>
    </div>
}

export default SmallKindCard
