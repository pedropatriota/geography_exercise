import styled from "styled-components";

type Visibility = {
  open: boolean;
};

export const Container = styled.div<Visibility>`
  width: 100%;
  height: 100%;
  top: 0;
  visibility: ${({ open }) => (open ? "visible" : "hidden")};
  left: 0;
  z-index: 2;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #44444480;
`;

export const Content = styled.div`
  max-width: 200px;
  background-color: #fff;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 25px;
  gap: 20px;

  h3 {
    color: #444;
  }
`;

export const Info = styled.div`
  background-color: #ccc;
  width: 100px;
  border-radius: 8px;

  h1 {
    color: #444;
    text-align: center;
  }
`;

export const Button = styled.button`
  border: 0;
  background-color: #ea5280;
  color: #fff;
  border-radius: 8px;
  width: 100px;
  height: 35px;
  cursor: pointer;
`;
