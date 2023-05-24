import React, { useState } from "react";

function TagsInput(props) {
  const [tags, setTags] = useState(props.tags);
  const removeTags = (indexToRemove) => {
    setTags([...tags.filter((_, index) => index !== indexToRemove)]);
  };
  const addTags = (event) => {
    if (event.target.value !== "") {
      setTags([...tags, event.target.value]);
      props.selectedTags([...tags, event.target.value]);
      event.target.value = "";
    }
  };
  return (
    <div className="mb-5">
      <input
        className="p-2 md:p-3 rounded-md w-full mb-2"
        type="text"
        onKeyUp={(event) => (event.key === "Enter" ? addTags(event) : null)}
        placeholder="Press enter to add skills"
      />
      <ul id="tags" className="flex flex-wrap space-x-2 ">
        {tags.map((tag, index) => (
          <li key={index} className="tag bg-[#ff673a] p-1 m-1 flex rounded-md">
            <span className="text-white">{tag} </span>
            <span
              className="bg-white ml-2 cursor-pointer rounded-full p-1 w-6 h-6 flex justify-center items-center"
              onClick={() => removeTags(index)}
            >
              x
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TagsInput;
