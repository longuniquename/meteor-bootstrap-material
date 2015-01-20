Package.describe({
    summary: "Bootstrap Material",
    version: "0.0.1",
    name:    "longuniquename:bootstrap-material",
    git:     'https://github.com/dmitriyles/meteor-bootstrap-material.git'
});

Package.onUse(function (api) {
    api.use([
        'less',
        'jquery',
        'longuniquename:bootstrap'
    ], 'client');

    api.imply([
        'less',
        'longuniquename:bootstrap'
    ]);

    //JS
    api.addFiles([
        'js/material.js',
        'js/ripples.js'
    ], 'client');

    //FONTS
    api.addFiles([
        'fonts/Material-Design-Icons.eot',
        'fonts/Material-Design-Icons.svg',
        'fonts/Material-Design-Icons.ttf',
        'fonts/Material-Design-Icons.woff'
    ], 'client');

    //LESS
    api.addFiles([
        'less/mixins/alerts.import.less',
        'less/mixins/buttons.import.less',
        'less/mixins/navbars.import.less',
        'less/mixins/shadows.import.less',
        'less/mixins/togglebuttons.import.less',
        'less/alerts.import.less',
        'less/dialogs.import.less',
        'less/inputs.import.less',
        'less/plugin-nouislider.import.less',
        'less/radios.import.less',
        'less/togglebutton.import.less',
        'less/buttons.import.less',
        'less/dropdowns.import.less',
        'less/labels.import.less',
        'less/mixins.import.less',
        'less/plugin-selectize.import.less',
        'less/ripples.import.less',
        'less/type.import.less',
        'less/cards.import.less',
        'less/forms.import.less',
        'less/lists.import.less',
        'less/navbar.import.less',
        'less/plugin-snackbarjs.import.less',
        'less/scaffolding.import.less',
        'less/variables.import.less',
        'less/checkboxes.import.less',
        'less/icons.import.less',
        'less/material.import.less',
        'less/panels.import.less',
        'less/popups.import.less',
        'less/shadows.import.less',
        'less/welljumbo.import.less',
        'less/colors.import.less',
        'less/icons-material-design.import.less',
        'less/plugin-dropdownjs.import.less',
        'less/progress-bars.import.less',
        'less/tabs.import.less'
    ], 'client');

});
