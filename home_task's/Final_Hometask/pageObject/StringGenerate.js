// functions that are used more than once\

class StringGenarate {
    // // more better version
    //     /**
    //      *
    //      * @param {number} countOfSymbols count of symbols
    //      * @param {string} type "email" or "yn" or set empty
    //      * @param {boolean} false
    //      * @returns {string}
    //      */
    //     generateData(countOfSymbols, type = "", num = false) {
    //         let characters, result;
    //         characters = num
    //             ? "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxy0123456789"
    //             : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxy";
    //         switch (type) {
    //             case "email":
    //                 characters.toLowerCase();
    //                 break;
    //             case "yn":
    //                 characters = "yn";
    //                 break;
    //             default:
    //                 break;
    //         }
    //         for (let i = 0; i < countOfSymbols; i++) {
    //             result += characters.charAt(
    //                 Math.floor(Math.random() * characters.length)
    //             );
    //         }
    //         return (result = type == "email" ? `${result}@gmail.com` : result);
    //     }

    makeLogin(length) {
        let result = "";
        let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxy";
        let charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(
                Math.floor(Math.random() * charactersLength)
            );
        }
        return result;
    }
    makeEmail(length) {
        // makeEmail(length) {
        // let result1 = "";
        // let characters1 = "abcdefghijklmnopqrstuvwxyz";
        // let charactersLength1 = characters1.length;
        // for (let i = 0; i < length; i++) {
        //     result1 += characters1.charAt(
        //         Math.floor(Math.random() * charactersLength1)
        //     );
        // }
        // return result1 + "@gmail.com";
        return this.makeLogin(length).toLowerCase() + "@gmail.com";
    }
    makePassword(length) {
        let result2 = "";
        let characters2 = "abcdefghijklmnopqrstuvwxyz0123456789ASDXYZ";
        let charactersLength2 = characters2.length;
        for (let i = 0; i < length; i++) {
            result2 += characters2.charAt(
                Math.floor(Math.random() * charactersLength2)
            );
        }
        return result2;
    }
    makeYN(length) {
        let result3 = "";
        let characters3 = "yn";
        let charactersLength3 = characters3.length;
        for (let i = 0; i < length; i++) {
            result3 += characters3.charAt(
                Math.floor(Math.random() * charactersLength3)
            );
        }
        return result3;
    }
    makeUser(length) {
        let result4 = "";
        let characters4 =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        let charactersLength4 = characters4.length;
        for (let i = 0; i < length; i++) {
            result4 += characters4.charAt(
                Math.floor(Math.random() * charactersLength4)
            );
        }
        return result4;
    }
    makeNubmer(length) {
        let resultNum = "";
        let charactersNum = "1234567890";
        let charactersLengthNum = charactersNum.length;
        for (let i = 0; i < length; i++) {
            resultNum += charactersNum.charAt(
                Math.floor(Math.random() * charactersLengthNum)
            );
        }
        return "+380" + resultNum;
    }
}
module.exports = new StringGenarate();
