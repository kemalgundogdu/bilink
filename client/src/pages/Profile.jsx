import React, { useEffect, useState } from "react";
// api
import { getUser } from "../api";
// router
import { useParams } from "react-router";

// theme
import DefaultTheme from "../templates/Default";

function Home() {
  const { username } = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    getUser(username)
      .then((res) => {
        setUser(res);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <DefaultTheme
        bio={user.bio}
        links={user.links}
        social={user.socialMedias}
        name={user.name}
        surname={user.surname}
      />
    </>
  );
}

export default Home;
