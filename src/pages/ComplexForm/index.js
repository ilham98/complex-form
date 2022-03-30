import { Form, Button } from "reactstrap";
import Users from "./components/Users";
import { useState } from "react";

const SWAP_TOP = 1;
const SWAP_BOTTOM = 2;

const ComplexForm = () => {
  const [form, setForm] = useState([
    {
      name: "",
      jobs: [],
    },
  ]);

  const addUser = () => {
    const users = [...form];
    setForm([
      ...users,
      {
        name: "",
        jobs: [],
      },
    ]);
  };

  const addJob = (userIndex) => {
    const users = [...form];
    const jobs = [...users[userIndex].jobs, ""];
    users[userIndex] = {
      ...users[userIndex],
      jobs,
    };
    setForm(users);
  };

  const setJob = (event, userIndex, jobIndex) => {
    const value = event.target.value;
    const users = [...form];
    const jobs = [...users[userIndex]["jobs"]];
    jobs[jobIndex] = value;

    users[userIndex] = {
      ...users[userIndex],
      jobs,
    };
    setForm(users);
  };

  const setName = (event, userIndex) => {
    const value = event.target.value;
    const users = [...form];
    users[userIndex] = {
      ...users[userIndex],
      name: value,
    };
    setForm(users);
  };

  const swapUser = (userIndex, position) => {
    const users = [...form];
    const currentUser = {
      ...form[userIndex],
    };
    if (position === SWAP_TOP) {
      const userPrev = { ...users[userIndex - 1] };
      users[userIndex] = userPrev;
      users[userIndex - 1] = currentUser;
    } else if (position === SWAP_BOTTOM) {
      const userNext = { ...users[userIndex + 1] };
      users[userIndex] = userNext;
      users[userIndex + 1] = currentUser;
    }
    console.log(users);
    setForm(users);
  };

  return (
    <Form>
      <div className="d-flex justify-content-end mb-3">
        <Button color="primary" onClick={addUser}>
          Add User
        </Button>
      </div>
      {form.map((user, index) => (
        <Users
          key={index}
          setName={(event) => setName(event, index)}
          addJob={(event) => addJob(index)}
          user={user}
          userIndex={index}
          setJob={setJob}
          swapUser={swapUser}
          users={form}
        />
      ))}
    </Form>
  );
};

export default ComplexForm;
