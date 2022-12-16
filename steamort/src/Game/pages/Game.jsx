import React, { useState, useEffect } from 'react';
import {Info, SliderBox, Reviews, MiniSlider} from '../controller/index'
import { useParams } from "react-router-dom";
import ButtonAppBar from "../../NavBar/Navbar";

const Game = () => {

  function Description() {
    let { id } = useParams();
    return id;
  }
  const description = Description();
  const url = "http://localhost:3001/api/games/gamesById/" + description;
  const [gameInfo, setGameInfo] = useState([]);
    
  useEffect(() => {
    async function fetchData() {
        try{
            const response = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            response.json().then((data) => {
                setGameInfo(data);
            });
        }catch(err){
            console.error(err);
        }
    }
      fetchData();
  }, []);

  let loaded = !(Object.entries(gameInfo).length === 0)
  
  return (
  <>
    <ButtonAppBar></ButtonAppBar>

    <div style={{display: 'flex'}}>
      <div style={{flexGrow:'2', margin: '10px'}}>
        <div style={{display: 'flex', flexDirection: 'column', padding: '30px 10px',borderRadius: '5px' , boxShadow: '0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)'}}>
            {loaded && 
                <SliderBox images={gameInfo.screenshots} size={{width: '645px', height: '445px'}}/>}
            {loaded &&
                <MiniSlider images={gameInfo.screenshots}/>
            }
        </div>
      </div>
      {loaded &&
        <Info game={gameInfo}></Info>
      }
    </div>
  </>
  )
}

export default Game