import React, { useRef } from "react";
import { useRecoilState } from "recoil";
import { searchValueState } from "../../states/atom";
import { SearchConatinerDiv, SearchInput } from "./SearchContainer.element";

const SearchContainer = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputValue, setInputValue] = useRecoilState(searchValueState);
  const handleClickHandler = () => {
    inputRef.current?.focus();
  };

  const handleChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  return (
    <SearchConatinerDiv>
      <SearchInput
        placeholder="검색"
        ref={inputRef}
        onClick={handleClickHandler}
        onChange={handleChangeHandler}
      />
    </SearchConatinerDiv>
  );
};

export default SearchContainer;
