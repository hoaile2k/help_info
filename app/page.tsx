'use client';
import Image from 'next/image';
import HelpInfo from "./page/HelpInfo";
import MainContent from "./page/MainContent";
import WrapperContent from "./page/WrapperContent";
import {useState} from 'react';
import "./css/styles.css";

const defaultGame = "A"
export default function Home() {
    const [gameId, setGameId] = useState(0);
    function handleOnClick(e: any) {
        setGameId(e.target.name);
    }
    return (
        <div id={"root"}>
            <div id={"header"}>Header</div>
            <div id={"container"}>
                <HelpInfo/>
                <WrapperContent cb={handleOnClick}/>
                <MainContent gameId={gameId || defaultGame}/>
            </div>
        </div>
    );
}
