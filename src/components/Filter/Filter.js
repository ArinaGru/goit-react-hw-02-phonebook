import { MyInput, MyLable } from './Filter.styled';
export const Filter = ({ value, onChange }) => {
  return (
    <MyLable>
      Find contacts by name
      <MyInput name="filter" type="text" value={value} onChange={onChange} />
    </MyLable>
  );
};
