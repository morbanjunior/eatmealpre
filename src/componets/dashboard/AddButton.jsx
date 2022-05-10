import React from 'react'
import styles from '../../styles/address.module.css'

function AddButton({SetIsOpen, name}) {
  return (
    <div className={styles.containerAddButtonComponet}>
       <div className={styles.addButton} onClick={()=>SetIsOpen(true)}> New {name} Address</div>
    </div>
  )
}

export default AddButton