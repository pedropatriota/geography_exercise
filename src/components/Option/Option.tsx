import { Check } from "@styled-icons/bootstrap";
import { ChangeEvent } from "react";

import * as S from "./Option.styles";

export interface OptionProps {
  order: string;
  option?: string;
  identifier?: string;
  status: "default" | "success" | "error" | "selected";
  responseIdentifier?: string;
  handleInputChange?: (name: string, value: string, index?: number) => void;
  handleClick?: () => void;
  disabled: boolean;
  checked?: boolean;
}

const statusProps = {
  default: "#aaa",
  success: "#4eca21",
  error: "#ea5280",
  selected: "#444",
};

export const Option = ({
  order,
  option,
  status,
  checked,
  identifier,
  responseIdentifier,
  handleInputChange,
  handleClick,
  disabled,
}: OptionProps): JSX.Element => {
  const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    handleInputChange?.(e.target.name, e.target.value);
  };

  return (
    <S.OptionWrapper style={{ borderColor: statusProps[status] }}>
      <input
        type="radio"
        value={identifier}
        checked={checked}
        style={{ display: "none" }}
        name={responseIdentifier}
        disabled={disabled}
        onChange={onChangeValue}
        onClick={handleClick}
      />
      <S.Option>
        <p>
          <span>{`${order}) `}</span> {option}
        </p>
        {status === "success" && <Check fill="#4eca21" width="30px" />}
      </S.Option>
    </S.OptionWrapper>
  );
};
