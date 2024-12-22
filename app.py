from flask import Flask, render_template, request, redirect, url_for
app = Flask(__name__)
contacts = []

@app.route ('/')
def home():
    return render_template('index.html' , contacts=contacts)

@app.route ('/add' , methods=['GET', 'POST'])
def add_contact():
    if request.method == 'POST':
        name = request.form['name']
        email = request.form['email']
        phone = request.form['phone']
        if name and email and phone:
            contacts.append({'name': name, 'email': email, 'phone': phone})
        return redirect(url_for('home'))
    return render_template('add_contact.html')

@app.route('/delete/<int:index>', methods=['POST'])
def delete_contact(index):
    if 0 <= index < len(contacts):
        contacts.pop(index)
    return redirect(url_for('home'))
if __name__ == '__main__':
    app.run(debug=True)