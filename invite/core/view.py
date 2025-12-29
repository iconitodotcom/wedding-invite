#wedding-ivite/invite/view.py
#issue  dev           date       description
# na    Julio Conchas 12/29/2025 first creation

from flask import render_template, Blueprint

core = Blueprint('core',__name__)

@core.route('/')
def index():
    return render_template('index_rustic.html')
