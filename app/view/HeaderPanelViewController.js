/*
 * File: app/view/HeaderPanelViewController.js
 *
 * This file was generated by Sencha Architect version 3.5.1.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 6.0.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 6.0.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MatrimonyApp.view.HeaderPanelViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.headerpanel',

    onRegister: function(button, e, eOpts) {
        var form=Ext.create('MatrimonyApp.view.RegistrationForm');
        console.log(form);
        form.show();
    }

});
