#wedding-ivite/invite/core/view.py
#issue  dev           date       description
# na    Julio Conchas 12/29/2025 first creation
# na    Julio Conchas 01/02/2026  add test view
# na    Julio Conchas 03/28/2026 Adding endpoint for favicon.ico

from flask import render_template, Blueprint, send_from_directory

core = Blueprint('core',__name__)

@core.route('/')
def sobre():
    return render_template('sobre.html')

@core.route('/candj')
def index():
    return render_template('index.html')

@core.route('/test')
def test():
    return render_template('test.html')

@core.route('/favicon.ico')
def favicon():
    return send_from_directory('static', 'img/icon/favicon.ico')
