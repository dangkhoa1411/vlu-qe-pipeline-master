// Updated login function on feature branch

const lockedAccounts = ["locked"];

function login(username, password) {
    // Username không được để trống
    if (!username || username.trim() === "") {
        return false;
    }

    // Password không được để trống
    if (!password || password.trim() === "") {
        return false;
    }

    // Tài khoản bị khóa
    if (lockedAccounts.includes(username)) {
        return false;
    }

    // Password không được chứa ký tự đặc biệt
    const specialCharacters = /[^a-zA-Z0-9]/;

    if (specialCharacters.test(password)) {
        return false;
    }

    // Tài khoản hợp lệ
    if (username === "admin" && password === "123") {
        return true;
    }

    // Sai username hoặc password
    return false;
}

module.exports = { login };
