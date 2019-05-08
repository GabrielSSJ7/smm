import React from 'react'
export default class Uploading extends React.Component {
    render() {
        
        return <>{this.props.uploadProgress}%</>
    }
}