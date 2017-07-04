define(function () {
    return {
        generateId: function () {
            return 'id' + (new Date()).getTime();
        },
        getFileExtension: function (fileName) {
            return /(?:\.([^.]+))?$/.exec(fileName);
        },
        getRandomColor: function () {
            var letters = '0123456789ABCDEF';
            var color = '#';
            for (var i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        },

        randomInteger: function(min, max) {
            var rand = min - 0.5 + Math.random() * (max - min + 1);
            rand = Math.round(rand);

            return rand;
        }
    };
});
