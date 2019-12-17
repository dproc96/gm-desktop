import React from "react";
import roll from "./utils/roller";
import EncounterTracker from "./components/EncounterTracker";

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            encounter: {
                monsters: []
            }
        }
        this.handleAddMonster = () =>{
            const monsters = [...this.state.encounter.monsters]
            const number = monsters.length
            const monster = {
                name: `Monster ${number + 1}`,
                index: number,
                attack: {
                    bonus: 0
                },
                damage: {
                    number: 0,
                    size: 0,
                    bonus: 0
                },
                hitPoints: 0
            }
            monsters.push(monster);
            this.setState({ 
                encounter: {
                    ...this.state.encounter,
                    monsters: monsters 
                }
            })
        }
    }
    render() {
        const props = {
            encounter: {
                ...this.state.encounter,
                handleAddMonster: this.handleAddMonster
            }
        }
        return (
            <div>
                <EncounterTracker {...props.encounter} />
            </div>
        )
    }
}

export default App;