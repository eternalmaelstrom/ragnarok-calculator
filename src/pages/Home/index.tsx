import Container from '@material-ui/core/Container';
import React from 'react';
import BuildForm from '../../components/BuildForm';

const Home: React.FC = () => {
   return (
      <>
         <Container>
            <BuildForm />
            <div>Test update</div>
         </Container>
      </>
   );
};

export default Home;
