import React, {ChangeEvent} from 'react';

type InputPropsType = {
    SetMess: (mess: string) => void,
    mess: string
}

export const Input = (props: InputPropsType) => {

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.SetMess(event.currentTarget.value)
    }

    return (

        <input value={props.mess} onChange={onChangeInputHandler}/>

    );
};

