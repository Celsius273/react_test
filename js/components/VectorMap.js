import alt from '../alt'
import AltContainer from 'alt-container'
import Formsy from 'formsy-react'
import React from 'react'
import ReactDOM from 'react-dom'

import InputText from './InputText'
import TestActions from '../actions/TestActions'
import TestStore from '../stores/TestStore'

var VectorMap = React.createClass({
    componentDidMount() {
        $('#world-map').vectorMap({
            map: 'world_mill'
        })
    },

    render() {
        const mapStyle = {
            width: '600px',
            height: '400px'
        }
        return (
            <div
                id='world-map'
                style={mapStyle}
            >
            </div>
        )
    }
})

export default VectorMap