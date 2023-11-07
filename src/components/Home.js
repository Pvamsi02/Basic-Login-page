import { signOut } from "firebase/auth";
import { auth } from "../firebase";
function Home() {
  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        alert("SignOut Successful");
        window.location.assign("/");
      })
      .catch((error) => console.log(error));
  };
  return (
    <>
      <h1>Home Page</h1>
      <button onClick={userSignOut}>SignOut</button>
    </>
  );
}

export default Home;
