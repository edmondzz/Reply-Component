import { Input,Stack, IconButton, Avatar, Flex, WrapItem, } from '@chakra-ui/react'
import React from 'react';
import { InputGroup, InputRightElement } from '@chakra-ui/input';
import { Icon } from '@iconify/react';
import AttachFile from './AttachFile'
import EmojiComponent from './Emojis'
import { Component } from 'react';
 class ReplyComponent extends Component {

    state = {
        isSendActive: false,
        isFileAttached: false,
        showEmojis: false,
        selectedEmoji: '',
        inputValue: '',
    };
    showEmojis = () => {
        const showEmojis = !this.state.showEmojis;
        this.setState({showEmojis: showEmojis})
    }
    handleInputChange = (event) => {
        console.log(event.target.value.length);
        this.setState({inputValue: event.target.value});
        if (event.target.value.length > 0 || this.state.isFileAttached) {
            this.setState({isSendActive: true})
        } else {
            this.setState({isSendActive: false})
        }
    }

    handleAttachFile = (isFileAttached) => {
        this.setState({isFileAttached})
        if (isFileAttached || this.state.isSendActive) {
            this.setState({isSendActive: true})
        } else {
            this.setState({isSendActive: false})
        }
        
    }

    handleEmojiChanged = (emojiObject) => {
        this.setState({selectedEmoji: emojiObject})
        const inputValue = this.state.inputValue + emojiObject.emoji;
        this.setState({inputValue})
        this.setState({isSendActive: true})
    }
    
    handleSendMsg = () =>{
        this.setState({showEmojis: false})
    }


    render () {
       return (
        <Flex>
            <Stack>
                <WrapItem>
                    <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" w='32px' h='32px' top='50px' ml='6'/>
                </WrapItem>
                    <InputGroup>  
                        <Input placeholder="Reply" w='640px' h='40px' top='8px' left='64px' radius='4px' pr='127.5px' border='1px' variant='outline' borderColor='#D4DFE3'
                            onChange={this.handleInputChange} value={this.state.inputValue}
                        />
                            <InputRightElement pl='5'>  
                                <AttachFile isSendActive={this.state.isSendActive} onFileAttached={this.handleAttachFile}/>
                                    <IconButton
                                        width='16px'
                                        height='16px'
                                        mt='4'
                                        color="#94A3A8"
                                        variant='unstlyed' 
                                        onClick={this.showEmojis}
                                        icon={<Icon icon="ph:smiley" />}
                                    />
                                    <IconButton
                                        width='16px'
                                        height='16px'
                                        opacity={this.state.isSendActive ? "100%" : "40%"}
                                        mt='4'
                                        color="#0E5E81"  
                                        variant='unstlyed' 
                                        icon={<Icon icon="ri:send-plane-2-fill" />}
                                        onClick={this.handleSendMsg}
                                    />
                            </InputRightElement>
                    </InputGroup>
                        { this.state.showEmojis ? <EmojiComponent emojiChanged={this.handleEmojiChanged.bind(this)}/> : null }
                </Stack>
            </Flex>
        );
    }
}

export default ReplyComponent;
