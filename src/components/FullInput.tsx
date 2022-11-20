import React, {ChangeEvent, useState} from 'react';

type FullInputPropsType = {
    addMessage: (mess: string) => void
}


export const FullInput = (props: FullInputPropsType) => {
        let [mess, setMess] = useState('')

        const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
               setMess(event.currentTarget.value)
        }

        const onClickButtonHandler = () => {
              props.addMessage(mess)
              setMess('')
        }




    return (
        <div>
            <input value={mess} onChange={onChangeInputHandler}/>
            <button onClick={onClickButtonHandler}>x</button>
        </div>
    );
};
