import { Link } from "react-router-dom";
import Header from "../../components/Header";

export default function Home() {
  return (
    <div
      style={{
        background: "aquamarine",
      }}
    >
      <Header />
      <Link to="/login">Login</Link>
    </div>
  );
}
