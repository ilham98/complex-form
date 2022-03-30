import {
  Card,
  CardTitle,
  CardHeader,
  CardBody,
  Label,
  Input,
  Button,
} from "reactstrap";
import Job from "./components/Job";

const Users = (props) => {
  return (
    <Card className="mb-3">
      <CardHeader className="d-flex justify-content-between">
        <CardTitle>User {props.userIndex + 1}</CardTitle>
        <div>
          {props.userIndex !== 0 && (
            <div style={{ display: "inline-block" }} className="p-1">
              <Button
                onClick={() => props.swapUser(props.userIndex, 1)}
                size="sm"
              >
                Swap Up
              </Button>
            </div>
          )}
          {props.userIndex !== props.users.length - 1 && (
            <div style={{ display: "inline-block" }} className="p-1">
              <Button
                onClick={() => props.swapUser(props.userIndex, 2)}
                size="sm"
              >
                Swap Down
              </Button>
            </div>
          )}
        </div>
      </CardHeader>
      <CardBody>
        <Label>Name</Label>
        <Input onChange={props.setName} value={props.user.name} />
        <Button className="mt-3" onClick={props.addJob}>
          Add Job
        </Button>
        <div className="row">
          {props.user.jobs.map((job, jobIndex) => (
            <Job
              jobIndex={jobIndex}
              job={job}
              addJob={props.addJob}
              setJob={(event) => props.setJob(event, props.userIndex, jobIndex)}
            />
          ))}
        </div>
      </CardBody>
    </Card>
  );
};

export default Users;
