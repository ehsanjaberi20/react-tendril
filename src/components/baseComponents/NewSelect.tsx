import React, { useState, useRef, useEffect } from "react";
import styled from "@emotion/styled";
import { Input } from "./Input";

const Wrapper = styled.div`
    position: relative;
    width: 240px;
    font-family: inherit;
`;

const Control = styled.div<{ isOpen: boolean }>`
    border: 1px solid #ccc;
    padding: 8px 12px;
    background: #fff;
    border-radius: 4px;
    cursor: pointer;
    min-height: 38px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${(p) => p.isOpen && "border-color: #2684ff;"}
`;

const Value = styled.span`
    flex: 1;
`;

const Dropdown = styled.ul<{ isOpen: boolean }>`
    display: ${(p) => (p.isOpen ? "block" : "none")};
    position: absolute;
    width: 100%;
    background: #fff;
    border: 1px solid #ccc;
    border-top: none;
    max-height: 200px;
    overflow-y: auto;
    z-index: 10;
    margin: 0;
    padding: 0;
    list-style: none;
`;

const Option = styled.li<{ selected: boolean }>`
    padding: 8px 12px;
    background: ${(p) => (p.selected ? "#e6f3ff" : "#fff")};
    cursor: pointer;
    &:hover {
        background: #f0f8ff;
    }
`;

const Arrow = styled.span<{ isOpen: boolean }>`
    margin-left: 8px;
    transition: 0.2s;
    transform: rotate(${(p) => (p.isOpen ? "180deg" : "0deg")});
`;

const SearchInput = styled.input`
    width: 100%;
    padding: 8px 12px;
    border: none;
    border-bottom: 1px solid #eee;
    outline: none;
    font-size: 1em;
    box-sizing: border-box;
    background: #fafbfc;
`;

type OptionType = { label: string; value: string };

interface NewSelectProps {
    options: OptionType[];
    value?: string;
    onChange?: (value: string) => void;
    placeholder?: string;
}

const NewSelect: React.FC<NewSelectProps> = ({
    options,
    value,
    onChange,
    placeholder = "انتخاب کنید...",
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [search, setSearch] = useState("");
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    useEffect(() => {
        if (!isOpen) setSearch("");
    }, [isOpen]);

    const selectedOption = options.find((opt) => opt.value === value);

    const filteredOptions = options.filter((opt) =>
        opt.label.toLowerCase().includes(search.toLowerCase())
    );
    return (
        <Wrapper ref={ref}>

            <Control isOpen={isOpen} onClick={() => setIsOpen((o) => !o)}>
                <Value>{selectedOption ? selectedOption.label : placeholder}</Value>
                <Arrow isOpen={isOpen}>▼</Arrow>
            </Control>
            <Dropdown isOpen={isOpen}>
                <li>
                    <SearchInput
                        autoFocus
                        placeholder="جستجو..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        onClick={(e) => e.stopPropagation()}
                    />
                </li>
                {filteredOptions.length === 0 && (
                    <Option selected={false} style={{ color: "#aaa", cursor: "default" }}>
                        گزینه‌ای یافت نشد
                    </Option>
                )}
                {filteredOptions.map((opt) => (
                    <Option
                        key={opt.value}
                        selected={opt.value === value}
                        onClick={() => {
                            onChange?.(opt.value);
                            setIsOpen(false);
                        }}
                    >
                        {opt.label}
                    </Option>
                ))}
            </Dropdown>
        </Wrapper>
    );
};

export default NewSelect;