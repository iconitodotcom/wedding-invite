#wedding-ivite/invite/view.py
#issue  dev           date       description
# na    Julio Conchas 12/29/2025 first creation
# na    Julio Conchas 01/02/2026  add test view

from flask import render_template, Blueprint

core = Blueprint('core',__name__)

@core.route('/')
def index():
    return render_template('index.html')

@core.route('/test')
def test():
    return render_template('test.html')