import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const SimpleForm = () => {
  return (
    <Form>
      <FormGroup>
        <Label>Email</Label>
        <Input />
      </FormGroup>
      <FormGroup>
        <Label>Password</Label>
        <Input />
      </FormGroup>
      <Button>Submit</Button>
    </Form>
  );
};

export default SimpleForm;
