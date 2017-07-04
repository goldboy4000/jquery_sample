define(['util', 'jquery', 'jqueryui'], function (util, $, $ui) {

    var bulmaColors = ['is-primary', 'is-warning', 'is-danger', 'is-info', 'is-success'];

    return {

        $el: $('.task-1-section'),
        $firstButton: $('.task-1-section .first'),

        /**
         *
         */
        init: function () {
            this.$el.on('click', this.sectionClickHandler.bind(this));

            $('#draggable').draggable({containment: '.task-1-section', revert: true, helper: 'clone'});
        },

        sectionClickHandler: function (e) {

            if (!$(e.target).is('.first, .second, .third, .fourth')) {

                this.$firstButton.css('background-color', util.getRandomColor());

            } else if ($(e.target).is('.second')) {

                this.$el
                    .removeClass(bulmaColors.join(' '))
                    .addClass(bulmaColors[util.randomInteger(0, bulmaColors.length - 1)]);

            } else if ($(e.target).is('.third')) {

                $.ajax({
                    url: "data/simpleAjax.json",
                    success: function (data) {
                        if (data.name) {

                            alert(data.name);
                        }
                    }
                });
            } else if ($(e.target).is('.fourth')) {

                $.ajax({
                    url: "data/bad.json",
                    error: function (xhr) {
                        alert('Error: ' + this.url + ' - ' + xhr.status + ' - ' + xhr.statusText);
                    }
                });
            }


        }

    }

});