import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

def send_alert(msg,sender):
    def send_email(subject, html_content, to_email):
        # Set up your SMTP server details
        smtp_server = 'smtp.gmail.com'  # Replace with your SMTP server
        smtp_port = 587  # For TLS
        sender_email = 'emolotpsender@gmail.com'  # Replace with your email
        sender_password = 'zhib gztg slqw kvwq'  # Replace with your email password or App Password

        # Create the email
        msg = MIMEMultipart()
        msg['From'] = sender_email
        msg['To'] = to_email
        msg['Subject'] = subject

        # Attach the HTML content to the email
        msg.attach(MIMEText(html_content, 'html'))

        try:
            # Connect to the server and send the email
            server = smtplib.SMTP(smtp_server, smtp_port)
            server.starttls()  # Start TLS encryption
            server.login(sender_email, sender_password)  # Log in to your email account
            server.send_message(msg)
            print('Email sent successfully!')
        except Exception as e:
            print(f'Failed to send email: {e}')
        finally:
            server.quit()

    # Sample HTML content
    html_content = f"""
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
            body {{
                font-family: Arial, sans-serif;
                background-color: #f4f4f4;
                margin: 0;
                padding: 20px;
            }}
            .container {{
                max-width: 600px;
                margin: auto;
                background: white;
                padding: 20px;
                border-radius: 5px;
                box-shadow: 0 0 10px rgba(0,0,0,0.1);
            }}
            h1 {{
                color: #333;
            }}
            p {{
                color: #555;
            }}
            .footer {{
                font-size: 12px;
                color: #777;
                text-align: center;
                margin-top: 20px;
            }}
        </style>
    </head>
    <body>
        <div class="container">
            <h1>{msg}</h1>
    
        </div>
    </body>
    </html>
    """

    # Usage
    send_email('Item Shortage Alert:', html_content, sender)  # Replace with recipient's email



