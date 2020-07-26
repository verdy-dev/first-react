import React, { Component, Fragment } from 'react'
import YoutubeComp from '../../../component/youtube-comp/YoutubeComp'

class YoutubeComps extends Component{
    render(){
        return(
        <Fragment>
            <p>Youtube Component</p>
            <hr/>
            <YoutubeComp />
            <YoutubeComp />
            <YoutubeComp />
            <YoutubeComp />
            <YoutubeComp />
        </Fragment>)
    }
}

export default YoutubeComps;