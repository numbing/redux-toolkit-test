import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


const CostumModal = ({ modal, toggle, beer }) => {

    console.log("beer", beer);
    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>{beer?.name}</ModalHeader>
            <ModalBody>
                <div>
                    <h1>ingredients </h1>
                    {beer?.ingredients?.hops.map(hop => {
                        return <p>{hop.name}</p>
                    })
                    }


                    {beer?.ingredients?.malt.map(hop => {
                        return <p>{hop.name}</p>
                    })
                    }
                    <p>Yeast: {beer?.ingredients?.yeast}</p>
                </div>
                <div>
                    <h1>Tips </h1>
                    {beer?.brewers_tips}
                </div>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={toggle}>
                    Cancel
                </Button>
            </ModalFooter>
        </Modal>
    )
}

export default CostumModal

