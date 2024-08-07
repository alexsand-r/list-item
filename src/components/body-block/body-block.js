//*--
import Btn from "../button/button";
import List from "../list/list";
import Search from "../search/search";
import "./body-block.css";

function BodyBlock() {
  return (
    <div className="body-block">
      <Search />
      <List />
      <Btn />
    </div>
  );
}

export default BodyBlock;
