#wedding-ivite/invite/__init__.py
#issue  dev           date       description
# na    Julio Conchas 12/29/2025 first creation
# na    Julio Conchas 03/28/2026 Adding bucked name and url

from dotenv import load_dotenv
load_dotenv()

from flask import Flask
from invite.core.view import core
import os

app = Flask(__name__)

app.config['TIGRIS_BASE_URL'] = os.getenv('BUCKET_NAME')
app.register_blueprint(core)

##############
# app config #
##############
@app.context_processor
def inject_globals():
    return {
        'MEDIA_URL': app.config.get('TIGRIS_BASE_URL')
    }
