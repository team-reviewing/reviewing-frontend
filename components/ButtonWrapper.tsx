interface IButtonProps {
  children: React.ReactNode;
  option?: string;
}

function ButtonWrapper({ children, option }: IButtonProps) {
  return (
    <button
      className={`w-full flex justify-center items-center bg-black text-white h-10 rounded-md ${option ? option : ''}`}>
      {children}
    </button>
  );
}

export default ButtonWrapper;
