# -*- coding: utf-8 -*-

from odoo import models, fields, api

class ParameterChanges(models.Model):
    _inherit = 'ir.config_parameter'

    @api.model
    def _renew_staging(self):
        self.sudo().set_param('database.expiration_date', '2021-07-22 10:50:12')