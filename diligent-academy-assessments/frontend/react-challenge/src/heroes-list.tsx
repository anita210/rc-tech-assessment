import { useEffect, useState } from "react";
import { callApi } from "./call-api";
import SingleHero from "./Components/SingleHero";
import { useFetch } from "./useFetch";
import React from "react";
import "./HeroList.css";


function HeroesList() {
  type Hero = { id: number, name: string, available: boolean };

  const {allHeroes, error, loading } = useFetch();

  const [heroes, setHeroes] = React.useState<Hero[]>(allHeroes);


  React.useEffect(() => {

    setHeroes(allHeroes);

  }, [allHeroes]);


  const handleClick = (id: number) => {

    const updatedHeroes = heroes.map(hero =>
      hero.id === id ? { ...hero, available: !hero.available } : hero
    );

    setHeroes(updatedHeroes);

  };

  return (
    <>
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      <h2>Heroes</h2>
      <div className="herolist-container">
        {heroes.map((hero) => (
          <SingleHero hero={hero} handleClick={handleClick}></SingleHero>
        ))}
      </div>
    </>
  );
}

export default HeroesList;
