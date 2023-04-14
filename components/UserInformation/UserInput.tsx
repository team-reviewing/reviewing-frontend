import { ComponentProps } from 'react';

function UserInput({ name, placeholder, value, onChange, disabled = true }: ComponentProps<'input'>) {
  return (
    <div>
      <label htmlFor="user-id" className="flex flex-col items-start w-full">
        {name}
      </label>
      <input
        id="user-id"
        type="text"
        className="w-full h-10 p-2 border-2 border-solid rounded-radius-m"
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        disabled={disabled}
      />
    </div>
  );
}

export default UserInput;
