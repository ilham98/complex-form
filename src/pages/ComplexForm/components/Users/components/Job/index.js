import { Card, CardText, CardTitle, Input } from "reactstrap";

const Job = (props) => {
  return (
    <div className="col-lg-4 col-md-6 p-3">
      <Card
        body
        inverse
        style={{
          backgroundColor: "",
          borderColor: "#6f42c1",
        }}
      >
        <CardTitle style={{ color: "black" }} tag="h6">
          Job {props.jobIndex + 1}
        </CardTitle>
        <CardText style={{ color: "black" }}>
          <Input value={props.job} onChange={props.setJob} />
        </CardText>
      </Card>
    </div>
  );
};

export default Job;
