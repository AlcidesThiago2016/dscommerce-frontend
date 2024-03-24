// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function FormTextArea(props : any){
    
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { validation, invalid = "false", dirty = "false",  onTurnDirty, ...textareaProps } = props;

    function handleBlur(){
        onTurnDirty(props.name);
    }

    return(
        <textarea 
            { ...textareaProps}
            onBlur={handleBlur} 
            data-invalid={invalid} 
            data-dirty={dirty}
        />
    )
}