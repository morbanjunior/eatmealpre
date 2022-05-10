import React from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import styles from '../../styles/address.module.css'


function AddressItem() {
  return (
    <div className={styles.addresItemContainer}>
        <div className={styles.addresItemSubContainer}>
            <div className={styles.rightAddress}>
                <h7>Ramon Morban</h7>
                <h7>301 Front Street, Lemont, IL, USA,</h7>
                <h7>Lemont,</h7>
                <h7>Illinois,</h7>
                <h7>United States,</h7>
                <h7>60439,</h7>
                <h7>Mob: +1(859) 640-7637,</h7>
            </div>
            <div div className={styles.leftAddress}>
                <div className={styles.editcontainer}><EditIcon/></div>
                <div className={styles.deletecontainer}><DeleteIcon/></div>
            </div>
        </div>
        
    </div>
  )
}

export default AddressItem