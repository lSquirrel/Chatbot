import Chatbot from "../../components/Chatbot";
import { Props } from "../../lib/common";


const Home = (props: Props) => {
  return (
    <div>
      <h1>hello world!</h1>
      <Chatbot {...props} />
    </div>
  )
}


export default Home;