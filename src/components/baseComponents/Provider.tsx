
import React from "react";
import { containerStyle, Label, labelSizeStyles, sizeBaseStyles, sizeStyles } from "./styles";
import type { SerializedStyles } from "@emotion/react";
export type ProviderType = {
  label: string;
  size?: "sm" | "md" | "lg";
  isInvalid?: boolean,
};
interface ProviderT extends ProviderType {
  children: (childrenProps: {
    css: Array<SerializedStyles>
  }) => React.ReactNode;
};

export const Provider = (props: ProviderT) => {
  const { label, size = 'md', children, isInvalid = false } = props;

  const childrenProps = {
    css: [sizeBaseStyles, sizeStyles[size]]
  }
  return (
    <div css={containerStyle}>
      {children(childrenProps)}
      <Label isInvalid={isInvalid} css={[labelSizeStyles[size]]}>
        {label}
      </Label>
      {/* <label css={[labelBaseStyle, labelSizeStyles[size]]}></label> */}
    </div>
  );
};
