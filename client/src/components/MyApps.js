import React from 'react';
import { Card, Image, Grid, Divider } from 'semantic-ui-react';
import { connect } from 'react-redux';
import axios from 'axios';

class MyApps extends React.Component {
  state = { apps: [] }

  componentDidMount() {
    axios.get('/api/my_apps')
      .then( res => {
        this.setState({ cats: res.data })
        this.props.dispatch({ type: 'HEADERS', headers: res.headers })
      });
  }

  render() {
    let { apps } = this.state;
    return (
      <Card.Group>
        { apps.map( app =>
            <Card key={app.id}>
              <Card.Content>
                <Image src={app.logo} />
                <Divider />
                <Card.Header>
                  {app.name}
                </Card.Header>
              </Card.Content>
            </Card>
          )
        }
      </Card.Group>
    )
  }
}

export default connect()(MyApps)