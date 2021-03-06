import {useCallback, useState} from "react";
import validate from "../utils/validation";

function useForm(storeDispatch, buildDispatch, required) {
    const [user, setUser] = useState({});
    const [error, setError] = useState({});
    const [isSuccessIn, setIsSuccessIn] = useState(false);


    const handleOnChange = useCallback((e) => {
        setIsSuccessIn(false);
        let {name : current, value} = e.target;
        const updateInfo = {...user, [current] : value};
        setUser(updateInfo);

        //현재 입력하는 값이 있기에 <current>로 검사
        const result = validate({current, value, user, error, required});
        setError(result);

    }, [user, error]);


    const handleSubmit = () => {

        setIsSuccessIn(false);

        //현재 입력하는 값이 없기에 기존 데이터 <user>로 검사
        const result = validate({user, error, required});
        setError(result);


        const resultValue = Object.values(result);
        const checkSubmit = Boolean(resultValue.length) && resultValue.every((i) => i === null);

        if (checkSubmit) {
            storeDispatch(buildDispatch(user));
            setIsSuccessIn(true);
        } else {
            alert('오류가 발생하였습니다.');
        }
    };


    return [user, setUser, error, setError, handleOnChange, handleSubmit, isSuccessIn];
}


export default useForm;