import { Input,HStack, IconButton, Avatar, Flex, WrapItem, } from '@chakra-ui/react'
import React from 'react';
import { InputGroup, InputRightElement } from '@chakra-ui/input';
import { Icon } from '@iconify/react';
import AttachFile from './AttachFile'
import { Component } from 'react';
 class ReplyComponent extends Component {

    state = {
        isSendActive: false,
        isFileAttached: false,
    };
    
    handleInputChange = (event) => {
        console.log(event.target.value.length);
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

    render () {
       return (
        <Flex>
            <HStack px='8' pt='8'>
                <WrapItem>
                <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" w='32px' h='32px' top='8px' left='64px'/>
                </WrapItem>
                    <InputGroup>  
                        <Input placeholder="Reply" w='640px' h='40px' top='8px' left='64px' radius='4px' pr='127.5px' border='1px' variant='outline' borderColor='#D4DFE3'
                            onChange={this.handleInputChange}
                        />
                            <InputRightElement pl='5'>  
                                <AttachFile isSendActive={this.state.isSendActive} onFileAttached={this.handleAttachFile}/>
                                    <IconButton
                                        width='16px'
                                        height='16px'
                                        mt='4'
                                        color="#94A3A8"
                                        variant='unstlyed' 
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
                                    />
                            </InputRightElement>
                    </InputGroup>
                </HStack>
            </Flex>
        );
    }
}

export default ReplyComponent;
