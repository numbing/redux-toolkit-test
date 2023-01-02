import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {Heading} from "@chakra-ui/react"

const CostumModal = ({ modal, toggle, beer }) => {

    console.log("beer", beer);
    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}><Heading>{beer?.name}</Heading></ModalHeader>
            <ModalBody>
                <div>
                    <Heading size="md">ingredients </Heading>
                    {beer?.ingredients?.hops.map((hop,index) => {
                        return <p key={index}>{hop.name}</p>
                    })
                    }


                    {beer?.ingredients?.malt.map((hop, index) => {
                        return <p key={index}>{hop.name}</p>
                    })
                    }
                    <p>Yeast: {beer?.ingredients?.yeast}</p>
                </div>
                <div>
                    <Heading size="md">Tips </Heading>
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

