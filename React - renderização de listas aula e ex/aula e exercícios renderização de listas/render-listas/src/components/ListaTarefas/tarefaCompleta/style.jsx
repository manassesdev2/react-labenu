import styled from 'styled-components'

export const Completa = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  border: 1px solid gray;
  border-radius: 10px;
  padding: 10px 8px;
  transition: background-color 0.3s;
  width:400px;
  &:hover {
    background-color: white;
  }
`;
export const Text = styled.p`
  text-decoration:line-through;
  color:black;
  background-color: white;
`;
