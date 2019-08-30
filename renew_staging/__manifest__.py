# -*- coding: utf-8 -*-
{
    'name': "Renew Staging",

    'summary': """
        A scheduler to extend the expiry of staging """,

    'description': """
        Long description of module's purpose
    """,

    'author': "Techneith",
    'website': "https://techneith.net",

    # Categories can be used to filter modules in modules listing
    # Check https://github.com/odoo/odoo/blob/12.0/odoo/addons/base/data/ir_module_category_data.xml
    # for the full list
    'category': 'Uncategorized',
    'version': '0.1',

    # any module necessary for this one to work correctly
    'depends': ['base'],

    # always loaded
    'data': [
        # 'security/ir.model.access.csv',
        'data/scheduler.xml',
    ],
    # only loaded in demonstration mode
}