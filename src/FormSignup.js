import React from 'react'
import useForm from './useForm';
import validate from './validation';
import './Form.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

const FormSignup = ({ submitForm }) => {
    const { handleChange, values, handleSubmit, errors } = useForm(submitForm, validate);
    return (
        <>
        <Container>
            <Form>
                <Row className="mb-3">
                    {/* <h1>Sign up Form</h1> */}
                    <Form.Group as={Col} md="12" className="form-input">
                        <Form.Label htmlFor='username' className='form-label'>Username</Form.Label>
                        <Form.Control id='username' type='text' name='username' className='form-input' placeholder='Enter Name' value={values.username} onChange={handleChange}></Form.Control>
                        {errors.username && <p>{errors.username}</p>}
                    </Form.Group>

                    <Form.Group as={Col} md="12" className="mb-3 form-input">
                        <Form.Label htmlFor='email' className='form-label'>Email</Form.Label>
                        <Form.Control id='email' type='email' name='email' className='form-input' placeholder='Enter Email' value={values.email} onChange={handleChange}></Form.Control>
                        {errors.email && <p>{errors.email}</p>}
                    </Form.Group>

                    <Form.Group as={Col} md="12" className='form-input mb-3'>
                        <Form.Label htmlFor='password' className='form-label'>Password</Form.Label>
                        <Form.Control id='password' type='password' name='password' className='form-input' placeholder='Enter Password' value={values.password} onChange={handleChange}></Form.Control>
                        {errors.password && <p>{errors.password}</p>}
                    </Form.Group>

                    <Form.Group as={Col} md="12" className='form-input mb-3'>
                        <Form.Label htmlFor='confirm_password' className='form-label'>Confirm Password</Form.Label>
                        <Form.Control id='confirm_password' type='password' name='confirm_password' className='form-input' placeholder='Enter Confirm Password' value={values.confirm_pasword} onChange={handleChange}></Form.Control>
                        {errors.confirm_password && <p>{errors.confirm_password}</p>}
                    </Form.Group>

                    <Form.Group as={Col} md="12" className='form-input'>
                        <Form.Label htmlFor="cars">Choose a car:</Form.Label>

                        <Form.Select name="cars" id="cars" value={values.cars} onChange={handleChange}>
                            <option value="">Select a field</option>
                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
                        </Form.Select>
                        {errors.cars && <p className='cars'>{errors.cars}</p>}
                    </Form.Group>

                    <Form.Group as={Col} md="12" className='form-input'>
                    {['radio'].map((type) => (
                        <div key={`inline-${type}`} className="mb-3">
                        <Form.Check
                            inline
                            label="Male"
                            name="group1"
                            type={type}
                            id={`inline-${type}-1`}
                            checked = {values.group1 == 'Male' ? true : false}
                            value='Male' onChange={handleChange}
                        />
                        <Form.Check
                            inline
                            label="Female"
                            name="group1"
                            type={type}
                            id={`inline-${type}-2`}
                            checked = {values.group1 == 'Female' ? true : false}
                            value='Female' onChange={handleChange}
                        />
                        {errors.group1 && <p>{errors.group1}</p>}
                        </div>
                    ))}
                    </Form.Group>

                    <Form.Group as={Col} md="12" className='form-input mb-3'>
                        <Form.Label htmlFor='phone_number' className='form-label'>Phone Number</Form.Label>
                        <Form.Control id='phone_number' type='number' name='phone_number' className='form-input' placeholder='Enter Phone Number' value={values.phone_number} onChange={handleChange}></Form.Control>
                        {errors.phone_number && <p>{errors.phone_number}</p>}
                    </Form.Group>

                    <Button onClick={handleSubmit} variant="primary" type='submit'>Sign up</Button>
                </Row>
            </Form>
        </Container>

        </>
    )
}

export default FormSignup