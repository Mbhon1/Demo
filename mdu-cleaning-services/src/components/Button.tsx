const Button = ({ text, ...rest }:any ) => {
  return (
    <button {...rest} className="bg-blue-400 px-2 py-2 text-center rounded-md">
      {text}
    </button>
  );
};

export default Button;
