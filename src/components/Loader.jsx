import styled, { keyframes } from "styled-components";
const breath = keyframes` 
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.23;
  }
  100% {
    opacity: 1;
  }
`;
const AnimationBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 40;
  animation: ${breath} 2s infinite;
`;
const LoaderContainer = styled(AnimationBox)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;
const GuideBox = styled(AnimationBox)`
  p {
    font-size: 150px;
  }
  span {
    margin-top: 15px;
    color: white;
  }
`;
const BlurBackground = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100%;
  position: absolute;
`;

export default function Loader() {
  return (
    <LoaderContainer>
      <GuideBox>
        <p>📡</p>
        <span>로딩중...</span>
      </GuideBox>
      <BlurBackground />
    </LoaderContainer>
  );
}
