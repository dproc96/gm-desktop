import React from "react";

class EncounterMonster extends React.Component {
    render() {
        return (
            <div key={this.props.index}>
                <h4>{this.props.name}</h4>
                <div>
                    <h5>Attack</h5>
                    <p>1d20 + {this.props.attack.bonus}</p>
                    <button>Roll</button>
                </div>
                <div>
                    <h5>Damage</h5>
                    <p>{this.props.damage.number}d{this.props.damage.size} + {this.props.damage.bonus}</p>
                    <button>Roll</button>
                </div>
            </div>
        )
    }
}

export default EncounterMonster;