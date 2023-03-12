import { IRegisterInputType } from './informationType';

function UserInput({ name, input, setInput, placeholder, disable = true }: IRegisterInputType) {
  return (
    <div className="mt-8">
      <label htmlFor="user-id" className="w-full flex flex-col items-start">
        {name}
      </label>
      <input
        id="user-id"
        type="text"
        className="p-2 h-10 w-full border-solid border-2 rounded-md"
        placeholder={placeholder}
        onChange={(e) => setInput(e.currentTarget.value)}
        value={input}
        disabled={disable}
      />
    </div>
  );
}

export default UserInput;
