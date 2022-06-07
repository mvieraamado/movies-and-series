import { Box, Center, Image, Tooltip } from "@chakra-ui/react";

const MovieCard = ({ movie }) => {
  return (
  <Center py={4} key={movie.id}>
    <Box
      maxW={'200px'}
      w={'full'}
      bg={'gray.800'}
      boxShadow={'2xl'}
      rounded={'sm'}
      overflow={'hidden'}
    >
      <Tooltip
        label={`${movie.title} ${movie.description}`}
        closeOnClick={false}
        hasArrow
        bg={'yellow.400'}
        color={'gray.800'}
      >
        <Image
          h={'130px'}
          w={'full'}
          transition='0.2s ease-in-out'
          _hover={{
            transform: 'scale(1.07)',
          }}
          src={movie.image}
          cursor={'pointer'}
          objectFit={'cover'}
          objectPosition='center 0px'
        />
      </Tooltip>
    </Box>
  </Center>
  );
};
export default MovieCard;