import { ComponentProps } from 'react';

function UserInput({ name, placeholder, value, onChange, disabled = true }: ComponentProps<'input'>) {
  return (
    <div>
      <label htmlFor="user-id" className="w-full flex flex-col items-start">
        {name}
      </label>
      <input
        id="user-id"
        type="text"
        className="p-2 h-10 w-full border-solid border-2 rounded-radius-m"
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        disabled={disabled}
      />
    </div>
  );
}

export default UserInput;
