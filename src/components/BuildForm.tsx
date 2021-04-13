import Box from '@material-ui/core/Box';
import InputAdornment from '@material-ui/core/InputAdornment';
import Paper from '@material-ui/core/Paper';
import React, { useState } from 'react';
import { TranslationKeys } from '../generated/translationKeys';
import useTypeSafeTranslation from '../shared/hooks/useTypeSafeTranslation';
import OutlinedTextField from './OutlinedTextField';

const initialBuild = {
   baseLevel: 0,
   str: 0,
   agi: 0,
   vit: 0,
   int: 0,
   dex: 0,
   luk: 0,
   weaponLevel: 0,
   weaponRefine: 0,
   weaponBaseAttack: 0,
   shadowWeaponRefine: 0,
   ammoAtk: 0,
   buffWeaponAtk: 0,
   buffExtraAtk: 0,
   masteryAtk: 0,
   equipAtk: 0,
   elementBonus: 0,
   raceBonus: 0,
   smallSizeBonus: 0,
   mediumSizeBonus: 0,
   largeSizeBonus: 0,
   classBonus: 0,
   skillBonus: 0,
   meleeBonus: 0,
   rangeBonus: 0,
   weaponBonus: 0,
   monsterTypeBonus: 0,
   weaponWeight: 0,
   cartWeight: 0,
   shieldWeight: 0,
   shieldRefine: 0,
   maxHp: 0,
   currentHp: 0,
   maxSp: 0,
   currentSp: 0,
};

const BuildForm: React.FC = () => {
   const t = useTypeSafeTranslation();
   const [build, setBuild] = useState(initialBuild);
   const handleChange = (prop: keyof typeof initialBuild) => (
      ev: React.ChangeEvent<HTMLInputElement>
   ) => {
      setBuild({ ...build, [prop]: ev.target.value });
   };

   return (
      <>
         <Box component={Paper} p={3}>
            {['str', 'agi', 'vit', 'int', 'dex', 'luk'].map((stat) => {
               return (
                  <OutlinedTextField
                     key={stat}
                     margin="dense"
                     size="small"
                     label={t(`build.${stat}` as TranslationKeys)}
                     type="number"
                     InputLabelProps={{
                        shrink: true,
                     }}
                  />
               );
            })}
         </Box>
         <Box display="flex" flexDirection="column" maxWidth="400px">
            <OutlinedTextField
               margin="dense"
               size="small"
               label="Test"
               type="number"
               InputLabelProps={{
                  shrink: true,
               }}
               InputProps={{
                  endAdornment: (
                     <InputAdornment position="start">%</InputAdornment>
                  ),
               }}
            />
            {(Object.keys(initialBuild) as Array<
               keyof typeof initialBuild
            >).map((key) => {
               return (
                  <OutlinedTextField
                     key={key}
                     margin="dense"
                     size="small"
                     value={build[key]}
                     label={t(`build.${key}` as TranslationKeys)}
                     type="number"
                     onChange={handleChange(key)}
                     InputLabelProps={{
                        shrink: true,
                     }}
                  />
               );
            })}
         </Box>
      </>
   );
};

export default BuildForm;
