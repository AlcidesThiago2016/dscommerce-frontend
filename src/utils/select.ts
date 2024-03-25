export const selectStyles = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
    control: (provided: any) => ({
        ...provided,
        border: "none",
        boxShadow: "none",
        "&:hover": {
            border: "none",
        },
    }),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    placeholder: (provided: any) => ({
        ...provided,
        color: "var(--dsc-color-font-placeholde)"
    }),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    indicatorSeparator: (provided: any) => ({
        ...provided,
        display: "none"
    })
}