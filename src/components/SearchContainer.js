import { Box, SimpleGrid, Spinner } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { Search } from "./Search";
import { getMoviesByTitle } from "../service/cinemaService";
import MovieCard from "./MovieCard";

const SearchContainer = () => {
  const [ movieImage, setMovieImage ] = useState([]);
  const [ expression, setExpression ] = useState(['Shrek']);
  const [ isLoading, setIsLoading ] = useState(false);
  const inputRef = useRef();
  
  useEffect( () => {
    const request = async ()=>{
      try{
        setIsLoading(true);
        const response = await getMoviesByTitle(expression);
        setMovieImage(response.data.results);
        setIsLoading(false);
      }catch(error){
        console.log(error);
        setIsLoading(false);
      }
    }
    request()
  }, [expression])

  const handleSubmit = (e)=> {
    e.preventDefault();
    const inputValue = inputRef.current.value;
    setExpression(inputValue);
    inputRef.current.value = '';
  }

  return (
    <Box w={'100%'} p={5} bg={'gray.800'} h={'100vh'}>
      <Box maxW='1200px' m='auto'>
        <Search handleSubmit={handleSubmit} inputRef={inputRef} />

        <Box fontSize={{ base: 'xl', md: '1xl' }} mt={'7'} color={'whiteAlpha.800'}>
          Movies {'&'} Series {'>'} {expression} {'>'} results
        </Box>
        <Box p={0}>
          <SimpleGrid
            columns={{ base: 1, sm: 2, md: 4, lg: 6 }}
            spacing={4}
            alignItems='flex-start'
          >
            {isLoading ? <Spinner color="white" /> : movieImage?.map((movie) => {
              return <MovieCard key={movie.id} movie={movie} />;
            })}
          </SimpleGrid>
        </Box>
      </Box>
    </Box>  
  );
};
export default SearchContainer;