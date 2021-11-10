// Interfaces and Types

interface Data {
  updatedUser: any;
}

interface User extends Data {
  id: number;
  name: string;
  details: string;
  email: string;
}

type setValue = React.Dispatch<React.SetStateAction<number>> | SetStateAction<number>;

interface Error {
  message: string;
}
