import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';

const Follower = () => {
    const [myData, setMyData] = useState([]);

    const getData = async () => {
        const requestOptions = {
            method: 'GET',
            headers: { 'app-id': '6112dc7c3f812e0d9b6679dd' },
        }
        const response = await fetch("https://dummyapi.io/data/v1/user?limit=20", requestOptions);
        const result = await response.json();
        setMyData(result.data);
    }
     useEffect(() => {
        getData();
    }, []);

    return (
        <>
            <div className='container-fluid mt-5' style={{background:'linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)'}}>
                <h1 className='text-center'>Followers Page</h1>
                <div className='row text-center mt-4'>
                    {
                        myData.map((element, index) => {
                            return (
                                <div className='col-md-3 my-2' key={index}>
                                    <Card className='p-2'>
                                        <Card.Img variant="top" style={{width:'11rem'}} src={element.picture} className='p-0 m-auto'/>
                                        <Card.Body>
                                            <Card.Title>{element.id}</Card.Title>
                                            <Card.Text>
                                                <b>{element.title}. {element.firstName} {element.lastName}</b>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Follower