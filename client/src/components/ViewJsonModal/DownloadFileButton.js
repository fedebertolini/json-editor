import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';

class DownloadFileButton extends Component {

    componentWillMount() {
        const fileProperties = {
            type: 'application/json'
        };
        let file;
        try {
            file = new File([this.props.fileContent], 'content.json', fileProperties);
        } catch(e) {
            file = new Blob([this.props.fileContent], fileProperties);
        }
        if (file) {
            this.fileUrl = URL.createObjectURL(file);
        }
    }

    render() {
        if (!this.fileUrl) {
            return null;
        }
        return (
            <a href={this.fileUrl} download="content.json">
                <Button
                    icon='file text'
                    color='blue'
                    basic
                    content='Save to File'
                />
            </a>
        );
    }

    componentWillUnmount() {
        if (this.fileUrl) {
            URL.revokeObjectURL(this.fileUrl);
        }
    }
}

export default DownloadFileButton;
