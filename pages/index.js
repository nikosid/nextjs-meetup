import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "First meetup",
    image: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
    address: "Some address 5",
    description: "This is a first meetup description"
  },
  {
    id: "m2",
    title: "Second meetup",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1280px-Image_created_with_a_mobile_phone.png",
    address: "Some second address",
    description: "This is a second meetup description"
  },
];

const MainPage = (props) => {
  return <MeetupList meetups={props.meetups} />
};


export async function getStaticProps() {
  return {
    props: {
      meetups: DUMMY_MEETUPS
    }
  };
}

export default MainPage;
