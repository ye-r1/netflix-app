const validId = (current, required) => {
    if(!current && required) {
        return "필수 입력값 입니다."
    }
    if (current.length < 2) {
        return "최소 2자 이상 입력해주세요.";
    }
    if (current.length > 20) {
        return "최대 20자까지 입력 가능합니다.";
    }
    return null;
};

const validPassword = (current, required) => {
    if(!current && required) {
        return "필수 입력값 입니다.";
    }
    if (current.length < 2) {
        return "최소 2자 이상 입력해주세요.";
    }
    if (current.length > 20) {
        return "최대 20자까지 입력 가능합니다.";
    }
    return null;
};

const validVerifyPassword = (password, current) => {
    if (password && password !== current){
        return "입력하신 비밀번호가 일치하지 않습니다.";
    }
    if (password && current?.length < 2) {
        return "최소 2자 이상 입력해주세요.";
    }
    if (password && current?.length > 20) {
        return "최대 20자까지 입력 가능합니다.";
    }
    return null;
};

const validNickname = (current, required) => {
    if(!current && required) {
        return "필수 입력값 입니다.";
    }
    if (current.length < 2) {
        return "최소 2자 이상 입력해주세요.";
    }
    if (current.length > 20) {
        return "최대 20자까지 입력 가능합니다.";
    }
    return null;
};

function validate({current, value, user, error, required}){
    let newError = {};

    if(current === "id" || !current & !value & required.id === true) {
        newError.id = validId(current ? value : user.id, required.id);
    }
    if(current === "password" || !current & !value & required.password === true) {
        newError.password = validPassword(current ? value : user.password, required.password);
        newError.verifyPassword = validVerifyPassword(current ? value : user.password, user?.verifyPassword);
    }
    if(current === "verifyPassword" || !current & !value & required.verifyPassword === true) {
        newError.verifyPassword = validVerifyPassword(user?.password, current ? value : user?.verifyPassword);
    }
    if(current === "nickname" || !current & !value & required.nickname === true) {
        newError.nickname = validNickname(current ? value : user.nickname, required.nickname);
    }

    return {...error, ...newError};
}


export default validate;