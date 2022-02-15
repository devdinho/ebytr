import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import styled from 'styled-components';

const Form = styled.form`
  margin: 100px auto;
  gap: 10px;
  display: flex;
  flex-direction: column;
  border: 1px solid #eee;
  padding: 20px;
  border-radius: 4px;
  max-width: 300px;

  & svg {
    align-self: center;
    color: #ddd;
    font-size: 6rem;
    margin-bottom: 20px;
  }

  &:focus {
    background: red;
  }
`;

const Start = styled.button`
  border: none;
  background-color: royalblue;
  border-radius: 4px;
  padding: 8px 0;
  color: white;

  &:hover {
    cursor: pointer;
    background-color: #315cdf;
  }
`;

const Input = styled.input`
  border: 1px solid #bbb;
  padding: 6px;
  border-radius: 4px;
`;

const Home = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const { username } = e.target;
    
    if (!username.length) return;

    const user = username.value;
    localStorage.setItem('user', user);
  };

  return (
    <Form onSubmit={ handleSubmit }>
      <FaUserCircle />
      <Input autoFocus type="text" id="username" />
      <Start>Começar!</Start>
    </Form>
  );
};

export default Home;
