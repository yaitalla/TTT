import React, { useContext, useCallback } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, ModalButton, SIZE } from 'baseui/modal';
import {useStyletron} from 'baseui';
import { Context } from '../reducer';
import { CLOSE_MODAL } from '../constants';

const ModalTable = ({ data }) => {
    const [css] = useStyletron();
    return (
        <div className={css({height: '450px'})}>
            { data ?
                Object.keys(data).map((item, i) =>{
                    return (
                        <p key={i}>{item}: {data[item]}</p>
                    )
                }) : null
            }
        </div>
    )
}

const MyModal = () => {
    const {store, dispatch} = useContext(Context)

    const close = useCallback(() => {
        dispatch({type: CLOSE_MODAL})
    }, [dispatch])
    return (
        <Modal size={SIZE.auto}
                onClose={close} isOpen={store.openModal}
                unstable_ModalBackdropScroll={true}
                >
          <ModalHeader>Driver Information</ModalHeader>
          <ModalBody>
            <ModalTable  data={store.vehicle[0]}></ModalTable>
            <ModalTable  data={store.vehicle[1]}></ModalTable>
          </ModalBody>
          <ModalFooter>
            <ModalButton onClick={close}>Cancel</ModalButton>
            <ModalButton onClick={close}>Okay</ModalButton>
          </ModalFooter>
        </Modal>
    )
}

export default MyModal;