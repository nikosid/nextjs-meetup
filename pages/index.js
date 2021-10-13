import MeetupList from "../components/meetups/MeetupList";
import Head from "next/head";
import {MongoClient} from "mongodb";

const MainPage = (props) => {
  return <>
    <Head>
      <title>React Meetups</title>
      <meta
        name='description'
        content='Browse a huge list of highly active React meetups!'
      />
    </Head>
    <MeetupList meetups={props.meetups}/>
  </>
};


export async function getStaticProps() {
  // fetch data from an API
  const client = await MongoClient.connect(
    'mongodb+srv://nextjsmeetups:rEdHrrOHnLCGZzAd@nextjs-cluster.yuge0.mongodb.net/meetups?retryWrites=true&w=majority'
  );
  const db = client.db();

  const meetupsCollection = db.collection('meetups');

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 1,
  };
}

export default MainPage;
