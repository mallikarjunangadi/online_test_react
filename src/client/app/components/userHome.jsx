import React from 'react';
import {Link} from 'react-router-dom';

class UserHome extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data : []
        } 
    }

    componentWillMount() {
        this.setState({
            data : [1,2,3,4,5,6,8,9,10]
        })
    }

    render() {
        var listItems = this.state.data.map(function(item) {
            return (
                <li key={item}>
                   <Link to={'/quiz/'+item}>Question Paper {item}</Link>
                </li>
            );
        });

        return ( 
            <ul>
                {listItems}
            </ul>
        )
    }
}

export default UserHome;