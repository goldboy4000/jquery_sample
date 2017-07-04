define(['radio', 'modules/menu', 'modules/task1'],
    function (radio, menu, task1) {
        return {
            init: function () {
                menu.init();
                task1.init();
            }
        };
    });
