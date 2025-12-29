#wedding-ivite/invite/__init__.py
#issue  dev           date       description
# na    Julio Conchas 12/29/2025 first creation

from flask import Flask
from invite.core.view import core

app = Flask(__name__)

app.register_blueprint(core)