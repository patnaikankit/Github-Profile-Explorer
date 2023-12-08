"use client"

import { Button, Input, useToast } from '@chakra-ui/react'
import React from 'react'
import { useState } from "react";

const Searchbar = ({setData, setLoading}) => {
    const toast = useToast();

    const [name, setName] = useState("");

    // to save the users we have previously searched for in the local storage
    const saveToLocalStorage = (data, username) => {
      const users = JSON.parse(localStorage.getItem("github-users")) || [];
		  const userExists = users.find((user) => user.id === username);
      // this is done to make that if we are searching for a user whom we have already searched before and is present in the search history then his id his replaced to the top and the previous search is discarded
      // this is done in order to avoid duplicates and to maintain the search order 
      if (userExists) {
        users.splice(users.indexOf(userExists), 1);
      }
      users.unshift({
        id: username,
        avatar_url: data.avatar_url,
        name: data.name,
        url: data.html_url,
      });
      localStorage.setItem("github-users", JSON.stringify(users));
    }

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
            saveToLocalStorage(data, name);
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