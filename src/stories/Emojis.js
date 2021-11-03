import React from 'react';
import Picker from 'emoji-picker-react';
import { Component } from 'react';


class EmojiComponent extends Component {

    onEmojiClick  = (event, emojiObject) => {
        this.props.emojiChanged(emojiObject)
    }

    render() {
        return (
            <div style={{position: 'relative', left: '603px'}}>
                <Picker onEmojiClick={this.onEmojiClick} />
            </div>
        );
    }
}
export default EmojiComponent;