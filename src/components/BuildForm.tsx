import Box from '@material-ui/core/Box';
import React from 'react';
import OutlinedTextField from './OutlinedTextField';

const build = [
   {
      key: 'baseLvl',
      label: 'Base Level',
   },
];

const stats = ['str', 'agi', 'vit', 'int', 'dex', 'luk'].map((q) => ({
   key: q,
   text: q.toUpperCase(),
}));

const BuildForm: React.FC = () => {
   return (
      <Box>
         <OutlinedTextField
            label="Base Level"
            type="number"
            InputLabelProps={{
               shrink: true,
            }}
         />
      </Box>
   );
};

export default BuildForm;
