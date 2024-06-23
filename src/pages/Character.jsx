import React from "react";
import { Helmet } from "react-helmet";

import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { getCharacterDetailUrl } from "../util/url";
import styled from "styled-components";
import Header from "../components/Header";
import CharacterProfile from "../components/CharacterProfile";
import CharacterHistoryList from "../components/CharacterHistoryList";
import Loader from "../components/Loader";
import ErrorBox from "../components/ErrorBox";

const MainContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const CharacterContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 80px;
  max-width: 1120px;
  padding: 0px 10px;
`;

export default function CharacterDetailPage() {
  const { id } = useParams();

  const { isLoading, error, result } = useFetch(getCharacterDetailUrl(id));

  return (
    <MainContainer>
      <Helmet>
        <title>MARVELOUS REACT - DETAILS </title>
      </Helmet>
      <Header />
      {isLoading ? (
        <Loader />
      ) : (
        <CharacterContainer>
          <CharacterProfile characterDetail={result.data.results[0]} />
          <CharacterHistoryList
            listItem={result.data.results[0].comics.items}
            title={"Comics"}
          />
          <CharacterHistoryList
            listItem={result.data.results[0].series.items}
            title={"Series"}
          />
          <CharacterHistoryList
            listItem={result.data.results[0].stories.items}
            title={"Stories"}
          />
        </CharacterContainer>
      )}
      {error && <ErrorBox error={error} />}
    </MainContainer>
  );
}
