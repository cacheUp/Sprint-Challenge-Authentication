import React from 'react';
import { Redirect } from 'react-router-dom';
import { PageContainer, Card } from '../styled/containers';

class Jokes extends React.Component {
   render() {
    
         return (
            <PageContainer>
               {this.props.jokes.map(joke => (
                  <Card>
                     <h4 key={joke.id}>{joke.joke}</h4>
                  </Card>
               ))}
            </PageContainer>
         );
      }
   }


export default Jokes;
