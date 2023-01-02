import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBeers } from './getBeersSlice'
import { VictoryPie } from 'victory';
import CostumModal from '../components/CostumModal';
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
} from '@chakra-ui/react'


const ListOfBeers = () => {
    const [modal, setModal] = useState(false);
    const [beer, setBeer] = useState(null)
    const [page, setPage] = useState(1)
    const dispatch = useDispatch()
    const beers = useSelector(state => state.beers)
    const firstBrewed = beers.beers.map(beer => {
        return beer.first_brewed.substring(beer.first_brewed.length - 4)
    })
    const chartData = firstBrewed.reduce(function (obj, b) {
        obj[b] = ++obj[b] || 1;
        return obj;
    }, {});

    const chart = []
    for (const [key, value] of Object.entries(chartData)) {
        chart.push({ y: value, label: key })
    }

    const toggle = (id) => {
        const beer = beers.beers.filter(beer => {
            return beer.id === id
        })
        setBeer(beer[0])
        setModal(!modal);
    }

    const nextPage = () => {
        setPage(page + 1)
    }

    const prevPage = () => {
        if (page === 1) return
        setPage(page - 1)

    }

    useEffect(() => {
        dispatch(fetchBeers(page))
    }, [page])
    if (beers.loading) {
        return <div>Loading...</div>
    }
    if (!beers.loading && beers.error) {
        return <div>we have technical issue please try again later</div>
    }
    return (
        <div>
            <CostumModal toggle={toggle} modal={modal} beer={beer} />

            <TableContainer >
                <Table variant='striped' colorScheme='teal'>
                    <TableCaption>Imperial to metric conversion factors</TableCaption>
                    <Thead>
                        <Tr>
                        <Th>#</Th>
                        <Th>Name: </Th>
                        <Th>Description</Th>
                        <Th>Food Paring</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {beers.beers.map((beer, index) => {
                            return (
                                <Tr key={beer.id} onClick={() => toggle(beer.id)}>
                                    <Td scope="row">{index + 1}</Td>
                                    <Td>{beer.name}</Td>
                                    <Td noOfLines width="20%">{beer.description}</Td>
                                    <Td noOfLines width="20%">{beer.food_pairing}</Td>
                                </Tr>
                            )
                        })}
                    </Tbody>

                </Table>
            </TableContainer>
            <h1 onClick={prevPage}>Prev</h1>
            <h1 onClick={nextPage}>Next</h1>
            <div style={{ width: '200px' }}>
                <VictoryPie
                    data={chart}
                />
            </div>
        </div>
    )
}

export default ListOfBeers