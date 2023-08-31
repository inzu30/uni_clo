import Navbar from '../component/Navbar';
import Grid from '../component/Grid';
import Card2 from '../component/Card2';
import Editorial from '../Editorial/Editorial';
import elevenimg from "../assets/elevenimg.jpg";
import Image from '../component/Image';
import Video from '../component/Video';
const Home = () => {

  // function handlelogin() {
  //   nav("/login");
  // }
  // function handlecart() {
  //   nav("/cart");
  // }
  // function handleregister() {
  //   nav("/register");
  // }

  return (
    <div>
    
      <Navbar />
      {/* <div style={{ display: Flex }}>
        <i onClick={handlecart} class="fas fa-bag-shopping"></i>
        <i class="fas fa-user" onClick={handlelogin}></i>
        <i class="fas fa-user-plus" onClick={handleregister}></i>
      </div> */}
      {/* <div className="Home">
        <video src={project} autoPlay muted loop />
        <div className="content" style={{ color: "navy" }}>
          <br />
          <br />
          <br />
        </div>
        </div> */}
        <Video/>
        <Grid/>
        <img src={elevenimg} alt="" />
        <Editorial/>
        <Card2/>
        <Image/>
    </div>
  );
};

export default Home;
