
import React from "react";
import { containerStyle, labelBaseStyle, labelSizeStyles, controlBaseStyles, controlSizeStyles, HelperBaseStyles } from "./styles";
import { type SerializedStyles } from "@emotion/react";
export type ProviderType = {
  label: string;
  size?: "sm" | "md" | "lg";
  isInvalid?: boolean,
  helperText?: string,
};
interface ProviderT extends ProviderType {
  children: (childrenProps: {
    css: Array<SerializedStyles>
  }) => React.ReactNode;
};

export const Provider = (props: ProviderT) => {
  const { label, size = 'md', children, isInvalid = false, helperText = "" } = props;

  const childrenProps = {
    css: [controlBaseStyles(isInvalid), controlSizeStyles[size]]
  }
  return (
    <div css={containerStyle}>
      {children(childrenProps)}
      <label css={[labelBaseStyle(isInvalid), labelSizeStyles[size]]}>{label}</label>
      {
        helperText && (
          <small css={[HelperBaseStyles(isInvalid)]}>{helperText}</small>
        )
      }
    </div>
  );
};
