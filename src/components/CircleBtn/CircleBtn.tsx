import { CardCircle, InputCircle } from "./CircleBtn.element";

import { useRecoilState } from "recoil";
import {
  messengerOpenState,
  selectedTagState,
  todoOpenState,
} from "../../states/atom";
import { useNavigate } from "react-router-dom";

interface CBProps {
  color: string;
  type: "tag" | "button";
  name?: string;
}

const CircleBtn = ({ color, type, name }: CBProps) => {
  const navigate = useNavigate();
  const [todoOpen, setTodoOpen] = useRecoilState(todoOpenState);
  const [messengerOpen, setMessengerOpen] = useRecoilState(messengerOpenState);
  const [selectedTag, setSelectedTag] = useRecoilState(selectedTagState);
  if (type === "tag") {
    // using type as _type since 'type' is reserved word in input
    return (
      <InputCircle
        type="radio"
        color={color}
        _type={type}
        name={name}
        selected={selectedTag === name}
        onClick={() => setSelectedTag("red")}
      />
    );
  } else if (color === "red" && type === "button" && name === "back") {
    return (
      <CardCircle color={color} type={type} onClick={() => navigate("/")} />
    );
  } else if (color === "red" && type === "button" && name === "todo") {
    return (
      <CardCircle
        color={color}
        type={type}
        onClick={() => setTodoOpen(false)}
      />
    );
  } else if (color === "red" && type === "button" && name === "messenger") {
    return (
      <CardCircle
        color={color}
        type={type}
        onClick={() => setMessengerOpen(false)}
      />
    );
  } else {
    return <CardCircle color={color} type={type} />;
  }
};

export default CircleBtn;
