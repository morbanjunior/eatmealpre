import React from 'react'
import styles from '../styles/gifcard.module.css'

const ModalGiftcard = () => {
  return (
    <div className="modal fade" id="exampleModalCenter" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLongTitle">NEW GIFT CART</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">×</span>
        </button>
      </div>
      <div className="modal-body">
        <div className={styles.modalInputComponet}>
          <span className={styles.modalText} >Gifted to:</span>
          <input type='text' placeholder='Enter Name' className={styles.inputModal}/>
        </div>
        <div className={styles.modalInputComponet}>
          <span className={styles.modalText} >Email:</span>
          <input type='email' placeholder='Enter Email' className={styles.inputModal}/>
        </div>
          <div className={styles.modalInputComponet}>
            <span className={styles.modalText} >Gift Amount:</span>
            <input type='number' placeholder='Enter amount' className={styles.inputModal}/>
          </div>
          
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-success">Save changes</button>
      </div>
    </div>
  </div>
</div>

  )
}

export default ModalGiftcard