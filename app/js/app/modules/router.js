define([], function () {

    var Router = function (options) {
        this.routes = options.routes || [];
        this.currentRoute = {};
        this.init();
    };

    Router.prototype = {
        init: function () {
            window.addEventListener('hashchange', function () {
                    this.handleUrl(window.location.hash);
                }.bind(this)
            );
            this.handleUrl(window.location.hash);
        },

        findPreviousRoute: function () {
            return this.currentRoute;
        },

        findNewActiveRoute: function (url) {
            return this.routes.find(function (routeItem) {
                return url === routeItem.match;
            });
        },

        handleUrl: function (activeUrl) {
            var url = activeUrl.slice(1);
            var previousRoute = this.findPreviousRoute();
            var newRoute = this.findNewActiveRoute(url);

            Promise.resolve()
                .then(function () {
                    previousRoute && previousRoute.onLeave && previousRoute.onLeave()
                })
                .then(function () {
                    newRoute && newRoute.onBeforeEnter && newRoute.onBeforeEnter()
                })
                .then(function () {
                    newRoute && newRoute.onEnter && newRoute.onEnter()
                })
                .then(function () {
                    this.currentRoute = newRoute || {};
                    console.log('%c route is changed: current route - ' + (this.currentRoute.match || '#'), 'background: #222; color: #bada55');
                }.bind(this));
        }
    };
var router = new Router({
        routes: [
            {
                match: '',
                onBeforeEnter: function () {
                    console.log('onBeforeEnter index')
                },
                onEnter: function () {
                    console.log('onEnter index')
                },
                onLeave: function () {
                    console.log('onLeave index')
                }
            },
            {
                match: 'task-1',
                onBeforeEnter: function () {
                    console.log('onBeforeEnter task-1')
                },
                onEnter: function () {
                    console.log('onEnter task-1')
                },
                onLeave: function () {
                    console.log('onLeave task-1')
                }
            },
            {
                match: 'task-2',
                onBeforeEnter: function () {
                    console.log('onBeforeEnter task-2')
                },
                onEnter: function () {
                    console.log('onEnter task-2');
                },
                onLeave: function () {
                    console.log('onLeave task-2');
                }
            },
            {
                match: 'task-3',
                onBeforeEnter: function () {
                    console.log('onBeforeEnter task-3')
                },
                onEnter: function () {
                    console.log('onEnter task-3');
                },
                onLeave: function () {
                    console.log('onLeave task-3');
                }
            }
        ]
    });
return router;

});