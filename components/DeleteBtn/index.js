import { Button } from "antd";

const DeleteBtn = ({ index, setList, list }) => {
  const handleDelete = () => {
    setList(list.filter((item, i) => i !== index));
  };
  return (
    <Button onClick={handleDelete} size="small" type="danger">
      Delete
    </Button>
  );
};

export default DeleteBtn;
