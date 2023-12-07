"use client"

import { Button, Input, useToast } from '@chakra-ui/react'
import React from 'react'
import { useState } from "react";

const Searchbar = ({setData, setLoading}) => {
    const toast = useToast();

    const [name, setName] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        if(!name){
            return ;
        }
        setLoading(true);
        setData(null);
        try{
            const response = await fetch(`https://api.github.com/users/${name}`);
            const data = await response.json();
            if(data.message){
                return toast({
					title: "Error",
					description: data.message === "Not Found" ? "User not found" : data.message,
					status: "error",
					duration: 3000,
					isClosable: true,
				});
            }
            setData(data);
        }
        catch(error){
            toast({
				title: "Error",
				description: error.message,
				status: "error",
				duration: 3000,
				isClosable: true,
			});
        }
        finally{
            setLoading(false);
        }
      };

    return (
        <form onSubmit={handleSubmit}>
          <Input
            variant="outline"
            placeholder="Type a username (i.e. patnaikankit)"
            focusBorderColor='green.500'
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <Button
            size='md'
            type='submit'
            colorScheme='whatsapp'
            mt={4}
            disabled={!name}
            opacity={!name ? 0.5 : 1}
          >
            Search
          </Button>
        </form>
      );
    };

export default Searchbar