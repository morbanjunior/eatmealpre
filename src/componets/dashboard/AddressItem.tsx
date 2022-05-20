import React from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import styles from '../../styles/address.module.css'


function AddressItem() {
  return (
    <div className={styles.addresItemContainer}>
        <div className={styles.addresItemSubContainer}>
            <div className={styles.rightAddress}>
                <h6>Ramon Morban</h6>
                <h6>301 Front Street, Lemont, IL, USA,</h6>
                <h6>Lemont,</h6>
                <h6>Illinois,</h6>
                <h6>United States,</h6>
                <h6>60439,</h6>
                <h6>Mob: +1(859) 640-7637,</h6>
            </div>
            <div className={styles.leftAddress}>
                <div className={styles.editcontainer}><EditIcon/></div>
                <div className={styles.deletecontainer}><DeleteIcon/></div>
            </div>
        </div>
        
    </div>
  )
}

export default AddressItem