import React from "react";
import { Helmet } from "react-helmet";

import styled from "styled-components";
import Header from "../components/Header";
import useFetch from "../hooks/useFetch";
import { getCharacterListUrl } from "../util/url";
import { Link } from "react-router-dom";
import ErrorBox from "../components/ErrorBox";
import Loader from "../components/Loader";

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const ItemList = styled.ul`
  margin-top: 80px;
  width: 860px;
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  @media (max-width: 840px) {
    width: 580px;
  }
  @media (max-width: 620px) {
    width: 280px;
  }
`;

const ItemBox = styled.div`
  width: 280px;
  height: 360px;
  overflow: hidden;
  border-radius: 13px;
  position: relative;
  transition: 0.3s ease-in-out;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  &:hover img {
    transform: scale(1.2);
  }
  &:active {
    transform: scale(0.9);
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: 0.3s ease-in-out;
  }

  a {
    position: absolute;
    z-index: 20;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      180deg,
      transparent 0%,
      transparent 50%,
      #000 100%
    );
    div {
      position: absolute;
      bottom: 20px;
      width: 100%;
      h3 {
        color: #fff;
        font-weight: bold;
        font-size: 24px;
        padding: 10px 20px;
      }
      p {
        color: #fff;
        padding: 0px 20px;
        height: 32px;
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        text-overflow: ellipsis;
      }
    }
  }
`;

export default function HomePage() {
  const { isLoading, error, result } = useFetch(getCharacterListUrl());

  return (
    <MainContainer>
      <Helmet>
        <title>MARVELOUS REACT - HOME</title>
      </Helmet>
      <Header />
      {isLoading ? (
        <Loader />
      ) : (
        <ItemList>
          {result.data.results.map((item) => (
            <ItemBox key={item.id}>
              <img
                src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                loading="lazy"
                alt={item.name}
              />
              <Link to={`/character/${item.id}`}>
                <div>
                  <h3>{item.name}</h3>
                  {item.description ? <p>{item.description}</p> : null}
                </div>
              </Link>
            </ItemBox>
          ))}
        </ItemList>
      )}
      {error && <ErrorBox error={error} />}
    </MainContainer>
  );
}
