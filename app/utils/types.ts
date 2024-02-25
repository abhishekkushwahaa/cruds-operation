interface formType {
  name: string;
  email: string;
  phone: string;
  hobbies: string;
}

interface tableType {
  id: number;
  name: string;
  phoneNumber: string;
  email: string;
  hobbies: string;
}

interface Row {
  id: number;
  name: string;
  phoneNumber: string;
  email: string;
  hobbies: string;
  selected: boolean;
}

interface TableProps {
  data: Row[];
  handleCheckboxChange: (id: number) => void;
  handleUpdateDelete: (id: number) => void;
}

type MyComponentProps = {
  onClose: () => void;
};
