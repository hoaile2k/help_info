export const tab_game = [
    {
        gameId: "1",
        gameName: "Game A",
        className: "btnGameOnTab"
    },
    {
        gameId: "2",
        gameName: "Game B",
        className: "btnGameOnTab"
    },
    {
        gameId: "3",
        gameName: "Game C",
        className: "btnGameOnTab"
    },
    {
        gameId: "4",
        gameName: "Game D",
        className: "btnGameOnTab"
    },
]
export default function WrapperContent(props: any) {
    let handleOnClick = props.cb;
    const listRender = tab_game.map(game =>
        <button className={game.className} onClick={handleOnClick} name={game.gameId} key={game.gameId}>{game.gameName}</button>
    )
    return (
        <div className={"wrapper_content"}>
            {listRender}
        </div>
    );
}