import styled from "styled-components";

const Container = styled.div`
  padding: 0 10px;
`;

const Title = styled.h2`
  border-bottom: 1px solid gainsboro;
  padding: 10px 0;
  font-weight: 500;
`;

const HistoryList = styled.ul`
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
`;

const HistoryItem = styled.li`
  padding: 15px 10px;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  border-radius: 8px;
  &:hover {
    background-color: #dfe3e7;
  }
`;

export default function CharacterHistoryList({ listItem, title }) {
  function onLinkClick({ query }) {
    window.open(
      `https://www.marvel.com/search?limit=20&query=${query}`,
      "_blank"
    );
  }
  return (
    <Container>
      <Title>{title}</Title>
      <HistoryList>
        {listItem.map((item, index) => (
          <HistoryItem key={item.id} onClick={onLinkClick}>
            <p>
              {index + 1}. {item.name}
            </p>
            <p>🌐</p>
          </HistoryItem>
        ))}
      </HistoryList>
    </Container>
  );
}
