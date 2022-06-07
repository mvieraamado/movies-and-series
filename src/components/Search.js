import { Input } from "@chakra-ui/react";

export const Search = ({handleSubmit, inputRef}) => {
  return (
    <form onSubmit={handleSubmit}>
      <Input
        type='text'
        ref={inputRef}
        placeholder='Search by title'
        color={'whiteAlpha.900'}
      />
    </form>
  );
};