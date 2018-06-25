import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Header } from 'semantic-ui-react';
import axios from 'axios';
import '../cards.css';
import { Card } from 'semantic-ui-react';
import { Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


class Home extends Component {
  state = { apps: [] }
  
  componentDidMount() {
    axios.get('/api/apps')
      .then( res => {
        this.setState({ apps: res.data})
        this.props.dispatch({ type: 'HEADERS', headers: res.headers })
    })
  }

  addToFavorites = (id) => {
    let { apps } = this.state;
    axios.put(`/api/apps/${id}`)
      .then( res => {
        this.setState({ apps: apps.filter( a => a.id !== id) })
        this.props.dispatch({ type: 'HEADERS', headers: res.headers})
      })
  }
  
  // name description category price version author logo

  render() {
    return(
      <div>
        <Card.Group className="cards-root" itemsPerRow={4}>
          { this.state.apps.map( app =>
              <Card key={app.id}>
                <h2>{app.name}</h2>
                <h5>By:</h5>
                <h5>{app.author}</h5>
                <Image src={app.logo} />
                <h3>{app.description}</h3>
                <p>Current Version: {app.version}</p>
                <p>Category: {app.category}</p>
                <h3>${app.price}</h3>
              </Card>
            )
          }
        </Card.Group>
        <Link to="/my_apps">My Apps</Link>
      </div>
    );
  }
}

export default connect()(Home);
