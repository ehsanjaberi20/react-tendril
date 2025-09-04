import { css } from "@emotion/react";
// container
export const containerStyle = css`
    position: relative;
    margin: 24px 0;
`;

/* label */
export const labelBaseStyle = (isInvalid: boolean) => css`
    position: absolute;
    right: 8px;
    color: ${isInvalid ? '#ff0000ff' : '#888'};
    background: white;
    padding: 0 4px;
    pointer-events: none;
    transition: all 0.2s;
    input:focus + &,
    input:not(:placeholder-shown) + &,
    textarea:focus + &,
    textarea:not(:placeholder-shown) + & {
        color:  ${isInvalid ? '#ff0000ff' : '#0077ff'};
    }
`;
export const labelSizeStyles = {
    sm: css`
        font-size: 14px;
        top: 8px;
        input:focus + &,
        input:not(:placeholder-shown) + &,
        textarea:focus + &,
        textarea:not(:placeholder-shown) + & {
            font-size: 10px;
            top: -6px;
        }
    `,
    md: css`
        font-size: 16px;
        top: 10px;
        input:focus + &,
        input:not(:placeholder-shown) + &,
        textarea:focus + &,
        textarea:not(:placeholder-shown) + & {
            font-size: 12px;
            top: -8px;
        }
    `,
    lg: css`
        font-size: 18px;
        top: 16px;
        input:focus + &,
        input:not(:placeholder-shown) + &,
        textarea:focus + &,
        textarea:not(:placeholder-shown) + & {
            font-size: 14px;
            top: -10px;
        }
    `,
};

/* control */
export const controlBaseStyles = (isInvalid: boolean) => css`
                    width: 100%;
                    border: 1px solid ${isInvalid ? 'red' : '#ccc'};
                    border-radius: 4px;
                    outline: none;
                    background: none;
                    transition: border-color 0.2s;
                    &:focus {
                        border-color: ${isInvalid ? 'red' : '#0077ff'};
                    }
`
export const controlSizeStyles = {
    sm: css`
        padding: 8px 6px 6px 6px;
        font-size: 14px;
    `,
    md: css`
        padding: 10px 8px 8px 8px;
        font-size: 16px;
    `,
    lg: css`
        padding: 20px 12px 12px 12px;
        font-size: 18px;
    `,
};

/* helperText */
export const HelperBaseStyles = (isInvalid: boolean) => css`
      margin-right: 5px;
      color: ${isInvalid ? '#ff0000ff' : '#9b9b9b'};
      font-size: 75%;
      font-weight: 400
`
