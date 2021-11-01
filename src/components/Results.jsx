import React from 'react';

const Results = props => {
    // const {alias, realName, leaning} = props.oneChar;
    const isAliveStyle = {
        textDecoration: "none"
    }
    const isDeadStyle = {
        textDecoration: "line-through",
        // This did not work because Nichole needs to check her notes
        // backgroundImage: 'url("./images/skulls.jpg")'
        backgroundImage: 'url("https://image.shutterstock.com/image-vector/skull-crossbones-seamless-pattern-halloween-260nw-1337645486.jpg")'
    }

    const checkIsAlive = e => {
        props.updateIsAlive(e.target.value)
    }

    return(
        <div className="col-6">
            <h1>Characters</h1>
            <table className="table table-striped">
                <tr>
                    <th>Alias</th>
                    <th>Real Name</th>
                    <th>Years Active</th>
                    <th>Abilities</th>
                    <th>Leaning</th>
                    <th>Is Alive?</th>
                </tr>
                {
                    props.allChars.map((character, i) => {
                        return <tr style={character.isAlive ? isAliveStyle : isDeadStyle} key={i}>
                            <td>{character.alias}</td>
                            <td>{character.realName}</td>
                            <td>{character.yearsActive}</td>
                            <td>{character.abilities}</td>
                            <td>{character.leaning}</td>
                            <td>{character.isAlive ? "Yes" : "No"} <input type="checkbox" name="isAlive" checked={character.isAlive} onChange={ checkIsAlive } value={i}/></td>
                        </tr>
                    })
                }
            </table>
        </div>
    );
}

export default Results;