import React from 'react'
import { useRef } from 'react';
import { Input, IconButton } from '@chakra-ui/react'
import { Icon } from '@iconify/react';



function AttachFile(props){
    const inputFile = useRef();    
    const handleInput = () => {
        const file = inputFile.current.files[0];
        if (file) {
            props.onFileAttached(true)
        } else {
            props.onFileAttached(false)
        }
        console.log(file);
    }

    return (

            <IconButton 
                width="8px"
                height="16px"
                mt="4"
                position="static"
                variant='unstlyed' 
                color="#94A3A8"
                onClick={() => inputFile.current.click()}
            >
                     <div>
                     <Icon  icon="ic:baseline-attach-file"/>
                <Input 
                    type='file' 
                    id='file'
                    position="absolute"
                    ref={inputFile}
                    onInput={handleInput}
                    style={{display:'none'}}
                >
                </Input>
            </div>
            </IconButton>
    );
}
export default AttachFile