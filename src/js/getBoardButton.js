import axios from "axios";

export function getBoardButton(t, opts) {
    let cardVersionRecordInfo = [];
    t.cards('id', 'name', 'labels').then(cardList => {
        console.log("0.cardlist: ", cardList);
        cardList.forEach(card => {
            let maxId = 0;
            let lastTime = '';
            let versionList = [];
            axios.get(`http://localhost:8086/description/${card.id}`).then(function (res) {
                // console.log("1.res: ", res);
                if (res.data.length > 1) {
                    res.data.forEach(version => {
                        if (version.id > maxId) {
                            maxId = version.id;
                            lastTime = version.createdTime;
                        }
                        if (version.version !== "v0.0") {
                            versionList.push(version.version);
                        }
                    })
                    cardVersionRecordInfo = [...cardVersionRecordInfo, {...card, maxId, lastTime, versionList}];
                    cardVersionRecordInfo = cardVersionRecordInfo.sort(function (a, b) {
                        return a.maxId > b.maxId ? -1 : 1;
                    })
                    console.log("4.cardVersionRecordInfo: ", cardVersionRecordInfo);
                }
            })
        })
    })
    return [{
        icon: 'https://uxwing.com/wp-content/themes/uxwing/download/19-e-commerce-currency-shopping/change-exchange.png',
        text: 'Requirement Changes',
        condition: 'always',
        callback: function (t, opt) {
            t.modal({
                title: 'Requirement Change Analysis',
                url: './requirementChangeAnalysis.html',
                fullscreen: true,
            })
        }
    }, {
        icon: 'https://uxwing.com/wp-content/themes/uxwing/download/19-e-commerce-currency-shopping/change-exchange.png',
        text: 'Change Lists',
        condition: 'always',
        callback: function (t, opt) {
            t.modal({
                title: 'Requirement Changes Lists',
                url: './requirementChangesLists.html',
                args: {
                    cardsVersionRecordInfo: cardVersionRecordInfo
                },
                fullscreen: true,
            })
        }
    }];
}
