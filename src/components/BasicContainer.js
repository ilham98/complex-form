import MyNavbar from "./MyNavbar";
import { Container } from "reactstrap";

const BasicContainer = (props) => {
  return (
    <>
      <MyNavbar />
      <Container className="pt-3">
        <div>{props.children}</div>
      </Container>
    </>
  );
};

export default BasicContainer;
