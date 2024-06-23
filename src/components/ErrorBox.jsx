import styled from "styled-components";

const ErrorContainer = styled.div`
  position: absolute;
  top: 30px;
  left: 0;
  width: 100%;
  height: calc(100vh - 30px);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h1 {
    font-weight: bold;
    font-size: 32px;
  }
  h3 {
    margin-top: 6px;
  }
`;
export default function ErrorBox(error) {
  return (
    <ErrorContainer>
      <h1>Error</h1>
      <h3>{error}</h3>
    </ErrorContainer>
  );
}
