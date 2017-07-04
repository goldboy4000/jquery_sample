define(['underscore', 'text!templates/menu.html'],
    function (_,  menuTpl) {
        return {
            init: function () {
                this.template = _.template(menuTpl);
                this.el = document.querySelector('.menu');
                this.currentState = false;

                this.render();
                this.setupEvents();
            },

            render: function () {
                this.el.innerHTML = this.template();
            },


            setupEvents: function () {
               $('.nav-toggle').on('click', this.hambClickHandler.bind(this));
            },

            hambClickHandler: function () {
                this.currentState  = !this.currentState;
                $('.nav-toggle').toggleClass('is-active', this.currentState);
                $('.nav-menu').toggleClass('is-active', this.currentState);
            }
        };
    });
