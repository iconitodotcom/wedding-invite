#wedding-invite/app.py
#issue  dev           date       description
# na    Julio Conchas 12/29/2025 first creation

from invite import app
from waitress import serve

if __name__ == '__main__': 
    app.run(debug=True,port=8080) # test server
