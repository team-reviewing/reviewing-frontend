interface IButtonProps {
  children: React.ReactNode;
  option?: string;
  onClick?: () => void;
}

function ButtonWrapper({ children, option, onClick }: IButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex justify-center items-center bg-black text-white h-10 rounded-md ${option ? option : ''}`}>
      {children}
    </button>
  );
}

export default ButtonWrapper;
