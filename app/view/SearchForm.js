/*
 * File: app/view/SearchForm.js
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

Ext.define('MatrimonyApp.view.SearchForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.searchform',

    requires: [
        'MatrimonyApp.view.SearchFormViewModel',
        'MatrimonyApp.view.LanguageCombo',
        'Ext.form.Panel',
        'Ext.form.field.ComboBox',
        'Ext.toolbar.Spacer',
        'Ext.button.Button',
        'Ext.form.FieldSet',
        'Ext.slider.Multi'
    ],

    viewModel: {
        type: 'searchform'
    },
    itemId: 'searchForm',
    bodyPadding: 10,
    title: '',

    items: [
        {
            xtype: 'form',
            itemId: 'baseForm',
            defaults: {
                margin: 3,
                labelAlign: 'right',
                labelSeparator: ' '
            },
            layout: 'table',
            title: '',
            items: [
                {
                    xtype: 'combobox',
                    fieldLabel: 'I am a ',
                    store: [
                        'Bride',
                        'Groom'
                    ]
                },
                {
                    xtype: 'combobox',
                    fieldLabel: 'Looking for ',
                    store: [
                        'Bride',
                        'Groom'
                    ]
                },
                {
                    xtype: 'tbspacer',
                    width: 100
                },
                {
                    xtype: 'button',
                    ui: 'loginbutton-small',
                    width: 100,
                    text: 'Search'
                }
            ]
        },
        {
            xtype: 'fieldset',
            margin: 20,
            defaults: {
                margin: 3,
                labelAlign: 'right',
                labelSeparator: ' '
            },
            collapsible: true,
            title: 'Advanced Search',
            layout: {
                type: 'table',
                columns: 3
            },
            items: [
                {
                    xtype: 'multislider',
                    formBind: false,
                    width: 400,
                    fieldLabel: 'Age',
                    maxValue: 60,
                    minValue: 18,
                    values: [
                        10,
                        40
                    ]
                },
                {
                    xtype: 'combobox',
                    fieldLabel: 'Religion',
                    store: [
                        'Hindu',
                        'Muslim',
                        'Christian',
                        'Jew'
                    ]
                },
                {
                    xtype: 'languageCombo'
                }
            ]
        }
    ]

});