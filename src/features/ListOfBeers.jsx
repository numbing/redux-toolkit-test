import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBeers } from './getBeersSlice'
import { Table } from 'reactstrap';
import CostumModal from '../components/CostumModal';

const ListOfBeers = () => {
    const [modal, setModal] = useState(false);
    const [beer, setBeer] = useState(null)
    const dispatch = useDispatch()
    const beers = useSelector(state => state.beers)

    const toggle = (id) => {
        const beer = beers.beers.filter(beer => {
            return beer.id === id
        })
        setBeer(beer[0])
        setModal(!modal);
    }

    useEffect(() => {
        dispatch(fetchBeers())
    }, [])
    if (beers.loading) {
        return <div>Loading...</div>
    }
    if (!beers.loading && beers.error) {
        return <div>we have technical issue please try again later</div>
    }
    return (
        <div>
            <CostumModal toggle={toggle} modal={modal} beer={beer} />
            <Table striped>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name: </th>
                        <th>Description</th>
                        <th>Food Paring</th>
                    </tr>
                </thead>
                <tbody >
                    {beers.beers.map((beer, index) => {
                        return (
                            <tr key={beer.id} onClick={() => toggle(beer.id)}>
                                <th scope="row">{index + 1}</th>
                                <td>{beer.name}</td>
                                <td>{beer.description}</td>
                                <td>{beer.food_pairing}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </div>
    )
}

export default ListOfBeers