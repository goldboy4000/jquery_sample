define(['radio', 'modules/menu', 'modules/router', 'modules/task1'],
    function (radio, menu, router, task1) {
        return {
            init: function () {
                menu.init();
                task1.init();

                router.init();
            }
        };
    });
