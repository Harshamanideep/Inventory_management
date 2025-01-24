from flask import Flask, request, render_template
from packages.alert_sender import send_alert
from packages.location import get_location

app = Flask(__name__)

my_location=get_location()

@app.route('/')
def index():
    sement=50
    bricks=80
    if int(sement) <= 20 and int(bricks) <= 20:
        msg = f'Both cement {sement}kg and bricks {bricks}kg are less pls check them and refill'
    elif int(sement) <= 20:
        msg = f'Less cement {sement}kg pls check them and refill'
    elif int(bricks) <= 20:
        msg = f'Less bricks {bricks}kg pls check them and refill'
    else:
        msg = f'Sufficient cement {sement}kg and bricks {bricks}kg'

    return render_template('index.html', sement=sement, bricks=bricks,msg=msg,myloc=my_location)  # Ensure your HTML is in a file named index.html

@app.route('/inputdata')
def inputdata():
    return render_template('inputdata.html')


@app.route('/submit', methods=['POST'])
def submit():
    sement = request.form.get('sement')
    bricks = request.form.get('bricks')
    if int(sement) <= 20 and int(bricks) <= 20:
        msg = f'Both cement {sement}kg and bricks {bricks}kg are less pls check them and refill'
    elif int(sement) <= 20:
        msg = f'Less cement {sement}kg pls check them and refill'
    elif int(bricks) <= 20:
        msg = f'Less bricks {bricks}kg pls check them and refill'
    else:
        msg = f'Sufficient cement {sement}kg and bricks {bricks}kg'

    if msg!=f'Sufficient cement {sement}kg and bricks {bricks}kg':
        send_alert(msg,'shaikahamed0509@gmail.com')
    # Render the display page with the submitted data
    return render_template('index.html', sement=sement, bricks=bricks, msg=msg)

if __name__ == '__main__':
    app.run(debug=True,host='0.0.0.0',port=80)
