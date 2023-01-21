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
    <div className="flex flex-wrap mb-5">
      <input
        type="text"
        onKeyUp={(event) => (event.key === "Enter" ? addTags(event) : null)}
        placeholder="Press enter to add skills"
      />
      <ul id="tags" className="flex flex-wrap space-x-2 space-y-2">
        {tags.map((tag, index) => (
          <li key={index} className="tag bg-blue-500 p-1 rounded-md">
            <span className="text-white">{tag} </span>
            <buttun
              className="bg-white cursor-pointer rounded-full w-4 h-4"
              onClick={() => removeTags(index)}
            >
              x
            </buttun>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TagsInput;
