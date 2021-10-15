import { Input, VStack,HStack, IconButton } from '@chakra-ui/react'
import React from 'react';
import { InputGroup, InputRightElement } from '@chakra-ui/input';
import { Avatar, Button  } from "@chakra-ui/react"
import { Component, useRef } from 'react';

class ReplyComponent extends Component {
    

    render () {

          
        function AttachFile(){
            const inputFile = useRef();    
            const handleInput =()=>{
                const file = inputFile.current.files[0];
                console.log(file,'file');
            }
        
            return (

                <IconButton 
                        d='flex' 
                        variant='styled' 
                        color="#0E5E81"
                        w={6} h={6} 
                        onClick={() => inputFile.current.click()}
                >
                  <div>
                      <label htmlFor="file"><svg width="8" height="16" viewBoxs="0 0 8 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.90909 3.63636V12C6.90909 13.6073 5.60727 14.9091 4 14.9091C2.39273 14.9091 1.09091 13.6073 1.09091 12V2.90909C1.09091 1.90545 1.90545 1.09091 2.90909 1.09091C3.91273 1.09091 4.72727 1.90545 4.72727 2.90909V10.5455C4.72727 10.9455 4.4 11.2727 4 11.2727C3.6 11.2727 3.27273 10.9455 3.27273 10.5455V3.63636H2.18182V10.5455C2.18182 11.5491 2.99636 12.3636 4 12.3636C5.00364 12.3636 5.81818 11.5491 5.81818 10.5455V2.90909C5.81818 1.30182 4.51636 0 2.90909 0C1.30182 0 0 1.30182 0 2.90909V12C0 14.2109 1.78909 16 4 16C6.21091 16 8 14.2109 8 12V3.63636H6.90909Z" fill="#5A6D72"/>
                            </svg></label>
                        <input 
                            type='file' 
                            id='file'
                            ref={inputFile}
                            onInput={handleInput}
                            style={{display:'none'}}
                        >
                        </input>
                    </div>
                </IconButton>
            // <IconButton
            //     type='file' 
            //     id='file'
            //     ref={inputFile}
            //     onInput={handleInput}
            //     d='flex' 
            //     variant='styled' 
            //     color="#0E5E81" mt='1' mr='3'
            //     w={6} h={6} 
            //     onClick={() => inputFile.current.click()}
            //     children= {
            //         <svg width="8" height="16" viewBoxs="0 0 8 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            //             <path d="M6.90909 3.63636V12C6.90909 13.6073 5.60727 14.9091 4 14.9091C2.39273 14.9091 1.09091 13.6073 1.09091 12V2.90909C1.09091 1.90545 1.90545 1.09091 2.90909 1.09091C3.91273 1.09091 4.72727 1.90545 4.72727 2.90909V10.5455C4.72727 10.9455 4.4 11.2727 4 11.2727C3.6 11.2727 3.27273 10.9455 3.27273 10.5455V3.63636H2.18182V10.5455C2.18182 11.5491 2.99636 12.3636 4 12.3636C5.00364 12.3636 5.81818 11.5491 5.81818 10.5455V2.90909C5.81818 1.30182 4.51636 0 2.90909 0C1.30182 0 0 1.30182 0 2.90909V12C0 14.2109 1.78909 16 4 16C6.21091 16 8 14.2109 8 12V3.63636H6.90909Z" fill="#5A6D72"/>
            //         </svg>
            //     }
            // >
            // </IconButton>
            );
        
       }
        return (
            <HStack px='8' pt='8'spacing={5}>
                <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov"  size='md'/>
                <InputGroup w='35%'>  
                    <Input placeholder="Reply" />
                        <InputRightElement>
                            <div style={{display: 'flex', position: 'relative', marginRight: '90px'}}>
                                <IconButton
                                    d='flex' 
                                    variant='styled' 
                                    color="#0E5E81" mt='1' 
                                    w={6} h={6} 
                                    children=
                                    {
                                        <svg width="8" height="16" viewBoxs="0 0 8 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6.90909 3.63636V12C6.90909 13.6073 5.60727 14.9091 4 14.9091C2.39273 14.9091 1.09091 13.6073 1.09091 12V2.90909C1.09091 1.90545 1.90545 1.09091 2.90909 1.09091C3.91273 1.09091 4.72727 1.90545 4.72727 2.90909V10.5455C4.72727 10.9455 4.4 11.2727 4 11.2727C3.6 11.2727 3.27273 10.9455 3.27273 10.5455V3.63636H2.18182V10.5455C2.18182 11.5491 2.99636 12.3636 4 12.3636C5.00364 12.3636 5.81818 11.5491 5.81818 10.5455V2.90909C5.81818 1.30182 4.51636 0 2.90909 0C1.30182 0 0 1.30182 0 2.90909V12C0 14.2109 1.78909 16 4 16C6.21091 16 8 14.2109 8 12V3.63636H6.90909Z" fill="#5A6D72"/>
                                        </svg>
                                    }
                                >
                                  <AttachFile/>
                                </IconButton>
                                <IconButton 
                                    variant='styled' 
                                    color="#0E5E81" 
                                    d='flex' 
                                    mt='1' 
                                    w={6} h={6}
                                    children={
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M19.2 12C19.2 15.9765 15.9765 19.2 12 19.2C8.02355 19.2 4.8 15.9765 4.8 12C4.8 8.02355 8.02355 4.8 12 4.8C15.9765 4.8 19.2 8.02355 19.2 12Z" stroke="#5A6D72" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M8.78662 13.4153C8.78662 13.4153 9.98329 14.9845 11.9777 14.9845C13.9722 14.9845 15.1688 13.4153 15.1688 13.4153" stroke="#5A6D72" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M9.58447 9.49219H9.59247" stroke="#5A6D72" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M14.3711 9.49219H14.3791" stroke="#5A6D72" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    }
                                >
                                    
                                </IconButton>

                                <IconButton mr='1'
                                color="#0E5E81"  
                                variant='ghost' 
                                mt='1' 
                                w={6} h={6}
                                children={
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 8.7509H4.93273V7.2491H0V0.375385C1.22294e-05 0.310143 0.0186378 0.24603 0.0540409 0.189365C0.089444 0.1327 0.140403 0.0854393 0.201894 0.0522411C0.263385 0.0190429 0.333286 0.00105307 0.404708 4.48448e-05C0.47613 -0.000963385 0.546607 0.0150448 0.609192 0.0464914L15.7872 7.67111C15.8516 7.70352 15.9054 7.75113 15.9428 7.80898C15.9803 7.86683 16 7.9328 16 8C16 8.0672 15.9803 8.13316 15.9428 8.19102C15.9054 8.24887 15.8516 8.29648 15.7872 8.32889L0.609192 15.9535C0.546607 15.985 0.47613 16.001 0.404708 16C0.333286 15.9989 0.263385 15.981 0.201894 15.9478C0.140403 15.9146 0.089444 15.8673 0.0540409 15.8106C0.0186378 15.754 1.22294e-05 15.6899 0 15.6246V8.7509Z" fill="#0E5E81"/>
                                    </svg>

                                }
                                >
                                </IconButton>
                            </div>
                        </InputRightElement>
                </InputGroup>
            </HStack>
        );
    }
}

export default ReplyComponent;
