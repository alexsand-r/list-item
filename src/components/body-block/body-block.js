//*--
import Btn from "../button/button";
import Search from "../search/search";
import "./body-block.css";

function BodyBlock() {
  return (
    <div className="body-block">
      <Search />
      <Btn />
    </div>
  );
}

export default BodyBlock;
