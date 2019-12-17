import React from "react";
import EncounterMonster from "./EncounterMonster";

class EncounterTracker extends React.Component {
    render() {
        return (
            <div>
                <h3>Encounter Tracker</h3>
                <div id="tracker-monsters">
                    {this.props.monsters.map(x => {
                        return (
                            <EncounterMonster {...x} />
                        )
                    })}
                </div>
                <button onClick={this.props.handleAddMonster} id="add-monster">+</button>
            </div>
        )
    }
}

export default EncounterTracker;