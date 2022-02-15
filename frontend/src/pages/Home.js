import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import styled from 'styled-components';

const Container = styled.div`
  margin: 100px auto;
  display: flex;
  // gap: 40px;
  flex-direction: column;
  align-items: center;

  & h2 {
    text-align: center;
  }
`;

const Welcome = styled.h2`
  margin-bottom: 40px;
  & span {
    color: mediumslateblue;
  }
`;

const Form = styled.form`
  gap: 12px;
  display: flex;
  flex-direction: column;
  border: 1px solid #eee;
  padding: 20px;
  border-radius: 3px;
  width: 280px;

  & svg {
    align-self: center;
    color: #ddd;
    font-size: 6rem;
    margin-bottom: 20px;
  }

  & label {
    text-align: center;
  }

  &:focus {
    background: red;
  }
`;

const Input = styled.input`
  border: 1px solid #bbb;
  padding: 6px 10px;
  border-radius: 3px;
  font-size: 1rem;
`;

const Start = styled.button`
  border: none;
  background-color: royalblue;
  border-radius: 3px;
  padding: 8px;
  color: white;
  font-size: 1rem;

  &:hover {
    cursor: pointer;
    background-color: #315cdf;
  }
`;

const Home = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const { username } = e.target;

    if (!username.value.length) return;

    const user = JSON.stringify({
      name: username.value,
      tasks: [],
    });

    localStorage.setItem('user', user);

    navigate('/dashboard');
  };

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) navigate('/dashboard');
  });

  return (
    <Container>
      <Welcome>
        Welcome to
        <span> BetterTasks!</span>
      </Welcome>
      <Form onSubmit={ handleSubmit }>
        <FaUserCircle />
        <label htmlFor="">
          Let's start!
          <br />
          Who are you?
        </label>
        <Input
          autoFocus
          type="text"
          id="username"
          placeholder="Your name"
        />
        <Start>Start</Start>
      </Form>
    </Container>
  );
};

export default Home;
