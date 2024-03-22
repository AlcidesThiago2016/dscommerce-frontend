// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function update(inputs: any, name: string, newValue: any){
    return { ...inputs, [name]: { ...inputs[name], value: newValue }};
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function toValue(inputs: any){
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const data: any = {};
    for (const name in inputs){
        data[name] = inputs[name].value;
    }
    return data;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function updateAll(inputs: any, newValue: any){
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const newInputs: any = {};
    for ( const name in inputs){
        newInputs[name] = { ...inputs[name], value: newValue[name]};
    }
    return newInputs;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
export function validate(inputs: any, name: string){

    if (!inputs[name].validate){
        return inputs;
    }

    const isInvalid = !inputs[name].validation(inputs[name].value);

    return { ...inputs, [name]: { ...inputs[name], invalid: isInvalid.toString()}};
}