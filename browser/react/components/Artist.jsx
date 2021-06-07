import React from "react";

export default class SingleArtist extends React.Component () {
    constructor(props){
        super(props)
    }

    componentDidMount=() => {
        this.props.selectArtists(this.props.artistId);
    }

    render() {
        return (
            <div>
            <h3>ARTIST NAME</h3>
            <h4>ALBUMS</h4>
            <h4>SONGS</h4>
        </div>

        )
    }

}