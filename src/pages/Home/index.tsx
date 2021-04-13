import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import React from 'react';

const Home: React.FC = () => {
   return (
      <>
         <Box
            component={Container}
            display="flex"
            alignItems="center"
            justifyContent="center"
            p={5}
         >
            <Box textAlign="center">
               <img src="/logo.jpeg" alt="Illegal Kross" />
               <Box marginTop="3rem">
                  <Typography variant="h3">Ragnarok Calculator</Typography>
                  <Typography variant="h6">
                     This project is currently under construction
                  </Typography>
                  <Box
                     marginTop="1rem"
                     display="flex"
                     gridGap=".5rem"
                     alignItems="center"
                     justifyContent="center"
                  >
                     <a href="https://discord.gg/9Zqq9VyqH9">
                        <img
                           src="https://img.shields.io/badge/Eternal%20Maelstrom-7289DA?label=Discord&logo=discord"
                           alt="Discord"
                        />
                     </a>
                     <a href="https://novaragnarok.com">
                        <img
                           src="https://img.shields.io/badge/Server-ffd500?label=Nova Ragnarok"
                           alt="Nova Ragnarok"
                        />
                     </a>
                  </Box>
               </Box>
            </Box>
         </Box>
      </>
   );
};

export default Home;
