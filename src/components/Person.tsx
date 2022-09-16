import {useState, ChangeEvent} from 'react';
import { Person } from '../Interfaces';

export const User = (props: Person) => {
    const [country, setCountry] = useState<string | null>("")

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setCountry(event.target.value)
    }
  return (
    <div>
      <h1> {props.name}</h1>
      <h1> {props.email}</h1>
      <h1> {props.age}</h1>
      <input placeholder="Write down your country" onChange={handleChange}/>

      {country}
    </div>
  );
};

