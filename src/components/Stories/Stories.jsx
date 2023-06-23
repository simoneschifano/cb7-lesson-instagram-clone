import { useEffect, useState } from "react";

import "./Stories.css";

// components
import Story from "../Story";
import ModalStories from "../ModalStories";

const Stories = ({ user, stories }) => {
  const [storyStart, setStoryStart] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModalStories = (index) => {
    setStoryStart(index);
    setIsModalOpen(true);
  };
  useEffect(() => {
    setStoryStart(storyStart ? storyStart : false);
  }, [storyStart]);

  const closeModalStories = () => {
    setIsModalOpen(false);
    setStoryStart(false);
  };

  return (
    <>
      <div className="Stories">
        <ul className="Stories__List">
          {/* <li className="Stories__Item">
          <Story story={user} />
        </li> */}
          {stories &&
            stories.map((story, index) => (
              <li
                className="Stories__Item"
                key={story.id}
                onClick={() => openModalStories(index)}
              >
                <Story story={story} />
              </li>
            ))}
        </ul>
      </div>
      {storyStart && (
        <ModalStories
          stories={stories}
          isOpen={isModalOpen}
          closeModal={closeModalStories}
          index={storyStart}
        />
      )}
    </>
  );
};

export default Stories;
