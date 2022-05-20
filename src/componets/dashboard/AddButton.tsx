import React from 'react'
import styles from '../../styles/address.module.css'

interface Props{
  SetIsOpen:React.Dispatch<React.SetStateAction<boolean>>,
  name: string,
}

const  AddButton: React.FC<Props> =({SetIsOpen, name})=> {
  return (
    <div className={styles.containerAddButtonComponet}>
       <div className={styles.addButton} onClick={()=>SetIsOpen(true)}> New {name} Address</div>
    </div>
  )
}

export default AddButton