import Help_GameA from "./game_content/Help_GameA";
import Help_GameB from "./game_content/Help_GameB";
const MAP_KEY_HELP = {
    GAME_A: "1",
    GAME_B: "2",
    GAME_C: "3",
    GAME_D: "4",
}

export default function WrapperContent(props: any) {
    return getContent(props.gameId);
}

function getContent(gameId: any) {
    switch (gameId) {
        case MAP_KEY_HELP.GAME_A: {
            return <Help_GameA/>;
        }
        case MAP_KEY_HELP.GAME_B: {
            return <Help_GameB/>;
        }
        default: break;
    }
}