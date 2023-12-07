import { Avatar, Badge, Box, Button, Flex, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import Repository from './Repository';

const Profile = ({data}) => {
    if(!data){
        return null; 
    }
    
    const { name, avatar_url, html_url } = data;

  return (
    <>
        <Flex my={16} border={"2px solid"} borderColor={"green.500"} borderRadius={4} padding={8}>
            <VStack gap={5}>
				<Avatar size={"2xl"} name={data.name} src={data.avatar_url} />
					<Button colorScheme='whatsapp'>
						<a href={data.html_url} target='_blank'>
							View Profile
						</a>
					</Button>
			</VStack>

            <VStack ml={8} alignItems={"self-start"}>
					<Flex gap={4}>
						<Badge fontSize={"0.9em"} colorScheme='orange'>
							Public Repos: {data.public_repos}
						</Badge>
						<Badge fontSize={"0.9em"} colorScheme='pink'>
							Public Gists: {data.public_gists}
						</Badge>
						<Badge fontSize={"0.9em"} colorScheme='cyan'>
							Followers: {data.followers}
						</Badge>
						<Badge fontSize={"0.9em"} colorScheme='purple'>
							Following: {data.following}
						</Badge>
					</Flex>

            <Text fontSize={"2xl"} fontWeight={"bold"} mt={4} color={"green.400"}>
					{data.name}
			</Text>
			<Text fontSize={"md"} fontWeight={"bold"} color={"green.500"}>
					{data.bio}
			</Text> 

            <Box>
				<Text fontSize={"md"}>
					<Text as={"span"} fontWeight={"bold"} color={"green.200"} mr={1}>
						Company:
					</Text>
						{data.company || "Not Specified"}
					</Text>
					<Text fontSize={"md"}>
						<Text as={"span"} fontWeight={"bold"} color={"green.200"} mr={1}>
							Location:
						</Text>
						{data.location || "Not Specified"}
					</Text>

                    <Text fontSize={"md"}>
							<Text as={"span"} fontWeight={"bold"} color={"green.200"} mr={1}>
								Blog / Website:
							</Text>
							{data.blog ? (
								<a href={data.blog} target='_blank'>
									{data.blog}
								</a>
							) : (
								"Not Specified"
							)}
					</Text>

                    <Text fontSize={"md"}>
							<Text as={"span"} fontWeight={"bold"} color={"green.200"} mr={1}>
								Joined:
							</Text>
							{new Date(data.created_at).toLocaleDateString()}
					</Text>
                </Box>  
            </VStack>      
        </Flex>

        <Repository reposUrl={data.repos_url}/>
    </>
  )
}

export default Profile