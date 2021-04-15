import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const SearchBox = () => {
  const history = useHistory();
  const [keyword, setKeyword] = useState('');

  const onSubmitHandler = e => {
    e.preventDefault();

    if (keyword.trim()) {
      history.push(`/search/${keyword}`);
    } else {
      history.push('/');
    }
  };

  return (
    <Form inline onSubmit={onSubmitHandler}>
      <Form.Control
        type='text'
        name='q'
        onChange={e => setKeyword(e.target.value)}
        placeholder='Search Products...'
        className='mr-sm-2 ml-sm5'></Form.Control>
      <Button type='submit' variant='outline-success' className='p-2'>Search</Button>
    </Form>
  );
};

export default SearchBox;
