define(['util', 'jquery', 'jqueryui'], function (util, $, $ui) {

    return {

        $el: $('.task-1'),
        $firstButton: $('.task-1 .first'),

        /**
         *
         */
        init: function () {
            this.$el.on('click', this.sectionClickHandler.bind(this));

            $('#draggable').draggable({ containment: '.task-1', revert: true, helper: 'clone' });
        },

        sectionClickHandler: function (e) {

            if (!$(e.target).is('.first, .second, .third, .fourth'))
            {
                this.$firstButton.css('background-color', util.getRandomColor());
            }


        }

    }

});