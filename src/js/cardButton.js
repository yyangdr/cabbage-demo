const Promise = window.TrelloPowerUp.Promise;
let savedData;
onRecordBtnClick = function () {
    const t = window.TrelloPowerUp.iframe();
    savedData = t.get('card', 'shared', 'key',0);
    if (typeof savedData.key !== 'undefined') {
        t.set('card', 'shared', {
            key: savedData.key + 1
        })
        console.log("savedData Key=" + savedData.key)
        return savedData.key;
    } else {
        t.set('card', 'shared', {
            key: 0
        })
        console.log("initial data"+savedData.key)
    }
    // t.get('card', 'shared', 'key', 0).then(function (savedData) {
    //     t.set('card', 'shared', {
    //         key: savedData.key + 1
    //     })
    //     console.log("savedData Key=" + savedData.key)
    //     return savedData.key;
    // })
    // const savedData = t.get('card', 'shared', 'key', 0);
    // if(!savedData){
    //     return null;
    // }
    // console.log('savedData'+savedData.key);
    // return savedData.key;
    // // if (isExist) {
    //     t.set('card', 'shared', {
    //         times: isExist.times + 1
    //     })
    //     console.log('true' + isExist.times)
    //     return isExist.times;
    // } else {
    //     t.set('card', 'shared', {
    //         times: 1
    //     })
    //     console.log('false' + isExist.times)
    // }
    // return Promise.all(isExist).then(function (savedData) {
    //     if (savedData && savedData.times && savedData.times > 0) {
    //         t.set('card', 'shared', {
    //             times: savedData.times + 1
    //         })
    //         console.log('true' + savedData.times)
    //         return savedData.times;
    //     } else {
    //         t.set('card', 'shared', {
    //             times: 1
    //         })
    //         console.log('false' + savedData.times)
    //         return null;
    //     }
    // })
}

onSaveBtnClick = function () {
    console.log("onSaveBtnClick")
}