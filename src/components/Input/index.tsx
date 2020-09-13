import React, { InputHTMLAttributes, useState, useEffect } from "react";

import { IconBaseProps } from "react-icons/lib";
import { Container } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({ icon: Icon, ...rest }) => {
  const [isFocused, setIsFocused] = useState(false);

  // const handleInputFocus = useCallback(() => {
  //   setIsFocused(true);
  // });

  useEffect(() => {
    setIsFocused(!!isFocused);
  }, [isFocused]);

  return (
    <Container>
      {Icon && <Icon size={20} />}
      <input {...rest} />
    </Container>
  );
};

export default Input;
