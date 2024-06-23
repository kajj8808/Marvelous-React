import styled from "styled-components";

const ProfileBox = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  margin-bottom: 20px;
`;

const ThumbnailBox = styled.div`
  width: 180px;
  height: 180px;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const Thumnauil = styled.div`
  width: 180px;
  height: 180px;
  background-size: cover;
  background-position: center;
  background-image: url(${(props) => props.url});
`;

const DescriptionBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  & > :first-child {
    font-weight: bold;
    font-size: xx-large;
  }
  & > :nth-child(2) {
    font-weight: lighter;
    font-size: small;
  }
`;

export default function CharacterProfile({ characterDetail }) {
  return (
    <ProfileBox>
      <ThumbnailBox>
        <Thumnauil
          url={`${characterDetail.thumbnail.path}.${characterDetail.thumbnail.extension}`}
        />
      </ThumbnailBox>
      <DescriptionBox>
        <p>{characterDetail.name}</p>
        <p>modified day : {characterDetail.modified.slice(0, 10)}</p>
      </DescriptionBox>
    </ProfileBox>
  );
}

/* {
   
  } */
