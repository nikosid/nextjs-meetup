import classes from "./DetailMeetup.module.css";

const DetailMeetup = props => {
  return <div className={classes.detail}>
    <img src={props.image} alt={props.title}/>
    <h1>{props.title}</h1>
    <p>{props.description}</p>
    <p>{props.address}</p>
  </div>;
};

export default DetailMeetup;
