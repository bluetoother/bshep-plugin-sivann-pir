module.exports = {
    gattDefs: {
        service: [
            { name: 'aInServ', uuid: '0xbb10' },
            { name: 'pirServ', uuid: '0xbb90' }
        ],
        characteristic: [
            { name: 'aInConfig', uuid: '0xbb11', params: ['config'], types: ['boolean'] },
            { name: 'aInMeasPeriod', uuid: '0xbb12', params: ['period'], types: ['uint8'] }
        ]
     },
     examine: function (periph, basicInfo) {
        var isMine = false;

        if (basicInfo.manufacturer === 'sivann' &&
            basicInfo.devName === 'PIR Sensor')
            isMine = true;

        return isMine;
    }
};
