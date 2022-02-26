import { Button } from "antd";

const DeleteBtn = ({ message, setList, list }) => {
  const handleDelete = () => {
    setList(list.filter((item) => message !== item));
  };
  return (
    <Button onClick={handleDelete} size="small" type="danger">
      Delete
    </Button>
  );
};

export default DeleteBtn;
