import RightCardContent from "./RightCardContent";

const RightCard = (props) => {
  console.log(props.color);

  return (
    <div className="h-full shrink-0 overflow-hidden relative w-80 rounded-4xl hover:cursor-pointer transition-transform duration-500 hover:scale-105">
      <img
        className="h-full w-full object-cover "
        src={props.img}
        alt="profile"
      />
      <RightCardContent color={props.color} id={props.id} tag={props.tag} />
    </div>
  );
};

export default RightCard;
