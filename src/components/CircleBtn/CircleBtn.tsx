import { CardCircle, InputCircle } from "./CircleBtn.element";

import { useRecoilState } from "recoil";
import { selectedTagState } from "../../states/atom";

interface CBProps {
  color: string;
  type: "tag" | "button";
  name?: string;
}

const CircleBtn = ({ color, type, name }: CBProps) => {
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
        onClick={() => setSelectedTag(name || "red")}
      />
    );
  } else if (color === "red" && type === "button") {
    return (
      <CardCircle
        color={color}
        type={type}
        onClick={() => window.location.assign("/")}
      />
    );
  } else {
    return <CardCircle color={color} type={type} />;
  }
};

export default CircleBtn;
